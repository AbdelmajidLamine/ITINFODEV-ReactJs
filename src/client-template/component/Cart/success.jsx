import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";


export default function success() {
    return(
        <div>
            <NavBar />
               <div className="container">
            <div className="row">
                <div className="col">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                        <h1 className="text-success">Payment Success</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link rel="stylesheet" to="/user/commands" >Dashboard</Link>
                </div>
            </div>
           
            
        </div>
        <Footer/>
        </div>
    )

     
    
}