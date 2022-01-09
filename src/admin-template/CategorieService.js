
import axios from 'axios'

const get_all = 'http://localhost:8080/categories';
const delt  = 'http://localhost:8080/categories';
const updat  = 'http://localhost:8080/profile';

class CategorieService {

    getAllCategorie(){
        return axios.get(get_all);
    }
    addCategorie=(data) =>{
        return axios.post('http://localhost:8080/new-categorie',data)
    }
      deleteCategorie(id){
       return  axios.delete(delt + '/' + id); 
      }
     afichePhoto(){
          return axios.get(updat );
      }

      updatePohtoAdmin(data,id){
          return axios.put(updat + '/' + id);
      }
     
      getPhoto(data, id){
         
          return axios.get( updat + '/' + id);
      }

}

 
 export default new CategorieService();