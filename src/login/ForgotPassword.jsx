import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../client-template/component/NavBar';

import Footer from '../client-template/component/Footer/Footer';
export default function ForgotPassword(){

    const [email, setEmail] = useState('');
    const [logWrong, setLogWrong] = useState(false);
    const history = useHistory();

    const registerSuccessfulLoging = (email) => {
        if (email) {
            sessionStorage.setItem('authenticatedEmail', email)
            alert(" L'e-mail de réinitialisation du mot de passe a été envoyé.Un codePin de réinitialisation de mot de passe a été envoyé à l'adresse e-mail enregistrée pour votre compte,. Please  regardez votre email"
            )
            history.push('/verifieCodePin')
        }
        else setLogWrong(true);
    }

 const loginHandling = () => {

        
    const formData = new FormData();
    formData.append("email", email);

        axios.post("http://localhost:8080/forgotPasword",formData)
            .then(res => registerSuccessfulLoging(res.data.email))
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                  
                } else if (error.request) {
                    // The request was made but no response was received
                    setLogWrong(true);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setLogWrong(true)
                }
            });
    }

    return(
  <div>
        <div className="fixed w-100" md="6">
        <NavBar />
        </div>
        <div style={{ height: "90px" }} ></div>
            <div className="row justify-content-center " >
                
          
                <div className="col-md-4 justify-content-center">
                    
                    <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                        <h2 className="text-center">Forgot Password?</h2>
                        <p>You can reset your password here.</p>
                        <div className="panel-body">
                         
                                <div className="form-group">
                                    <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                    <input id="email" name="email" placeholder="email address" className="form-control"  type="email" onChange={(event) => setEmail(event.target.value)}/>
                                    </div>
                                </div>
                                {logWrong && <div className='alert alert-warning' > Utilisateur n'existe pas ou/et le l'email est incorrect</div>}
                                <div className="form-group">
                                    <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit"  onClick={loginHandling} />
                                </div>
                                
                          
            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        <div style={{ height: "90px" }} ></div>
            <div >
                <Footer />
            </div>
        </div>
    )
    
}