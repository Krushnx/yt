import React from 'react';
import './Genral.css'
function Button1(props)
{
    return(
        <a href={props.link} className='BTN1'>
            <button >{props.name}</button>
        </a>
    );
}
export default Button1;