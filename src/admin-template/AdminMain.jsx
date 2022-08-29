import React ,{ useEffect,useState } from 'react';
import axios from 'axios'
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
import InsertOrder from './InsertOrder';

import NavBar from './NavBar';
import AllNotifications from './AllNotifications';
import inbox from './inbox.jsx';



export default function AdminMain() {
    const history = useHistory();
    const [id,setId]=useState(1);
     
  
    const username = sessionStorage.getItem('authenticatedUser');
    
   
    
if(username){

     const idAdmin=sessionStorage.getItem('authentIdAdmin')
     const [admin,setAdmin]=useState([]) 

    useEffect(()=>{
        axios.get('http://localhost:8080/admin'+'/'+idAdmin).then(response=>setAdmin(response.data))
       
       
    },[])

   

    
    return (
        <Router>
        <div class="container-fluid">
           
            <NavBar props={admin} />
           

            <div class="row main-content">
              <div class="col-sm-3 col-xs-6 sidebar pl-0">
                <div class="inner-sidebar mr-3">
                <div class="avatar text-center">
                        <img src={admin.image ? "data:image/png;base64,"+admin.image : "/assets/img/admins/avatar4.jpeg"} alt="" class="rounded-circle" />
                        <p><strong>{admin.pseudo}</strong></p>
                        <span class="text-primary small"><strong>Admin</strong></span>
                    </div>

                    <div class="sidebar-menu-container">
                        <ul class="sidebar-menu mt-4 mb-4">
                            <br></br>
                           
                            <li class="parent">
                            <NavLink  to="/adminMain/dashboard"><i className="fas fa-tachometer-alt mr-2"></i><span className="none">Dashboard</span></NavLink>
                            </li>
                            <br></br>
                            

                            <li class="parent">
                            <NavLink to="/adminMain/profile"><i className="fas fa-user mr-2"></i><span className="none">Profile</span></NavLink >
                            </li>
                            <br></br>
                           
                            <li class="parent">
                            <NavLink to="/adminMain/clients"><i className="far fa-user-circle mr-2"></i><span className="none">Users</span></NavLink >
                                
                            </li>
                            <br></br>
                            <li class="parent">
                            <NavLink to="/adminMain/product"><i className="fas fa-shopping-basket mr-2"></i><span className="none">Products</span></NavLink >
                               
                            </li>
                            <br></br>
                           
                            <li class="parent">
                                <NavLink  to="/adminMain/categories"><i className="fas fa-cubes mr-2"></i><span className="none">Categories</span></NavLink >
                            </li>
                            <br></br>
                           
                            <li class="parent">
                            <NavLink to="/adminMain/commands"><i className="fas fa-gifts mr-2"></i><span className="none">Commands</span></NavLink >
                            </li>
                            <br></br>
                            <li class="parent">
                            <NavLink to="/adminMain/insertOrder"><i className="fas fa-gifts mr-2"></i><span className="none">Insert Order</span></NavLink >
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        
            <div class="col-sm-9 col-xs-12 content pt-3 pl-0">
                                <Switch>
                                    <Route path="/adminMain/dashboard" component={DashboardComponent} />
                                    <Route path="/adminMain/profile" component={ProfileComponent} />
                                    <Route path="/adminMain/clients" component={ClientsTableComponent} />
                                    <Route path="/adminMain/product" component={ProductsComponenet} />
                                    <Route path="/adminMain/new-product" component={AddProductComponent} />
                                    <Route path="/adminMain/categories" component={CategorieProductComponent} />
                                    <Route path="/adminMain/commands" component={CommandesComponenet} />
                                    <Route path="/adminMain/new-categorie" component={AddCategorieComponent} />
                                    <Route path="/adminMain/UpdateProduct" component={UpdateProductComponent} />
                                    <Route path="/adminMain/insertOrder" component={InsertOrder} />
                                    <Route path="/adminMain/AllNotification" component={AllNotifications} />
                                    <Route path="/adminMain/inbox" component={inbox} />
                                </Switch>
                         
              </div>
                        <footer className="bg-white sticky-footer">
                            <div className="container my-auto">
                                <div className="text-center my-auto copyright"><span>Copyright ©raouy 2021</span></div>
                            </div>
                        </footer>
                  
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