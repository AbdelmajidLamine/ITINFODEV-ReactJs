

import React,{useEffect, useState} from "react";

import AccountService from "./AccountService";

const ProfileForm = (props) => {


  const [client,setClient]=useState([])

  useEffect (()=>{
    AccountService.getClient(props).then((response) =>setClient(response.data) );
  },[]);




  
 return(

  <div>
  <h3 className="text-dark mb-4">Profile</h3>
  <div className="row mb-3">
      <div className="col-lg-4">
          <div className="card mb-3">
              <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src="/assets/img/admins/avatar4.jpeg" width="160" height="160" alt="gg"/>
                  <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
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
                          <form>
                              <div className="form-row">
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="username"><strong>Name</strong></label><input className="form-control" type="text" placeholder={client.name} name="username" /></div>
                                  </div>
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="email"><strong>Email </strong></label><input className="form-control" type="email" placeholder={client.email} name="email"/></div>
                                  </div>
                              </div>
                              <div className="form-row">
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="first_name"><strong>Address</strong></label><input className="form-control" type="text" placeholder={client.addresse} /></div>
                                  </div>
                                  <div className="col">
                                      <div className="form-group"><label htmlFor="last_name"><strong>telephone</strong></label><input className="form-control" type="text" placeholder={client.tel} /></div>
                                  </div>
                              </div>
                              <div className="form-group"><button className="btn btn-primary btn-sm" type="button">Save Settings</button></div>
                          </form>
                      </div>
                       
                  
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="card shadow mb-5">
      <div className="card-header py-3">
          <p className="text-primary m-0 font-weight-bold">Password Settings</p>
      </div>
      <div className="card-body">
          <div className="row">
              <div className="col-md-6">
                  <form>
                      <div className="col-6">
                          <div className="form-group"><label htmlFor="first_name"><strong>curent password</strong></label><input className="form-control" type="text"  name="first_name"/></div>
                      </div>
                      <div className="col-6">
                          <div className="form-group"><label htmlFor="last_name"><strong>the new password</strong></label><input className="form-control" type="text"  name="last_name"/></div>
                      </div>
                      <div className="form-group"><button className="btn btn-primary btn-sm" type="button">Save Settings</button></div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
 );

};

export default ProfileForm;
