import React from "react";
import  { useEffect, useState } from 'react';
import AdminMain from "./admin-template/AdminMain";

import LoginComponent from './login/LoginComponent';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import ForgotPassword from "./login/ForgotPassword";
import Hom from "./client-template/page/Hom";
import ProductsComponenet from "./client-template/component/product/CategorieProductsComponent";
import Product from './client-template/page/Product';
import CardProductList from "./client-template/component/product/CardProductList";
import CardProductGrid from "./client-template/component/product/CardProductGrid";
import   SignInForm  from "./client-template/component/account/SignInForm" ;
import SingUpForm from "./client-template/component/account/SignUpForm" ;
import Cart  from  "./client-template/component/Cart/cart";
import PanierComposant from "./client-template/component/Cart/PanierComposant";
import Chekout from "./client-template/component/Cart/chekout";
import success from "./client-template/component/Cart/success";
import cancel from "./client-template/component/Cart/cancel";
import Account from "./client-template/component/account/account" ;
import Contact from "./client-template/page/Contact";
import VerifieCodePin from './login/VerifieCodePin';
import CategorieComponenet from "./client-template/component/product/CategorieProductsComponent";
import Slide from "./client-template/component/Slide";
import test from "./client-template/component/Cart/PanierComposant";
import Search from "./client-template/component/product/Search";
function App() {
  //const username = sessionStorage.getItem('authenticatedUser');
  const [nomCategorie, setNomCategorie ] = useState("Abats")
  const [idClient, setIdClient] = useState(0);
  const tr ='Abats'

  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path = "/admin"  component= {LoginComponent}/>
              <Route path= "/adminMain" component = {AdminMain}/>
              <Route path = "/forgot-password" component = {ForgotPassword} />  
              <Route path = "/home" component = {Hom} />    
              {/* <Route path = "/" component = {Hom} />    */}
              <Route path = "/product" component = {Product} />  
              <Route path = "/product/productlist" component = {()=>CardProductList(tr)} />  
              <Route path = "/productlistgrid" component = {CardProductGrid} />  
              <Route path = "/SignIn" component = {SignInForm} />  
              <Route path = "/SignUp" component = {SingUpForm} />         
              <Route path = "/cart" component = {test} />  
              <Route path = "/Chekout" component = {Chekout} /> 
              <Route path = "/pay/success" component = {success} />  
              <Route path = "/pay/cancel" component = {cancel} />  
              <Route path = "/User" component = {Account} />
              <Route path = "/contact" component = {Contact} />
              <Route path = "/verifieCodePin" component = {VerifieCodePin} />
              <Route path = "/Search" component={() => Search('ab')} />
              {/* <Route path = "/Categorie" component = {()=>CategorieComponenet(tr)} /> */}

{/*                
categorie */  }
              <Route path="/categorie/Abats" component={() => CategorieComponenet('Abats')} />
              <Route path="/categorie/charcuterie" component={() => CategorieComponenet('Charcuterie')} />
              <Route path="/categorie/bouef" component={() => CategorieComponenet('Le Bouef')} />
              <Route path="/categorie/agneau" component={() => CategorieComponenet('Agneau')} />
              <Route path="/categorie/preparations" component={() => CategorieComponenet('Preparations')} />
              <Route path="/categorie/veau" component={() => CategorieComponenet('Le Veau')} />
              <Route path="/categorie/volaille" component={() => CategorieComponenet('Volaille')} />
              {/* <Route path="/chercher" component={() => CategorieComponenet('Volaille')} /> */}


          </Switch>
      </Router>
    </div>
  );
}

export default App;
