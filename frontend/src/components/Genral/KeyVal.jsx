import React from "react";
import { CountUp } from 'use-count-up'
import './Genral.css'

function KeyVal(props) {
    // console.log(props.val);
    
    return (
        <div className="keyval">
            <p className="value">
                {props.date}
                {props.val &&  <CountUp isCounting end={parseInt(props.val)} duration={1.5} easing	="easeOutCubic"/>   }

            {props.extra}
            </p>
            <p className="key">{props.Key}</p>
        </div>
    );
}

export default KeyVal;
