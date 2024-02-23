import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import FullStats from '../Genral/FullStats';
import KeyVal from '../Genral/KeyVal';

function VideoUploadsPlot(props) {
    const [uploadsData, setUploadsData] = useState({});

    // console.log("Ch_VIDE", props.mydata);
    useEffect(() => {
        // Process the data when the component mounts
        processData();
    }, []);

    const channelVideos = props.mydata;

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
    const average = (counts.reduce((sum, currentValue) => sum + currentValue, 0) / counts.length).toFixed(2);

    const monthColors = {
        '1': 'purple',    // January
        '2': 'orange',    // February
        '3': 'purple',     // March
        '4': 'orange',      // April
        '5': 'purple',       // May
        '6': 'orange',    // June
        '7': 'purple',      // July
        '8': 'orange',   // August
        '9': 'purple',      // September
        '10': 'orange',   // October
        '11': 'purple',   // November
        '12': 'orange'     // December
    };


    // Define an array of month names for better readability
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Convert the month strings into formatted labels
    const formattedLabels = months.map(month => {
        const [year, monthNumber] = month.split('-');
        return `${monthNames[parseInt(monthNumber, 10) - 1]} ${year}`;
    });
    // Create an array to store the colors for each month
    const colorSequence = months.map(month => monthColors[month.split('-')[1]]);
    // console.log("montsh - ", formattedLabels);
    // console.log("count", counts);
    
    return (
        <div>
            {/* <h2 style={{ color: 'white' }}>Number of Videos Uploaded per Month</h2> */}
            {/* <div className="line"></div> */}
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Number of Videos Uploaded per Month</h2>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: months,
                        y: counts,
                        marker: {
                            color: colorSequence
                        },
                    },
                ]}
                layout={{
                    width: 900,
                    height: 500,
                    title: 'Video Uploads per Month',
                    titlefont: {
                        color: 'white'
                    },
                    xaxis: {
                        title: 'Month',
                        color: 'white',
                        tickangle: -90, // Rotate labels for better readability
                        tickmode: 'array', // Use array for custom tick values
                        tickvals: months, // Set tick values to all months
                        ticktext: formattedLabels, // Use formatted labels for tick text
                    },

                    yaxis: {
                        title: 'Number of Videos',
                        color: 'white',
                    },
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    paper_bgcolor: '#020517',
                }}
            />
            {/* <FullStats title="Month wise Video Analysis" key1="Month with Most upload" key2="Month with Least upload" key3="Avrage Videos upload per month" date={mostview} val2={32} val3={123984} /> */}
            <div style={{marginTop:'30px'}}>
                <div className="line"></div>
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Month wise Video Analysis</h2>
                <div className="chstat">
                    <KeyVal Key="Month with Most upload" date={formattedLabels[counts.indexOf(Math.max(...counts))]} />
                    <KeyVal Key="Month with Least upload" date={formattedLabels[counts.indexOf(Math.min(...counts))]} />
                    <KeyVal Key="Avarage Videos per month" date={average} />

                </div>
                <div className="line"></div>

            </div>
        </div>

    );
}
export default VideoUploadsPlot;
