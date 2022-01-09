
import axios from 'axios'

const get_all = 'http://localhost:8080/categories';
const delt  = 'http://localhost:8080/categories';
const updat  = 'http://localhost:8080/profile';

class PanierService {

    getAllCategorie(){
        return axios.get(get_all);
    }
    addComposantPanier=(data) =>{
        return axios.post('http://localhost:8080/addPanier',data)
    }
    
     newPanier(){
         return axios.get('http://localhost:8080/newPanier')
     }
}

 
 export default new PanierService();