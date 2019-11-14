import React from 'react';
import './App.css';


const SmallCard = (props) => {
    return (
        <div className="icons"> 
            <img src={props.elm.img} />
            <h3> {props.elm.title}</h3>
            <p>{props.elm.text}</p>
        </div>
    )
}
export default SmallCard;