import React, { useEffect, useState , Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsService from './ProductsService';

class ListProductComponent extends Component 
  {

    constructor(props) {
        super(props)

        this.state = {
                products: []
        }

       
        this.editEmployee = this.editEmployee.bind(this);
       
    }

    
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/addProduct/${id}`);
    }

    componentDidMount(){
        ProductsService.allProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }
    // hideDetails = ()=>{
    //     setDetails(false);}
    
    //  showDetails = (product)=>{

    //     setProduct(product)
    //     setDetails(true);
    // }
    
    
    render() {
    return (<div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Products</p>
                </div>
           { <div className="card-body">
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


                                    this.state.products.map(
                                        product => 
                           
                              
                                 
                                   <tr key={product.id} >
                                   <td>{product.id}</td>
                                   <td >{product.name}</td>
                                   <td>{product.status}</td>
                                   <td> <div>  <img src={product.image} alt='product img'>
                                       </img>
                                       </div></td>
                                   <td>{product.price} dhs</td>
                                   {/* <td><button className="btn btn-sm btn-warning" onClick ={()=>showDetails(product)} >show</button></td>  */}
                                  <td>
                                  <button onClick={ () => this.editEmployee(product.id)} className="btn btn-info">Update </button>
                                  </td>
                                   </tr>  
                               )
                           }
                        </tbody>
                    </table>
                </div>
            </div> }    
            { 
                <div className="card-body">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>details</th>       
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>{product.stock}</td>
                                <td>{product.shortDescription}</td> */}
                            </tr>
                        </tbody>
                    </table>
                    {/* <button className="btn btn-sm btn-warning " onClick={hideDetails}> returner</button>  */}
                 </div>                
            }     
            </div>
    )
        }
}

export default ListProductComponent