import React from 'react';
import './preview.css'
import up from '../Home/Img/up.png'
import down from '../Home/Img/down.png'

function VidePreview(props) {
    return (

        <div className="vidpreview">
            <div className="vid-head">
                <div className="vid-key">
                    <img src={props.icon} alt="" className='icon' />
                    <p>{props.property}</p>
                </div>

                <p style={{padding:'6px' , fontSize:'15px' , color:'rgb(180, 180, 180)'}}>{props.views} {props.typ}</p>
            </div>
            <img src={props.thumbnail} alt="" />
            <a href={props.link} className='vid-title'target="_blank">

            <p >{props.title}</p>
            </a>
        </div>

    );
}
export default VidePreview;