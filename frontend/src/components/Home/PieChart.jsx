import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';
import './Plot.css'

function Piechart() {

  useEffect(() => {
    const data = [{
      values: [28, 8, 34],
      labels: ['Negative', 'Neutral', 'Positive'],
      type: 'pie',
      legendwidth : '1000px', 
      
    }];

    const layout = {
      title: 'Sentiment Analysis',
      titlefont:{
        color:'white'
    },
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)'
    };

    Plotly.newPlot('piechart', data, layout);
  }, []);

  return (
    <div id="piechart" className='main-chart'></div>
  );
}

export default Piechart;
