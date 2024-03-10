from flask import current_app as app, jsonify, request
from utils.youtube_api import get_video_info, get_channel_info, get_channel_videos , generate_download_link
from utils.sentiment_analysis import classify_comments,get_comment_analysis
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
    down_link = generate_download_link(video_url)
    
    # Add video thumbnail and video link to video details
    video_id = video_url.split('v=')[-1]
    video_thumbnail = f'https://i.ytimg.com/vi/{video_id}/hqdefault.jpg'
    video_link = f'https://www.youtube.com/watch?v={video_id}'
    video_details['thumbnail'] = video_thumbnail
    video_details['video_link'] = video_link
    video_details['down_link'] = down_link

    return jsonify({
        'channel_info': channel_info,
        'comments': comments,
        'video_details': video_details,
        'channel_videos': channel_videos,
        'data': data
    })

@api.route('/download_video', methods=['POST'])
def download_video():
    data = request.json
    video_url = data.get('video_url')
    down_link = generate_download_link(video_url)
    return jsonify({
        'Link' : down_link
    })
    
@api.route('/get_comments', methods=['POST'])
def get_comments():
    data = request.json
    video_url = data.get('video_url')
    api_key = app.config['YOUTUBE_API_KEY']  # Use current_app instead of app directly

    comments = get_video_info(api_key, video_url)

    result_comments = get_comment_analysis(comments)
    return jsonify({
        'Result_Comments' : result_comments
    })
    


