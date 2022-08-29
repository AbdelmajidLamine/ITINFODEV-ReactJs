import React, { useEffect, useState } from 'react';
import CommandeService from './CommandeService';
import axios from 'axios'
import NotificationService from './NotificationService';
import $ from 'jquery'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import swal from 'sweetalert';
import CommandeSurPlace from './CommandeSurPlace';

export default function CommandesComponenet() {

    const [Commandes, setCommandes] = useState([]);
    const [commandeSurPlace,setCommandeSurPlace]=useState([])
    useEffect(() => {
        CommandeService.allCommandes().then((res) => res.data)
        .then((data) => {
            data.sort((a, b) => b.idCommande - a.idCommande);
            setCommandes(data)
        });
        CommandeSurPlace.getAllCommandes().then((res) => res.data)
        .then((data) => {
            data.sort((a, b) => b.id - a.id);
            setCommandeSurPlace(data)
        });
        setTimeout(() => {
            $(document).ready( function () {
                
                $('#productList').DataTable();
            } );
            },1000)
        
    }, []);

    const [details, setDetails] = useState(false);

    const [idCommande, setIdCommande] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [notes, setNotes] = useState('');
    const [products, setProducts] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);
    const [livraison, setLivraison] = useState('');
    const [Delete,setDelete]=useState(false)
    const [notDelete,setNotDelete]=useState(false)
    const [qte,setQte]=useState(0)
    const [showInput,setShowUnput]=useState(false)
    const [idComp,setIdComp]=useState()
    const [updated,setUpdated]=useState()
    const [deletedComp,setDeletedComp]=useState()
    const [selected, setSelected] = useState('website');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };


    const showDetails = (commande) => {
        setIdCommande(commande.idCommande);
        setNotes(commande.notes);
        setCountry(commande.country);
        setAdresse(commande.adresse);
        setCity(commande.city);
        setCompanyName(commande.companyName);
        setPhone(commande.phone);
        setProducts(commande.products);
        setDetails(true);
        setPriceTotal(commande.totalPrice)
        setLivraison(commande.livraison)
    }
    const hideDetails = () => {
        setDetails(false);
    }


    const livraisonCommand = () => {
        const notificationData = new FormData();
        notificationData.append("title", 'Delivery');
        notificationData.append("description", 'new order delivered');
        notificationData.append("details", idCommande+'delivered!');

        NotificationService.addNotification(notificationData)
        .then(res=>{})
        .catch(err=>{});

        CommandeService.livraisonCommand(idCommande)
            .then(res => { 
                $(".show_alert_success").on('click', function() {
                    swal("Success!", "order has been delivered successfully!", "success");
                });
                setTimeout(() => {
                    window.location.reload(false)
                    },1000)
             })
            .catch(err => { alert("n'est pas modifier") })
    }

    const deleteOrder=(id)=>{
        $(".show_alert_promise_two").on('click', function() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this order!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                
                        CommandeService.deleteOrder(id)
                                .then(res=>setDelete(true),setNotDelete(false))
                                .catch(err=>setDelete(false),setNotDelete(true))
                            swal("Poof! your order has been deleted!!", {
                                icon: "success",
                              });
                            
                              setTimeout(() => {
                                window.location.reload(false)
                                },1000)
                              
                
                } else {
                  swal("Your order is safe!");
                
                }

             
            });
        });
        
    }
    const updateQuantity=new FormData();
    updateQuantity.append("quantite",qte)
    const show=(id)=>{
        setShowUnput(true)
        setIdComp(id)
    }
    const updateComp=()=>{
        
        CommandeService.updateQuatity(idComp,updateQuantity)
        .then(res=>setUpdated(true))
        .catch(err=>setUpdated(false))

    }
    const deleteComp=(id)=>{
        $(".show_alert").on('click', function() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this order!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                   
                        CommandeService.deleteCom(id)
                            .then(res=>setDeletedComp(true))
                            .catch(err=>setDeletedComp(false))
                            swal("Poof! your composant has been deleted!!", {
                                icon: "success",
                              });
                              setTimeout(() => {
                                window.location.reload(false)
                                },1000)
             
                
                } else {
                  swal("Your order is safe!");
     
                }
            });
        });
       
    }
    const deleteRealTimeOrder=(id)=>{
        $(".show_al").on('click', function() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this order!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                
                        CommandeSurPlace.deleteCommande(id)
                                .then(res=>setDelete(true),setNotDelete(false))
                                .catch(err=>setDelete(false),setNotDelete(true))
                            swal("Poof! your order has been deleted!!", {
                                icon: "success",
                              });
                       
                              setTimeout(() => {
                                window.location.reload(false)
                                },1000)
                
                } else {
                  swal("Your order is safe!");
                 
                }
            });
        });
    }

    return (
    

<div class="col-sm-12 col-xs-12 content pt-3 pl-0">
<h5 class="mb-0" ><strong>Orders</strong></h5>
<span class="text-secondary">Ecommerce <i class="fa fa-angle-right"></i> orders</span>

<div class="mt-4 mb-4 p-3 bg-white border shadow-sm lh-sm">

    <div class="product-list">
        
        <div class="row border-bottom mb-4">
            <div class="col-sm-8 pt-2"><h6 class="mb-4 bc-header">Order listing</h6></div>
            <div class="col-sm-4 text-right pb-3">
                {/* <button type="button" class="btn btn-danger icon-round shadow pull-right">
                    <i class="fas fa-trash"></i>
                </button> */}

                <div class="pull-right mr-3 btn-order-bulk">
                    <select class="shadow bg-secondary bulk-actions text-white" value={selected} onChange={handleChange}>
                        <option value="website" >webSite</option>
                        <option value="surplace">surPlace</option>
                    </select>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
        { Delete && <div className='alert alert-danger' > Order was deleted </div>}
        {selected=='website' ?
        <div class="table-responsive product-list">
            
            <table class="table table-bordered table-striped mt-3" id="productList">
                <thead>
                    <tr>
                        <th style={{width: "10px;"}} class="p-0 pr-4 align-middle">
                            <div class="form-check-box cta">
                                <span class="color1">
                                    <input type="checkbox" id="orderAll" />
                                    <label for="orderAll"></label>
                                </span>
                            </div>
                        </th>
                        <th>Order ID</th>
                         <th>Customer</th>
                        <th>Status</th>
                         <th>Total</th>
                         <th>Order date</th>
                          <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Commandes.map(commande =>
                    <tr key={commande.idCommande}>
                        <td style={{width: "10px;"}} class="p-0 pr-1 align-middle">
                            <div class="form-check-box cta">
                                <span class="color1">
                                    <input type="checkbox" id="order1" />
                                    <label for="order1"></label>
                                </span>
                            </div>
                        </td>
                        <td>Ord#{commande.idCommande}</td>
                        <td class="align-middle">
                              {commande.firstName + " " + commande.lastName}
                        </td>
                       {commande.livraison=="livré" ?  <td class="align-middle"><span class="badge badge-success">{commande.livraison}</span></td>
                       : <td class="align-middle"><span class="badge badge-warning">en attendant</span></td>}
                        <td class="align-middle">€ {commande.totalPrice}</td>
                        <td>{commande.drive}</td>
                        <td class="align-middle text-center">
                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo"  onClick={() => showDetails(commande)}>
                                <i class="fa fa-eye"></i>
                            </button>
                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate" onClick={() => showDetails(commande)}><i class="fa fa-pencil"></i></button>
                            <button class="btn btn-danger show_alert_promise_two" onClick ={()=>deleteOrder(commande.idCommande)}><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                  )}
                    
                </tbody>
            </table>
            
        </div>:null
        }
         {selected=='surplace' ?
        <div class="table-responsive product-list">
            
            <table class="table table-bordered table-striped mt-3">
                <thead>
                    <tr>
                        <th style={{width: "10px;"}} class="p-0 pr-4 align-middle">
                            <div class="form-check-box cta">
                                <span class="color1">
                                    <input type="checkbox" id="orderAll" />
                                    <label for="orderAll"></label>
                                </span>
                            </div>
                        </th>
                        <th>Order ID</th>
                         <th>Product</th>
                        <th>Status</th>
                         <th>Total</th>
                         <th>Order date</th>
                          <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {commandeSurPlace.map(commande =>
                    <tr key={commande.id}>
                        <td style={{width: "10px;"}} class="p-0 pr-1 align-middle">
                            <div class="form-check-box cta">
                                <span class="color1">
                                    <input type="checkbox" id="order1" />
                                    <label for="order1"></label>
                                </span>
                            </div>
                        </td>
                        <td>Ord#{commande.id}</td>
                        <td class="align-middle">
                              {commande.productName}
                        </td>
                        <td class="align-middle"><span class="badge badge-success">sur place</span></td>
                        <td class="align-middle">€ {commande.prixTotal}</td>
                        <td>{commande.drive}</td>
                        <td>
                            <button class="btn btn-danger show_al"  onClick ={()=>deleteRealTimeOrder(commande.id)}><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                  )}
                    
                </tbody>
            </table>
            
        </div>:null
        }
    </div>

                


    <div class="modal fade" id="orderInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Ord#13 details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                               
                                <th scope="row">country</th>
                                <th>companyName</th>
                                <th>city</th>
                                <th>adresse</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{country}</td>
                                <td>{companyName}</td>
                                <td>{city}</td>
                                <td>{adresse}</td>
                               
                            </tr>
                            
                        </tbody>
                    </table>
                    <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                           
                        <th>numero de produits</th>
                                <th>nom de produit</th>
                                <th>categorie</th>
                                <th>price</th>
                                <th>quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map(p =>
                                <tr key={p.idComposante}>
                                    <td>{p.produit.id}</td>
                                    <td>{p.produit.name}</td>
                                    <td>{p.produit.category.nomCategorie}</td>
                                    <td>€ {p.produit.price}</td>
                                    <td>{p.quantite}</td>
                                </tr>

                            )}
                        
                    </tbody>
                </table>

                    <div class="text-right mt-4 p-4">
                        
                        <h4 class="mt-2"><strong>Total: € {priceTotal}</strong></h4>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
       
                    

    
    


    <div class="modal fade" id="orderUpdate" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Ord#13 details update</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                { updated && <div className='alert alert-success' > Quanity was updated </div>}
                {deletedComp && <div className='alert alert-danger' > Quanity was updated </div>}
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                               
                                <th scope="row">country</th>
                                <th>companyName</th>
                                <th>city</th>
                                <th>adresse</th>
                                <th>phone</th>
                                <th>notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{country}</td>
                                <td>{companyName}</td>
                                <td>{city}</td>
                                <td>{adresse}</td>
                                <td>{phone}</td>
                                <td>{notes}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                           
                        <th>numero de produits</th>
                                <th>nom de produit</th>
                                <th>categorie</th>
                                <th>price</th>
                                <th>quantité</th>
                                <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map(p =>
                                <tr key={p.idComposante}>
                                    <td>{p.produit.id}</td>
                                    <td>{p.produit.name}</td>
                                    <td>{p.produit.category.nomCategorie}</td>
                                    <td>€ {p.produit.price}</td>
                                    <td>{p.quantite}</td>                                  
                                    <td style={{width: "120px;"}} class="align-middle">
                                    <button class="btn btn-theme mr-1" onClick ={()=> show(p.idComposante)}><i class="fa fa-pencil-square-o"></i></button>
                                    <button class="btn btn-danger show_alert" onClick ={()=> deleteComp(p.idComposante)}><i class="fa fa-trash-o"></i></button>
                                </td>
                                </tr>

                            )}
                        
                    </tbody>
                </table>
                {showInput &&
                <div>
                 <input className="form-control" type="text" onChange={(event)=>setQte(event.target.value)} />
                 <br></br>
                 <button class="btn btn-theme mr-1" onClick ={()=> updateComp()} > Update</button>
                 <br></br>
                 </div>
                }
                <button type="button" class="btn btn-success show_alert_success" onClick={livraisonCommand} > Livrée</button>

                    <div class="text-right mt-4 p-4">
                       
                        <h4 class="mt-2"><strong>Total: € {priceTotal}</strong></h4>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>setShowUnput(false)}>Close</button>
                </div>
            </div>
        </div>
    </div>

                    
    

</div>



</div>
    )
}
