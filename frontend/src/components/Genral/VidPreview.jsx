import React from 'react';
import './preview.css'

function VidePreview(props)
{
    return(

        <div className="vidpreview">
           
            <img src={props.thumbnail} alt="" />
            <p>{props.title}</p>
            <p className='prop'>{props.property} : {props.views}</p>
        </div>

        );
}
export default VidePreview;