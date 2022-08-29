import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import CommandeClient from './CommandeClient';
import AccountService from './AccountService'

import ProfileForm from './ProfileForm';

export default function Account() {
    
    const history = useHistory();
    const username = sessionStorage.getItem('authenticatedUser');
    const idclient = sessionStorage.getItem('authenticatedId');

    const mail = sessionStorage.getItem('authenticatedMail');
    const [client,setClient]=useState([]);
    useEffect(()=>{
    if(idclient){
        AccountService.getClient(idclient).then(res=>setClient(res.data)) 
        console.log(idclient)
        console.log(mail)
    }else{
        history.push('/SignIn')
    }
    },[])
    
    const logoutfunction = () => {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('authenticatedId');
        sessionStorage.getItem('authenticatedMail');
        history.push('/home');
    }


    return (

        <Router>
        <div class="container-fluid">
           
        <div class="row header shadow-sm">
    <div class="col-sm-3 pl-0 text-center header-logo">
       <div class="bg-theme mr-3 pt-3 pb-2 mb-0">
            <h3 class="logo"><a href="#" class="text-secondary logo"><i class="fa fa-rocket"></i> Boucherie<span class="small">2002</span></a></h3>
       </div>
    </div>
    
    <div class="col-sm-9 header-menu pt-2 pb-0">
        <div class="row">
            
            
            
            <div class="col-sm-4 col-8 pl-0">
                
               
                
                
             
            </div>
         
            <div class="col-sm-8 col-4 text-right flex-header-menu justify-content-end">
                <div class="search-rounded mr-3">
                    <input type="text" class="form-control search-box" placeholder="Enter keywords.." />
                </div>
                <div class="mr-4">
                    <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={client.image ? "data:image/png;base64,"+client.image : "/assets/img/admins/avatar4.jpeg"} alt="Adam" class="rounded-circle" width="40px" height="40px" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-13" aria-labelledby="dropdownMenuLink">
                        <NavLink to="/user/profile"> <a class="dropdown-item" href="#"><i class="fa fa-user pr-2"></i> Profile</a></NavLink>
                        <div class="dropdown-divider"></div>
                        <NavLink to="/user/commands"> <a class="dropdown-item" href="#"><i class="fa fa-th-list pr-2"></i> Orders</a></NavLink>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" onClick={logoutfunction}><i class="fa fa-power-off pr-2"></i> Logout</a>
                    </div>
                </div>
            </div>
         
        </div>    
    </div>
    </div>
           

            <div class="row main-content">
              <div class="col-sm-3 col-xs-6 sidebar pl-0">
                <div class="inner-sidebar mr-3">
                <div class="avatar text-center">
                        <img src={client.image ? "data:image/png;base64,"+client.image : "/assets/img/admins/avatar4.jpeg"} alt="" class="rounded-circle" />
                        <p><strong>{client.name}</strong></p>
                        <span class="text-primary small"><strong>user</strong></span>
                    </div>

                    <div class="sidebar-menu-container">
                        <ul class="sidebar-menu mt-4 mb-4">
                            <br></br>
                           
                            <li class="parent">
                            <NavLink  to="/user/dashboard"><i className="fas fa-tachometer-alt mr-2"></i><span className="none">Dashboard</span></NavLink>
                            </li>
                            <br></br>
                            

                            <li class="parent">
                            <NavLink to="/user/profile"><i className="fas fa-user mr-2"></i><span className="none">Profile</span></NavLink >
                            </li>
                            <br></br>
                           
                            <li class="parent">
                            <NavLink to="/user/commands"><i className="fas fa-gifts mr-2"></i><span className="none">Commands</span></NavLink >
                            </li>
                            <br></br>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        
            <div class="col-sm-9 col-xs-12 content pt-3 pl-0">
                                <Switch>
                                     <Route path="/user/profile" component={()=>ProfileForm(idclient)} />
                                    <Route path="/user/commands" component={()=>CommandeClient(client.email)  } />
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