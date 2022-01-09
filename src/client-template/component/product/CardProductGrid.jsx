import React from "react";

import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import ProductsService from "./ProductsService";
import PanierService from './PanierService';



import PropTypes from "prop-types";
const CardProductGrid = (categorie) => {
  const t = sessionStorage.getItem('authenticatedPrixTotal')
  const [unsaved, setUnsaved] = useState(false)
  const [saved, setSaved] = useState(false)
 
  const idNewpanier = sessionStorage.getItem('newPanier');

  const [idPanier, setIdPanier] = useState(Number(idNewpanier))
  const [idProduit, setIdProduit] = useState(0)
  const [quantite, setQuantite] = useState(1)
  const [prix, setPrix] = useState(0);
  
  const formData = new FormData();
  formData.append("idPanier", idPanier);
  formData.append("idProduit", idProduit);
  formData.append("quantite", quantite);


  let categor = sessionStorage.getItem('categorie');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductsService.getProduitByCategorie(categorie).then(res => (setProducts(res.data)));
    // ProductsService.getProduitByCategorie(categor).then(res => (setProducts(res.data)))
  }, []);


  const AddtoCart = (product) => {

    setIdProduit(product.id)
   if(idNewpanier==null)
{ 
  PanierService.newPanier().then(
    res =>{sessionStorage.setItem('newPanier',res.data.idPanier)}
  )
   

}
      PanierService.addComposantPanier(formData)
        .then(() => {
          setUnsaved(false); setSaved(true);

       //   registerSuccessfulLoging(product.price + priTotal);
         // sessionStorage.setItem('aut',d);
        }
        )
        .catch(() => { setUnsaved(true); setSaved(false) })
    
  }


  return (

    <div class="row  row-cols-md-4 g-4">

      {
        products.map(
          product =>

            <div key={product.id} class="col  p-3">
              <div key={product.id}  class="card ">
              <img  className="blob-to-image" src={"data:image/png;base64,"+product.image} alt='product img' />
                                      
                
                <div class="card-body">
                  <h6 class="card-title" style={{ height: "20px" }}>{product.name}</h6>
                  <p class="card-text">

                  </p>
                </div>
                <div class="card-footer ">
              
                    <div class="d-flex justify-content-between">
                    <span className="font-weight-bold h8"> <a className="text-danger"> $</a> {product.price}</span>
                      <div>
                   <button
                    type="button"
                    className="btn   btn-danger "
                    title="Add to cart"
                    onClick={
                      () => AddtoCart(product)
                    }

                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>
                      </div>
                    </div>

                  </div>

             
              </div>
            </div>
        )}
 <div style={{  height: "100px" }} />

     

      {/* 
              <div className=" card-body  p-4"  >

                  <div className="card-img-center">
                <img src={product.image} alt="..." />
                </div>
                {product.isNew && (
                  <span className="badge bg-success  mt-2 ml-1">
                    New
                  </span>
                )}
                {product.isHot && (
                  <span className="badge bg-danger position-absolute r-0 mt-2 mr-2">
                    Hot
                  </span>
                )}
                {(product.discountPercentage > 0 || product.discountPrice > 0) && (
                  <span
                    className={`rounded position-absolute p-2 bg-warning  ml-2 small ${product.isNew ? "mt-5" : "mt-2"
                      }`}
                  >
                    -
                    {product.discountPercentage > 0
                      ? product.discountPercentage + "%"
                      : "$" + product.discountPrice}
                  </span>
                )}
                <div className="card-body text-start">
                  <h6 className="card-title mb-5 text-orange-400 " style={{ height: "20px" }}  >
                   
                      {product.name}
                   

                  </h6>

                  <div className="my-2">

                    <span className="font-weight-bold h5">${product.price}</span>
                    {product.originPrice > 0 && (
                      <del className="small text-muted ml-2">${product.originPrice}</del>
                    )}
                    <span className="ml-4">
                      {Array.from({ length: product.star }, (_, key) => (
                        <IconStarFill className="text-warning mr-1" key={key} />
                      ))}
                    </span>
                  </div>
                  <div className="btn-group btn-block" role="group">
                    <button
                      type="button"
                      className="btn btn-sm  btn-danger"
                      title="Add to cart"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      title="Add to wishlist"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div> */}



    </div>
  );
};

export default CardProductGrid;
