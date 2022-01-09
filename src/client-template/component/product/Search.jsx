
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import ProductsService from "./ProductsService";
import NavBar from '../NavBar';

const Search = (mot) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductsService.chercheProduit(mot).then(res => (setProducts(res.data)));
  }, []);

  return (


    <div>
      <div className="w-100 fixed" >
        < NavBar />
      </div>

      <div style={{ height: "100px" }} ></div>
      <div className="p-1 mb-1 bg-light text-center">
        <h3 className=" font-dark-bold  text-center my-1">
          Les résultats de recherche
        </h3>
      </div>

      <div  style={{marginLeft:'10%' ,marginRight:'10%'}}>
        {/* <div className="w-20  " style={{ width: "800px" }}></div> */}
      
        
        <div className="text-centre">
          <section className="row  row-cols-md-4 g-4 mx-auto">

            {
              products.map(
                product =>
                  <div key={product.id} class="col  p-3">
                    <div key={product.id} class="card ">
                      <img
                        src={product.image}
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title" style={{ height: "20px" }}>{product.name}</h6>
                        <p class="card-text">
                        </p>
                      </div>
                      <div class="card-footer ">
                        <div class="d-flex justify-content-between">
                          <span className="font-weight-bold h8"> <a className="text-danger"> $</a> {product.price}</span>
                          <div>
                            <button
                              type="button"
                              className="btn   btn-danger "
                              title="Add to cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
              )}


          </section>
        </div>
      </div>
    </div>
  );
};


export default Search;


