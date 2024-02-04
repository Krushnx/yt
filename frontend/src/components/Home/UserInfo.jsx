import React from 'react';
import './user.css'
import VidePreview from '../Genral/VidPreview';
import FullStats from '../Genral/FullStats';
import BarPlot from './BarPlot';
import Piechart from './PieChart';
import up from './Img/up.png'
import down from './Img/down.png'
import like from './Img/like.png'
import dislike from './Img/dislike.png'
import VideoDetails from './VideoDet';
import VideoUploadsPlot from './MonthPlot';



function UserInfo(props) {

    const data = props.data;
    

      function findMaxMinVideos(videos) {
        // Initialize variables to hold the maximum and minimum views and likes
        let maxViews = -Infinity;
        let minViews = Infinity;
        let maxLikes = -Infinity;
        let minLikes = Infinity;
        let maxViewsVideo, minViewsVideo, maxLikesVideo, minLikesVideo;
    
        // Iterate through the videos to find the required objects
        for (const video of videos) {
            // Finding maxViewsVideo
            if (parseInt(video.views) > maxViews) {
                maxViews = parseInt(video.views);
                maxViewsVideo = video;
            }
    
            // Finding minViewsVideo
            if (parseInt(video.views) < minViews) {
                minViews = parseInt(video.views);
                minViewsVideo = video;
            }
    
            // Finding maxLikesVideo
            if (parseInt(video.like_count) > maxLikes) {
                maxLikes = parseInt(video.like_count);
                maxLikesVideo = video;
            }
    
            // Finding minLikesVideo
            if (parseInt(video.like_count) < minLikes) {
                minLikes = parseInt(video.like_count);
                minLikesVideo = video;
            }
        }
    
        // Return the four objects
        return {
            maxViewsVideo,
            minViewsVideo,
            maxLikesVideo,
            minLikesVideo
        };
    }


    
    let { maxViewsVideo, minViewsVideo,maxLikesVideo, minLikesVideo } = findMaxMinVideos(data.channel_videos);
    
    // console.log("Max : ", maxViewsVideo);
    const totalViews = data.channel_videos.reduce((acc, video) => acc + parseInt(video.views), 0);






    return (
        <div className='user-info'>

            <VideoDetails info={data} />


            {/* <FullStats title="Video Description" key1 = "Total Views" key2="Total Likes" key3="Upload date" val1={data.video_details.views} val2={data.video_details.likes} date={convert(data.video_details.upload_date)} /> */}
            <FullStats title="Video Description" key1="Total Views" key2="Total Likes" key3="Total Comments" val1={data.video_details.views} val2={data.video_details.likes} val3={data.comments.length} />


            <div className="plots">

                <BarPlot mydata={data.data} />
                <Piechart mydata={data.data} />
            </div>
            <FullStats key1="Positive Comments" key2="Negative Comments" key3="neutral Comments" val1={data.data.positive} val2={data.data.negative} val3={data.data.neutral} title="Sentiment Analysis of Comments" />

            <div className="user-profile">
                <img src={data.channel_info.profile_photo_url} alt="" />
                <div className='username'>
                    <h1>{data.channel_info.channel_name}</h1>
                    <p>{data.channel_info.channel_description}</p>
                </div>
            </div>
            <FullStats title="Channel Description" key1="Total Subscribers" key2="Total Videos" key3="Total Channel Views" val1={data.channel_info.subscribers} val2={data.channel_info.total_videos} val3={totalViews} />



            <div className="topstats">
                <VidePreview thumbnail={maxViewsVideo.thumbnail} title={maxViewsVideo.title} views={maxViewsVideo.views} property="Most Viewed" icon={up} typ="Views" link={maxViewsVideo.video_link} />
                <VidePreview thumbnail={maxLikesVideo.thumbnail} title={maxLikesVideo.title} views={maxLikesVideo.like_count} property="Most Liked" icon={like} typ="Likes" link={maxLikesVideo.video_link} />
                <VidePreview thumbnail={minViewsVideo.thumbnail} title={minViewsVideo.title} views={minViewsVideo.views} property="Least Viewed" icon={down} typ="Views" link={minViewsVideo.video_link}/>
                <VidePreview thumbnail={minLikesVideo.thumbnail} title={minLikesVideo.title} views={minLikesVideo.like_count} property="Least Liked" icon={dislike} typ="Likes" link={minLikesVideo.video_link} />
            </div>

            <div className="month-stats">
                <VideoUploadsPlot mydata={data.channel_videos} />
            </div>

        </div>
    );
}
export default UserInfo;