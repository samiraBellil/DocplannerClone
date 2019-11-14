import React from 'react';


const CardPlaces = (props) => {
    return (

        <div className="cities-style shadow">
            <img  src={props.elm.img} />
            <div className="white-box">
                <h3 >{props.elm.title}</h3>
                <button>{props.elm.button}</button>

            </div>

        </div>



    )
}

export default CardPlaces;