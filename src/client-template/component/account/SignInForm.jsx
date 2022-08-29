import React, { useState } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './css.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer/Footer';

const SignInForm = () => {


  const [password, setPasswod] = useState('')
  const [logWrong, setLogWrong] = useState(false)
  const [email, setEmail] = useState('')
  const history = useHistory()
  const prixPanier = sessionStorage.getItem('prixFinal');
  const chekoutUser = sessionStorage.getItem('authenticatLoginchekout');




  const [id, setId] = useState();


  const loginHandling = () => {

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    

    axios.post("http://localhost:8080/SignIn", formData)
      .then(res => {
      sessionStorage.setItem('authenticatedId', res.data.idClient);
      sessionStorage.setItem('authenticatedMail', res.data.mail);
      if(localStorage.getItem('checkout')=="checkout"){
        localStorage.setItem('checkout',"nonCheckout")
        history.push('/chekout')
      }else{
        localStorage.setItem('checkout',"nonCheckout")
        history.push('/user/commands')
      }
      
    }
         
      )
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          setLogWrong(true);
        } else if (error.request) {
          // The request was made but no response was received
          setLogWrong(true);
        } else {
          // Something happened in setting up the request that triggered an Error
          setLogWrong(true)
        }
      });
      sessionStorage.setItem('authenticatLoginchekout', 0);
  }




  return (

    <div >   
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
                                                    <h4 className="text-dark mb-4">Log in</h4>
                                                </div>
                                                {/* <form className="user" action="/adminMain" > */}
                                                <MDBInput  group type="email" containerClass="mb-0" validate onChange={(event) => setEmail(event.target.value)} />
                <label > <strong className="text-white mb-0" >
                Your email</strong> </label>
                <MDBInput
                
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={(event) => setPasswod(event.target.value)}
                />
                <label > <strong className="text-white mb-0" >
                Your password </strong> </label>
                <p className="font-small d-flex justify-content-end">
                <strong className="text-white mb-0" >
                Forgot </strong>
                 
                  <a
                    href="/forgot-password"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                  <strong> Password?</strong>
                  </a>
                </p>
                {logWrong && <div className='alert alert-warning' > connexion failed </div>}
                <button className="btn btn-danger btn-block text-white btn-user  " onClick={loginHandling}>Log in</button>
                <div className="text-center mb-4 mt-5">

                </div>

                <p className="font-small text-white d-flex justify-content-center">

                <strong style={{color:"black"}}>    Don't have an account?</strong>
                
                  <a
                    href="/SignUp"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Sign up
                  </a>
                </p>
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
  );
};

export default SignInForm;