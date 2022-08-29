import React ,{ useEffect,useState } from 'react'
import axios from 'axios'
import $ from 'jquery';
import AdminService from './AdminService';
import NotificationService from './NotificationService';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';

export default function NavBar({props}) {
    
    
    const history = useHistory();
    const [contacts,setContacts]=useState([])
    const [notifications,setNotifications]=useState([])  
    const toggle_sidebar=()=> {
        $('#sidebar-toggle-btn').toggleClass('slide-in');
        $('.sidebar').toggleClass('shrink-sidebar');
        $('.content').toggleClass('expand-content');
        
        //Resize inline dashboard charts
        $('#incomeBar canvas').css("width","100%");
        $('#expensesBar canvas').css("width","100%");
        $('#profitBar canvas').css("width","100%");
    }
    const logoutfunction = () => {
        sessionStorage.removeItem('authenticatedUser');
        history.push('/admin');
    }

        useEffect(()=>{
         NotificationService.getUnread().then((res) => res.data)
         .then((data) => {
             data.sort((a, b) => b.id - a.id);
             setNotifications(data)
         })
         axios.get(`http://localhost:8080/unreadMessages`).then((res) => res.data)
         .then((data) => {
             data.sort((a, b) => b.id - a.id);
             setContacts(data)
         });
    },[])
    const isRead=(notification)=>{
          NotificationService.updateNotification(notification.id);
          localStorage.setItem('detailsNot',true);
          history.push('/adminMain/AllNotification')
    }
    const isReadMess=(contact)=>{
        axios.get(`http://localhost:8080/updateMessage/${contact.idContact}`)
        history.push('/adminMain/inbox')
    }
  return (
    <div class="row header shadow-sm">
    <div class="col-sm-3 pl-0 text-center header-logo">
       <div class="bg-theme mr-3 pt-3 pb-2 mb-0">
            <h3 class="logo"><a href="#" class="text-secondary logo"><i class="fa fa-rocket"></i> Boucherie<span class="small">2002</span></a></h3>
       </div>
    </div>
    
    <div class="col-sm-9 header-menu pt-2 pb-0">
        <div class="row">
            
            
            
            <div class="col-sm-4 col-8 pl-0">
                
                <span class="menu-icon" onClick={toggle_sidebar}>
                    <span id="sidebar-toggle-btn"></span>
                </span>
                
                
                <div class="menu-icon">
                    <a class="" href="#" role="button" id="dropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bell"></i>
                        <span class="badge badge-danger">{notifications.length}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-left mt-10 animated zoomInDown">
                        <a class="dropdown-item" href="#"><strong>Notifications</strong></a>
                        <div class="dropdown-divider"></div>
                        {notifications.map(
                            (notification,index)=>(
                        
                               
                               <div class="dropdown-item" key={index} onClick={()=>isRead(notification)}>
                                   <div class="media">
                                       <div class="align-self-center mr-3 rounded-circle notify-icon bg-primary">
                                           <i class="fa fa-bookmark"></i>
                                       </div>
                                       <div class="media-body">
                                           <h6 class="mt-0"><strong>{notification.title}</strong></h6>
                                           <p>{notification.description}</p>
                                           <small class="text-success">09:23am</small>
                                       </div>
                                   </div>
                               </div>
                        ))}
                       
                        
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item text-center link-all" to="/adminMain/AllNotification">See all notifications </Link>
                    </div>
                </div>
                
                <span class="menu-icon inbox">
                    <a class="" href="#" role="button" id="dropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-envelope"></i>
                        <span class="badge badge-danger">{contacts.length}</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-left mt-15 animated zoomInDown" aria-labelledby="dropdownMenuLink3">
                        <a class="dropdown-item" href="#"><strong>Unread messages</strong></a>
                        <div class="dropdown-divider"></div>
                        {contacts.map(
                            (contact,index)=>
                            
                                ( 
                                 <a href="#" className="dropdown-item" key={index} onClick={()=>isReadMess(contact)}>
                              
                                <div className="media ">
                                    <img className="align-self-center mr-3 rounded-circle" src="/assets/img/users/dmin_1.png" width="50px" height="50px" alt="Generic placeholder image" />
                                    <div className="media-body">
                                        <h6 className="mt-0"><strong>{contact.name}</strong></h6>
                                        <p>{contact.subject}</p>
                                        <small className="text-success">09:23am</small>
                                    </div>
                                </div>
                            </a> )
                            
                                
                        
                        )}      
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item text-center link-all" to="/adminMain/inbox">View all messages</Link>
                    </div>
                </span>
               
                <span class="menu-icon">
                    <i class="fa fa-th-large"></i>
                </span>
            </div>
         
            <div class="col-sm-8 col-4 text-right flex-header-menu justify-content-end">
                <div class="search-rounded mr-3">
                    <input type="text" class="form-control search-box" placeholder="Enter keywords.." />
                </div>
                <div class="mr-4">
                    <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={props.image ? "data:image/png;base64,"+props.image : "/assets/img/admins/avatar4.jpeg"} alt="Adam" class="rounded-circle" width="40px" height="40px" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-13" aria-labelledby="dropdownMenuLink">
                        <NavLink to="/adminMain/profile"> <a class="dropdown-item" href="#"><i class="fa fa-user pr-2"></i> Profile</a></NavLink>
                        <div class="dropdown-divider"></div>
                        <NavLink to="/adminMain/commands"> <a class="dropdown-item" href="#"><i class="fa fa-th-list pr-2"></i> Orders</a></NavLink>
                        <div class="dropdown-divider"></div>
                        <NavLink to="/adminMain/product"> <a class="dropdown-item" href="#"><i class="fa fa-book pr-2"></i> Products</a></NavLink>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" onClick={logoutfunction}><i class="fa fa-power-off pr-2"></i> Logout</a>
                    </div>
                </div>
            </div>
         
        </div>    
    </div>
    </div>
  )
}
