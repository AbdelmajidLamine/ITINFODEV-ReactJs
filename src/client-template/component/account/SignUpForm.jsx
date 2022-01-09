import React , { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon,MDBCard,MDBCardBody} from 'mdbreact';
import AccountService from "./AccountService";
import NavBar from "../NavBar";
import { useHistory } from 'react-router-dom';
import './css.css';
import Footer from '../Footer/Footer';

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
      history.push('/adminMain')}
   }
      else setLogWrong(true);
  }
    const rgister=()=>{

      AccountService.SingUp(formData)
      .then(()=>{setUnsaved(false); setSaved(true)})
      .catch(()=>{setUnsaved(true); setSaved(false)})
    }
return (
  
<div style={{        backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
    height: "700px"            }} >


<div className="fixed w-100" md="6">
      <NavBar />
      </div>
             
<div style={{ height: "80px" }} ></div>
<MDBContainer>
  <MDBRow className="d-flex justify-content-center p-2 w-100">
    <MDBCol md="6">
    <MDBCard style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <div className="header pt-3 grey lighten-2">
    <MDBRow className="d-flex justify-content-center">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                <strong class="text-info mb-0" >
                Sign up </strong>
                
                </h3>
    </MDBRow>
    </div>
    <MDBCardBody className="mx-4 mt-4">
    
      
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
     
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
<div style={{ height: "100px" }} ></div>
<div> 
        <Footer />
      </div>
      
</div>
)
}

