import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategorieService from './CategorieService';

export default function CategorieProductComponent(){
 
    const [categories,setCategories]=useState([]);

    useEffect (()=>{
        CategorieService.getAllCategorie().then((response) =>setCategories(response.data) );
    },[]);

    
    return(

         <div className="card shadow">
            <div className="card-header ">
                <p className="text-primary m-0 font-weight-bold">Categories</p>
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col-md-6 text-nowrap">
                        <Link to="/adminMain/new-categorie"  className="btn btn-success" ><i className="fas fa-plus-circle"></i> new categorie</Link>
                    </div>
                    {//<div className="col-md-6">
                      //  <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                    //</div>
                }
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>ID Categorie </th>
                                <th>Categorie Name</th>
                                <th>Slug</th> 
                                 
                            </tr>
                        </thead>
                        <tbody>
                        {  categories.map(
                                categorie => 
                            <tr key = {categorie.idCategorie}>
                                <td> {categorie.idCategorie}</td>
                                <td> {categorie.nomCategorie}</td>
                                <td> {categorie.slag}</td>
                             
                            </tr>  
                            )}
                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    )
}