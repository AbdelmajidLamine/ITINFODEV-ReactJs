import React, { Component, useEffect, useState, } from 'react'
import PanierService from "./PanierService";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusSquare, faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { Button } from '@material-ui/core';
import { number } from '../account/validation';
import Footer from '../Footer/Footer';
import axios from 'axios';
function test() {

  const [composantePaniers, setcomposantPaniers] = useState([]);
  const [panier, setPanier] = useState([]);

  const [idPanier, setidPanier] = useState(sessionStorage.getItem('newPanier'));

  const deleteComposantPanier = (id) => {
    setcomposantPaniers(composantePaniers.filter((element)=> element.id!=id ))
    localStorage.setItem("cart",JSON.stringify(composantePaniers.filter((element)=> element.id!=id )))

    window.location.reload(false)
  }

  const [quantite, setQuantite] = useState([]);
  useEffect(() => {
    
    let lStorage=localStorage.getItem("cart");
    
 
    if(lStorage){
      console.log(lStorage);
    if(lStorage.length>1){
      setcomposantPaniers(JSON.parse(lStorage));
      setQuantite(JSON.parse(lStorage).map(element => 1))
      setPrix(JSON.parse(lStorage).map(element=> element.price))
      setSom(JSON.parse(lStorage).reduce((somme,element)=> 
      somme+element.price,0
     
     ).toFixed(2))
    }else{
      setcomposantPaniers(lStorage)
      setQuantite(1)
      setPrix(lStorage.price)
      setSom(lStorage.price.toFixed(2))
    }

    }

    
    
  }, [])
 
 



  const [coupon, setCoupon] = useState('');
  const [coupons, setCoupons] = useState([]);


  const [exist, setExist] = useState(true)
  const [prix, setPrix] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [totalPrice,setTotalPrice]=useState(0);


  const calculDiscount = () => {

    PanierService.getCoup(coupon).then(response => {

      setCoupons(response.data),

      setDiscount((som* response.data.taux).toFixed(2)),
    
      setExist(false),

      setTotalPrice((som-(som*response.data.taux)).toFixed(2))
    }
      //setPrixFinal(Number(prix*coupons.taux).toFixed(3)),

    ).catch(err=>alert("votre coupon est incorrect , "))
   

  }
  const history = useHistory();



  const [chek, setChek] = useState();
  const contActtive = sessionStorage.getItem('authenticatLoginchekout');
  const pricetotal=localStorage.getItem("prixFinal");
  const quantiteTotal=localStorage.getItem("quantiteTotal");
  const chekout = () => {
    console.log(quantite)
    localStorage.setItem("quantiteTotal",JSON.stringify(quantite))

    if( sessionStorage.getItem('authenticatedId'))
    {

     localStorage.setItem("prixFinal",totalPrice==0 ? som:totalPrice)
      history.push('/chekout')
      
    }else
  { 

     localStorage.setItem("prixFinal",totalPrice==0 ? som:totalPrice),
     localStorage.setItem("checkout","checkout"),
     
    history.push('/SignIn')
}

  }

  const [som,setSom]=useState()

  const calculPrice=()=>{
    setInterval(() => {
         setSom(prix.reduce((somme,element)=> 
         somme+element,0
        
        ).toFixed(2))
    },1000)
  }
  const  r= sessionStorage.getItem('aut')


  return (

    <div id="page-top">
           <div className='w-100 fixed '>
           <NavBar />

            </div>
            <div style={{ height: "80px" }} ></div>
             <div className="bg-image d-flex justify-content-center align-items-center" style=
                {{
                  backgroundImage: 'url("/assets/img/categories/image2.jpg")',
                  backgroundSize:"100% 500px",
                  height:"500px"
                }}>
                <div className="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <h1 style={{ width: "rem", height: "50px" }}>

                        <strong className="text-white mb-0" >
                        Cart </strong>
                    </h1>
                </div>

            </div>
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
              <a className="nav-link disabled"  >Cart</a>
            </li>

          </ul>
        </nav>

      </Breadcrumbs>
      <div className="w-100  text-center" style={{ height: "100px" }}>
      <h1 >Cart</h1>
      </div>
      
      <div id="wrapper" className='d-md-flex d-sm-block'>
      <div  style={{ width: "500px" }} >
        </div>
        <div className=" d-flex flex-column " id="content-wrapper">
        <div  style={{ width: "500px" }} >
        </div>
          <div id="content">
            {composantePaniers ?
            
            <main className="card">
           
            <table className="table my-0" id="dataTable">
          
              <thead>
                <tr>
                
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>PRODUCT</th>
                  <th>PRIX</th>
                  <th>QUANTITY</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  composantePaniers.map(


                    (composantPanier,index) =>

                      <tr key={composantPanier.id} >
                        <td>{composantPanier.id}</td>
                        <td></td>
                       <td> 
                         {/* <img src={"data:image/png;base64,"+composantPanier.produit.image} className="img-fluid" alt="hello" /> */}
                         </td>
                        <td  >
                          <tr> 
                            {/* {composantPanier.produit.category.nomCategorie} */}
                          </tr>
                          <tr>{composantPanier.name}</tr>
                          <tr></tr>
                        </td>
                        <td className="align-middle">

                        € {composantPanier.price}
                        </td>
                        { //total ==composantPanier.panier.prixPanier 
                        }
                        <td className="align-middle" >

                          <td>
{/* 
                            <button className="btn btn-danger  mb-2"

                               onClick={(event) => {
                                event.preventDefault;
                                quantite[index]=Number(quantite[index])+1;
                                console.log(quantite);
                                setQuantite(quantite);
                               }
                               
                              }

                            >
                              +
                            </button> */}
                          </td>

                          <td>
                            <input type="number" className="form-control" style={{ width: '100px' }} 
                             onChange={(event)=>{
                              quantite[index]=Number(event.target.value);
                              prix[index]=quantite[index]*(composantPanier.price);
                              console.log(prix);
                              calculPrice();
                              setPrix(prix);
                              setQuantite(quantite);
                             }}
                             defaultValue={quantite[index]} 
                            //  onClick={()=>updateQantiteProduct(composantPanier.idComposante)}

                          // onChange={()=>updateQantiteProduct(composantPanier.idComposante)}
                            />
                          </td>
                          <td>
{/* 
                            <button className="btn btn-primary mb-2"

                              // onClick={() => sousQuantite(composantPanier.idComposante, composantPanier.quantite, composantPanier.produit.price)}
                              onClick={(event) => {
                                event.preventDefault;
                                quantite[index]=Number(quantite[index])-1;
                                setQuantite(quantite);
                               }
                               
                              }
                            >

                              -
                            </button> */}

                          </td>

                        </td>
                        {/* <td>  
                          <button className="btn btn-warning mb-2" onClick={()=>updateQantiteProduct(composantPanier.idComposante)}
                          ></button>
                            </td> */}
                        <td>


                        </td>
                        <td className="align-middle">
                          {/* <Button onClick={()=>deleteComposantPanier(composantPanier.idComposante)}>hyad </Button> */}
                          <button className="btn btn-warning mb-2"
                            onClick={() => deleteComposantPanier(composantPanier.id)}
                          >
                            <FontAwesomeIcon className="mr-2"
                              icon={faMinusSquare} /> Remove

                          </button>
                        </td>

                      </tr>

                  )

                }
              </tbody>


            </table>
            <div className="card">
              <div className="card-body ">
                <div className="d-flex justify-content-start  ">
                  <div>

                    <span className="uk-margin-small-right">Promo Code</span>


                  </div>
                  <div style={{ width: '20px' }}></div>
                  <div >
                    <input type="text" onChange={(event) => setCoupon(event.target.value)} className="form-control" style={{ width: '200px' }} />
                  </div>
                  <div>
                    <button type="button" onClick={()=>calculDiscount()} className="btn btn-danger"> Appliquer le code promo </button>
                  </div>

                </div>
                
               {/* {
                
                compPani.map(
                c=>
              <div key={c.id}>h;{c.id}</div>
               )
               } */}
              </div>
            </div>
          </main>
          :
          <div>
            Le Panier est vide
          </div>
          }
         
           
          </div>

        </div>
        <div className="col-xl-3 col-md-12 mb-2  " >
          <div className="card " >
            <div className="card-body ">
              <div className="  d-flex justify-content-between p-md-1">
                <div className=" d-flex flex-row">

                  <div>
                    <h4>Subtotal  </h4>
                  </div>
                </div>
                <div  >
                  <h4 className="h3 mb-0 me-4">€ { som }  </h4>
                  {/* <h4 class="h3 mb-0 me-4">{panier.prixPanier }  </h4> */}

                </div>


              </div>
              <div > </div>
              <div className=" d-flex justify-content-between p-md-1">
                <div className="d-flex flex-row">

                  <div>
                    <h4>Discount  </h4>
                  </div>
                </div>
                <div  >

                  <h4 className="h3 mb-0 me-4" >€ {discount}  </h4>
                 

                </div>


              </div>
              <div className=" d-flex justify-content-between p-md-1">
                <div className="d-flex flex-row">

                  <div>
                    <h4>Total   </h4>
                  </div>
                </div>
                <div  >
                  <h4 className="h3 mb-0 me-4">€ {totalPrice==0 ? som:totalPrice}  </h4>


                </div>


              </div>
              <div className="d-flex justify-content-between p-md-1 ">   </div>

              <div className="row ">
                <div className="col-xl-4 col-md-12 mb-2"></div>
                <div className="col-1 ">

                  <div className="form-row " >

                    <Link>
                      <button className="btn btn-success btn-block " onClick={chekout}>
                        <FontAwesomeIcon className="mr-2" icon={faShoppingBag} /> Checkout
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div  style={{ width: "200px" }} >
        </div>

      </div>
       <Footer/>
    </div>
  )

}

export default test;