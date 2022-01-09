import React, { useState, useRef, useEffect } from 'react'
const Payment = () => {
  const [loaded, setLoaded] = useState(false)
  let payPalRef = useRef()

  const product = {
    price: '2.00',
    description: 'Test Product'
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS'
    script.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(script)

    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: 'USD',
                      value: product.price
                    }
                  }
                ]
              })
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture()
              if (order.status === 'COMPLETED') {
                console.log(order)
              }
            }
          })
          .render(payPalRef)
      })
    }
  }, [loaded, product.price, product.description])
  return (
    <div className="payment">
      <div className="vh-100 ml5-l">
        <div>
          <h1 className="mb3 fw7">
            {product.description} for ${product.price}
          </h1>
          <div ref={v => (payPalRef = v)} />
        </div>
      </div>
    </div>
  )
}

export default Payment ;

{/* <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div> 


import NavBar from "../NavBar";
import React, { useState, useEffect } from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PanierService from "./PanierService";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


import "./App.css";
import PayPal from "./PayPal";
export default function Chekout() {

    const [checkout, setCheckOut] = useState(false);


    async function handleToken(token) {
        console.log(token);
        await axios
          .post("http://localhost:8080/payment/charge", "", {
            headers: {
              token: token.id,
              amount:1,
            },
          })
          .then(() => {
            alert("Payment Success");
          })
          .catch((error) => {
            alert(error);
          });
      }

    const [showFirstElement, setShowFirstElement] = useState(false);
    const [showSecondElement, setShowSecondElement] = useState(false);
    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
    const toggleSecondElement = () => setShowSecondElement(!showSecondElement);

    const [unsaved, setUnsaved] = useState(false)
    const [saved, setSaved] = useState(false)


    const [price, setPrice] = useState(1);
    const [currency, setCurrency] = useState('USD');
    const [method, setMethod] = useState('paypal');
    const [intent, setIntent] = useState('sale');
    const [description, setDescription] = useState('test');

    const [paniers, setPaniers] = useState([]);
    const [idPanier, setidPanier] = useState(1);

    const formData = new FormData();
    formData.append("amount", price);
    formData.append("currency", currency);
   
    formData.append("intent", intent);
    formData.append("flow", description);


    // async function  Payment(){
    //     PanierService.payment(formData)

    //         .then(() => { setUnsaved(false); setSaved(true) })
    //         .catch(() => { setUnsaved(true); setSaved(false) })
    // }
    async function Payment() {
       
        await axios
          .post("http://localhost:8080/payment", formData)
          .then(() => {
            alert("Payment Success");
          })
          .catch((error) => {
            alert(error);
          });
      }


    useEffect(() => {
        PanierService.getPanier().then((res) => setPaniers(res.data))
    }, []);

    return (



        <div>

            <NavBar />


            <main className="mt-2 pt-2">


                <div className="container wow fadeIn">


                    <h2 className="my-5 h2 text-center">Checkout form</h2>

                    <div className="row">

                        <div className="col-md-8 mb-4">

                            <div className="card">

                                <form className="card-body" >


                                    <div className="row">


                                        <div className="col-md-6 mb-2">


                                            <div className="md-form ">
                                                <input type="text" id="firstName" className="form-control" />
                                                <label for="firstName" className="">First name</label>
                                            </div>

                                        </div>

                                        <div className="col-md-6 mb-2">

                                            <div className="md-form">
                                                <input type="text" id="lastName" className="form-control" />
                                                <label for="lastName" className="">Last name</label>
                                            </div>

                                        </div>

                                    </div>


                                    {/* <div className="md-form input-group pl-0 mb-5">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                        </div>
                                        <input type="text" className="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" />
                                    </div> 


                                    <div className="md-form mb-5">
                                        <input type="text" id="email" className="form-control" placeholder="youremail@example.com" />
                                        <label for="email" className="">Email (optional)</label>
                                    </div>


                                    <div className="md-form mb-5">
                                        <input type="text" id="address" className="form-control" placeholder="1234 Main St" />
                                        <label for="address" className="">Address</label>
                                    </div>


                                    <div className="md-form mb-5">
                                        <input type="text" id="address-2" className="form-control" placeholder="Apartment or suite" />
                                        <label for="address-2" className="">Address 2 (optional)</label>
                                    </div>


                                    <div className="row">

                                        <div className=" d-12 mb-4">

                                            <label for="country">Country</label>
                                            <select className="custom-select d-block w-100" id="country" required>
                                                <option value="">Choose...</option>
                                                <option>United States</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>

                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4">

                                            <label for="state">State</label>
                                            <select className="custom-select d-block w-100" id="state" required>
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>

                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-4">

                                            <label for="zip">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>

                                        </div>

                                    </div>





                                    <hr />

                                    <div class="card">
                                        <div class="card-header p-0" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" onClick={toggleSecondElement} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <div class="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
                                                </button> </h2>
                                        </div>

                                        <div>
                                            <MDBRow>
                                                <MDBCol>
                                                    <MDBCollapse show={showSecondElement} className='mt-3'>
                                                    <form>
                                                        <div className="card">

                                                            <div className="col-md-12 mb-3">
                                                                <label for="cc-name">Total</label>
                                                                <input type="text" className="form-control "name="price" value="10" id="cc-name"  required onChange={(event)=>setPrice(event.target.value)}   />

                                                            </div>
                                                        </div>
                                                        <div className="card">

                                                            <div className="col-md-12 mb-3">
                                                                <label for="cc-name">Currency</label>
                                                                <input type="text" className="form-control" id="cc-name" name="currency" placeholder="Enter Currency" required onChange={(event)=>setCurrency(event.target.value)} />

                                                            </div>
                                                        </div>
                                                        <div className="card">

                                                            <div className="col-md-12 mb-3">
                                                                <label for="cc-name">Payment Method</label>
                                                                <input type="text" className="form-control" id="cc-name"me="method" placeholder="Payment Method" required onChange={(event)=>setMethod(event.target.value)} />

                                                            </div>
                                                        </div>
                                                        <div className="card">

                                                            <div className="col-md-12 mb-3">
                                                                <label for="cc-name">Intent</label>
                                                                <input type="text" className="form-control" id="cc-name" name="intent"  required onChange={(event)=>setIntent(event.target.value)} />

                                                            </div>
                                                        </div>
                                                        <div className="card">

                                                            <div className="col-md-12 mb-3">
                                                                <label for="cc-name">Payment Description</label>
                                                                <input type="text" className="form-control" id="cc-name" name="description" placeholder="Payment Description" required onChange={(event)=>setDescription(event.target.value)}  />

                                                            </div>
                                                        </div>
                                                        <input type="submit" value="Continue to checkout" onClick={Payment} class="btn"/>
                                                     </form>
                                                    </MDBCollapse>
                                                </MDBCol>
                                            </MDBRow>
                                        </div>
                                    </div>
                                    <h4 />
                                    <div class="card">
                                        <div class="card-header p-0">
                                            <h2 class="mb-0"> <button onClick={toggleFirstElement} class="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <div class="d-flex align-items-center justify-content-between"> <span>Strip</span>
                                                    <div class="icons">  <img src="https://i.imgur.com/35tC99g.png" width="30" />  </div>
                                                </div>
                                            </button> </h2>
                                        </div>
                                        <MDBRow>
                                            <MDBCol>
                                                <MDBCollapse show={showFirstElement} className='mt-3'>
                                                    <div className="row">

                                                        <div className="col-md-6 mb-3">
                                                            <label for="cc-name">Name on card</label>
                                                            <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                                            <small className="text-muted">Full name as displayed on card</small>
                                                            <div className="invalid-feedback">
                                                                Name on card is required
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label for="cc-number">Credit card number</label>
                                                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                                            <div className="invalid-feedback">
                                                                Credit card number is required
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3 mb-3">
                                                            <label for="cc-expiration">Expiration</label>
                                                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                                            <div className="invalid-feedback">
                                                                Expiration date required
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label for="cc-expiration">CVV</label>
                                                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                                            <div className="invalid-feedback">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </MDBCollapse>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>

                                    <div className="d-block my-3">
                                    </div>
                                    <hr className="mb-4" />
                                    <form >
                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={Payment}>Continue to checkout</button>
                                    </form>
                                </form>

                            </div>

                        </div>



                        <div className="col-md-4 mb-4">


                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>


                            <ul className="list-group mb-3 z-depth-1">
                                {
                                    paniers.map(
                                        panier =>
                                            <li className="list-group-item d-flex justify-content-between" key={panier.idPanier} >

                                                <span>Total (USD)</span>

                                                <strong>${panier.prixPanier}</strong>

                                            </li>
                                    )}
                                
                            </ul>

                            {/* <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
                                    </div>
                                </div>
                            </form> }

                        </div>
                        <Stripe
                            stripeKey="pk_test_51JVedOHHuT2arISfwl0KCZiJRJ5OAqwq7v3MW2S64VHMe738Se02NboAB2snecH6V7VeATIvFYWQIpQW0NTZ3ie800LfcZawcr"
                            token={handleToken}
                        />
                         {/* <PayPalScriptProvider >
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider> }
                    </div>
 <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>

                </div>
            </main>
        </div>



    )

}

*/}

