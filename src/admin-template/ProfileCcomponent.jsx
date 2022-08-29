import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ProfileComponent() {

     const [update,setUpdate]= useState(false)
     const [unupdate,setUnupdate]= useState(false)
     const[data,setdata]=useState(false)
     const idAdmin=sessionStorage.getItem('authentIdAdmin')
     const[newPasword,setNewPasword]=useState('')
     const[password,setpassword]= useState('')
     const[admin,setAdmin]=useState([])
     const[image,setImage]=useState('')
     const[newPseudo,setNewPseudo]=useState('')
     const[newEmail,setNewEmail]=useState('')
     const profilData= new FormData();

        profilData.append( "idAdmin",idAdmin);
        profilData.append("image" ,image);
        profilData.append("pseudo",newPseudo);
        profilData.append("email",newEmail);

   const formData= new FormData();

   formData.append( "idAdmin",idAdmin);
   formData.append("newPassword" ,newPasword);
   formData.append("password",password);
   useEffect (()=>{
    axios.get('http://localhost:8080/admin'+'/'+idAdmin).then((response)=>setAdmin(response.data)

    )
},[]);

    const modufyPaswordAdmin=()=>{
        if(password && newPasword)
        {
        axios.put(`http://localhost:8080/modifypasswordAdmin` ,formData)
            .then(()=>{setUnupdate(false); setUpdate(true);setdata(false)})
            .catch(()=>{setUnupdate(true);  setUpdate(false);setdata(false)})
           
        }
        else 
       { setdata(true),
        setUnupdate(false)
    }
    }

    const updateProfile=()=>{
        console.log(profilData)
           if(image || newEmail || newPseudo){
                    axios.post(`http://localhost:8080/updateProfilImage` ,profilData)
                    .then((res)=>{setUnupdate(false); setUpdate(true);setdata(false)})
                    .catch((res)=>{setUnupdate(true);  setUpdate(false);setdata(false)})
           }
    }

    return (
        <div>
                    <h3 className="text-dark mb-4">Profile  </h3>
                    <span class="text-secondary">Dashboard <i class="fa fa-angle-right"></i> Profile</span>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={admin.image ? "data:image/png;base64,"+admin.image : "/assets/img/admins/avatar4.jpeg"} width="160" height="160" alt="gg"/>
                                    <div className="mb-3"> <label>Photos: </label>
                                <input type="file" name="image" accept="image/png, image/jpeg" onChange={event=>setImage(event.target.files[0])}/></div>
                                </div>
                            </div>
                         
                        </div>
                        <div className="col-lg-8">
                            <div className="row mb-3 d-none">
                                <div className="col">
                                    <div className="card text-white bg-primary shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-white bg-success shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card shadow mb-3">
                                        <div className="card-header py-3">
                                            <p className="text-primary m-0 font-weight-bold">User Settings</p>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-row">
                                                    <div className="col">
                                                        <div className="form-group"><label htmlFor="username"><strong>Nom et Prenom</strong></label><input className="form-control" type="text" placeholder={admin.pseudo} name="username" onChange={(event)=>setNewPseudo(event.target.value)}/></div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="form-row">
                                                <div className="col">
                                                        <div className="form-group"><label htmlFor="email"><strong>Email </strong></label><input className="form-control" type="email" placeholder={admin.email} name="email" onChange={(event)=>setNewEmail(event.target.value)}/></div>
                                                    </div>
                                                </div>
                                                <div className="form-group"><button className="btn btn-primary btn-sm" type="button" onClick={updateProfile} >enregistrer</button></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow mb-5">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">modifie mot de passe</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <form>
                                    { data && <div className='alert alert-danger' > remplir tout les champs </div>}  

                                        <div className="col-6">
                                            <div className="form-group"><label htmlFor="first_name"><strong> Saisaire votre mot de passe</strong></label>
                                            <input className="form-control" type="text"  name="first_name" onChange={(event)=>setpassword(event.target.value)}  /></div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-group"><label htmlFor="last_name"><strong> nouveaux mot de passe </strong></label>
                                            <input className="form-control" type="text"  name="last_name" onChange={(event)=>setNewPasword(event.target.value)}  /></div>
                                        </div>
                                        <div>
                    { unupdate && <div className='alert alert-warning' > votre mot de passe est incorrect </div>}  
                    { update && <div className='alert alert-success' > mot de passe  est modifier </div>}
                    </div>
                                        <div className="form-group"><button className="btn btn-primary btn-sm" onClick={modufyPaswordAdmin} type="button">Save Settings</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )   
}