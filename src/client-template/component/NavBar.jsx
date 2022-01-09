import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import {useDispatch, useSelector} from "react-redux";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faSignInAlt, faSignOutAlt, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import Sticky from 'react-sticky-el';


function NavBar() {
    const [search,setSearch]=useState("")

    return (
        <div className="bg-black "  >

            <div className="container " >

         
                <nav id="navbar-main" className="navbar navbar-expand-lg navbar-light  ">
                    <a className="navbar-brand text-end" href="#">
                   
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <img src="/logo.png" style={{ height: "50px" }} />
                        </ul></a>
                    <div   >
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                            
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">


                        </ul>
                        <div className="" style={{ width: "200px" }} >

                        </div>
                        <ul className="navbar-nav mr-auto  ">

                            <li className="nav-item">
                                <Link to={{ pathname: "/home", state: { id: "all" } }}><span className="nav-link pl-5 pr-5">Acceuil</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={{ pathname: "/product", state: { id: "all" } }}>
                                    <span className="nav-link pl-5 pr-5">Produits</span></Link>
                            </li>
                            <li className="nav-item">

                                <Link to={{ pathname: "/contact", state: { id: "all" } }}><span className="nav-link pl-5 pr-5">Contacts</span></Link>
                            </li>
                            <div className="" style={{ width: "200px" }} >

                            </div>
                            <li className="nav-item  d-lg-block d-none">
                                <div className="nav-item dropdown no-arrow">
                                    <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#">
                                        <i className="fa fa-search fa-lg pl-4" style={{ color: "e76f51" }}></i></a>
                                    <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                        <div class="input-group">
                                            <div class="form-outline">
                                                <input id="search-focus"  type="search" id="form1" class="form-control" onChange={(event)=>setSearch(event.target.value)} />
                                                <label class="form-label"  for="form1" onClick>Search</label>
                                            </div>
                                            <button type="button" class="btn btn-danger">
                                                <i class="fas fa-search" ></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </li>
                            <li className="nav-item  d-lg-none d-block">
                                <Link><span className="nav-link pl-5 pr-5" >Search</span></Link>
                            </li>
                            <li className="nav-item  d-lg-block d-none">

                                <Link to={"/cart"} className="nav-link" >
                                    <i className="fas fa-shopping-cart fa-lg pl-4" style={{ color: "e76f51" }}></i>
                                    <h5 className="d-inline"
                                        style={{ position: "relative", right: "20px", bottom: "8px" }}>
                                        <span className="badge badge-success">{ }</span>
                                    </h5>
                                </Link>
                            </li>
                            <li className="nav-item  d-lg-none d-block">
                                <Link to={"/cart"}><span className="nav-link pl-5 pr-5">Cart</span></Link>
                                
                            </li>
                            
                            <li className="nav-item  d-lg-block d-none">
                                <div className="nav-item dropdown no-arrow">
                                    <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#">
                                        <i className="fa fa-user-o fa-lg pl-2" style={{ color: "e76f51" }}></i></a>
                                    <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                        <Link className="dropdown-item" to="/SignIn" >
                                            <i className="fa fa-sign-in fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;SingIn
                                        </Link>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="/SignUp" >
                                            <i className=" fas fa-user-plus fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;SingUp</a>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item  d-lg-none d-block dropdown">
                                <a class="nav-link dropdown-toggle pl-5 pr-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    Utilisateur
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">                                            <i className="fa fa-sign-in fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;SingIn
                                    </a>
                                    <a class="dropdown-item" href="#">  <i className=" fas fa-user-plus fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;SingUp</a>

                                </div>
                            </li>

                        </ul>


                        <ul className="navbar-nav mr-auto">



                        </ul>

                    </div>
                </nav>
               


            </div>
            
        </div >
    );
};

export default NavBar;
