import React, { Component } from 'react'
import axios from 'axios'

 class ClientService{
    getAllClient(){
        return axios.get('http://localhost:8080/client');
    }
}

export default new ClientService();
