import React from 'react';


const Paragraphe = () => {
   const para = [' We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable and thats why we are always next to them: to help them find the best possible care. Anytime, anywhere.' , 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.']
    return ( 
        <div className="p1">
            {para.map(el => <p className="paragraphe">{el}</p>)}

        </div>
    )
}










export default Paragraphe;
