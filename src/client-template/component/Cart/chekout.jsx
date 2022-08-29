
import NavBar from "../NavBar";
import React, { useState, useEffect } from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PanierService from "./PanierService";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons, BraintreePayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "./PayPal";
import Payment from "./pay";
import DatePicker from "react-date-picker";
import DatePickerInput  from "react-date-picker";
import { TimeHTMLAttributes } from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Footer from '../Footer/Footer' 
import { noAuto } from "@fortawesome/fontawesome-svg-core";
//import TimePicker from 'react-time-picker';
import Datetime from 'react-datetime';
import TimePicker from 'react-bootstrap-time-picker';
 import NotificationService from "../../../admin-template/NotificationService";
import AccountService from "../account/AccountService";
import { useHistory } from "react-router-dom";
export default function Chekout() {

    

    
    
const [succeeded, setSucceeded] = useState(false);
const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
const [orderID, setOrderID] = useState(false);
const [billingDetails, setBillingDetails] = useState("");
const idNewPanier= sessionStorage.getItem('newPanier');
   
    // gère les erreurs de paiement 
    const onError = (data,actions)=>{
       setPaypalErrorMessage("Une erreur s'est produite lors de votre paiement"); 
    }
    
    const [value, onChange] = useState('10:00');
    const initialOptions = {
        currency: "USD",
        intent: "capture",
        "data-client-token": "abc123xyz==",
    };
    const [paniers, setPaniers] = useState([]);
   const [composantPanier,setcomposantPanier]=useState('')

    const idPanier=2;

    const [checkout, setCheckOut] = useState(false);
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [companyName, setcompanyName] = useState('')
    const [adresse, setadresse] = useState('');
    const [adresse_2, setadresse2] = useState('');
    const [mail, setmail] = useState('');
    const [notes, setnotes] = useState('');
    const [city, setcity] = useState('');
    const [phone, setphone] = useState('');
    const totalPrice = paniers.prixPanier;
    const country = "France";
    // var t=startDate.getUTCFullYear()+"-0"+(startDate.getMonth()+1)+"-"+startDate.getDate();
    const [codePostal, setCodePOstal] = useState('');
    const [time,setTime] = useState('');

    //var ri=time % 3600;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var h=today.getHours();
    var tim =(today.getUTCHours()+1) +":"+today.getUTCMinutes();

    today =yyyy+"-"+mm+"-"+dd;

    const [drive, setDrive] = useState('');
    const [max,setMax] =useState("09:00");
    var jj='';
    
    const definfMax=(v)=> {
        setDrive(v)
        
        jj=v.slice(8,10);
       
        if(jj.localeCompare(dd)==0){
            if(h>=12 && h<17){
                setMax("17:00")
            }else if(h>=17){
                setMax("9:00")
            } else{
                setMax("12:00")
            }
            
        }
        
       else
     {  setMax("10:00")}
    }

    const panierData=new FormData();
    panierData.append("clientId",sessionStorage.getItem("authenticatedId"))
    panierData.append("totalPrice", localStorage.getItem("prixFinal"))
    



    const onApprove = (formdata, actions) => {
        return actions.order.capture().then(function (details) {
          const {payer} = details;
          setBillingDetails(payer);
          setSucceeded(true);
          PanierService.addCommand(formdata);
          alert("succis");

        })
      };
      const [idpanier,setIdpanier]=useState(0)
      
      const history = useHistory();
    async function handleToken(token) {
        console.log(token);
        console.log(localStorage.getItem("prixFinal"))
        console.log(sessionStorage.getItem("authenticatedId"))
        console.log(quantite)
        
        await axios.post("http://localhost:8080/charge","",{
                headers:{
                    token:token.id,
                    amount:500
                },
            })
            .then(()=>{
                PanierService.addPanier(panierData).then(res=>setIdpanier(res.data));
                
                
            })
            .then(()=>{
                composantePaniers.map((comp,index)=>{
                
                    PanierService.maxIdPanier().then(res=>{
                        let composantData=new FormData();
                        composantData.append("idPanier",res.data);
                        composantData.append("idProduit",comp.id);
                        composantData.append("quantite",quantite[index]);
                        PanierService.addComposantPanier(composantData);
                        
                    })
    
                    })
                PanierService.maxIdPanier().then(res=>{
                const formdata = new FormData();
            
                formdata.append("firstName",firstName);
                formdata.append("lastName",lastName);
                formdata.append("companyName",companyName);
                formdata.append("adresse",adresse);
                formdata.append("adresse_2",adresse_2);
                formdata.append("mail" ,mail);
                formdata.append("notes",notes);
                formdata.append("city",city);
                formdata.append("phone",phone);
                formdata.append("totalPrice",localStorage.getItem("prixFinal"))
                formdata.append("idNewPanier",res.data)
                formdata.append("country", country);
                formdata.append("drive",drive);
                formdata.append("time",time);
                formdata.append("codePostal",codePostal);
                PanierService.addCommand(formdata);
             
                })
            })
            
            .catch((error) => {
                alert(error);
            });

            const notificationValue=new FormData();
            notificationValue.append("title",'Order');
            notificationValue.append("description",'new order saved');
            notificationValue.append("details",'created a new order!');
             NotificationService.addNotification(notificationValue)
               .then(res=>{})
              .catch(err=>{});


            console.log(composantePaniers)
          
            

                const params = JSON.stringify({

                    "recipient": 'abdelmajid.lamine@etu.uae.ac.ma',
                    
                    "msgBody": 'votre commande a été bien enregister',
              
                    "subject": 'Boucherie 2002'
                    });
                  axios.post(`http://localhost:8080/sendMail`, params,{
              
                    "headers": {
                    
                    "content-type": "application/json",
                    
                    } }).then(response=> {
              
                      console.log(response);
                      
                      })
                      
                      .catch(error=> {
                      
                      console.log(error);
                      
                      })
             
            
                // history.push('/adminMain')
                history.push('/success')
    }
    const [showFirstElement, setShowFirstElement] = useState(false);
    const [showSecondElement, setShowSecondElement] = useState(false);
    const toggleFirstElement = () => {
        setShowFirstElement(true)
        //     if(firstName && lastName ) 
        //  { setShowFirstElement(!showFirstElement)}
    }
    const toggleSecondElement = () => {
        if (firstName && lastName){
            setShowSecondElement(true);


        }else
            alert("remplir tout les champ obligatoire")
    };

    

   
    // async function Payment() {

    //     await axios
    //         .post("http://localhost:8080/payment",formdata)
    //         .then(() => {
    //             alert("Payment Success");
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    // }

    const [composantePaniers,setcomposantPaniers]=useState([])
    const [quantite,setQuantite]=useState([])
    const [clientId,setClientId]=useState()
    const [Client,setClient]=useState([])

    useEffect(() => {

        let lStorage=localStorage.getItem("cart");
        let sessionQuantite=localStorage.getItem("quantiteTotal")
        let sessionClientId=sessionStorage.getItem("authenticatedId")
        console.log(lStorage)
         AccountService.getClient(sessionClientId).then(res=>setClient(res.data));
         if(lStorage){
                if(lStorage.length>1){
                setcomposantPaniers(JSON.parse(lStorage));
                setQuantite(JSON.parse(sessionQuantite))
                
                }else{
                setcomposantPaniers(lStorage)
                setQuantite(sessionQuantite)
                }
                setClientId(sessionClientId)
    }
    }, []);

  

    return (
        <div>
            <div className=' fixed w-100'>
                <NavBar />
            </div>
            <div style={{ height: "80px" }} ></div>
            <div class="bg-image d-flex justify-content-center align-items-center" style=
                {{
                    backgroundImage: 'url("/assets/img/categories/image.jpg")',
                     backgroundSize:"100% 500px",
                     height:"500px"
                }}>
                <div class="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <h1 style={{ width: "rem", height: "50px" }}>

                        <strong class="text-white mb-0" >
                            Checkout {idNewPanier}</strong>
                    </h1>
                </div>
            </div>
            <main className="mt-2 pt-2">
                <div className="container wow fadeIn">
                   
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div >
                                <form className="card-body" >
                                    <div className="row">
                                        <div className="col-md-6 mb-2">


                                            <div className="md-form ">
                                                <input type="text" id="firstName" className="form-control" onChange={(event) => setfirstName(event.target.value)} required />
                                                <label for="firstName" >Prénom  <strong><i class="text-danger"> *</i></strong></label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">

                                            <div className="md-form">
                                                <input type="text" id="lastName" className="form-control" required onChange={(event) => setlastName(event.target.value)} />
                                                <label for="lastName">Nom <strong><i class="text-danger"> *</i></strong> </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md-form mb-3">
                                        <input type="email" id="mail" className="form-control" placeholder="youremail@example.com" required onChange={(event) => setmail(event.target.value)} />
                                        <label for="email" className="">Email <strong><i class="text-danger"> *</i></strong></label>
                                    </div>
                                    <div className="md-form mb-3">
                                        <input type="text" id="companyName" className="form-control" required onChange={(event) => setcompanyName(event.target.value)} />
                                        <label className="">Nom de l’entreprise (facultatif) <strong><i class="text-danger"> *</i></strong></label>
                                    </div>
                                    <div className="md-form mb-3">
                                        <input type="text" id="addresse" className="form-control" placeholder="1234 Main St" required onChange={(event) => setadresse(event.target.value)} />
                                        <label for="address" className="">Address <strong><i class="text-danger"> *</i></strong></label>
                                    </div>
                                    <div className="md-form mb-3">
                                        <input type="text" id="adresse_2" className="form-control" placeholder="Apartment or suite" required onChange={(event) => setadresse2(event.target.value)} />
                                        <label for="address-2" className="">Address 2 (optional)</label>
                                    </div>
                                    <div className="md-form mb-3">
                                        <input type="text" id="phone" className="form-control" placeholder="0635800557" required onChange={(event) => setphone(event.target.value)} />
                                        <label for="Telephonne" className="">Téléphone <strong><i class="text-danger"> *</i></strong></label>
                                    </div>
                                    <div className=" d-12 mb-3">
                                        <label for="country">Pays/région <strong><i class="text-danger"> *</i></strong> </label>
                                        <div>
                                            <strong> France</strong>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <label for="state">Ville <strong><i class="text-danger"> *</i></strong></label>
                                            <input type="text" className="form-control" id="city" placeholder="" required onChange={(event) => setcity(event.target.value)} />

                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <label for="zip">Code postal  <strong><i class="text-danger"> *</i></strong></label>
                                            <input type="text" className="form-control" id="notes" placeholder="" required onChange={(event) => setCodePOstal(event.target.value)} />
                                            <div className="invalid-feedback">
                                                Code postal
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block my-3">
                                    </div>
                                </form>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-lg btn-block" onClick={toggleSecondElement}    >Continue to checkout</button>
                                {showSecondElement &&
                                    <div>
                                        <h1 style={{ height: "20px" }}></h1>
                                        <div >
                                            <PayPalScriptProvider options={{ "client-id": "AcWMluVdTTx8z0UwnVqp1lCfd4bOdxARHSPKYO6cYuudiFeZXSqs3Ln5wvj7u00qseyZqv0IkMaHrT4m" }}>
                                                <PayPalButtons
                                                    style={{ layout: "horizontal" }}
                                                    createOrder={(data, actions) => {
                                                        return actions.order.create({
                                                            purchase_units: [
                                                                {
                                                                    currency_code: "USD",
                                                                    intent: "sale",
                                                                    amount: {
                                                                        value: paniers.prixPanier
                                                                    },
                                                                },
                                                            ],
                                                        });
                                                    }
                                                   
                                                }
                                                onApprove={onApprove} 

                                                />
                                          
                                            </PayPalScriptProvider>

                                        </div >
                                        <h1 style={{ height: "20px" }}></h1>
                                        <div class="btn btn-primary btn-block">
                                            <Stripe
                                                stripeKey="pk_test_51LWODtGyh8HknO0CBrFLQCapEGf5rBrMhBgFU2omfND9izE7PaNo0rRxSvce8ViSBr8DUkLO5nv6gw06QSUVKqlQ00t4PbHejo"
                                                token={handleToken}
                                                
                                            />
                                        </div>

                                    </div >
                                }
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Informations complémentaires</span>
                                <span className="badge badge-secondary badge-pill">{ }</span>
                            </h4>
                            <div className="md-form mb-3">

                                <input type="text" id="addresse" className="form-control" placeholder="Commenter sur votre commande" required onChange={(event) => setnotes(event.target.value)} />
                                <label for="note" className="">Notes de commande (facultatif) </label>
                            </div>
                            <div className="md-form mb-3"> 
                                <input type="date" id="date" min={today}  className = "form-control input-sm datepicker"  required 
                                onChange={(event) =>
                                    definfMax(event.target.value)
                                }

                                 />
                                <label for="drive" className="">Drive <strong><i class="text-danger"> *</i></strong></label>
                            </div>
                            {/* <div className="md-form mb-3"> 
                                <input type="time" id="time"  className = "form-control input-sm TimePicker"  required onChange={(event) => setStartDate(event.target.value)} />
                                <label for="drive" className="">Drive <strong><i class="text-danger"> *</i></strong></label>
                            </div> */}
                           
                             {/* <Datetime /> */}
                            <div className="md-form mb-3">
                                <TimePicker  
                                defaultValue={Selection} 
                                value={time}
                                start={max}
                                step={20}
                               end="22:00"
                                onChange={value => setTime(  Math.floor(value/3600)+ ":"+  Math.floor((value%3600)/60))
                                
                            } 
                                />
                                <label for="time" className="">Heure de Ramassage <strong><i class="text-danger"> *</i></strong></label>
                               
                            
 </div>
                            {/* <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge badge-secondary badge-pill">{ }</span>
                            </h4>
                            <ul className="list-group mb-3 z-depth-1">
                                <li className="list-group-item d-flex justify-content-between"  >

                                    <span>Total (USD) </span>

                                    <strong>${paniers.prixPanier}</strong>

                                </li>

                            </ul> */}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )

}