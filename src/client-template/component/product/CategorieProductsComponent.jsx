import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductsService from "./ProductsService";
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';
import PanierService from './PanierService';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { MDBRow, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCardImage, MDBMask, MDBContainer, MDBCard } from
    "mdbreact";
import { colors } from '@material-ui/core';



export default function CategorieComponenet(props) {

    const [unsaved, setUnsaved] = useState(false)

    const [idPanier, setIdPanier] = useState(1)
    const [idProduit, setIdProduit] = useState(1)
    const [quantite, setQuantite] = useState(1)



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
    let [cart, setCart] = useState([])
    const [saved, setSaved] = useState()
    const [nomCategorie, setNomCategorie] = useState(props)
    let localCart = localStorage.getItem("cart");
    useEffect(() => {
        //ProductsService.allProducts().then(res=>(setProducts(res.data)));

        ProductsService.getProduitByCategorie(props).then(res => (setProducts(res.data)));

        if(localCart) {
            if(localCart.length>1) localCart = JSON.parse(localCart);
          }
          //load persisted cart into state if it exists
          if (localCart) setCart(localCart)
    }, []);

    const [details, setDetails] = useState(false);
    const [product, setProduct] = useState([4]);

    const hideDetails = () => {
        setDetails(false);
    }

    const showDetails = (product) => {

        setProduct(product)
        setDetails(true);
    }


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
    return (
        <div className="card shadow">
            <div className="w-100 fixed" >
                < NavBar />
            </div>
            <div style={{ height: "70px" }} ></div>
            <div class="bg-image d-flex justify-content-center align-items-center" style=
                {{
                    backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
                    height: "300px"
                }}
            >
                <div class="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>


                    <h1 style={{ width: "rem", height: "50px" }}>

                        <strong class="text-white mb-0" >
                            Categorie   {nomCategorie}</strong>
                    </h1>
                </div>

            </div>

            <h1 />
            <h4 />
            <Breadcrumbs className=" my-3 nav justify-content-center">
                <nav aria-label="breadcrumb">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/Home" > Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">/</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled"  >{nomCategorie}</a>
                        </li>

                    </ul>
                </nav>

            </Breadcrumbs>





            <div id="wrapper">
                <di className="w-20 " style={{ width: "190px" }}></di>
                <h2 className="my-3 h2 text-center">
                    <strong>  {props} </strong>
                </h2>
            </div>
            <h2></h2>
            <div id="wrapper">

                <div className="w-20 " style={{ width: "800px" }}></div>



                <div className="row g-3">

                    {
                        products.map(
                            product =>
                                <div className="col-md-3" key={product.id}>

                                    <div  >
                                        <img  src={"data:image/png;base64,"+product.image} className="card-img-top" alt="..." height={300} width={200} />
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
                                            <h6 className="card-subtitle mb-2">
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
                                                    className={saved==product.id ? "btn btn-success":"btn btn-danger"}
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
                                            <h2></h2>
                                        </div>
                                    </div>

                                </div>
                        )}
                </div>
                <div className="w-20 " style={{ width: "800px" }}></div>

            </div>


            <Footer />




        </div>
    )
}