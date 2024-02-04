import React from 'react';
import KeyVal from './KeyVal';
function FullStats(props) {
    return (
        <div>
            <div className="line"></div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{props.title}</h2>
            <div className="chstat">
                <KeyVal Key={props.key1} val={props.val1} />
                <KeyVal Key={props.key2} val={props.val2} />
                {props.val3 && <KeyVal Key={props.key3} val={props.val3} />}

                {props.date && <KeyVal Key={props.key3} date={props.date} />}
            </div>
            <div className="line"></div>
        </div>
    );
}
export default FullStats;