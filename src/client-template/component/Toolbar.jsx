import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';

export default function Toolbar() {

    return (

       
            <div className="uk-container "   >
                <div className="uk-navbar-left  "   >
                    <nav className="navbar navbar-expand-lg navbar-light "  style={{ backgroundColor:"e9c46a",height: '1.5rem' }}>
                        <a className="navbar-brand" ></a>
                        <a className="navbar-brand" ></a>

                        <div className="collapse navbar-collapse " id="toolbar" >
                            <ul className="navbar-nav mr-auto ">
                                <li className="nav-item">
                                    <a className="nav-link" > </a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link "  > +33238630042</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >boucherie2002 </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Daily 10:00–22:00</a>
                                </li>

                            </ul>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">

                                    <a className="nav-link" > New </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >FAQ </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Payment</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        
    )
}

