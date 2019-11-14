import React from 'react';
import CardPlaces from './CardPlaces';


const arr = [
    {
        img: "https://www.docplanner.com/images/warsaw.png ",
        title: "Warsaw",
        button: "See Openings"
    },

    {
        img: "https://www.docplanner.com/images/barcelona.png",
        title: "Barchelona",
        button: "See Openings"
    },
    {
        img: "https://www.docplanner.com/images/istanbul.png",
        title: "Istanbul",
        button: "See Openings"
    },
    {
        img: "https://www.docplanner.com/images/rome.png",
        title: "Rome",
        button: "See Openings"
    },
    {
        img: "https://www.docplanner.com/images/mexico-city.png",
        title: "Mexico City",
        button: "See Openings"
    },
    {
        img: "https://www.docplanner.com/images/curitiba.png",
        title: "Curitiba",
        button: "See Openings"
    }
]
const Places = () => {
    return (
        <div className="cities">
            <div className="cities-card">
                {arr.map(el => <CardPlaces elm={el} /> )}
            </div>
        </div>


    )
}







export default Places;
