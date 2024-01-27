from flask import current_app as app, jsonify, request
from utils.youtube_api import get_video_info, get_channel_info, get_channel_videos
from utils.sentiment_analysis import classify_comments
from . import api

@api.route('/get_info', methods=['POST'])
def get_info():
    data = request.json
    video_url = data.get('video_url')
    api_key = app.config['YOUTUBE_API_KEY']  # Use current_app instead of app directly
    
    

    channel_id, comments, video_details = get_video_info(api_key, video_url)
    channel_info = get_channel_info(api_key, channel_id)
    channel_videos = get_channel_videos(api_key, channel_id)
    data = classify_comments(comments)

    return jsonify({
        'channel_info': channel_info,
        'comments': comments,
        'video_details': video_details,
        'channel_videos': channel_videos ,
        'data' : data
    })
