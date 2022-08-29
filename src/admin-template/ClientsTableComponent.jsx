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
           
            <div class="row mt-3">
                    <div class="col-sm-12">
                      
                        <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
                            <h6 class="mb-2">Clients Info</h6>
                            
                            <div class="table-responsive">
                                <table id="example" class="table table-striped table-bordered">
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
                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>Tel</th>
                                        <th>address</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                      

                    </div>
                </div>

        </div>
    )
}