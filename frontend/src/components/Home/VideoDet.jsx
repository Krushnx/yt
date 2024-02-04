import React from 'react';
import Button2 from '../Genral/Button2';
function VideoDetails(props)
{

    function convert(timestamp) {
        const date = new Date(timestamp);

        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // Adding 1 because getUTCMonth() returns zero-based month
        const year = date.getUTCFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
    function compactFormat(number) {
        if (number < 1000) {
            return number.toString();
        } else if (number < 1000000) {
            let result = (number / 1000).toFixed(2);
            return result.endsWith('.00') ? parseInt(result) + 'K' : result + 'K';
        } else {
            let result = (number / 1000000).toFixed(2);
            return result.endsWith('.00') ? parseInt(result) + 'K' : result + 'M';
        }
    }
    const data = props.info;
    return(
        <div className="video-details">
        <img src={data.video_details.thumbnail} alt="" />
        <div className="video-main">
            <h1>{data.video_details.title}</h1>
            <p>Uploaded On : {convert(data.video_details.upload_date)}</p>
            < a href={data.channel_info.channel_link}>
                <img src={data.channel_info.profile_photo_url} alt="" />
                <div>
                    <h2>{data.channel_info.channel_name}</h2>
                    <h6>{compactFormat(data.channel_info.subscribers)} Subscribers</h6>
                </div>
            </a>
            <div style={{ marginTop: "20px", display: 'flex' }}>
                <Button2 name="Download Video" link={data.video_details.down_link}/>
                <Button2 name="View" link={data.video_details.video_link}/>
                
            </div>
        </div>

    </div>
    );
}
export default VideoDetails;