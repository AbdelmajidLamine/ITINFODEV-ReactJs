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

function CardProductList(props) {
  //
  const [unsaved, setUnsaved] = useState(false)
  const [saved, setSaved] = useState(false)

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

  useEffect(() => {
    //ProductsService.allProducts().then(res=>(setProducts(res.data)));

    ProductsService.getProduitByCategorie(props).then(res => (setProducts(res.data)));
    if (activeproductGrid == 1) {
      setProductList(false)
      setProductGrid(true)
    }
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



  const AddtoCart = (product) => {
    
    setIdProduit(product.id)
  
    if (idNewpanier == null) {
     
      PanierService.newPanier().then(
        res => {
          alert("dd"+res.data.idPanier);
          sessionStorage.setItem("newPanier",res.data.idPanier)
          alert("eeeeeeeeee"+idNewpanier);
        }
      )
    
    }
    // alert("cccccc"+product.id+"dd"+idNewpanier);
    PanierService.addComposantPanier(formData)
      .then(() => {
        alert("cccccc"+product.id+"dd"+idNewpanier);
        setUnsaved(false); setSaved(true);

        //   registerSuccessfulLoging(product.price + priTotal);
        // sessionStorage.setItem('aut',d);
      }
      )
      .catch(() => {
        alert("hhhhhh"); setUnsaved(true); setSaved(false) })

  }

  // const  AddtoCart =(product)=>{


  //   sessionStorage.setItem('aut',d)

  //    setIdProduit(product.id)


  //   //  PanierService.newPanier().then(res=>(setPanier(res.data)),
  //   //  sessionStorage.setItem('newPanier',panier.idPanier)
  //   //  )

  //     PanierService.addComposantPanier(formData)
  //     .then(()=>{setUnsaved(false); setSaved(true);

  //      //setR( product.price);
  //     // setPriTotal(  (product.price + priTotal));

  //       registerSuccessfulLoging(product.price + priTotal);
  //       sessionStorage.setItem('aut',d)

  //     }
  //     )
  //     .catch(()=>{setUnsaved(true); setSaved(false)})
  //   }
  // let data = new Map();
  // // data.set("some_key", "some value");
  //  data.set(1,[2,37],[4,32]);
  //  data.set(2,6,7);
  //  data.set(3,28,9);
  //  sessionStorage.setItem('aut',data)

  //  let r = new Map();

  //  r.set(data)

  return (

    <div className=" container card " data-spy="scroll" >
      {productList &&
        <div className="row align-items-start">
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
                          <span className="font-weight-bold h5">${product.price}</span>
                          {product.originPrice > 0 && (
                            <del className="small text-muted ml-2">
                              ${product.originPrice}
                            </del>
                          )}
                          {(product.discountPercentage > 0 || product.discountPrice > 0) && (
                            <span className={`rounded p-1 bg-warning ml-2 small`}>
                              -
                              {product.discountPercentage > 0
                                ? product.discountPercentage + "%"
                                : "$" + product.discountPrice}
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

                            className="btn btn-sm btn-primary"
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
                <div className="col-md-4" key={product.id}>

                  <div  >


                    <img src={product.image} className="card-img-top" alt="..." />
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

                        <span className="font-weight-bold h5">${product.price}</span>
                        {product.originPrice > 0 && (
                          <del className="small text-muted ml-2">${product.originPrice}</del>
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
                  </div>

                </div>
            )}
        </div>
      }


    </div>


  );
};

export default CardProductList;
