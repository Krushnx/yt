
import React, { useState } from 'react';
import '../Home/Home.css';
import homeback from './homeback.png'
import axios from 'axios'
import BarPlot from './BarPlot';
import PieChart from './PieChart';
import VideoUploadsPlot from './MonthPlot';

function View(props) {

  if (props.data) {
    
    // console.log("Hello ==>",props.data.channel_videos);
  }
  return (
    <div>

      
      <div id='this'>

        {props.data ? props.data.channel_info.channel_description : ""}
        <div style={{display:'flex'}}>
        {props.data && props.data.data && <BarPlot mydata={props.data.data} />}
     
        {props.data && props.data.data &&  <PieChart mydata={props.data.data} />}
        
        </div>
        {props.data && props.data.channel_videos &&  <VideoUploadsPlot mydata={props.data.channel_videos} />}
        {/* <VideoUploadsPlot /> */}

      </div>
    </div>
  );
}
export default View;