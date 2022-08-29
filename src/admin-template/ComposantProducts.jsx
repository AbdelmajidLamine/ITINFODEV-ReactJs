import React, { useEffect, useState } from 'react'
import CommandeService from './CommandeService'

export default function ComposantProducts({idProduct}) {
    const [composante,setComposante]=useState([])

    useEffect(()=>{
        CommandeService.getByProducts(idProduct).then(res=>setComposante(res.data))
    },[])

    const style={
        bag:"background-image: url('assets/img/profile.jpg')"
    }

    
  return (
    composante.map(elem=>
                                                
        <tr>
        <td class="align-middle">{elem.nameProduct}</td>
        <td class="align-middle">
            <div class="customers">
                <span class="customer-circle" style={{backgroundImage: `url("/assets/img/admins/avatar4.jpeg")`}}></span>
                <span class="customer-circle end text-light text-center pt-2">+{elem.nbrClient-1}</span>
            </div>
        </td>
        <td class="align-middle">
            <button class="btn-outline-theme btn-round">
                {elem.nameCategorie}
            </button>
        </td>
        {/* <td class="align-middle">
            <div class="progress" >
                <div class="progress-bar bg-theme" role="progressbar" aria-valuenow="85"  aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td> */}
        <td>{(elem.amount)*(elem.productPrice)}$</td>
    </tr>
    )
  )
}
