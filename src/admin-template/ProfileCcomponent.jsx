import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ProfileComponent() {

     const [update,setUpdate]= useState(false)
     const [unupdate,setUnpdate]= useState(false)
     const[data,setdata]=useState(false)
     const idAdmin=sessionStorage.getItem('authentIdAdmin')
     const[newPasword,setNewPasword]=useState('')
     const[password,setpassword]= useState('')
     const[admin,setAdmin]=useState([]);
   const formData= new FormData();

   formData.append( "idadmin",idAdmin);
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
            .then(()=>{setUnpdate(false); setUpdate(true);setdata(false)})
            .catch(()=>{setUnpdate(true);  setUpdate(false);setdata(false)})
           
        }
        else 
       { setdata(true),
        setUnpdate(false)
    }
    }

    return (
        <div>
                    <h3 className="text-dark mb-4">Profile  </h3>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src="/assets/img/admins/avatar4.jpeg" width="160" height="160" alt="gg"/>
                                    <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                </div>
                            </div>
                            {/* <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="text-primary font-weight-bold m-0">Projects</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">Server migration<span className="float-right">20%</span></h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}><span className="sr-only">20%</span></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Sales tracking<span className="float-right">40%</span></h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="sr-only">40%</span></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Customer Database<span className="float-right">60%</span></h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span className="sr-only">60%</span></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Payout Details<span className="float-right">80%</span></h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span className="sr-only">80%</span></div>
                                    </div>
                                    <h4 className="small font-weight-bold">Account setup<span className="float-right">Complete!</span></h4>
                                    <div className="progress progress-sm mb-3">
                                        <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}><span className="sr-only">100%</span></div>
                                    </div>
                                </div>
                            </div> */}
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
                                                        <div className="form-group"><label htmlFor="username"><strong>Nom et Prenom</strong></label><input className="form-control" type="text" placeholder={admin.pseudo} name="username"/></div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="form-row">
                                                <div className="col">
                                                        <div className="form-group"><label htmlFor="email"><strong>Email </strong></label><input className="form-control" type="email" placeholder={admin.email} name="email"/></div>
                                                    </div>
                                                </div>
                                                <div className="form-group"><button className="btn btn-primary btn-sm" type="button">enregistrer</button></div>
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