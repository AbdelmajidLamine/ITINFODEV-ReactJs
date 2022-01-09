import React, {FC, useEffect, useState } from "react";
import {Route, useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import "./MenuStyle.css";

function  Menu (){
    
    const categorie =(props)=>{

    sessionStorage.setItem('categorie',props)
   

}
 

    return (
        
        <div className="container-fluid d-flex flex-column p-0">
           
            <nav id="sidebar">
           
                <div className="sidebar-header">
                    <h3>Categories </h3>
                </div>
                
                <ul className="list-unstyled components">
                
               
                    <li className="active mb-0" onClick={()=>categorie('Abats')}>
                    <Link to={"/product/abats"}><span className="nav-link pl-5 pr-5"><h7>Abats</h7></span></Link>
                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Charcuterie')}>
                    <Link to={"/product/charcuterie"}><span className="nav-link pl-5 pr-5"><h7>Charcuterie</h7></span></Link>
                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Agneau')}>
                    
                    <Link to={"/product/agneau"}><span className="nav-link pl-5 pr-5"><h7>L'agneau</h7></span></Link>
                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Preparations')}>
                    <Link to={"/product/preparations"}><span className="nav-link pl-5 pr-5"><h7>Preparations</h7></span></Link>

                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Le Bouef')}>
                    <Link to={"/product/bouef"}><span className="nav-link pl-5 pr-5"><h7>Le Bouef</h7></span></Link>
                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Le Veau')}>
                    <Link to={"/product/veau"}><span className="nav-link pl-5 pr-5"><h7>Le Veau</h7></span></Link>
                    </li>
                    
                    <li className="active mb-0" onClick={()=>categorie('Volaille')}>
                    <Link to={"/product/volaille"}><span className="nav-link pl-5 pr-5"><h7>Le Volaille</h7></span></Link>
                    </li>
                </ul>
            </nav>
            <Route exact component={() =>
                
                <div>  </div>}/>
          </div>
    );
};

export default Menu;
