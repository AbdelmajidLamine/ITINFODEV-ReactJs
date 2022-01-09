import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
export default function LoginComponent() {



 

    const [email, setEmail] = useState('');
    const [password, setPasswod] = useState('');
    const [logWrong, setLogWrong] = useState(false);
    const history = useHistory();
    const registerSuccessfulLoging = (pseudo,idadmin) => {
      if (pseudo ) {
            sessionStorage.setItem('authenticatedUser', pseudo)
             sessionStorage.setItem('authentIdAdmin', idadmin)
            history.push('/adminMain')
        }
        else setLogWrong(true);
    }


    const loginHandling = () => {

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios.post("http://localhost:8080/adminLogin", formData)
            .then(res => registerSuccessfulLoging(res.data.pseudo,res.data.idadmin))
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
    }
    return (
        <div>
            <div className="bg-gradient-danger" style={{ width: '100%', height: '100' }}>
                <div className="container" style={{ width: '100%', height: '100' }}>
                    <div className="row justify-content-center">
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
                                                    <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                {/* <form className="user" action="/adminMain" > */}
                                                <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" onChange={(event) => setEmail(event.target.value)} /></div>
                                                <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" onChange={(event) => setPasswod(event.target.value)} /></div>
                                                <hr />
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label className="form-check-label custom-control-label" htmlFor="formCheck-1" >Remember Me</label></div>
                                                    </div>
                                                </div>
                                                {logWrong && <div className='alert alert-warning' > connexion failed </div>}

                                                <hr />
                                                <button className="btn btn-primary btn-block text-white btn-user" onClick={loginHandling}>Login</button>
                                                {/* </form> */}
                                                <hr />  
                                                <div className="text-center"><a className="small" href="/forgot-password">Mot de passe oblier?</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-white sticky-footer">
                <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © ITINFODEV 2021</span></div>
                </div>
            </footer>
        </div>
    )
}