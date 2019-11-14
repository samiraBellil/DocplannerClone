import React from 'react';



const Images = () => {
    const arr = [
        {
            title: "For patients",
            subtitle: "Find a doctor, book a visit and solve any health-related doubt",
            img: "https://www.docplanner.com/img/screen-marketplace@2x.png"
        },
        {
            title: "For doctors",
            subtitle: "Save time managing visits and cut no-shows by half",
            img: "https://www.docplanner.com/img/screen-saas@2x.png"
        }
    ]
    return (


        <div className="container">

            {arr.map(el => <div className={el.title === "For patients" ? "container green-box" : "container bleu-box"}>
                <p>
                    {el.title}
                </p>
                <h4 className="title-card">
                    {el.subtitle}
                </h4>
                {el.title === "For patients" ? <select className="options">
                    <option value="valeur1">ITALY</option>
                    <option value="valeur2" selected>CHOOSE COUNTRY</option>
                    <option value="valeur3">UK</option>
                </select> : <div className="options"></div>}
                <img src={el.img} />
            </div>)
            }
        </div >


    )
}

export default Images;