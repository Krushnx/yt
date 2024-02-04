import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import './Plot.css';

function Piechart(props) {
  useEffect(() => {
    const { negative, neutral, positive } = props.mydata;

    const values = [negative, neutral, positive];
    const labels = ['Negative', 'Neutral', 'Positive'];

    // Define colors for each slice
    const colors = ['#d32f2f',  '#f57c00',  '#388e3c'];
      
    const plotData = [{
      values: values,
      labels: labels,
      type: 'pie',
      marker: {
        colors: colors
      }
    }];

    const layout = {
      title: 'Sentiment Analysis Pie Chart',
      titlefont: {
        color: 'white'
      },
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: '#020517',
      width: 700
    };

    Plotly.newPlot('piechart', plotData, layout);
  }, [props.mydata]); // Only re-run effect if props.mydata changes

  return (
    <div id="piechart" className='main-chart'></div>
  );
}

export default Piechart;
