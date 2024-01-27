import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function VideoUploadsPlot(props) {
    const [uploadsData, setUploadsData] = useState({});

    console.log("Ch_VIDE" , props.mydata);
    useEffect(() => {
        // Process the data when the component mounts
        processData();
    }, []);

    const channelVideos =props.mydata;

    const processData = () => {
        const data = {};

        // Loop through each video and extract month and year from upload date
        channelVideos.forEach(video => {
            const uploadDate = new Date(video.upload_date);
            const monthYear = `${uploadDate.getFullYear()}-${uploadDate.getMonth() + 1}`;

            // Increment count for the month
            if (data[monthYear]) {
                data[monthYear] += 1;
            } else {
                data[monthYear] = 1;
            }
        });

        // Set the processed data to state
        setUploadsData(data);
    };

    // Extract months and counts for plotting
    const months = Object.keys(uploadsData).sort();
    const counts = months.map(month => uploadsData[month]);
    return (
        <div>
            <h2 style={{ color: 'white' }}>Number of Videos Uploaded per Month</h2>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: months,
                        y: counts,
                        // marker: {
                        //     color: 'yellow',
                        // },
                    },
                ]}
                layout={{
                    width: 800,
                    height: 500,
                    title: 'Video Uploads per Month',
                    titlefont: {
                        color: 'white'
                    },
                    xaxis: {
                        title: 'Month',
                        color: 'white'
                    },
                    yaxis: {
                        title: 'Number of Videos',
                        color:'white',
                        
                    },
                    plot_bgcolor: 'rgba(0, 0, 0, 0)',
                    paper_bgcolor: 'rgba(0, 0, 0, 0)',
                }}
            />
        </div>
    );
}
export default VideoUploadsPlot;
