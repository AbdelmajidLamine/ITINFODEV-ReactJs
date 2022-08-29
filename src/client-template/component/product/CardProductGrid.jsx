import React from "react";

import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import ProductsService from "./ProductsService";
import PanierService from './PanierService';
import $ from 'jquery';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';



import PropTypes from "prop-types";
const CardProductGrid = (categorie) => {
  const t = sessionStorage.getItem('authenticatedPrixTotal')
  const [unsaved, setUnsaved] = useState(false)
  const [saved, setSaved] = useState()
 
  const idNewpanier = sessionStorage.getItem('newPanier');

  const [idPanier, setIdPanier] = useState(Number(idNewpanier))
  const [idProduit, setIdProduit] = useState(0)
  const [quantite, setQuantite] = useState(1)
  const [prix, setPrix] = useState(0);
  
  const formData = new FormData();
  formData.append("idPanier", idPanier);
  formData.append("idProduit", idProduit);
  formData.append("quantite", quantite);


  
  
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([])
  
  let localCart = localStorage.getItem("cart");

// getting back the object
   

  useEffect(() => {
    ProductsService.getProduitByCategorie(categorie).then(res => (setProducts(res.data)));
    // ProductsService.getProduitByCategorie(categor).then(res => (setProducts(res.data)))
    //turn it into js
    if(localCart) {
      if(localCart.length>1) localCart = JSON.parse(localCart);
    }
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart)
  }, []);


  // const AddtoCart = (product) => {

  //   setCartObj(JSON.parse(localStorage.getItem("cart")));

  //  if(idNewpanier==null)
  //         { 
  //           PanierService.newPanier().then(
  //             res =>{sessionStorage.setItem('newPanier',res.data.idPanier)}
  //           )
  //         }
  //     PanierService.addComposantPanier(formData)
  //       .then(() => {
  //         setUnsaved(false); setSaved(true);

  //      //   registerSuccessfulLoging(product.price + priTotal);
  //        // sessionStorage.setItem('aut',d);
  //       }
  //       )
  //       .catch(() => { setUnsaved(true); setSaved(false) })    
  // }
  $('.alertify_success_top').on('click', function() {
    alertify.set('notifier','position', 'top-right');
    alertify.success('Added to cart.').dismissOthers(); 
});

$('.alertify_error_top').on('click', function() {
    alertify.set('notifier','position', 'top-right');
    alertify.error('Already exist!!.').dismissOthers();
});

  
const addItem = (product) => {

 
  
  //create a copy of our cart state, avoid overwritting existing state
  let cartCopy = [...cart];
  
  //assuming we have an ID field in our item

  
  //look for item in cart array
  let existingItem = cartCopy.find(cartItem => cartItem.id == product.id);
  
  //if item already exists
  if (existingItem) {
      console.log('exist') //update item
  } else { //if item doesn't exist, simply add it
    cartCopy.push(product)
    setSaved(product.id);

  }
  
  //update app state
  setCart(cartCopy)
  
  //make cart a string and store in local space
  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart)
  
}


  return (
    <div>
            <div class="d-lg-flex d-sm-none flex-lg-row col-md g-4">

{
  products.map(
    (product,index) =>
     (index<4 ?
      <div key={product.id} class="col  p-3">
        <div key={product.id}  class="card ">
        <img  className="blob-to-image" src={"data:image/png;base64,"+product.image} alt='product img' height={300} width={300}  />
                                
          
          <div class="card-body">
            <h6 class="card-title" style={{ height: "20px" }}>{product.name}</h6>
            <p class="card-text">

            </p>
          </div>
          <div class="card-footer ">
        
              <div class="d-flex justify-content-between">
              <span className="font-weight-bold h8"> <a className="text-danger"> €</a> {product.price}</span>
                <div>
             <button
              type="button"
              className={(cart.find(cartItem => cartItem.id == product.id)) ? "btn btn-danger alertify_error_top":"btn btn-danger alertify_success_top"}
              title="Add to cart"
              onClick={
                () => addItem(product)
              }

            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
                </div>
              </div>
            {/* {saved && <div className='alert alert-success' > product was added </div>} */}

            </div>

       
        </div>
      </div>
      :null)
  )}




           </div>
           <div class="d-lg-none d-sm-grid g-4">
            
           <div class="d-sm-flex flex-sm-row col-md g-4">
{
  products.map(
    (product,index) =>
     ((index<4 && index%2==0) ?
      <div key={product.id} class="col-sm-6  p-3">
        <div key={product.id}  class="card ">
        <img  className="blob-to-image" src={"data:image/png;base64,"+product.image} alt='product img' height={250} width={250}  />
                                
          
          <div class="card-body">
            <h6 class="card-title" style={{ height: "20px" }}>{product.name}</h6>
            <p class="card-text">

            </p>
          </div>
          <div class="card-footer ">
        
              <div class="d-flex justify-content-between">
              <span className="font-weight-bold h8"> <a className="text-danger"> €</a> {product.price}</span>
                <div>
             <button
              type="button"
              className={(cart.find(cartItem => cartItem.id == product.id)) ? "btn btn-danger alertify_error_top":"btn btn-danger alertify_success_top"}

              title="Add to cart"
              onClick={
                () => addItem(product)
              }

            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
                </div>
              </div>
            {/* {saved && <div className='alert alert-success' > product was added </div>} */}

            </div>

       
        </div>
      </div>
      :null)
  )}
          </div>
          <div class="d-sm-flex flex-sm-row col-md g-4">
{
  products.map(
    (product,index) =>
     ((index<4 && index%2!=0) ?
      <div key={product.id} class="col-sm-6  p-3">
        <div key={product.id}  class="card ">
        <img  className="blob-to-image" src={"data:image/png;base64,"+product.image} alt='product img' height={250} width={250}  />
                                
          
          <div class="card-body">
            <h6 class="card-title" style={{ height: "20px" }}>{product.name}</h6>
            <p class="card-text">

            </p>
          </div>
          <div class="card-footer ">
        
              <div class="d-flex justify-content-between">
              <span className="font-weight-bold h8"> <a className="text-danger"> €</a> {product.price}</span>
                <div>
             <button
              type="button"
              className={(cart.find(cartItem => cartItem.id == product.id)) ? "btn btn-danger alertify_error_top":"btn btn-danger alertify_success_top"}
              title="Add to cart"
              onClick={
                () => addItem(product)
              }

            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
                </div>
              </div>
            {/* {saved && <div className='alert alert-success' > product was added </div>} */}

            </div>

       
        </div>
      </div>
      :null)
  )}
          </div>


</div>
    </div>

   
  );
};

export default CardProductGrid;
