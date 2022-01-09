
import React, { useEffect, useState }  from 'react'; 
import CategorieService from './CategorieService';
import ProductsService from './ProductsService';

 function  UpdateProductComponent (){
 
      const [saved,setSaved]= useState(false)
      const [unsaved,setUnsaved]= useState(false)
     
      const [categories, setCategories] = useState([]);

      const [name, setName] = useState('')
      const [shortDescription, setDescreption ] = useState('')
      const [stock, setQte] = useState(0)
      const [price, setPrice] = useState(0)
    
      const [status,setStatus] = useState(true)
      const [image, setImage] = useState('');
     const [category, SetCategory] = useState([]);
      const formData = new FormData();
      formData.append("name",name);
      formData.append("shortDescription",shortDescription);
      formData.append("status",status);
      formData.append("stock",stock);
      formData.append("image",image);
      
      formData.append("price",price);
      formData.append("category",category);
       

      const [product,setProduct]= useState([]);
      const [products,setProducts]=useState([]);
     
      const id = sessionStorage.getItem('authenticatId');

      useEffect(() => { CategorieService.getAllCategorie().then((res) => setCategories(res.data)) }, [])
      
     

      useEffect(() => {
        ProductsService.productById(id).then(res=>(setProduct(res.data))
        );
       
    },[]);




      const UpdateProduct=()=>{
        
          ProductsService.modifyProductPrice(id,formData)
          .then(res=>{setUnsaved(false); setSaved(true)})
          .catch(err=>{setUnsaved(true); setSaved(false)})
      }

      return (
        <div className="card ">
       <div className="card shadow mb-3">
          <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">modifie Produit</p>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-row">
                      <div className="col">
                          <div className="form-group">
                            <label htmlFor="username"><strong>ProductName</strong></label>
                            <input className="form-control" type="text" defaultValue={product.name} onChange={(event)=>setName(event.target.value)}/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="price"><strong>price</strong></label>
                            <input className="form-control" type="number" defaultValue={product.price} min="1" onChange={(event)=>setPrice(event.target.value)}/>
                          </div>
                           <div>
                          <div className="form-group"><label htmlFor="description"><strong>description</strong><br/></label>
                          <textarea className="form-control" rows="3" defaultValue={product.shortDescription} onChange={(event)=>setDescreption(event.target.value)}></textarea></div>
                          <div className="form-group"><label htmlFor="Image"><strong>Image</strong></label>
                         
                          <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                          Upload
                        </span>
                      </div>
                      <div className="custom-file">
                        <input
                          placeholder="img" name="img"
                          type="file"
                    
                     
                     
                          className="form-control"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                          //  onChange={(event) => setImage(event.target.files[0])}
                           onChange={(event)=>setImage(event.target.value)}
                          // onChange={(event) => console.log("update res :",event.target.files[0])}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                          Choose file {image}
                        </label>
                      </div>
                    </div>
                        
                       
                         </div>
                          <div className="form-group"><label htmlFor="Quantity"><strong>Quantity</strong></label>
                          <input className="form-control" type="text" defaultValue={product.stock} onChange={(event)=>setQte(event.target.value)} />
                          </div>
                          <div className="form-group"><label htmlFor="Quantity"><strong>Status</strong></label>
                          <input className="form-control" type="text" defaultValue={product.status} onChange={(event)=>setStatus(event.target.value)} />

                    </div>
                          <div className="form-floating">
                        
                          <label htmlFor="floatingSelect" ></label><br/>
                            <label htmlFor="floatingSelect" >chose the category </label><br/>
                           
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event)=>SetCategory(event.target.value)} onClick={console.log(category)} >
                               {
                                   categories.map( (categorie)=>
                                   <option  key={categorie.idCategorie} value={categorie.idCategorie}>{categorie.nomCategorie}</option>
                                  
                                  )}
                            </select>
                            </div>
                       </div>
                       <div>  
                       </div>
                      </div>
                  </div>
                  { unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}
                  { saved && <div className='alert alert-success' > product was added </div>}
                  <div className="form-group">
                    <button className="btn btn-primary btn-sm" onClick={UpdateProduct} type="button" >modifie</button>
                    </div>
              </form>
          </div>
       </div>
      
       </div>
      );
    }
    export default  UpdateProductComponent;
