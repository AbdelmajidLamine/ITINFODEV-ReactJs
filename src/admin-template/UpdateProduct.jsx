
import React, { useEffect, useState }  from 'react'; 
import CategorieService from './CategorieService';
import ProductsService from './ProductsService';

 function  UpdateProductComponent (props){
 
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
        ProductsService.productById(props.location.state).then(res=>(setProduct(res.data))
        );
       
    },[]);




      const UpdateProduct=()=>{
        
          ProductsService.modifyProductPrice(props.location.state,formData)
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
                           <div className="card mb-3">
                                <div className="card-body text-center shadow"><img className="rounded-circle mb-3 mt-4" src={product.image ? "data:image/png;base64,"+product.image : "/assets/img/admins/avatar4.jpeg"} width="160" height="160" alt="gg"/>
                                    <div className="mb-3"> <label>Photos: </label>
                                <input type="file" name="image" accept="image/png, image/jpeg" onChange={event=>setImage(event.target.files[0])}/></div>
                                </div>
                            </div>
                          
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
                           
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  onChange={(event)=>SetCategory(event.target.value)} onClick={(event)=>SetCategory(event.target.value)} >
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
