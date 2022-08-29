import axios from 'axios'
class ProductsService {
    allProducts=() =>{
        return axios.get("http://localhost:8080/products")
    } 
    productById=(id) =>{
        return axios.get(`http://localhost:8080/product/${id}`)
    } 
    modifyProductPrice=(id,data) =>{
        return axios.put(`http://localhost:8080/products` +'/'+id,data)
    }

    deleteProduct=(id)=>{
        return axios.get(`http://localhost:8080/removeProduct/${id}`)
    }
     
    getProduitByCategorie=(name)=>{
        return axios.get(`http://localhost:8080/products/${name}`)
    }


    addProduct=(data) =>{
        return axios.post(`http://localhost:8080/addProduct`,data)
    }
    allClients=()=>{
         
        return   axios.get("http://localhost:8080/clients")
    }
    livraisonCommand=(id)=>{
        return axios.put("http://localhost:8080/modifyLivraisonCommand"+"/"+id)
    }

}

export default new ProductsService () ;