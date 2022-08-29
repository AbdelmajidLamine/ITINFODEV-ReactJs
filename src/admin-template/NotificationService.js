import axios from 'axios';


class NotificationService{

      addNotification=(data)=>{
        return axios.post(`http://localhost:8080/addNotification`,data)
      }

      getNotification(){
        return axios.get(`http://localhost:8080/notification`)
      }

      getUnread(){
        return axios.get(`http://localhost:8080/unreadNotification`)
      }
      
      updateNotification(id){
        return axios.get(`http://localhost:8080/updateNot/${id}`)
      }

}

export default new NotificationService();