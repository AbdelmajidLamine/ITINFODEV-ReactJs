import React from 'react';
//BsFillGrid3X3GapFill
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import Menu from '../component/Menu/Menu';
import NavBar from '../component/NavBar';
import CardProductList from "../component/product/CardProductList";
import CardProductGrid from "../component/product/CardProductGrid";
import Footer from '../component/Footer/Footer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function Product() {

    let categor = sessionStorage.getItem('categorie');
 const activeproductGrid= () =>{
     sessionStorage.setItem('activeproductGrid',1)
     window.location.reload(false);

 }

 const desactiveproductGrid= () =>{
    sessionStorage.setItem('activeproductGrid',0)
    window.location.reload(false);
    
}
    return (
        
        
            <div id="page-top">
           <div className=' w-100 fixed'>
                <NavBar  />
                </div>
            <div style={{ height: "20px" }} ></div>
            <div className="bg-image d-flex justify-content-center align-items-center" style=
                {{
                    backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
                    height: "300px"
                }}>
                <div className="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <h1 style={{ width: "rem", height: "50px" }}>

                        <strong className="text-white mb-0" >
                            Products  </strong>
                    </h1>
                </div>

            </div>
            <div>
                <h1 style={{height:"20px"}}></h1>
            <Breadcrumbs className=" my-3 nav justify-content-center">
                <nav aria-label="breadcrumb">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link  " href="/Home" > Home</a>
                        </li>
                        <li className="nav-item">
                            <a v="nav-link disabled">/</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled"  >Product</a>
                        </li>

                    </ul>
                </nav>

            </Breadcrumbs>
            </div>
            <div style={{ height: "10px" }} ></div>
                <Router>
                <div id="wrapper">
                    
                   <div className="w-25 " ></div>
                    <div >
                        <Menu />
                    </div>

                    <div className="d-flex flex-column " id="content-wrapper">

                        <div id="content">

                            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">

                                <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                    <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                                       
                                        <div   onClick={desactiveproductGrid}>
                                            <i className=" fa fa-list fa-lg pl-2" style={{ color: 'rouge' }}></i>
                                            <h5 className="d-inline"
                                                style={{ position: "relative", right: "15px", bottom: "8px" }}>
                                                <span className="badge badge-success">{ }</span>
                                            </h5>
                                        </div>
                                        
                                        <div onClick={activeproductGrid }>
                                            <i className=" fa  fa-th fa-lg pl-2" style={{ color: "rouge" }}></i>
                                            <h5 className="d-inline"
                                                style={{ position: "relative", right: "15px", bottom: "8px" }}>
                                                <span className="badge badge-success">{ }</span>
                                            </h5>
                                        </div>
                                        <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><i className="fas fa-search"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                                <i className="fa fa-list" aria-hidden="true"></i>
                                            </div>
                                        </li>

                                        <div className="d-none d-sm-block topbar-divider"></div>

                                    </ul>
                                </div>
                            </nav>

                            <div className="container-fluid" data-spy="scroll" >
                                <Switch>
                                    {/* <Route path = "/abats" component = {()=>CardProductList('Abats')} />   */}
                                    <Route path="/productlistgrid" component={CardProductGrid} />
                                    <Route path="/product/Abats" component={() => CardProductList('Abats')} />
                                    <Route path="/product/charcuterie" component={() => CardProductList('Charcuterie')} />
                                    <Route path="/product/bouef" component={() => CardProductList('Le Bouef')} />
                                    <Route path="/product/agneau" component={() => CardProductList('Agneau')} />
                                    <Route path="/product/preparations" component={() => CardProductList('Preparations')} />
                                    <Route path="/product/veau" component={() => CardProductList('Le Veau')} />
                                    <Route path="/product/volaille" component={() => CardProductList('Volaille')} />

                                    <Route path="" />
                                </Switch>
                            </div>
                        </div>

                    </div>
                    <div className="w-25 " ></div>

                </div>
                </Router>
                <Footer />
            </div>
        
    )
}