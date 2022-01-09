import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
  import ProductsService from './ProductsService';


export default function ClientsTableComponent (){
   
    const [clients, setClients] = useState([]);
    const  [client,setClient]=useState([]);
  
  
    useEffect(() => {
        axios.get("http://localhost:8080/client").then((response)  => setClients(response.data));

        
    }, []);
    
    
    return(
        <div className="card shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">Clients Info</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm">
                                    <option value="10" defaultValue="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>&nbsp;</label></div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                    </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Tel</th>
                                <th>address</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { 

                            clients.map(
                                client=>
                             
                                
                             <tr key={client.idClient} >
                               <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} //src={p.image} a
                                lt="gg"/>{client.name}</td>
                               <td>{client.email}</td>
                                <td>{client.tel}</td>
                             <td>{client.addresse}</td>
                              
                            </tr>
                            )
                          }
                           
                          
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><strong>E-mail</strong></td>
                                <td><strong>address</strong></td>
                                <td><strong>Start date</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                    </div>
                    <div className="col-md-6">
                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="page-item disabled"><Link className="page-link" to="/#" aria-label="Previous"><span aria-hidden="true">&#171;</span></Link></li>
                                <li className="page-item active"><Link className="page-link" to="/#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#" aria-label="Next"><span aria-hidden="true">&#188;</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}