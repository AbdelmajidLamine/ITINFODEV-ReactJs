import React from "react";

import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCardFooter, MDBTooltip, MDBCardTitle,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn
} from "mdbreact";

import { Link } from "react-router-dom";

const SlideCategories = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Our Categories
            </h2>
            <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} >
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                            <MDBRow>
                                <MDBCol md="2">

                                </MDBCol>
                                <MDBCol md="2">
                                    
                                        <div class="item__categories">

                                            <div class="card__categories">
                                                <div class="pos1__categories" style={{
                                                    backgroundImage:' url("/assets/img/categories/abats.png")',
                                                    backgroundSize: '350px',
                                                    backgroundPosition: 'center'
                                                }}><div class="abv__categories abv1__categories">Abats</div></div>
                                               <Link to={"/categorie/Abats"}> <h2>"show products"</h2></Link>
                                            </div>
                                            </div>
                                    
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                 <MDBCol md="2">
                                   
                                    <div class="item__categories">

                                    <div class="card__categories">
                                        <div class="pos2__categories" style={{
                                            backgroundImage:' url("/assets/img/categories/agneau.jpg")',
                                            backgroundSize: '350px',
                                            backgroundPosition: 'center'
                                        }}><div class="abv__categories abv1__categories">L'Agneau</div></div>
                                    <Link to={"/categorie/agneau"}> <h2>"show products"</h2></Link>
                                    </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                <MDBCol md="2">
                                    <div class="item__categories">

                                    <div class="card__categories">
                                        <div class="pos3__categories" style={{
                                            backgroundImage:' url("/assets/img/categories/boeuff.jpg")',
                                            backgroundSize: '350px',
                                            backgroundPosition: 'center'
                                        }}><div class="abv__categories abv1__categories">Le Boeuf</div></div>
                                    <Link to={"/categorie/bouef"}> <h2>"show products"</h2></Link>
                                    </div>
                                    </div>
                                </MDBCol> 
                            </MDBRow>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBRow>
                                <MDBCol md="2">

                                </MDBCol>
                                <MDBCol md="2">
                                   
                                    <div class="item__categories">

                                    <div class="card__categories">
                                        <div class="pos1__categories" style={{
                                            backgroundImage:' url("/assets/img/categories/volaille.jpg")',
                                            backgroundSize: '350px',
                                            backgroundPosition: 'center'
                                        }}><div class="abv__categories abv1__categories">Le Volaille</div></div>
                                    <Link to={"/categorie/volaille"}> <h2>"show products"</h2></Link>
                                    </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                <MDBCol md="2">
                                    <div class="item__categories">

                                        <div class="card__categories">
                                            <div class="pos2__categories" style={{
                                                backgroundImage:' url("/assets/img/categories/veau.jpg")',
                                                backgroundSize: '350px',
                                                backgroundPosition: 'center'
                                            }}><div class="abv__categories abv1__categories">Le Veau</div></div>
                                        <Link to={"/categorie/veau"}> <h2>"show products"</h2></Link>
                                        </div>
                                        </div>
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                <MDBCol md="2">
                                    
                                    <div class="item__categories">

                                        <div class="card__categories">
                                            <div class="pos3__categories" style={{
                                                backgroundImage:' url("/assets/img/categories/Preparations.jpg")',
                                                backgroundSize: '350px',
                                                backgroundPosition: 'center'
                                            }}><div class="abv__categories abv1__categories">Préparations</div></div>
                                        <Link to={"/categorie/preparations"}> <h2>"show products"</h2></Link>
                                        </div>
                                        </div>
                                </MDBCol>

                            </MDBRow>


                        </MDBCarouselItem> 


                    </MDBRow>
                </MDBCarouselInner>
            </MDBCarousel>
        </section>
    );
}

export default SlideCategories;