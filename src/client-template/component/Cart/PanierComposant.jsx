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

function test() {

  const [composantePaniers, setcomposantPaniers] = useState([]);
  const [panier, setPanier] = useState([]);

  const [idPanier, setidPanier] = useState(sessionStorage.getItem('newPanier'));

  const deleteComposantPanier = (id) => {
    PanierService.deleteComposantPanier(id)
      .then(response => {
        if (response.data != null) {
          alert('delet succ!');
          PanierService.getAllComposante().then((response) => setcomposantPaniers(response.data));

        }
      })


  }
  useEffect(() => {

    PanierService.getAllComposantePanier(199).then((response) => setcomposantPaniers(response.data));
    PanierService.getPanier(199).then((response) => setPanier(response.data));
  }, [])
 
  const [quantite, setQuantite] = useState(0);

  const formData = new FormData();
  formData.append("quantite",quantite);

  const [coupon, setCoupon] = useState('');
  const [coupons, setCoupons] = useState([]);

  // useEffect(() => {
  //   const compPani=sessionStorage.getItem('aut')
  //   // PanierService.getCoup(coupon).then(response => setCoupons(response.data));

  // }, []);

  const [exist, setExist] = useState(true)
  const total = sessionStorage.getItem('authenticatedPrixTotal');
  const [prix, setPrix] = useState(Number(total).toFixed(3));
  const [discount, setDiscount] = useState(sessionStorage.getItem('authenticateddiscount'));

  const prixFinal =(panier.prixPanier-discount).toFixed(2);

  const calculDiscount = () => {

    PanierService.getCoup(coupon).then(response => {
      setCoupons(response.data),

      sessionStorage.setItem('authenticateddiscount', (panier.prixPanier * response.data.taux).toFixed(2)),
    
      setExist(false)
    }
      //setPrixFinal(Number(prix*coupons.taux).toFixed(3)),

    )
    if (exist == true)
      alert("votre coupon est incorrect , ")

  }
  const history = useHistory();

  const [change, setChnge] = useState(prix)

  const addQuantite = (id, q, p) => {

    setQuantite(Number(q + 1));
    PanierService.updateQantiteProduct(id, formData)
      .then(() => {

        sessionStorage.setItem('authenticatedPrixTotal', (prix + p))

      }
      )


  }

  const sousQuantite = (id, v, s) => {
    setQuantite(v - 1);
    PanierService.updateQantiteProduct(id, formData)
      .then(() => {

        sessionStorage.setItem('authenticatedPrixTotal', (prix - s))
  }
 )

  }


  const [chek, setChek] = useState(1);
  const contActtive = 0;
  const chekout = () => {
    // setChek(Number(1));

    if(contActtive==1)
    {

     sessionStorage.setItem('prixFinal',prixFinal)
      history.push('/chekout')
      
    }else
  { 

     sessionStorage.setItem('prixFinal',prixFinal),
     sessionStorage.setItem('authenticatLoginchekout', 1),
    history.push('/SignIn')
}

  }
  const updateQantiteProduct = (id) => {

    PanierService.updateQantiteProduct(id, formData)
      .then(() => {

        // setPrix(Number(prix + p));
         sessionStorage.setItem('authenticatedPrixTotal',prix )
        //   //setR( product.price);
        //  // setPriTotal(  (product.price + priTotal));


      }
      )

  }
  const  r= sessionStorage.getItem('aut')
// let compPani=JSON.parse(sessionStorage.getItem('aut'))

  return (

    <div id="page-top">
           <div className='w-100 fixed '>
            <NavBar />

            </div>
            <div style={{ height: "80px" }} ></div>
             <div className="bg-image d-flex justify-content-center align-items-center" style=
                {{
                    backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
                    height: "300px"
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
      
      <div id="wrapper">
      <div  style={{ width: "500px" }} >
        </div>
        <div className=" d-flex flex-column " id="content-wrapper">
        <div  style={{ width: "500px" }} >
        </div>
          <div id="content">
         
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


                      composantPanier =>

                        <tr key={composantPanier.id} >
                          <td>111</td>
                          <td></td>
                         <td> 
                           {/* <img src={"data:image/png;base64,"+composantPanier.produit.image} className="img-fluid" alt="hello" /> */}
                           </td>
                          <td  >
                            <tr> 
                              {/* {composantPanier.produit.category.nomCategorie} */}
                            </tr>
                            <tr>{composantPanier.produit.name}</tr>
                            <tr></tr>
                          </td>
                          <td className="align-middle">

                            $ {composantPanier.produit.id}
                          </td>
                          { //total ==composantPanier.panier.prixPanier 
                          }
                          <td className="align-middle" >

                            <td>

                              <button className="btn btn-danger  mb-2"

                                onDoubleClick={() => addQuantite(composantPanier.idComposante, composantPanier.quantite, composantPanier.produit.price)}

                              >
                                +
                              </button>
                            </td>

                            <td>
                              <input type="number" className="form-control" defaultValue={composantPanier.quantite} style={{ width: '100px' }}
                               onChange={(event)=>setQuantite(event.target.value)}
                               onClick={()=>updateQantiteProduct(composantPanier.idComposante)}

                            // onChange={()=>updateQantiteProduct(composantPanier.idComposante)}
                              />
                            </td>
                            <td>

                              <button className="btn btn-primary mb-2"

                                onClick={() => sousQuantite(composantPanier.idComposante, composantPanier.quantite, composantPanier.produit.price)}

                              >

                                -
                              </button>

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
                              onClick={() => deleteComposantPanier(composantPanier.idComposante)}
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
                      <button type="button" onDoubleClick={calculDiscount} className="btn btn-danger"> Appliquer le code promo </button>
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
                  <h4 className="h3 mb-0 me-4">{panier.prixPanier}  </h4>
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

                  <h4 className="h3 mb-0 me-4" >{discount}  </h4>
                 

                </div>


              </div>
              <div className=" d-flex justify-content-between p-md-1">
                <div className="d-flex flex-row">

                  <div>
                    <h4>Total   </h4>
                  </div>
                </div>
                <div  >
                  <h4 className="h3 mb-0 me-4">{prixFinal}  </h4>


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