import axios from 'axios'
class CommandeService {
    allCommandes=() =>{
        return axios.get("http://localhost:8080/commandes")
    } 
    CommandetById=(id) =>{
        return axios.get(`http://localhost:8080/commande/${id}`)
    } 
    livraisonCommand=(id)=>{
        return axios.put("http://localhost:8080/modifyLivraisonCommand"+"/"+id)
    }
    TotalPriceCommandes=()=>{
       return axios.get("http://localhost:8080/commandesTotalPrice")
    }
    getByProducts=(id)=>{
        return axios.get(`http://localhost:8080/getByProducts/${id}`)
    }
    deleteOrder=(id)=>{
        return axios.get(`http://localhost:8080/deleteOrder/${id}`)
    }
    updateQuatity=(id,data)=>{
        return axios.put(`http://localhost:8080/modifyComposantPanierQuantite/${id}`,data)
    }
    deleteCom=(id)=>{
        return axios.delete(`http://localhost:8080/delPanier/${id}`)
    }
}

export default new CommandeService () ;