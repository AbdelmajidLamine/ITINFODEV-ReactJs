import React,{useState,useEffect} from 'react'
import ReactApexChart from 'react-apexcharts'
import CommandeService from './CommandeService';
import CommandeSurPlace from './CommandeSurPlace';

export default function ApexChartTwo() {

    const [Commandes, setCommandes] = useState([]);
    const [CommandesSurPlace,setCommandesSurPlace]=useState([])

    useEffect(() => {
        CommandeService.allCommandes().then(res => (setCommandes(res.data)));
        CommandeSurPlace.getAllCommandes().then(res=>(setCommandesSurPlace(res.data)))
    }, []);
    

    

     let res=[];
     let res2=[];
   let series= [{
        name: 'WEBSITE',
        data:CommandesSurPlace.map(element =>{ 
            var date = element.drive.split(' ')[0];
            if (res2[date]) {
                res2[date] += parseInt(element.prixTotal);
            } else {
                res2[date] = parseInt(element.prixTotal);
            }
            return res2[date]
    }),
    }, {
        name: 'SUR PLACE ',
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
    <ReactApexChart options={options} series={series} type="bar" height={350} />
   </div>
    
  )
}
