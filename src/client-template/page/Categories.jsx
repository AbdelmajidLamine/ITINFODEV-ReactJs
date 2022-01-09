import React from "react";
import {  Route, Switch,BrowserRouter as Router  } from 'react-router-dom';
import CategorieComponenet from "./client-template/component/product/CategorieProductsComponent";

export default function Categories() {

    return(

  <Router>

    <Switch>
        {/* <Route path = "/abats" component = {()=>CardProductList('Abats')} />   */}
     
        <Route path="/categorie/Abats" component={() => CategorieComponenet('Abats')} />
        <Route path="/categorie/charcuterie" component={() => CategorieComponenet('Charcuterie')} />
        <Route path="/categorie/bouef" component={() => CategorieComponenet('Le Bouef')} />
        <Route path="/categorie/agneau" component={() => CategorieComponenet('Agneau')} />
        <Route path="/categorie/preparations" component={() => CategorieComponenet('Preparations')} />
        <Route path="/categorie/veau" component={() => CategorieComponenet('Le Veau')} />
        <Route path="/categorie/volaille" component={() => CategorieComponenet('Volaille')} />

        <Route path="" />
    </Switch>
   </Router>
    )
    
}