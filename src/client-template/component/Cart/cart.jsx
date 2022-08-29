// import React, {  Component ,useEffect, useState, } from 'react'
// import PanierService from "./PanierService";
// import { Link } from "react-router-dom";

// import NavBar from '../NavBar';
// import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMinusSquare, faShoppingBag
// } from "@fortawesome/free-solid-svg-icons";
// import { Button } from '@material-ui/core';

// class Cart extends Component
//  {
 
//   constructor(props) {
//     super(props)

//     this.state = {
//       composantPaniers: [] ,
     
//     Panier:[] ,
//     PrixTotal:1 ,
//     idComposante:16295,
    
//     quantite:1,

//     // prix :sessionStorage.getItem('authenticatedPrixTotal'),
     
     
// }
    
//   //  this.deleteComposantPanier=this.deleteComposantPanier.bind(this);
//   //  this.changeQuantiteHandler=this.changeQuantiteHandler.bind(this);
//   //  this.editQuantite=this.editQuantite.bind(this);
 
// }

  




  

// //  deleteComposantPanier (id){
  
// //   PanierService.deleteComposantPanier(id).then( res => {
// //     alert("delete successful");
// //    this.setState({
// //      composantPaniers: this.state.composantPaniers.filter(composantPanier => composantPanier.idComposante !== id)
// //     });
  
// //   });
// // }


 

// // editQuantite(e){
// //  e.preventDefault();
// //  const quantite= 1;
// //  console.log('quantite =>' + JSON.stringify(quantite));
// //   PanierService.updateQantiteProduct(16288,quantite);
// // }
// // changeQuantiteHandler= (event) => {
// //   this.setState({quantite: event.target.value});
// // }
// componentDidMount(){
//  // var To=0;

// //   PanierService.getAllComposante().then((res) =>
// //  {
// //       this.setState({ composantPaniers: res.data});
// //   });

//     this.setState({ composantPaniers: localStorage.getItem("cart")});

//   // PanierService.getPanier(this.state.id).then((res) => 
//   // {
//   //   this.setState({Panier:[...this.state.Panier,res.data]})
//   // });
  
// }
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       ComposantePaniers: []
// // }
// //     this.deleteComposantPanier = this.deleteEmployee.bind(this);
// // }
// //  deleteComposantPanier(id){
// //     PanierService.deleteComposantPanier(id).then( res => {
// //         this.setState({ComposantePaniers: this.state.ComposantePaniers.filter(Panier => Panier.idPanier !== id)});
// //     });
// // }

//   // const [ComposantePaniers, setcomposantPaniers] : [],
//   // const [Panier, setPanier] :[]
//   // const [idPanier, setidPanier] :1
//   // const [composantPanier,setComposantPanier]:[]
  

// // deleteComposantPanier=(composantPanier)=>{
// //  PanierService.deleteComposantPanier(composantPanier.idComposante)
   
// //    .then(response => {
// //            if (response.data != null) {
// //                 alert('delet succ!');
// //                 this.setComposantPanier({
// //                   ComposantePaniers:this.setcomposantPaniers.filt
// //                 })
// //             }
// //      })
   

// //   }
//   // useEffect(()  {
    
//   //   PanierService.getAllComposante().then((response) => setcomposantPaniers(response.data));
   
//   // }, [])
//   // useEffect(() => {
//   //   PanierService.getPanier().then((response) => setPanier(response.data));
//   // }, []);
//   render() {
   
//   return (

//     <div id="page-top">

//       <NavBar />
// {/* 
//       <Breadcrumbs class=" my-3 nav justify-content-center">
//         <nav aria-label="breadcrumb">
//           <ul class="nav justify-content-center">
//             <li class="nav-item">
//               <a class="nav-link active" href="/Home" > Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled">/</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled"  >Cart</a>
//             </li>

//           </ul>
//         </nav>

//       </Breadcrumbs> */}

//       <h2 class="my-3 h2 text-center">Cart</h2>
//       <div id="wrapper">

//         <div className="d-flex flex-column " id="content-wrapper">

//           <div id="content">
//             <main className="card">
              
//               <table className="table my-0" id="dataTable">
//                 <thead>
//                   <tr>
//                     <th></th>
//                     <th></th>
//                     <th></th>
//                     <th>PRODUCT</th>
//                     <th>PRIX</th>
//                     <th>QUANTITY</th>

//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     this.state.composantPaniers.map(
                     
                  
//                       composantPanier =>

//                         <tr key={composantPanier.id} >
//                           <td></td>
//                           <td></td>
//                           <td> <img src={composantPanier.produit.image} className="img-fluid" alt="hello" /></td>
//                           <td  >
//                             <tr> {composantPanier.produit.category.nomCategorie}</tr>
//                             <tr>{composantPanier.produit.name}</tr>
//                             <tr>{composantPanier.idComposante}</tr>
//                           </td>
//                           <td class="align-middle">

//                             $ {composantPanier.produit.price}
//                           </td>
//                           { //total ==composantPanier.panier.prixPanier 
//                           }
//                           <td class="align-middle">

//                             <input type="number"  className="form-control" defaultValue={composantPanier.quantite}  style={{ width: '100px' }} 
                       
//                          onChange={this.changeQuantiteHandler} 
//                         />
//                           </td>
//                           <td>  
//                             <button className="btn btn-warning mb-2" onClick={this.editQuantite}></button>
//                               </td>
//                           <td>
                       
                            
//                              </td>
//                           <td class="align-middle">
//                             <Button onClick={()=>this.deleteComposantPanier(composantPanier.idComposante)}>hyad </Button>
//                             <button className="btn btn-warning mb-2"
//                            onClick={()=>this.deleteComposantPanier(composantPanier.idComposante)}
//                             >
//                               <FontAwesomeIcon className="mr-2"
//                                 icon={faMinusSquare} /> Remove
                               
//                             </button>
//                           </td>
                          
//                         </tr>
                      
//                     )
                    
//                   }
//                 </tbody>
//                 <tfoot>hhhh</tfoot>
//               </table>
//             </main>
//           </div>

//         </div>
//         <div class="col-xl-3 col-md-12 mb-2 ">
//           <div class="card " >
//             <div class="card-body">
//               <div class="d-flex justify-content-between p-md-1">
//                 <div class="d-flex flex-row">

//                   <div>
//                     <h4>Prix total  </h4>
//                   </div>
//                 </div>
//                 <div>
//              { <h2> {this.prix}</h2> }
//                 </div>
                
//                 {/* {
//                      this.state.Panier.map(
//                       p=>
//                 <div key ={p.idPanier } >
                
//                   <h4 class="h3 mb-0 me-4">{p.prixPanier }  </h4>
             
//                 </div>
               
//                     )}  */}
//               </div>

//               <div class="d-flex justify-content-between p-md-1 ">   </div>

//               <div className="row ">
//               <div class="col-xl-4 col-md-12 mb-2"></div>
//                 <div className="col-4 ">
                  
//                   <div className="form-row " >
                    
//                     <Link to={"/chekout"}>
//                       <button className="btn btn-success ">
//                         <FontAwesomeIcon className="mr-2" icon={faShoppingBag} /> Checkout
//                       </button>
//                     </Link>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>


//       </div>

//     </div>
//   )
//                     }
// }

// export default Cart