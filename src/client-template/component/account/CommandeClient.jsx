import React, { useEffect, useState } from 'react';
import AccountService from './AccountService';
import $ from 'jquery'
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import swal from 'sweetalert';

export default function CommandeClient(props) {


    const [Commandes,setCommandes]=useState([]);
   
    useEffect(() => {

        AccountService.getCommande(props).then((res) => res.data)
        .then((data) => {
            data.sort((a, b) => b.idCommande - a.idCommande);
            setCommandes(data)
           
    });
    setTimeout(() => {
    $(document).ready( function () {
        
        $('#myTable').DataTable();
    } );
    },1000)
   
       
    },[]);


 
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
    const [Delete,setDelete]=useState(false)
    const [notDelete,setNotDelete]=useState(false)
    const [idComp,setIdComp]=useState()
    const [updated,setUpdated]=useState()
    const [deletedComp,setDeletedComp]=useState()

    const showDetails = (commande)=>{

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
    }
    const hideDetails = ()=>{
        setDetails(false);
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
                    AccountService.findByLivraisonCommande(id)
                    .then(res=>{
                        if(res.data=="livré"){
                            swal("Poof! your order has already been delivered!", {
                                icon: "success",
                              });
                        }else{
                            const notificationData = new FormData();
                            notificationData.append("title", 'Demande');
                            notificationData.append("description", 'Demande d annulation d une commande');
                            notificationData.append("details", 'Demande d annulation de commande '+idCommande);
                            swal("Poof! Your request has been registered!", {
                                icon: "success",
                              });
                        }
                    })
                
                } else {
                  swal("Your order is safe!");
                }
            });
        });
    
       
    }
    const show=(id,idComp)=>{
        $(".show_alert_promise").on('click', function() {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this order!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    AccountService.findByLivraisonCommande(id)
                    .then(res=>{
                        if(res.data=="livré"){
                            swal("Poof! your order has already been delivered!", {
                                icon: "success",
                              });
                        }else{
                            const notificationData = new FormData();
                            notificationData.append("title", 'Demande');
                            notificationData.append("description", 'Demande de modifier la quantite d un produit');
                            notificationData.append("details", 'Demande de modifier la quantite de produit '+idComp);
                            swal("Poof! Your request has been registered!", {
                                icon: "success",
                              });
                        }
                    })
                
                } else {
                  swal("Your order is safe!");
                }
            });
        });
      
    }
    const deleteComp=(id,idComp)=>{
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
                    AccountService.findByLivraisonCommande(id)
                    .then(res=>{
                        if(res.data=="livré"){
                            swal("Poof! your order has already been delivered!", {
                                icon: "success",
                              });
                        }else{
                            const notificationData = new FormData();
            notificationData.append("title", 'Demande');
            notificationData.append("description", 'Demande d anuulation d un produit');
            notificationData.append("details", 'Demande d anuulation de produit '+idComp);
                            swal("Poof! Your request has been registered!", {
                                icon: "success",
                              });
                        }
                    })
                
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
                </button>

                <div class="pull-right mr-3 btn-order-bulk">
                    <select class="shadow bg-secondary bulk-actions">
                        <option data-display="<span class='text-white'><b>Bulk status</b></span>">Status options</option>
                        <option value="1">Pending</option>
                        <option value="2">Cancelled</option>
                        <option value="4">Delivered</option>
                    </select>
                </div> */}

                <div class="clearfix" ></div>
            </div>
        </div>
        
        <div class="table-responsive product-list">
            
            <table class="table table-bordered table-striped mt-3" id="myTable">
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
                        <th style={{width: "10px;"}} class="p-0 pr-1 align-middle">
                            <div class="form-check-box cta">
                                <span class="color1">
                                    <input type="checkbox" id="order1" />
                                    <label for="order1"></label>
                                </span>
                            </div>
                        </th>
                        <th>Ord#{commande.idCommande}</th>
                        <th class="align-middle">
                              {commande.firstName + " " + commande.lastName}
                        </th>
                        <th class="align-middle"><span class="badge badge-warning">{commande.livraison}</span></th>
                        <th class="align-middle">€ {commande.totalPrice}</th>
                        <th>{commande.drive}</th>
                        <th class="align-middle text-center">
                            <button class="btn btn-theme" data-toggle="modal" data-target="#orderInfo"  onClick={() => showDetails(commande)}>
                                <i class="fa fa-eye"></i>
                            </button>
                            <button class="btn btn-success" data-toggle="modal" data-target="#orderUpdate" onClick={() => showDetails(commande)}><i class="fa fa-pencil"></i></button>
                            <button class="btn btn-danger show_alert_promise_two" type="button" onClick ={()=>deleteOrder(commande.idCommande)}><i class="fas fa-trash"></i></button>
                        </th>
                    </tr>
                  )}
                    
                </tbody>
            </table>
            
        </div>
    </div>

                


    <div class="modal fade" id="orderInfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Ord#{idCommande} details</h5>
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
                    <h5 class="modal-title" id="exampleModalLongTitle">Ord#{idCommande} details update</h5>
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
                                    <button class="btn btn-theme mr-1 show_alert_promise" onClick ={()=> show(idCommande,p.produit.id)}><i class="fa fa-pencil-square-o"></i></button>
                                    <button class="btn btn-danger show_alert"   onClick ={()=> deleteComp(idCommande,p.produit.id)}><i class="fa fa-trash-o"></i></button>
                                </td>
                                </tr>

                            )}
                        
                    </tbody>
                </table>
               
                

                    <div class="text-right mt-4 p-4">
                       
                        <h4 class="mt-2"><strong>Total: € {priceTotal}</strong></h4>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
                </div>
            </div>
        </div>
    </div>

                    
    

</div>



</div>
    )
}
