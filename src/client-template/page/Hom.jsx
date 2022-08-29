import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch, useHistory } from 'react-router-dom';
import NavBar from '../component/NavBar';
import Slide from '../component/Slide';
import SlideCategories from '../component/SlideCategories';
import Footer from '../component/Footer/Footer';
import Toolbar from "../component/Toolbar";
import GoogleMap from "../component/GoogleMap/GoogleMap";
import FooterMap from "../component/GoogleMap/LocationMap";
import CardProductGrid from '../component/product/CardProductGrid';
import Sticky from 'react-sticky-el';
export default function Hom() {

    // useEffect(() => {
    //     <NavBar />
    // }, []);

    return (
        <div >
            <header>
                <div   >

                    <Toolbar />
                </div>
                <div className="flex-column uk-navbar-container tm-navbar-container  " uk-sticky="cls-active: tm-navbar-container-fixed">
                    <div className="uk-container" >
                        <div className="uk-navbar-left" >
                            <NavBar />
                            <i className="bi bi-cart"></i>
                        </div>
                    </div>
                </div>

            </header>
            <main>
                <div className="uk-light uk-visible@m tm-toolbar-container">



                    <div >
                        <Slide />
                    </div>

                    <div>
                        <SlideCategories />
                    </div>
                    <div>

                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            <h1 className="h1-responsive font-weight-bold text-center my-5">
                                Product
                            </h1>


                        </h2>
                        <div style={{ height: "60px" }} ></div>
                        <div className="d-flex justify-content-center align-items-center" style=
                            {{
                                backgroundImage: 'url("/assets/img/categories/abats.jpg")',
                                backgroundSize:"100% 500px",
                                height:"500px"
                            }}>
                            
                                <h1 style={{fontSize:"60px"}}>

                                    <strong className="text-white mb-0" >
                                        Abats  </strong>
                                </h1>
                           
                           

                        </div>
                        <div style={{ height: "40px" }} ></div>

                    </div >

                    <div id="wrapper">

                        <div className="w-20  " style={{ width: "800px" }}></div>
                        <div>  {CardProductGrid("Abats")}</div>
                        <div className="w-20 " style={{ width: "800px" }}></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/Charu.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                        
                            <h1 style={{ fontSize:"60px"}}>

                                <strong class="text-white mb-0" >
                                    Charcuterie  </strong>
                            </h1>
                   

                    </div>
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-20  " style={{ width: "800px" }}></div>
                            <div>   {CardProductGrid("Charcuterie")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>

                    </div>
                    <div className="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/Boeuf.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                            
                            <h1 style={{ fontSize:"60px"}}>

                            <strong class="text-white mb-0" >
                            Bouef  </strong>
                            </h1>

                        

                    </div>
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-20  " style={{ width: "800px" }}></div>
                            <div>   {CardProductGrid("Le Bouef")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>


                    </div>
                    <div className="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/Agnea.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                            
                            <h1 style={{ fontSize:"60px"}}>

                            <strong class="text-white mb-0" >
                            Agneau  </strong>
                            </h1>

                        

                    </div>
                    
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-50  " style={{ width: "8000px" }}></div>
                            <div>   {CardProductGrid("Agneau")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>

                    </div>
                   
                    <div className="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/prepa.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                            
                            <h1 style={{ fontSize:"60px"}}>

                            <strong class="text-white mb-0" >
                            Preparations  </strong>
                            </h1>

                        

                    </div>
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-20  " style={{ width: "800px" }}></div>
                            <div>   {CardProductGrid("Preparations")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>

                    </div>

                    <div className="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/veauB.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                            
                            <h1 style={{ fontSize:"60px"}}>

                            <strong class="text-white mb-0" >
                            Le Veau  </strong>
                            </h1>

                        

                    </div>
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-20  " style={{ width: "800px" }}></div>
                            <div>   {CardProductGrid("Le Veau")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>

                    </div>
                  
                    <div className="d-flex justify-content-center align-items-center" style=
                        {{
                            backgroundImage: 'url("/assets/img/categories/vol.jpg")',
                            backgroundSize:"100% 500px",
                            height:"500px"
                        }}>
                            
                            <h1 style={{ fontSize:"60px"}}>

                            <strong class="text-white mb-0" >
                            Volaille  </strong>
                            </h1>

                        

                    </div>
                    <div>
                        <div style={{ height: "80px" }} ></div>
                        <div id="wrapper">

                            <div className="w-20  " style={{ width: "800px" }}></div>
                            <div>   {CardProductGrid("Volaille")}</div>
                            <div className="w-20 " style={{ width: "800px" }}></div>
                        </div>


                        <h2 className="h1-responsive font-weight-bold text-center my-5">


                        </h2>

                    </div>

                    <section className="d-block w-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.101716773115!2d1.9323640514755624!3d47.83762277988083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e408c08ede47%3A0xe59550281f36e76a!2sBoucherie%202002!5e0!3m2!1sfr!2sma!4v1597412335716!5m2!1sfr!2sma" width="100%" height="450" frameborder="0" style={{ border: 0 }} aria-hidden="false" ></iframe>

                    </section>


                    <Footer />

                </div>
            </main>
        </div>
    )

}
