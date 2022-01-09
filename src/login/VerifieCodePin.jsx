import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function VerifieCodePin() {

    const email = sessionStorage.getItem('authenticatedEmail');
    const [logWrong, setLogWrong] = useState(false);
    const [log, setLog] = useState(false);
    const [newPas, setNewPas] = useState(false);
    const [codePin, setCodePin] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useHistory();


    const registerSuccessfulLoging = (email) => {
        if (email) {
            
            alert(" L'e-mail de réinitialisation du mot de passe a été envoyé.Un codePin de réinitialisation de mot de passe a été envoyé à l'adresse e-mail enregistrée pour votre compte,. Please  regardez votre email"
            )
            
            setNewPas(true);
        }
        else setLogWrong(true);
    }
    const updateSuccessfulNewPassword = (password) => {
        if (password) {
           
            alert(" L'e-mail de réinitialisation du mot de passe a été envoyé.Un codePin de réinitialisation de mot de passe a été envoyé à l'adresse e-mail enregistrée pour votre compte,. Please  regardez votre email"
            )
            history.push('/SignIn');
            
        }
        else setLog(true);
    }

    const loginHandling = () => {


        const formData = new FormData();

        formData.append("email", email);
        formData.append("codePin", codePin);


        axios.post("http://localhost:8080/virifieCodPin", formData)
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

    //

    const NewPasword = () => {


        const formData = new FormData();
        
        formData.append("email", email);
        formData.append("password", newPassword);


        axios.post("http://localhost:8080/newPassword", formData)
            .then(res => updateSuccessfulNewPassword(res.data.password))
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded

                } else if (error.request) {
                    // The request was made but no response was received
                    setLog(true);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setLog(true)
                }
            });
    }

    return (
        <div className="row justify-content-center" >
            <div className="col-md-4 justify-content-center">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                            <h3>
                                <i className="fa fa-check"></i>



                            </h3>
                            <h2 className="text-center">Verifier  code pin </h2>
                            <p> inserez code pin .</p>

                            <div className="panel-body">

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                        <input placeholder="code pin " className="form-control" type="email" onChange={(event) => setCodePin(event.target.value)} />
                                    </div>

                                  
                                    {logWrong && <div className='alert alert-warning' > Utilisateur n'existe pas ou/et le l'email est incorrect</div>}
                                    <hr />
                                    <button className="btn btn-primary btn-block text-white btn-user" onClick={loginHandling}>Verifier</button>
                                </div>


                                




                            </div>
                        </div>
                        {newPas &&
                            <div className="text-center">
                                <h3>


                                    <i className="fa fa-pencil" />

                                </h3>
                                <h2 className="text-center">modifier mot de passe </h2>
                                <p> inserez nouveau mot de passe</p>

                                <div className="panel-body">

                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input placeholder="code pin " className="form-control"  onChange={(event) => setNewPassword(event.target.value)} />
                                        </div>

                                        <hr />
                                        {log && <div className='alert alert-warning' > Utilisateur n'existe pas ou/et le l'email est incorrect</div>}

                                        <button className="btn btn-primary btn-block text-white btn-user" onClick={NewPasword}>Verifier</button>
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}