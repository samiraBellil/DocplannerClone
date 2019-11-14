import React from 'react';
import SmallCard from './SmallCard';


const arr =[

    {
        img:" https://www.docplanner.com/img/flag.png",
        title:"Leader in 10 countries",
        text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    },
    {   
        img:"https://www.docplanner.com/img/visits.png",
        title:"1.5 million appointments",
        text:"booked last month"
    },
    {
        img:"https://www.docplanner.com/img/patients.png",
        title:"30 million unique patients",
        text:"visit us every month"
    },
    {
        img:"https://www.docplanner.com/img/doctors.png",
        title:"2 million active doctors",
        text:"trust in our solutions"
    } 
]

const Card = ()=> {
    return(
        <div className="CardGreen">
        <div className="card-left">
            <h1>The world's <br/>biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries.
            </p>
            <img className="logo" src="https://www.docplanner.com/img/logo.png"/>
        </div>
        <div className="card-right">
            <div className="card-top">
            {arr.map((el)=> <SmallCard elm={el}/>)}  
            </div>     
        </div>
    </div>
    )
}
export default Card;