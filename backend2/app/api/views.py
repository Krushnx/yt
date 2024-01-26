from flask import current_app as app, jsonify, request
from utils.youtube_api import get_video_info, get_channel_info, get_channel_videos
from . import api
from .sentiment_analysis import SentimentAnalyzer
import pickle
sentiment_analyzer = SentimentAnalyzer()
import os
import re
import string
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
import nltk

@api.route('/get_info', methods=['POST'])
def get_info():
    data = request.json
    # print("data =>", data)
    video_url = data.get('video_url')
    # print("-->", video_url)
    api_key = app.config['YOUTUBE_API_KEY']  # Use current_app instead of app directly
    
    

    channel_id, comments, video_details = get_video_info(api_key, video_url)
    channel_info = get_channel_info(api_key, channel_id)

    # stopwords
    nltk.download('stopwords')

    total_stopwords = set(stopwords.words('english'))

    # subtract negative stop words like no, not, don't etc.. from total_stopwords
    negative_stop_words = set(word for word in total_stopwords 
                              if "n't" in word or 'no' in word)

    final_stopwords = total_stopwords - negative_stop_words
    
    current_directory = os.path.dirname(os.path.realpath(__file__))
    
    os.chdir(current_directory)
    # Load the TF-IDF vectorizer
    with open("./transformer.pkl", "rb") as f:
        tfidf_vectorizer = pickle.load(f)

    # Load the model
    with open("./model.pkl", "rb") as f:
        bmodel = pickle.load(f)
    stemmer = PorterStemmer()

    # HTML tags removal regex
    HTMLTAGS = re.compile('<.*?>')
    # Punctuation removal translation table
    table = str.maketrans(dict.fromkeys(string.punctuation))
    # Digits removal translation table
    remove_digits = str.maketrans('', '', string.digits)
    # Multiple whitespaces removal regex
    MULTIPLE_WHITESPACE = re.compile(r"\s+")
    
    def preprocessor(review):
        # remove html tags
        review = HTMLTAGS.sub(r'', review)

        # remove puncutuation
        review = review.translate(table)

        # remove digits
        review = review.translate(remove_digits)

        # lower case all letters
        review = review.lower()

        # replace multiple white spaces with single space
        review = MULTIPLE_WHITESPACE.sub(" ", review).strip()

        # remove stop words
        review = [word for word in review.split()
                  if word not in final_stopwords]

        # stemming
        review = ' '.join([stemmer.stem(word) for word in review])

        return review

    labels = ['Negative', 'Neutral', 'Positive']
    def get_sentiment(review):
        # preprocessing
        x = preprocessor(review)
        #vectorization
        x = tfidf_vectorizer.transform([x])
        #prediction
        y = int(bmodel.predict(x.reshape(1,-1)))
        return labels[y]
    
    def classify_comments(comment_array):
        positive_comments = []
        negative_comments = []
        neutral_comments = []

        for comment in comment_array:
            sentiment = get_sentiment(comment)

            if sentiment == 'Positive':
                positive_comments.append(comment)
            elif sentiment == 'Negative':
                negative_comments.append(comment)
            elif sentiment == 'Neutral':
                neutral_comments.append(comment)

        return positive_comments, negative_comments, neutral_comments
    
    if comments is not None:
        pos, neg, neu = classify_comments(comment_array=comments)
    else:
        # Handle the case when comments is None
        pos, neg, neu = [], [], []
    
    positive_count = len(pos)
    neutral_count = len(neu)
    negative_count = len(neg)

    data = {
        'positive': positive_count,
        'neutral': neutral_count,
        'negative': negative_count
    }
    channel_videos = get_channel_videos(api_key, channel_id)

    return jsonify({
        'channel_info': channel_info,
        'comments': comments,
        'video_details': video_details,
        'channel_videos': channel_videos ,
        'data' : data
        # 'sentiment_predictions': sentiment_predictions.tolist()  # Convert to list for JSON serialization
    })
