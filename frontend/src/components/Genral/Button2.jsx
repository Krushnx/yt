import React from 'react';
import './Genral.css'
function Button2(props)
{

    const changeBG = {
        backgroundColor : props.bgcolor,
        color : props.color
    }

    // console.log("000>",props.bgcolor);
    return(
        <a href={props.link} className='BTN2' target='_blank' >
            <button style={changeBG}>{props.name}</button>
        </a>
    );
}
export default Button2;