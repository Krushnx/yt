from flask import current_app as app
from flask import jsonify, request
from utils.youtube_api import get_video_info, get_channel_info
from . import api  # Make sure this import is present
from .sentiment_analysis import SentimentAnalyzer  # Import the SentimentAnalyzer class

sentiment_analyzer = SentimentAnalyzer()  # Create an instance of SentimentAnalyzer

@api.route('/get_info', methods=['POST'])
def get_info():
    data = request.json
    print("data =>" , data)
    video_url = data.get('video_url')
    print("-->",video_url)
    # Use current_app instead of app directly
    api_key = app.config['AIzaSyDMtQVxcAeN0m27j1RKq4rJ9S06K1-Biak'] = 'AIzaSyDMtQVxcAeN0m27j1RKq4rJ9S06K1-Biak'

    channel_id, video_comments = get_video_info(api_key, video_url)
    channel_info = get_channel_info(api_key, channel_id)

    # Perform sentiment analysis
    # sentiment_predictions = sentiment_analyzer.predict_sentiment(video_comments)

    return jsonify({
        'channel_info': channel_info,
        'video_comments': video_comments,
        # 'sentiment_predictions': sentiment_predictions.tolist()  # Convert to list for JSON serialization
    })