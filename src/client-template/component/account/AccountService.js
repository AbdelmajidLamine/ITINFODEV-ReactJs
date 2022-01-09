import axios from 'axios'

class AccountService {

   
    SingUp=(data) =>{
        return axios.post('http://localhost:8080/SignUp',data)
    }

    getClient(id){
        return axios.get('http://localhost:8080/client/'+id)
    }

    getCommande(mail){
        return axios.get('http://localhost:8080/commandess/'+mail)
    }




}

 
 export default new AccountService();