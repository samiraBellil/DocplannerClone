import React from 'react';



const NavMenu = () => {
   const menu =['About as','Career','Departments']
    return (
        <div className="navContents">
            <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                alt="Docplanner Group"/>
                <div> 
                {menu.map(el => <a className="titles" href="#">{el}</a>)}
                </div>
        </div>
    );


}


export default NavMenu;