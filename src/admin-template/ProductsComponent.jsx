import React, { useEffect, useState } from 'react';
import { Link,NavLink,useHistory } from 'react-router-dom';
import ProductsService from './ProductsService';
import UpdateProductComponent from './UpdateProduct';

export default function ProductsComponenet() {

    const geta= async () => {
    var f = "Pz8/PwAQSkZJRgABAgEBLAEsAAA/PxM/RXhpZgAATU0AKgAAAAgADQEPAAIAAAASAAAAPwEQAAIAAAAMAAAAPwESAAMAAAABAAEAAAEaAAUAAAABAAAAPwEbAAUAAAABAAAAPwEoAAMAAAABAAIAAAExAAIAAAAbAAAAPwEyAAIAAAAUAAAAPwE7AAIAAAAlAAABBwITAAMAAAABAAIAAD8/AAIAAAA3AAABLD9pAAQAAAABAAABZD8lAAQAAAABAAAEAAAABBROSUtPTiBDT1JQT1JBVElPTgBOSUtPTiBENzAwMAAAAAEsAAAAAQAAASwAAAABQWRvYmUgUGhvdG9zaG9wIENTIFdpbmRvd3MAMjAyMToxMDozMSAyMzo0MjozNgAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgAAAAKD8/AAUAAAABAAADSj8/AAUAAAABAAADUj8iAAMAAAABAAEAAD8nAAMAAAABAD8AAD8wAAMAAAABAAIAAD8AAAcAAAAEMDIzMD8DAAIAAAAUAAADWj8EAAIAAAAUAAADbj8BAAcAAAAEAQIDAD8CAAU=";
   var b= [];
   b.push(f);
   var res= await fetch("data:image/png;base64,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")
   var blob = await res.blob()
   const reacder = new FileReader();
   reacder.readAsDataURL(blob);
   reacder.onloadend=()=>{
    setBaseImage(reacder.result);
    console.log(reacder.result);
   }
    }
    geta();
// const objectURL =window.URL.createObjectURL(new Blob(b , {
//     type: "image"
//  }));

    const [baseImage, setBaseImage] = useState("");
    // const convertBase64 = (baseImage) => {
    //     return new Promise((resolve, reject) => {
    //       const fileReader = new FileReader();
    //       fileReader.readAsDataURL(baseImage);
    
    //       fileReader.onload = () => {
    //         resolve(fileReader.result);
    //       };
    
    //       fileReader.onerror = (error) => {
    //         reject(error);
    //       };
    //     });
    //   };
    const [products,setProducts]=useState([]);
    useEffect(() => {
        ProductsService.allProducts().then(res=>(setProducts(res.data)));
    },[]);
    
    const [details,setDetails]= useState(false);
    const [product,setProduct]= useState('');

    const hideDetails = ()=>{
        setDetails(false);}
    
        const history = useHistory();
        const registerSuccessfulLoging=(id)=> {
            sessionStorage.setItem('authenticatId', id);
           
            history.push('/adminMain/UpdateProduct')
        };
           
        
    const showDetails = (product)=>{

        setProduct(product)
        setDetails(true);
    }
    
    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Products </p>
                </div>
           {!details && <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <Link to="/adminMain/new-product"  className="btn btn-success" ><i className="fas fa-plus-circle"></i> new product</Link>
                    </div>
                   
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>statut</th>                               
                                <th>image</th>
                                <th>price</th>
                                <th></th>       
                           </tr>
                        </thead>
                        <tbody>
                           {
                               products.map(
                                 
                                   product => 
                                   <tr key={product.id} >
                                   <td>{product.id}</td>
                                   <td >{product.name}</td>
                                   <td>{product.status}</td>
                                   <td> <div>  
                                       <img  className="blob-to-image" src={ "data:image/png;base64,"+product.image } alt='product img'>
                                       </img>
                                       {/* <img  className="blob-to-image" src={ URL.createObjectURL( product.image} alt='product img'>
                                       </img> */}
                                       </div></td>
                                   <td>{product.price} dhs</td>
                                   <td><button className="btn btn-sm btn-warning" onClick ={()=>showDetails(product)} >show</button></td> 
                                   </tr>  
                               )
                           }
                        </tbody>
                    </table>
                </div>
            </div> }    
            { details &&
                <div className="card-body">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>details</th>   
                                <th>categorie</th>      
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.stock}</td>
                                <td>{product.shortDescription}</td>
                                <td>{product.category.nomCategorie}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-sm btn-warning " onClick={hideDetails}> returner</button> 
                    <button className="btn "  >
                        
                         </button> 
                    

                    <button className="btn btn-sm btn-warning "   onClick={()=>registerSuccessfulLoging(product.id)}> update </button> 
                   
                 </div>                
            }     
            </div>
    )
}