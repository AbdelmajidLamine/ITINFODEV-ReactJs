
import React from 'react';
import axios from 'axios'

const get_all = 'http://localhost:8080/Panier/ComposantePaniers';
const delt = 'http://localhost:8080/delPanier';
const updat = 'http://localhost:8080/profile';

const myHeaders = { host: "localhost:4000" };

const config = {
    headers: myHeaders
};
class PanierService {

    getAllComposante() {
        return axios.get('http://localhost:8080/ComposantePaniers');
    }
    getAllComposantePanier(id) {
        return axios.get('http://localhost:8080/Panier/ComposanteforPanier/'+id);
    }
    getPanier(id) {
        return axios.get('http://localhost:8080/paniers/' + id);
    }
    
    addComposantPanier = (data) => {
         axios.post('http://localhost:8080/addPanier',data)
    }

    deleteComposantPanier(idComposante) {
        return axios.delete(`http://localhost:8080/delPanier/` + idComposante);
    }

    updateQantiteProduct(id,data) {
        return axios.put(`http://localhost:8080/modifyComposantPanierQuantite/`+ id, data);
    }

    payment = (data) => {
        return axios.post('http://localhost:8080/payment', data);

    }

    getCoup(coupon) {
        return axios.get(`http://localhost:8080/coupons/${coupon}`);
    }
  addCommand(data){
      axios.post('http://localhost:8080/saveCommande',data);
  }
  addPanier(data){
    return axios.post('http://localhost:8080/newPanier',data);
  }

  maxIdPanier(){
    return axios.get('http://localhost:8080/maxId')
  }

}

export default new PanierService();