import googleapiclient.discovery
import googleapiclient.errors
import googleapiclient
from googleapiclient.errors import HttpError

def get_video_info(api_key, video_url):
    # Check if video URL is None
    if video_url is None:
        print("Video URL is None.")
        return None, None

    try:
        # Extract video ID from the URL
        video_id = video_url.split('v=')[-1]

        # Initialize the YouTube Data API
        youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

        # Get video details
        video_request = youtube.videos().list(
            part="snippet",
            id=video_id
        )
        video_response = video_request.execute()

        # Extract comments from the video
        comments = get_video_comments(api_key, video_id)

        # Extract channel ID from the video details
        channel_id = video_response['items'][0]['snippet']['channelId']

        return channel_id, comments

    except HttpError as e:
        # Handle HTTP errors
        print(f"HTTP error getting video information: {e}")
        return None, None

    except Exception as e:
        # Handle other exceptions
        print(f"Error getting video information: {e}")
        return None, None

def get_video_comments(api_key, video_id):
    comments = []

    # Initialize the YouTube Data API
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        # Get video comments
        comments_request = youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            textFormat="plainText",
            maxResults=100  # Adjust the number of results as needed
        )
        comments_response = comments_request.execute()

        # Retrieve comments
        for comment_item in comments_response['items']:
            comment_snippet = comment_item['snippet']['topLevelComment']['snippet']
            comments.append(comment_snippet['textDisplay'])

        # Check if there are more pages of comments
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

def get_channel_info(api_key, channel_id):
    # Initialize the YouTube Data API
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

    try:
        # Get channel details
        channel_request = youtube.channels().list(
            part="snippet,contentDetails",
            id=channel_id
        )
        channel_response = channel_request.execute()

        # Extract and return relevant channel information
        return channel_response['items'][0]['snippet']

    except googleapiclient.errors.HttpError as e:
        print(f"Error getting channel information: {e}")
        return None
