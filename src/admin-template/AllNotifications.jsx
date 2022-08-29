import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NotificationService from './NotificationService'

export default function AllNotifications() {
 
    const [notifications,setNotifications]=useState([])
    const [notRead,setNotRead]=useState([])
    const [details,setDetails]=useState(false)
    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const [detaille,setDetaille]=useState('')
    const [read,setRead]=useState('')
    useEffect(()=>{
           NotificationService.getNotification().then((res) => res.data)
           .then((data) => {
               data.sort((a, b) => b.id - a.id);
               setNotifications(data)
           })
           NotificationService.getUnread().then(resultat=>(setNotRead(resultat.data)));
        //    if(localStorage.getItem('detailsNot')){
        //     setDetails(true)
        //     localStorage.setItem('detailsNot',false)
        //    }
    },[])

   const showDetails=(notification)=>{
    NotificationService.updateNotification(notification.id);
         setDetails(true)
         setDetaille(notification.details)
         setTitle(notification.title)
         setDesc(notification.description)
         setRead(notification.read)
    }
  return (
       
    <div class="col-sm-12 col-xs-12 content pt-3 pl-0" >
    <h5 class="mb-0" ><strong>All Notifications</strong></h5>
    <span class="text-secondary">Pages <i class="fa fa-angle-right"></i> All Notifications</span>
    
    <div class="row mt-3">
        <div class="col-md-3 col-sm-12">
            <div class="mt-1 mb-3 button-container bg-white border shadow-sm">
                <div class="p-2 px-3 mb-0 border-bottom">
                    <h6 class="mb-0"><span class="align-bottom" style={{lineHeight: "35px;"}}>Compose</span>
                        <a href="" class="btn btn-theme btn-round shadow-sm pull-right"><i class="fa fa-pencil"></i></a>

                        <div class="clearfix"></div>
                    </h6>
                </div>
                <div class="email-menu mt-0">
                    <Link to="/adminMain/AllNotification" onClick={()=>(window.location.reload(false))} class="bg-secondary text-white btn-block px-3 mt-0"> All Notifications <span class="badge badge-danger pull-right mt-3">{notRead.length}</span></Link> 
                </div>
            </div>
          


      
            

        </div>

        <div class="col-md-9 col-sm-12">
            
            <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm lh-sm">
                <div class="email-msg">
                    <div class="email-inbox-menu">
                        

                        <button type="button"  class="btn btn-light shadow border pull-left pt-2 pb-2 mr-3"><i class="fa fa-refresh text-success"></i></button>


                        <span class="clearfix"></span>
                    </div>


                    <div class="email-msg-list table-responsive">
                        {!details ?
                        <table class="table mt-4">
                            <tbody>
                            {
                                notifications.map(
                                    (notification,index)=>(
                                    <tr key={index} className={(notification.read) ? '':'table-secondary'} onClick={()=>showDetails(notification)}>
                                    <td style={{width: "10px;"}} class="p-0 pr-1 align-middle">
                                        <div class="form-check-box cta">
                                            <span class="color1">
                                                <input type="checkbox" id="one" />
                                                <label for="one"></label>
                                            </span>
                                        </div>
                                    </td>
                                    <td class="align-middle border-left-0"><i class="fa fa-star text-info"></i></td>
                                     <td class="align-middle">{notification.title}</td> 
                                    <td class="align-middle">{notification.description}</td>
                                    <td class="align-middle" ><i class="fa fa-paperclip"></i></td>
                                    <td class="align-middle">March 27</td>
                                </tr>)
                                    
                                )
                            }
                                
                                
                            </tbody>
                        </table>:null
                        }
                        {details ?
                        <table class="table mt-4">
                        <tbody>
                        
                           
                                    <tr className={read ? '':'table-secondary'} >
                                <td style={{width: "10px;"}} class="p-0 pr-1 align-middle">
                                    <div class="form-check-box cta">
                                        <span class="color1">
                                            <input type="checkbox" id="one" />
                                            <label for="one"></label>
                                        </span>
                                    </div>
                                </td>
                                <td class="align-middle border-left-0"><i class="fa fa-star text-info"></i></td>
                                 <td class="align-middle">{title}</td> 
                                <td class="align-middle">{detaille}</td>
                                <td class="align-middle"><i class="fa fa-paperclip"></i></td>
                                <td class="align-middle">March 27</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>:null
                        }
                    </div>

                </div>
            </div>
         

        </div>
    </div>

  

</div>
  )
}