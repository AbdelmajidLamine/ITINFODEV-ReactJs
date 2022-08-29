import axios from 'axios'

class CommandeSurPlace {
    getAllCommandes(){
        return axios.get('http://localhost:8080/AllOrders');
    }
    addCommandes(data){
        return axios.post('http://localhost:8080/SaveOrder',data);
    }
    deleteCommande(id){
        return axios.post(`http://localhost:8080/deleteMarketOrder/${id}`);
    }
}

export default new CommandeSurPlace()