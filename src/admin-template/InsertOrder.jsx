import React, { useState, useEffect } from 'react'
import CategorieService from './CategorieService'
import ProductsService from '../client-template/component/product/ProductsService'
import CommandeSurPlace from './CommandeSurPlace'
import Datetime from 'react-datetime';
import TimePicker from 'react-bootstrap-time-picker';

export default function InsertOrder() {


    const [categories, setCategories] = useState([])
    const [categorie, setCategorie] = useState('')
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState('')
    const [Quanity, setQuantity] = useState(0)
    const [product, setProduct] = useState([])
    const [showCategorie,setShowCategorie]=useState(true)
    const [showProducts,setShowProducts]=useState(false)
    const [showPrice,setShowPrice]=useState(false)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var tim =(today.getUTCHours()+1) +":"+today.getUTCMinutes();

    today =yyyy+"-"+mm+"-"+dd;
    const [time,setTime] = useState('');
    const [drive, setDrive] = useState('');
    const [max,setMax] =useState("09:00");
    var jj='';
    
    function definfMax(v) {
        setDrive(v)
        
        jj=v.slice(8,10);
       
        if(jj.localeCompare(dd)==0)
        setMax("12:00")
       else
     {  setMax("10:00")}
    }


    useEffect(() => {
        CategorieService.getAllCategorie().then((res) => setCategories(res.data))
        
         
    }, [])

    const nextToProducts=()=>{
        setShowProducts(true)
        setShowCategorie(false)
        ProductsService.getProduitByCategorie(categorie).then(res=>setProducts(res.data))

    }

    const nextToPrice=()=>{
        setShowProducts(false)
        setShowPrice(true)
        ProductsService.productById(productId).then(res=>setProduct(res.data))
       

    }





    const dataf = new FormData()
    dataf.append("productName", product.name)
    dataf.append("Quantity", Quanity)
    dataf.append("drive",drive);
    dataf.append("time",time);
    dataf.append("TotalPrice", product.price * Quanity)
    const SubmitData = () => {
        setShowCategorie(true)
        setShowPrice(false)
        CommandeSurPlace.addCommandes(dataf)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

    }



    return (
        <div class="col-sm-12 col-xs-12 content pt-3 pl-0">

<h5 class="mb-0" ><strong>Insert Order</strong></h5>
<br></br>
                <span class="text-secondary">Dashboard <i class="fa fa-angle-right"></i> Insert Order</span>
                <br></br>
                <br></br>
            {
                showCategorie &&
                <div class="col-sm-5">
                    <div class="form-group">
                        <label>Categorie</label><br></br>
                        <select name="Categorie" class="form-control" onChange={(event) => setCategorie(event.target.value)} onClick={console.log(categorie)}>
                            {
                                categories.map((categorie) =>
                                    <option key={categorie.idCategorie} defaultValue value={categorie.nomCategorie}>{categorie.nomCategorie}</option>
                                )}
                        </select>
                    </div>
                    <button className="btn btn-sm btn-primary" onClick={()=>nextToProducts()} > next</button>

                </div>
            }
            {
                showProducts &&
                <div class="row">
                    <div class="col-sm-12">
                        <h5 class="info-text"> Chose the product's name & Quantity you want!!</h5>
                    </div>
                    <div class="col-sm-7">
                        <div class="form-group">
                            <label>Products:</label><br></br>
                            <select name="products" class="form-control" onChange={(event) => setProductId(event.target.value)}>
                                {
                                    products.map((product) =>
                                        <option key={product.id} defaultValue value={product.id}> {product.name} </option>

                                    )}
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label>Quantity:</label>
                            <input type="text" class="form-control" placeholder="0" onChange={(event) => setQuantity(event.target.value)} />
                        </div>
                    </div>
                    <div className="md-form mb-3"> 
                                <input type="date" id="date" min={today}  className = "form-control input-sm datepicker"  required 
                                onChange={(event) =>
                                    definfMax(event.target.value)
                                }

                                 />
                                <label for="drive" className="">Drive <strong><i class="text-danger"> *</i></strong></label>
                 </div>
                 <div className="md-form mb-3">
                                <TimePicker  
                                defaultValue={Selection} 
                                value={time}
                                start={max}
                                step={20}
                               end="22:00"
                                onChange={value => setTime(  Math.floor(value/3600)+ ":"+  Math.floor((value%3600)/60))
                                
                            } 
                                />
                                <label for="time" className="">Heure de Ramassage <strong><i class="text-danger"> *</i></strong></label>
                </div>

                    <button className="btn btn-sm btn-primary" onClick={()=>nextToPrice()}> next</button>


                </div>
            }
            {
                showPrice &&
                <div class="col-sm-12">
                    <h4 class="mt-2"><strong>Total:$ {product.price * Quanity}</strong></h4>
                    <button className="btn btn-sm btn-primary" onClick={()=>SubmitData()} > Save</button>
                </div>
            }

        </div>
    );
}

