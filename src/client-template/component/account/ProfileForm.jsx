

import React,{useEffect, useState} from "react";

import AccountService from "./AccountService";
import axios from 'axios'

const ProfileForm = (props) => {

  const [client,setClient]=useState([])
  const [update,setUpdate]= useState(false)
     const [unupdate,setUnupdate]= useState(false)
     const [profilup,setProfilup]=useState(false)
     const [profilnot,setProfilnot]=useState(false)
     const[data,setdata]=useState(false)
     const[newPasword,setNewPasword]=useState('')
     const[password,setpassword]= useState('')
     const[image,setImage]=useState('')
     const[newName,setNewName]=useState('')
     const[newEmail,setNewEmail]=useState('')
     const[newAddress,setNewAddress]=useState('')
     const[newNumber,setNewNumber]=useState('')
  useEffect (()=>{
    AccountService.getClient(props).then((response) =>setClient(response.data) );
  },[]);
  const profilData= new FormData();

        profilData.append( "id",client.idClient);
        profilData.append("image" ,image);
        profilData.append("name",newName);
        profilData.append("email",newEmail);
        profilData.append("address",newAddress);
        profilData.append("tel",newNumber);

  const formData= new FormData();

  formData.append( "id",client.idClient);
  formData.append("newPassword" ,newPasword);
  formData.append("password",password);

  const modufyPaswordClient=()=>{
    if(password && newPasword)
    {
    axios.put(`http://localhost:8080/modifypasswordClient` ,formData)
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
       if(image || newEmail || newName || newAddress || newNumber){
                axios.post(`http://localhost:8080/updateProfilClient` ,profilData)
                .then((res)=>{setProfilnot(false); setProfilup(true);setdata(false)})
                .catch((res)=>{setProfilnot(true);  setProfilup(false);setdata(false)})
       }
}




  
 return(

  <div>
   <h3 className="text-dark mb-4">Profile  </h3>
                    <span class="text-secondary">Dashboard <i class="fa fa-angle-right"></i> Profile</span>
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={client.image ? "data:image/png;base64,"+client.image : "/assets/img/admins/avatar4.jpeg"} width="160" height="160" alt="gg"/>
                                    <div className="mb-3"> <label>Photos: </label>
                                <input type="file" name="image" accept="image/png, image/jpeg"  onChange={event=>setImage(event.target.files[0])}/></div>
                                </div>
                            </div>
                         
                        </div>
      <div className="col-lg-8">
         
          <div className="row">
              <div className="col">
                  <div className="card shadow mb-3">
                      <div className="card-header py-3">
                          <p className="text-primary m-0 font-weight-bold">User Settings</p>
                      </div>
                       
                      <div className="card-body">
                      { profilnot && <div className='alert alert-warning' > votre donnees sont incorrect</div>}  
                    { profilup && <div className='alert alert-success' > votre donnees sont modifier </div>}
                          <form>
                              <div className="form-row">
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="username"><strong>Name</strong></label><input className="form-control" type="text" placeholder={client.name} defaultValue={client.name} name="username" onChange={(event)=>setNewName(event.target.value)} /></div>
                                  </div>
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="email"><strong>Email </strong></label><input className="form-control" type="email" placeholder={client.email} defaultValue={client.email} name="email" onChange={(event)=>setNewEmail(event.target.value)} /></div>
                                  </div>
                              </div>
                              <div className="form-row">
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="first_name"><strong>Address</strong></label><input className="form-control" type="text" placeholder={client.addresse} defaultValue={client.addresse}  onChange={(event)=>setNewAddress(event.target.value)}  /></div>
                                  </div>
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="last_name"><strong>telephone</strong></label><input className="form-control" type="text" placeholder={client.tel} defaultValue={client.tel} onChange={(event)=>setNewNumber(event.target.value)}/></div>
                                  </div>
                              </div>
                              <div className="form-group"><button className="btn btn-primary btn-sm" type="button" onClick={updateProfile}>Save Settings</button></div>
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
                                        <div className="form-group"><button className="btn btn-primary btn-sm" onClick={modufyPaswordClient} type="button">Save Settings</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
</div>
 );

};

export default ProfileForm;
