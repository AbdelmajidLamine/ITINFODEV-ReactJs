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
}

export default new CommandeService () ;