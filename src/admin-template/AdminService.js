import axios from 'axios'
class AdminService{
    getAdminById=(id) =>{
        return axios.get(`http://localhost:8080/admin/${id}`)
    } 
}

export default new AdminService();