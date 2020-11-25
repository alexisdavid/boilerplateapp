/**
 *  @version 1.1.2
 *  @author Trejocode - Sergio
 *  @description Estilos del componente <Header />
*/

import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom';
import ImgLogo      from '../../static/img/logo.png';

const Header = () => {

    const [theme, setTheme] = useState('light');

    /**
     *  @description Activar DarkTheme o LightTheme
    */
    const handleTheme = () => {

        if (theme === "light") {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
        
    };


    return(
        // <header className="justify-center">
        //     <div className="container row-responsive align-center">
        //         <div className="logo align-center full">
        //             <a href = "/" className="logo responsive-img">
        //                 <img src = { ImgLogo } alt = "React Boilerplate Logo" />
        //             </a>
        //             <div className="column">
        //                 <div className="white-space-16"></div>
        //                 <h2 className="color-secondary">
        //                     Boilerplate
        //                 </h2>
        //             </div>
        //         </div>
        //         <nav className="full">
        //             <NavLink exact to = "/" className="nav-item weight-semi font-small color-secondary" 
        //             activeClassName = "nav-active">
        //                 Inicio
        //             </NavLink>
        //             <NavLink exact to = "/fetch" className="nav-item weight-semi font-small color-secondary" 
        //             activeClassName = "nav-active">
        //                 Fetch Request
        //             </NavLink>
        //             <button className="nav-item weight-semi font-small color-secondary" onClick = { handleTheme }>
        //                 Dark Theme
        //             </button>
        //         </nav>
        //     </div>
        // </header>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    );
};

export default Header;