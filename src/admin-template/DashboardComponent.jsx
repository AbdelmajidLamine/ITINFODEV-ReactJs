import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ReactApexChart from 'react-apexcharts'
import CommandeService from './CommandeService'
import ProductsService from './ProductsService'
import ClientService from './ClientService'
import ApexChart from './ApexChart';
import axios from 'axios';
import ComposantProducts from './ComposantProducts';
import { Link, NavLink } from 'react-router-dom';
import ApexChartTwo from './ApexChartTwo';




export default function DashboardComponent() {

    const [commandes,setCommandes]=useState([])
    const [priceTotal,setPriceTotal]=useState(0)
    const [products,setProducts]=useState([])
    const [client,setClient]=useState([])
    const [composante,setComposante]=useState([])



    let COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    let pieData = [
        {
            "name": "Profit",
            "value": priceTotal
        },
        {
            "name": "products",
            "value": products.length
        },
        {
            "name": "customers",
            "value": client.length
        },
       
    ];

    let firstChart= {
          
        series: [priceTotal, products.length, client.length],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function(val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
          },
        //   title: {
        //     text: 'Gradient Donut with custom Start-angle'
        //   },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    };
    useEffect(() => {
        CommandeService.TotalPriceCommandes().then(res=>(setPriceTotal(res.data)))
        ProductsService.allProducts().then(res=>(setProducts(res.data)))
        ClientService.getAllClient().then(res=>(setClient(res.data)))
       
        
        
    },[]);


    return (
        <div>
            <h5 class="mb-3" ><strong>Dashboard</strong></h5>
                
                <div class="row mt-1">
                    <div class="col-sm-8 col-md-8">
                        
                        <div class="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
                            <h6 class="mb-3">Revenue Analytics</h6>
                            
                            <ApexChart />
                            
                        </div>
                        

                    </div>

                    <div class="col-sm-4 col-md-4">
                        
                        <div class="bg-white border shadow mb-4">
                            <div class="media p-4">
                                <div class="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                                    <i class="fa fa-globe text-theme"></i>
                                </div>
                                <div class="media-body pl-2">
                                    <h3 class="mt-0 mb-0"><strong>{priceTotal}</strong></h3>
                                    <p><small class="bc-description text-theme">Total Revenue</small></p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white border shadow mb-4">
                            <div class="media p-4">
                                <div class="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                                    <i class="fa fa-heart-o text-danger"></i>
                                </div>
                                <div class="media-body pl-2">
                                    <h3 class="mt-0 mb-0"><strong>{client.length}</strong></h3>
                                    <p><small class="bc-description text-danger">Customers</small></p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white border shadow">
                            <div class="media p-4">
                                <div class="align-self-center mr-3 rounded-circle notify-icon_2 bg-white">
                                    <i class="fa fa-lightbulb text-success"></i>
                                </div>
                                <div class="media-body pl-2">
                                    <h3 class="mt-0 mb-0"><strong>{products.length}</strong></h3>
                                    <p><small class="text-success bc-description">Total Products</small></p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
                
                <div class="row mt-3">
                <div class="col-sm-8 col-md-8">
                        
                        <div class="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
                            <h6 class="mb-3">Revenue Analytics</h6>
                            
                            <ApexChartTwo />
                            
                        </div>
                        

                    </div>


                    {/* <div class="col-sm-6 col-md-4">
                       
                        <div class="mt-1 mb-3 p-3 button-container bg-white shadow-sm border">
                            <h6 class="mb-3">Store summary</h6><hr></hr>

                            <ReactApexChart options={firstChart.options} series={firstChart.series} type="donut" width={340} />
                        </div>
                    </div> */}

                    <div class="col-sm-12 col-md-4">
                       
                        <div class="card shadow">
                            <div class="card-body">
                            <h6 class="mb-3">Store summary</h6><hr></hr>
                            <ReactApexChart options={firstChart.options} series={firstChart.series} type="donut" width={340} />
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="mt-4 mb-4 bg-white border shadow lh-sm">
                    
                    <div class="product-list">
                        
                        <div class="row mb-0 px-3 pt-3">
                            <div class="col-sm-8 pt-2"><h6 class="mb-4 bc-header">Recent Sales</h6></div>
                            <div class="col-sm-4 text-right pb-3">
                                <div class="pull-right mr-3 btn-order-bulk">
                                    <button class="btn btn-theme btn-round"><Link  to="/adminMain/product" className='text-white'>View all</Link></button>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="table-responsive product-list">
                            
                            <table class="table mt-0" id="productList">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Customer</th>
                                        <th>Categories</th>
                                        {/* <th>Popularity</th> */}
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        products.map((element,index)=>
                                           (index<3 ? <ComposantProducts idProduct={element.id}  />:null)
                                        )
                                    }
                                       
                                  
                                    </tbody>
                            </table>
                        </div>
                    </div>
               
                </div>
            


    
        </div>
    )
}