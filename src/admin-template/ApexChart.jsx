import React, { useState,useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import CommandeService from './CommandeService';

 function ApexChart() {

    const [Commandes, setCommandes] = useState([]);

    useEffect(() => {
        CommandeService.allCommandes().then(res => (setCommandes(res.data)));
    }, []);
    

    

     let res=[];
     let res2=[];
   let series= [{
        name: 'ORDERS',
        data:Commandes.map(element =>{ 
             var date = element.drive.split(' ')[0];
            if (res[date]) {
                res[date] += 1;
            } else {
                res[date] = 1;
            }
            return res[date]
    }),
    }, {
        name: 'PROFIT',
        data: Commandes.map(element =>{ 
            var date = element.drive.split(' ')[0];
           if (res2[date]) {
               res2[date] += parseInt(element.totalPrice);
           } else {
               res2[date] = parseInt(element.totalPrice);
           }
           return res2[date]
   }),
    }]
    let options= {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: Commandes.map(element => element.drive.split(' ')[0])
        },
        tooltip: {
            x: {
                format: 'yyyy/MM/dd'
            },
        },
    }

  return (
    <div id="chart">
    <ReactApexChart options={options} series={series} type="area" height={350} />
   </div>
    
  )
}

export default ApexChart

