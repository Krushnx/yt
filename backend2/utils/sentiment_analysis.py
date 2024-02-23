import pickle
import os
import re
import string
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
import nltk



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

    if comment_array is not None:
        data = {
        'positive': len(positive_comments),
        'neutral': len(neutral_comments),
        'negative': len(negative_comments)}
        
    else:
        data = {'positive': 0,'neutral': 0,'negative': 0}
    
    
    return data


def get_comment_analysis(comment_array):
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

    if comment_array is not None:
        result_comments = {
        'positive': positive_comments,
        'neutral': neutral_comments,
        'negative': negative_comments}
        
    else:
        result_comments = {'positive': [],'neutral': [],'negative': []}
    
    
    return result_comments

