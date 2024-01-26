import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

function BarPlot(props) {
    var erratesCounts = props.mydata;

    return (
        <div className='main-chart'>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: ['Positive', 'Neutral', 'Negative'],
                        // y: [erratesCounts.positive, erratesCounts.neutral, erratesCounts.negative],
                        y: [21, 11, 9],

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
