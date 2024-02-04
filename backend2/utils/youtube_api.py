import googleapiclient.discovery
import googleapiclient.errors
from googleapiclient.errors import HttpError
from pytube import YouTube

def generate_download_link(youtube_url):
    try:
        yt = YouTube(youtube_url)
        stream = yt.streams.get_highest_resolution()
        if stream:
            return stream.url
        else:
            return "No downloadable streams found for this video."
    except Exception as e:
        return f"Error: {e}"



def get_video_info(api_key, video_url):
    if video_url is None:
        print("Video URL is None.")
        return None, None, None

    try:
        video_id = video_url.split('v=')[-1]
        youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

        # Get video details including title, description, likes, views, and upload date
        video_request = youtube.videos().list(
            part="snippet,contentDetails,statistics",
            id=video_id
        )
        video_response = video_request.execute()

        video_details = video_response['items'][0]
        title = video_details['snippet']['title']
        description = video_details['snippet']['description']
        likes = video_details['statistics']['likeCount']
        views = video_details['statistics']['viewCount']
        upload_date = video_details['snippet']['publishedAt']

        # Extract comments from the video
        comments = get_video_comments(api_key, video_id)

        # Extract channel ID from the video details
        channel_id = video_details['snippet']['channelId']

        return channel_id, comments, {
            'title': title,
            'description': description,
            'likes': likes,
            'views': views,
            'upload_date': upload_date
        }

    except HttpError as e:
        print(f"HTTP error getting video information: {e}")
        return None, None, None

    except Exception as e:
        print(f"Error getting video information: {e}")
        return None, None, None

def get_video_comments(api_key, video_id):
    comments = []

    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        comments_request = youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            textFormat="plainText",
            maxResults=100
        )
        comments_response = comments_request.execute()

        for comment_item in comments_response['items']:
            comment_snippet = comment_item['snippet']['topLevelComment']['snippet']
            comments.append(comment_snippet['textDisplay'])

        while 'nextPageToken' in comments_response:
            comments_request = youtube.commentThreads().list(
                part="snippet",
                videoId=video_id,
                textFormat="plainText",
                maxResults=100,
                pageToken=comments_response['nextPageToken']
            )
            comments_response = comments_request.execute()

            for comment_item in comments_response['items']:
                comment_snippet = comment_item['snippet']['topLevelComment']['snippet']
                comments.append(comment_snippet['textDisplay'])

        return comments

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting video comments: {e}")
        return []

# Inside the 'get_channel_info' function in youtube_api.py

def get_channel_info(api_key, channel_id):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        channel_request = youtube.channels().list(
            part="snippet,contentDetails,statistics",
            id=channel_id
        )
        channel_response = channel_request.execute()

        channel_snippet = channel_response['items'][0]['snippet']
        channel_statistics = channel_response['items'][0]['statistics']

        # Try to fetch 'maxres' thumbnail, fallback to 'high', then 'default'
        profile_photo_url = channel_snippet['thumbnails'].get('maxres', {}).get('url') or \
                            channel_snippet['thumbnails'].get('high', {}).get('url') or \
                            channel_snippet['thumbnails'].get('default', {}).get('url')

        channel_link = f'https://www.youtube.com/channel/{channel_id}'

        return {
            'channel_name': channel_snippet['title'],
            'channel_description': channel_snippet['description'],
            'subscribers': channel_statistics.get('subscriberCount', 0),
            'profile_photo_url': profile_photo_url,
            'total_videos': channel_statistics.get('videoCount', 0),
            'channel_link': channel_link  # Add channel link here
        }

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting channel information: {e}")
        return None



def get_info(api_key, video_url):
    channel_id, comments, video_details = get_video_info(api_key, video_url)
    
    if channel_id:
        channel_info = get_channel_info(api_key, channel_id)
        if channel_info:
            return {
                'channel_description': channel_info['channel_description'],
                'subscribers': channel_info['subscribers'],
                'comments': comments,
                'video_details': video_details
            }
    
    return None

# # Example usage:
# # Replace 'YOUR_API_KEY' and 'VIDEO_URL' with your actual API key and video URL
# api_key = 'YOUR_API_KEY'
# video_url = 'VIDEO_URL'

# info = get_info(api_key, video_url)

# if info:
#     print("Channel Description:", info['channel_description'])
#     print("Subscribers:", info['subscribers'])
    
#     if info['comments']:
#         print("\nVideo Comments:")
#         for i, comment in enumerate(info['comments'], 1):
#             print(f"{i}. {comment}")
    
#     if info['video_details']:
#         print("\nVideo Details:")
#         print("Title:", info['video_details']['title'])
#         print("Description:", info['video_details']['description'])
#         print("Likes:", info['video_details']['likes'])
#         print("Views:", info['video_details']['views'])
#         print("Upload Date:", info['video_details']['upload_date'])
def get_channel_videos(api_key, channel_id):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        videos = []

        # Get the initial set of videos
        videos_request = youtube.search().list(
            part="snippet",
            channelId=channel_id,
            order="date",
            type="video",
            maxResults=50
        )
        videos_response = videos_request.execute()

        # Retrieve video information
        for video_item in videos_response['items']:
            video_snippet = video_item['snippet']
            video_id = video_item['id']['videoId']
            video_info = {
                'title': video_snippet['title'],
                'upload_date': video_snippet['publishedAt'],
                'views': get_video_views(api_key, video_id),
                'thumbnail': get_high_quality_thumbnail(video_snippet['thumbnails']),
                'like_count': get_video_likes(api_key, video_id),
                'video_link': f'https://www.youtube.com/watch?v={video_id}'
            }
            videos.append(video_info)

        # Check if there are more pages of videos
        while 'nextPageToken' in videos_response:
            videos_request = youtube.search().list(
                part="snippet",
                channelId=channel_id,
                order="date",
                type="video",
                maxResults=50,
                pageToken=videos_response['nextPageToken']
            )
            videos_response = videos_request.execute()

            # Retrieve video information for the next page
            for video_item in videos_response['items']:
                video_snippet = video_item['snippet']
                video_id = video_item['id']['videoId']
                video_info = {
                    'title': video_snippet['title'],
                    'upload_date': video_snippet['publishedAt'],
                    'views': get_video_views(api_key, video_id),
                    'thumbnail': get_high_quality_thumbnail(video_snippet['thumbnails']),
                    'like_count': get_video_likes(api_key, video_id),
                    'video_link': f'https://www.youtube.com/watch?v={video_id}'
                }
                videos.append(video_info)

        print("Total video ", len(videos))
        return videos

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting channel videos: {e}")
        return []

# Add the following function to get video likes

def get_high_quality_thumbnail(thumbnails):
    # Try to fetch 'maxres' thumbnail, fallback to 'high', then 'default'
    return thumbnails.get('maxres', {}).get('url') or \
           thumbnails.get('high', {}).get('url') or \
           thumbnails.get('default', {}).get('url')


def get_video_views(api_key, video_id):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        video_request = youtube.videos().list(
            part="statistics",
            id=video_id
        )
        video_response = video_request.execute()

        views = video_response['items'][0]['statistics']['viewCount']
        return views

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting video views: {e}")
        return 0


def get_video_likes(api_key, video_id):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        video_request = youtube.videos().list(
            part="statistics",
            id=video_id
        )
        video_response = video_request.execute()

        likes = video_response['items'][0]['statistics']['likeCount']
        return likes

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting video likes: {e}")
        return 0