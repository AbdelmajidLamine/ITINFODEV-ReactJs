import React , { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBCard,MDBCardBody} from 'mdbreact';
import AccountService from "./AccountService";
import NavBar from "../NavBar";
import { useHistory } from 'react-router-dom';
import './css.css';
import Footer from '../Footer/Footer';
 import NotificationService from "../../../admin-template/NotificationService";

export default function SingUpForm (){

  const [unsaved,setUnsaved]= useState(false)
    const [saved,setSaved]= useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logWrong, setLogWrong]= useState(false)
    const history = useHistory ()
    
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("password",password);

    
  

    const registerSuccessfulLoging=(name)=> {
      if (name)
      {{sessionStorage.setItem('authenticatedUser', name)
      history.push('/SignIn')}
   }
      else setLogWrong(true);
  }
    const rgister=()=>{
      const notificationVal=new FormData();
      notificationVal.append("title",'Personnel');
      notificationVal.append("description",'New employee arrival');
      notificationVal.append("details",'created an account!');

      NotificationService.addNotification(notificationVal)
      .then(res=>{})
        .catch(err=>{});
      AccountService.SingUp(formData)
      .then(()=>{setUnsaved(false); setSaved(true);history.push('/SignIn')})
      .catch(()=>{setUnsaved(true); setSaved(false)})
      

    }
return (
  
<div >


{/* <div className="fixed w-100" md="6">
      <NavBar />
      </div> */}
             


      <div className="bg-gradient-danger" style={{ width: '100%', height: '100' }}>
       
       </div>   


     <div style={{ width: '100%', height: '400px' }}>
               <div className="container" style={{ width: '100%', height: '400px' }}>
                   <div className="row justify-content-center" >
                       <div className="col-md-9 col-lg-12 col-xl-10">
                           <div className="card shadow-lg o-hidden border-0 my-5">
                               <div className="card-body p-0">
                                   <div className="row">
                                       <div className="col-lg-5 d-none d-lg-flex">
                                           <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: " url(./logo.png)" }}></div>
                                       </div>
                                       <div className="col-lg-6">
                                           <div className="p-5">
                                               <div className="text-center">
                                                   <h4 className="text-dark mb-4">Sign up </h4>
                                               </div>
                                              
        <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
        <strong className="text-warning mb-0" >
        Your name</strong> 
          
        </label>
        <input type="text" id="defaultFormCardNameEx" className="form-control" onChange={(event)=>setName(event.target.value)} />
        <br />
        <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">
        <strong className="text-warning mb-0" >
        Your email</strong>
        </label>
        <input type="email" id="defaultFormCardEmailEx" className="form-control" onChange={(event)=>setEmail(event.target.value)} />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
        <strong className="text-warning mb-0" >
        Your password</strong>  
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" onChange={(event)=>setPassword(event.target.value)} />
        
        <div className="text-center mt-4">
        <div>
                    { unsaved && <div className='alert alert-warning' > votre email exist deja </div>}  
                    { saved && <div className='alert alert-success' > successful bienvennue cher client </div>}
        </div>
    <button className="btn btn-danger btn-block text-white btn-user  " onClick={rgister}>Register</button>
       
         
        </div>
     
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
      
    
    
     <div style={{ height: "100px" }} ></div>
     <div> 
       <Footer />
     </div>
      
</div>
)
}

