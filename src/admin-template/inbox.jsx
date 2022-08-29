import React, { useEffect, useState } from 'react'
import NotificationService from './NotificationService'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function inbox() {


    const [messages,setMessages]=useState([])
    const [notReadM,setNotReadM]=useState([])
    const [details,setDetails]=useState(false)
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [description,setDescription]=useState('')
    useEffect(()=>{
           axios.get(`http://localhost:8080/contacts`).then((res) => res.data)
           .then((data) => {
               data.sort((a, b) => b.idContact - a.idContact);
               setMessages(data)
           });
           axios.get(`http://localhost:8080/unreadMessages`).then(res=>(setNotReadM(res.data)));
           
    },[])

   const showDetails=(contact)=>{
    axios.get(`http://localhost:8080/updateMessage/${contact.idContact}`)
         setDetails(true)
         setName(contact.name)
         setSubject(contact.title)
         setDescription(contact.description)
    }
  return (
       
    <div class="col-sm-12 col-xs-12 content pt-3 pl-0">
    <h5 class="mb-0" ><strong>Messages</strong></h5>
    <span class="text-secondary">Pages <i class="fa fa-angle-right"></i> Messages</span>
    
    <div class="row mt-3">
        <div class="col-md-3 col-sm-12">
            <div class="mt-1 mb-3 button-container bg-white border shadow-sm">
                <div class="p-2 px-3 mb-0 border-bottom">
                    <h6 class="mb-0"><span class="align-bottom" style={{lineHeight:"35px;"}}>Compose</span>
                        <a href="" class="btn btn-theme btn-round shadow-sm pull-right"><i class="fa fa-pencil"></i></a>

                        <div class="clearfix"></div>
                    </h6>
                </div>
                <div class="email-menu mt-0">
                    <Link to="/adminMain/inbox" onClick={()=>(window.location.reload(false))} class="bg-secondary text-white btn-block px-3 mt-0"><i class="fa fa-inbox mr-4"></i> Inbox <span class="badge badge-danger pull-right mt-3">{notReadM.length}</span></Link> 
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


                    <h6 class="mb-3">Messages</h6><hr></hr>
                         {!details ?
                            <div class="feed-single mb-3">
                       
                            {
                                messages.map(
                                    (message,index)=>
                                        <div key={index}>
                                    
                                <div class="media"  onClick={()=>showDetails(message)}>
                                    <div class="media-body">
                                        <h6 class="mt-1">{message.name}
                                            {message.read ? null:<small class="text-muted pl-2 border-radius"><span class="badge badge-danger">Unread</span></small>}
                                            <small class="text-muted small pull-right"><i class="fa fa-clock"></i> 10 hours</small>

                                            <p class="clearfix"></p>
                                        </h6>
                                        <p>{message.subject} <a href="#" class="text-theme">{message.email}</a></p>

                                    </div>
                                </div> <hr></hr>
                            </div>

                                    
                                )
                            }
                                
                                
                           
                    </div>:null
                    }
                    {details ?
                    <div class="feed-single mb-3">
                       
                       
                                   <div>
                               
                           <div class="media"  >
                               <div class="media-body">
                                   <h6 class="mt-1">{name}

                                       <p class="clearfix"></p>
                                   </h6>
                                   <p>{subject} </p>
                                   <p>{description}</p>

                               </div>
                           </div> <hr></hr>
                       </div>

                           
                           
                      
               </div>:null
        }
                </div>
            </div>
         

        </div>
    </div>

  

</div>
  )
}
