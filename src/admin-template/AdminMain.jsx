import React ,{ useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import AddCategorieComponent from './AddCategorieComponent';
import AddProductComponent from './AddProductComponent';
import CategorieProductComponent from './CategorieProductComponent';
import ClientsTableComponent from './ClientsTableComponent';
import CommandesComponenet from './CommandesComponenet';
import DashboardComponent from './DashboardComponent';
import ProductsComponenet from './ProductsComponent';
import ProfileComponent from './ProfileCcomponent'
import ListProductComponent from './Product';
import UpdateProductComponent from './UpdateProduct';
export default function AdminMain() {
    const history = useHistory();
    const [id,setId]=useState(1);
    
    const username = sessionStorage.getItem('authenticatedUser');
    const logoutfunction = () => {
        sessionStorage.removeItem('authenticatedUser');
        history.push('/admin');
    }
if(username){
    return (
        <Router>
            <div id="page-top">
                <div id="wrapper">
                    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                        <div className="container-fluid d-flex flex-column p-0">
                            <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                {/* <i className="fas fa-laugh-wink"></i> */}
                            </div>
                            <div className="sidebar-brand-text mx-3"><span>Boucherie 2002</span></div>
                            </a>
                            <hr className="sidebar-divider my-0" />
                            <ul className="nav navbar-nav text-light" id="accordionSidebar">
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/profile"><i className="fas fa-user"></i><span>Profile</span></NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/clients"><i className="far fa-user-circle"></i><span>Users</span></NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/product"><i className="fas fa-shopping-basket"></i><span>Products</span></NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/categories"><i className="fas fa-cubes"></i><span>Categories</span></NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/adminMain/commands"><i className="fas fa-gifts"></i><span>Commands</span></NavLink ></li>
                                {/* <li className="nav-item"><NavLink className="nav-link" to="/adminMain/UpdateProduct"><i className="fas fa-gifts"></i><span>Commands</span></NavLink ></li> */}

                            </ul>
                            {/* <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div> */}
                        </div>
                    </nav>
                    <div className="d-flex flex-column" id="content-wrapper">
                        <div id="content">
                            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                                <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                    <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                                        <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#"><i className="fas fa-search"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                                <form className="form-inline mr-auto navbar-search w-100">
                                                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                        <div className="d-none d-sm-block topbar-divider"></div>
                                        <li className="nav-item dropdown no-arrow">
                                            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="d-lg-inline mr-2 text-gray-600 small">{username}</span></a>
                                                <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                                    <Link className="dropdown-item" to="/adminMain/profile" >
                                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings
                                                        </Link>
                                                    <div className="dropdown-divider"></div><a className="dropdown-item"  onClick={logoutfunction}><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="container-fluid">
                                <Switch>
                                {/* <Route path="/adminMain/dashboard" component={ListProductComponent} /> */}
                                    <Route path="/adminMain/profile" component={ProfileComponent} />
                                    <Route path="/adminMain/clients" component={ClientsTableComponent} />
                                    <Route path="/adminMain/product" component={ProductsComponenet} />
                                    <Route path="/adminMain/new-product" component={AddProductComponent} />
                                    <Route path="/adminMain/categories" component={CategorieProductComponent} />
                                    <Route path="/adminMain/commands" component={CommandesComponenet} />
                                    <Route path="/adminMain/new-categorie" component={AddCategorieComponent} />
                                    <Route path="/adminMain/UpdateProduct" component={UpdateProductComponent} />
                                </Switch>
                            </div>
                        </div>
                        <footer className="bg-white sticky-footer">
                            <div className="container my-auto">
                                <div className="text-center my-auto copyright"><span>Copyright ©raouy 2021</span></div>
                            </div>
                        </footer>
                    </div>
                    <a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
                </div>
            </div>
        </Router>
    )
}

else{
    history.push('/admin');
}
}