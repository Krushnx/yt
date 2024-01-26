
import React, { useState } from 'react';
import '../Home/Home.css';
import homeback from './homeback.png'
import axios from 'axios'
import BarPlot from './BarPlot';
import PieChart from './PieChart';
import VideoUploadsPlot from './MonthPlot';

function View(props) {

  
  return (
    <div>

      
      <div id='this'>

        {props.data ? props.data.channel_info.channel_description : ""}
        {props.data && props.data.data && <BarPlot mydata={props.data.data} />}
     
        {props.data && props.data.data &&  <PieChart mydata={props.data.data} />}
        <div style={{display:'flex'}}>
        <PieChart />
        <BarPlot />
        </div>
        <VideoUploadsPlot />

      </div>
    </div>
  );
}
export default View;