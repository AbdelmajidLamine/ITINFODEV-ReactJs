import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
//import {useDispatch, useSelector} from "react-redux";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faSignInAlt, faSignOutAlt, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import ProductsService from '../../admin-template/ProductsService';


function NavBar() {
    const [search,setSearch]=useState("")
    const [isActive,setIsActive]=useState(false)
    const [composantPaniers,setcomposantPaniers]=useState([])
 
    const Change=()=>{
        setIsActive(true)
    }

    useEffect(() => {

        // PanierService.getAllComposantePanier(199).then((response) => setcomposantPaniers(response.data));
        // PanierService.getPanier(199).then((response) => setPanier(response.data));
        let lStorage=localStorage.getItem("cart");
        if(lStorage){
        if(lStorage.length>1){
          setcomposantPaniers(JSON.parse(lStorage));
         
        }else{
          setcomposantPaniers(lStorage)
        }
    
        }
    
        
        
      }, [])

      const history=useHistory()
      const goToCart=()=>{
        if(sessionStorage.getItem('authenticatedId')){
            localStorage.setItem('checkout',"nonCheckout")
           history.push('/user/commands')
        }else{
          history.push('/SignIn')
        }
    }
     
     

    // const findText=()=>{
    //   ProductsService.chercheProduit(search).then(res=>)
    // }

    return (
        <div className="bg-black "  >

            <div className="container d-lg-block d-sm-none" >

         
                <nav id="navbar-main" className="navbar navbar-expand-lg navbar-light  ">
                    <a className="navbar-brand text-end" href="#">
                   
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <img src="/logo.png" style={{ height: "70px" ,width:"80px" }} />
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
                                <Link to={{ pathname: "/home", state: { id: "all" } }}><span className="nav-link text-danger pl-5 pr-5" style={{fontSize:"18px"}}>Acceuil</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={{ pathname: "/product", state: { id: "all" } }}>
                                    <span className="nav-link pl-5 pr-5 text-danger"  style={{fontSize:"18px"}}>Produits</span></Link>
                            </li>
                            <li className="nav-item">

                                <Link to={{ pathname: "/contact", state: { id: "all" } }}><span className="nav-link text-danger pl-5 pr-5"  style={{fontSize:"18px"}}>Contacts</span></Link>
                            </li>
                            <div className="" style={{ width: "200px" }} >

                            </div>
                            <li className="nav-item">
                                <div className="nav-item d-flex">
                                    <a className="nav-link " data-toggle="dropdown" aria-expanded="false" href="/#"  >
                                   
                                    <Link className="dropdown-item" to="/product" style={{backgroundColor:"black"}}>
                                        <i className="fa fa-search fa-lg pl-4" style={{ color: "e76f51" }}></i></Link></a> 
                                </div>

                            </li>
                            <li className="nav-item  ">
                            <span class="badge badge-danger">{composantPaniers ? composantPaniers.length:0}</span>
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
                            
                            
                            <li className="nav-item">
                                <div className="nav-item ">
                                   
                                    <button className="dropdown-item" onClick={goToCart} style={{backgroundColor:"black"}}>
                                    <a className=" nav-link" data-toggle="dropdown" aria-expanded="false" href="/SignIn">
                                        <i className="fa fa-user-o fa-lg pl-2" style={{ color: "e76f51" }}></i>
                                        </a>
                                        </button>
                                        
                                    <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                        <button className="dropdown-item" onClick={goToCart} >
                                            <i className="fa fa-sign-in fa-sm fa-fw mr-2 text-gray-400 "></i>&nbsp;SingIn
                                        </button>
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
            <div className="container d-sm-block d-lg-none d-none" >

         
        <nav id="navbar-main" className="navbar navbar-expand-lg navbar-light  ">
            <a className="navbar-brand text-end" href="#">
        
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <img src="/logo.png" style={{ height: "40px" ,width:"40px" }} />
                </ul>
                
            </a>
            <li className="nav-item">
                        <Link to={{ pathname: "/home", state: { id: "all" } }}><span className="nav-link text-danger pl-4 pr-2" >Acceuil</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={{ pathname: "/product", state: { id: "all" } }}>
                            <span className="nav-link pl-3 pr-2 text-danger"  >Produits</span></Link>
                    </li>
                    <li className="nav-item">

                        <Link to={{ pathname: "/contact", state: { id: "all" } }}><span className="nav-link text-danger pl-3 pr-2"  >Contacts</span></Link>
                    </li>
                    
                    <li className="nav-item ml-3">
                    <span class="badge badge-danger">{composantPaniers ? composantPaniers.length:0}</span>
                        <Link to={"/cart"} className="nav-link" >
                        
                            <i className="fas fa-shopping-cart fa-lg " style={{ color: "e76f51" }}></i>
                        </Link>
                        
                    </li>
                    <li className="nav-item  ">
                    <button onClick={goToCart} style={{backgroundColor:"black"}}>
                            <a className=" nav-link" data-toggle="dropdown" aria-expanded="false" href="/SignIn">
                                <i className="fa fa-user-o fa-lg" style={{ color: "e76f51" }}></i>
                                </a>
                    </button>
                    </li>
                    
                                
                            {/* <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                <button className="dropdown-item" onClick={goToCart} >
                                    <i className="fa fa-sign-in fa-sm fa-fw text-gray-400 "></i>&nbsp;SingIn
                                </button>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="/SignUp" >
                                    <i className=" fas fa-user-plus fa-sm fa-fw  text-gray-400"></i>&nbsp;SingUp</a>
                            </div> */}
            <div   >
              
            </div>
           
        </nav>



                    </div>
                    
                </div >
                
    );
};

export default NavBar;
