import React from 'react';
import './App.css';



const CompanyLogo = (props) => {
    return (
        <li className="stars">
            <a href={props.elm.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width={props.elm.w} height="32" viewBox={props.elm.p}>
                    <path
                        d={props.elm.s} />
                </svg>
            </a>
        </li>
    )
}
export default CompanyLogo;