import React, { useEffect, useState } from 'react';
import CommandeService from './CommandeService';

export default function CommandesComponenet() {

    const [Commandes,setCommandes]=useState([]);
    useEffect(() => {
        CommandeService.allCommandes().then(res=>(setCommandes(res.data)));
    },[]);

    const [details,setDetails]= useState(false);

    const [idCommande,setIdCommande]= useState('');
    const [companyName,setCompanyName]= useState('');
    const [adresse,setAdresse]= useState('');
    const [city,setCity]= useState('');
    const [phone,setPhone]= useState('');
    const [country,setCountry]= useState('');
    const [notes,setNotes]= useState('');
    const [products,setProducts]= useState([]);
    const [priceTotal,setPriceTotal]= useState(0);
    const [livraison,setLivraison]= useState('');


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
        setLivraison(commande.livraison)
    }
    const hideDetails = ()=>{
        setDetails(false);
    }
    const livraisonCommand = () => {

        CommandeService.livraisonCommand(idCommande)
          .then(res => { alert("cette commande est bien mdifié")})
          .catch(err => { alert("n'est pas modifier") })
      }

    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Commandes</p>
                </div>
            <div className="card-body">
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    
                    {! details &&<table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>numero de commande </th> 
                                <th>nom du client </th>                               
                                <th>email du client</th>   
                                                       
                                <th>prix total</th>
                                <th>livraison</th>   
                                <th> details</th>    
                           </tr>
                        </thead>
                        <tbody> 
                           {Commandes.map(commande => <tr key={commande.idCommande}>
                                <td>{commande.idCommande}</td>
                                <th>{commande.firstName +" "+ commande.lastName} </th> 
                                <td> {commande.mail}</td>
                                <td>{commande.totalPrice}</td>
                                <td>{commande.livraison}</td>
                                
                                <td><button className="btn btn-sm btn-warning" onClick ={()=>showDetails(commande)} >show</button></td>                        
                            </tr> )}
                        </tbody>
                    </table>}
                    {details && <div >

                    <div class="d-flex align-items-start bg-light mb-3">
                        <div class="col"> <h5 >numero de commande : <strong>{idCommande}</strong></h5></div>
                        <div class="col  "> <h5 >   prix total :  <strong>{priceTotal}</strong> €</h5></div>


                    </div>



                    <br />

                        <div className="card-title">client infos</div>                        
                        <table className="table my-0">
                        <thead>
                            <tr>
                                <th>country</th>
                                <th>companyName</th>                                
                                <th>city</th>                                 
                                <th>adresse</th>
                                <th>phone</th>
                                <th>notes</th>        
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{country}</td>
                                <td>{companyName}</td>
                                <td>{city}</td>
                                <td>{adresse}</td>
                                <td>{phone}</td>
                                <td>{notes}</td>                               
                            </tr>
                            </tbody>
                        </table>

                        <br/><br/>
                        <h5 className="card-title">produits commander</h5>

                        <table className="table my-0">
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
                            {products.map(p=>
                            <tr key={p.idComposante}>
                                <td>{p.produit.id}</td>
                                <td>{p.produit.name}</td>
                                <td>{p.produit.category.nomCategorie}</td> 
                                <td>{p.produit.price}</td>
                                <td>{p.quantite}</td>
                            </tr>
                            
                            )}
                            </tbody>
                        </table>
                        <button className="btn btn-sm btn-primary" onClick={livraisonCommand} > Livrée</button> 
                        <button className="btn btn-sm btn-warning " onClick={hideDetails}> returner</button> 
                        
                    </div>}
                </div>
            </div>          
            </div>
    )
}
