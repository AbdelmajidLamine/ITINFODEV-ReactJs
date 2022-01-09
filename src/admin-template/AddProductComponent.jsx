
import React, { useEffect, useState } from 'react';
import CategorieService from './CategorieService';
import ProductsService from './ProductsService';
import { MDBFileInput } from "mdbreact";
import axios from 'axios';

export default function AddProductComponent() {


  const [saved, setSaved] = useState(false)
  const [unsaved, setUnsaved] = useState(false)

  const [categories, setCategories] = useState([]);

  useEffect(() => { CategorieService.getAllCategorie().then((res) => setCategories(res.data)) }, [])
  const [name, setName] = useState('')
  const [shortDescription, setDescreption] = useState('')
  const [stock, setQte] = useState(0)
  const [price, setPrice] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
  const staut = true;
  //const [staut,setStatut] = useState(true)
//   fileSelect=(e)=>{
// console.log(e.target.files[0])
//   }

  const [image, setImage] = useState('')
  const [category, SetCategorie] = useState(1)
  const eregistrieImage =()=>{
    const formD = new FormData();
   
    axios.post("C:/d/admin-Boucherie/admin-Boucherie-master/public/assets/img/produits",image).then(
      (Response)=>{ console.log(Response);
      }
    );
  };
  
  const formData = new FormData();
  formData.append("name", name);
  formData.append("shortDescription", shortDescription);
  formData.append("staut", staut);
  formData.append("stock", stock);
  formData.append("image", image);
  formData.append("idCategorie", category);
  formData.append("price", price);


  const saveProduct = () => {

    ProductsService.addProduct(formData)
      .then(res => { setUnsaved(false); setSaved(true) })
      .catch(err => { setUnsaved(true); setSaved(false) })
  }
  return (
    <div className="card ">
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <p className="text-primary m-0 font-weight-bold">Ajout Produit</p>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="username"><strong>ProductName</strong></label><input className="form-control" type="text" placeholder="product name" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="price"><strong>price</strong></label><input className="form-control" type="number" placeholder="product price" min="1" onChange={(event) => setPrice(event.target.value)} />
                </div>
                <div>
                  <div className="form-group"><label htmlFor="description"><strong>description</strong><br /></label><textarea className="form-control" rows="3" onChange={(event) => setDescreption(event.target.value)}></textarea></div>

                  <div className="form-group">
                  {/* <input
                      type="file"
                      // name="selectedFile"
                      onChange={(event) => fileSelect(event.target.value)} 
                    /> */}
                    <label htmlFor="Image"><strong>Image</strong>
                    </label>
                    <div className="row">
                {/* <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" />
                        </div>
                </div> */}
                 </div>
                    <div className="input-group">
                      
                      {/* <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                          Upload
                        </span>
                      </div>
                      <div className="custom-file">
                        <input

                          onChange={(event) => setImage(event.target.value)}
                        />

                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                          Choose file {image}
                        </label>
                      </div> */}
                    </div>

                  </div>
                  <div>
                    {/* <h1>Upload and Display Image usign React Hook's</h1> */}
                    {/* {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
                    {/* <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}


                    <input
                      type="file"
                      // name="selectedFile"eregistrieImage
                      onChange={(event) => setImage(event.target.files[0])} 
                    />
                


                  </div>
                  <div className="form-group"><label htmlFor="Quantity"><strong>Quantity</strong></label><input className="form-control" type="text" placeholder="stock" onChange={(event) => setQte(event.target.value)} /></div>
                  <div className="form-floating">
                    <label htmlFor="floatingSelect" >chose the category </label><br />
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event) => SetCategorie(event.target.value)} onClick={console.log(category)} >
                      {
                        categories.map((categorie) =>
                          <option key={categorie.idCategorie} defaultValue value={categorie.idCategorie}>{categorie.nomCategorie}</option>
                        )}
                    </select>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
            {unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}
            {saved && <div className='alert alert-success' > product was added </div>}
            <div className="form-group"><button className="btn btn-primary btn-sm" type="button" onClick={saveProduct}>Save</button></div>
          </form>
        </div>
      </div>

    </div>
    
  );
}
