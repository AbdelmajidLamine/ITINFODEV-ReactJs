import React from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductsService from "./ProductsService";
import HashMap from "hashmap";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCardFooter, MDBTooltip, MDBCardTitle,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn
} from "mdbreact";

import PanierService from './PanierService';
import { number } from "../account/validation";
import $ from 'jquery';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function CardProductList(props) {
  //
  const [unsaved, setUnsaved] = useState(false)
  const [saved, setSaved] = useState()

  const idNewpanier = sessionStorage.getItem("newPanier");

  const [idPanier, setIdPanier] = useState(Number(idNewpanier))
  const [idProduit, setIdProduit] = useState(0)
  const [quantite, setQuantite] = useState(1)
  const [prix, setPrix] = useState(0);
 
  const activeproductGrid = sessionStorage.getItem('activeproductGrid');


  const [productGrid, setProductGrid] = useState(false);

  const [productList, setProductList] = useState(true);

  // if (activeproductGrid!=null){
  //   setProductList(false)
  //   setProductGrid(true)
  //  }

  const formData = new FormData();
  formData.append("idPanier", idPanier);
  formData.append("idProduit", idProduit);
  formData.append("quantite", quantite);




  const saveCompsantPanier = () => {
    PanierService.addComposantPanier(formData)
      .then(() => { setUnsaved(false); setSaved(true) })
      .catch(() => { setUnsaved(true); setSaved(false) })
  }


  //
  const [products, setProducts] = useState([]);
  const [nomCategorie, setNomCategorie] = useState("Abats")
  let localCart = localStorage.getItem("cart");
  useEffect(() => {
    //ProductsService.allProducts().then(res=>(setProducts(res.data)));

    ProductsService.getProduitByCategorie(props).then(res => (setProducts(res.data)));
    if (activeproductGrid == 1) {
      setProductList(false)
      setProductGrid(true)
    }

    if(localCart) {
      if(localCart.length>1) localCart = JSON.parse(localCart);
    }
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart)
  }, []);

  const [details, setDetails] = useState(false);

  const [product, setProduct] = useState([4]);
  const history = useHistory();

  const registerSuccessfulLoging = (fr) => {
    if (fr) {
      sessionStorage.setItem('authenticatedPrixTotal', fr)
      // sessionStorage.setItem('authenticatedcomposentPanie',composentPanie )
      // history.push('/adminMain')
    }

  }

  const t = sessionStorage.getItem('authenticatedPrixTotal')


  const [priTotal, setPriTotal] = useState(Number(t))
  const [panier, setPanier] = useState([])
  let [cart, setCart] = useState([])



  const AddtoCart = (product) => {
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

  $('.alertify_success_top').on('click', function() {
    alertify.set('notifier','position', 'top-right');
    alertify.success('Added to cart.').dismissOthers(); 
});

$('.alertify_error_top').on('click', function() {
    alertify.set('notifier','position', 'top-right');
    alertify.error('Already exist!!.').dismissOthers();
});

  return (

    <div className=" container card " data-spy="scroll" >
      {productList &&
        <div className="row align-items-start" style={{width:"1300px"}}>
          <div style={{ width: "50px" }} >

          </div>
          <div className="col">



            <div style={{ height: "20px" }} ></div>

            {

              products.map(
                product =>
                  <div className="row" key={product.id}

                  >

                    <div className="col-md-2 text-center">
                      <MDBCardImage cascade top src={"data:image/png;base64," + product.image}
                        alt="abats photo" />
                      <br></br>
                    
                    </div>

                    <div className="col-md-4" >
                      <div className="card-body">
                        <h6 className="card-subtitle mr-2 d-inline">
                          <Link to={product.link} className="text-decoration-none">
                            {product.name}
                          </Link>
                        </h6>
                        {product.isNew && (
                          <span className="badge bg-success mr-2">New</span>
                        )}
                        {product.isHot && <span className="badge bg-danger mr-2">Hot</span>}

                        <div>
                          {product.star > 0 &&
                            Array.from({ length: 5 }, (_, key) => {
                              if (key <= product.star)
                                return (
                                  <IconStarFill className="text-warning mr-1" key={key} />
                                );
                              else
                                return (
                                  <IconStarFill className="text-secondary mr-1" key={key} />
                                );
                            })}
                        </div>
                        {product.description &&
                          product.description.includes("|") === false && (
                            <p className="small mt-2">{product.description}</p>
                          )}
                        {product.description && product.description.includes("|") && (
                          <ul className="mt-2">
                            {product.description.split("|").map((desc, idx) => (
                              <li key={idx}>{desc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card-body">
                        <div className="mb-2">
                          <span className="font-weight-bold h5">€ {product.price}</span>
                          {product.originPrice > 0 && (
                            <del className="small text-muted ml-2">
                              € {product.originPrice}
                            </del>
                          )}
                          {(product.discountPercentage > 0 || product.discountPrice > 0) && (
                            <span className={`rounded p-1 bg-warning ml-2 small`}>
                              -
                              {product.discountPercentage > 0
                                ? product.discountPercentage + "%"
                                : "€" + product.discountPrice}
                            </span>
                          )}
                        </div>
                        {product.isFreeShipping && (
                          <p className="text-success small mb-2">
                            <IconTruckFill /> Free shipping
                          </p>
                        )}

                        <div className="btn-group btn-block" role="group">

                          <button
                              className={(cart.find(cartItem => cartItem.id == product.id)) ? "btn btn-danger alertify_error_top":"btn btn-danger alertify_success_top"}
                            title="Add to cart"

                            onClick={
                              () => AddtoCart(product)
                            }


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
                    </div>
                    
                  </div>
                  
              )}
          </div>
        </div>
      }

      {// productGrid
      }
      <div style={{ height: "40px" }} > </div>
      {productGrid &&

        <div className="row g-3">

          {
            products.map(
              product =>
                <div className="col-md-4" key={product.id} style={{width:"100%"}}>

                  <div  >


                    <img src={"data:image/png;base64,"+product.image} className="card-img-top" alt="..."  height={300} width={200}/>
                    {product.isNew && (
                      <span className="badge bg-success position-absolute mt-2 ml-2">
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
                    <div className="card-body">
                      <h6 className="card-subtitle mb-4 " style={{ height: "18px" }}  >
                        <Link to={product.link} className="text-decoration-none">
                          {product.name}
                        </Link>

                      </h6>

                      <div className="my-2">

                        <span className="font-weight-bold h5">€ {product.price}</span>
                        {product.originPrice > 0 && (
                          <del className="small text-muted ml-2">€ {product.originPrice}</del>
                        )}
                        <span className="ml-2">
                          {Array.from({ length: product.star }, (_, key) => (
                            <IconStarFill className="text-warning mr-1" key={key} />
                          ))}
                        </span>
                      </div>
                      <div className="btn-group btn-block" role="group">
                        <button
                          type="button"
                          className={(cart.find(cartItem => cartItem.id == product.id)) ? "btn btn-danger alertify_error_top":"btn btn-danger alertify_success_top"}
                          title="Add to cart"
                          onClick={
                            () => AddtoCart(product)
                          }
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
                  </div>

                </div>
            )}
        </div>
      }


    </div>


  );
};

export default CardProductList;
