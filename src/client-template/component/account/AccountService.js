import axios from 'axios'

class AccountService {

   
    SingUp=(data) =>{
        return axios.post('http://localhost:8080/SignUp',data)
    }

    getClient(id){
        return axios.get('http://localhost:8080/client/'+id)
    }

    getCommande(mail){
        return axios.get(`http://localhost:8080/commandess/${mail}`)
    }
    findByLivraisonCommande(id){
        return axios.get(`http://localhost:8080/livraisonCommande/${id}`)
    }




}

 
 export default new AccountService();