import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function BarPlot(props) {
    const { positive, neutral, negative } = props.mydata;
    const values = [positive, neutral, negative];
    const labels = ['Positive', 'Neutral', 'Negative'];
    
    // Define colors for each sentiment
    const colors = {
        Negative: 'red',
        Neutral: 'yellow',
        Positive: 'green'
    };

    return (
        <div className='main-chart'>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: labels,
                        y: values,
                        marker: {
                            color: labels.map(sentiment => colors[sentiment])
                        }
                    },
                ]}
                layout={{
                    title: 'Sentiment Analysis',
                    titlefont:{
                        color:'white'
                    },
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    yaxis: {
                        title: 'Number of Comments',
                        color:'white' // Name for the y-axis
                    },
                    xaxis:{
                        color:'white'
                    }
                }}
            />
        </div>
    );
}

export default BarPlot;
