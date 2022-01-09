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
                                    <MDBCard className="mb-2">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\abats.png" /> 
                                        <MDBCardBody>
                                            <MDBCardTitle>Abats</MDBCardTitle>
                                            <MDBCardText>
                                            </MDBCardText>
                                            <Link to={"/categorie/Abats"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                 <MDBCol md="2">
                                    <MDBCard className="mb-2">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\agneau.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>L'Agneau</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                            <Link to={"/categorie/agneau"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="2">
                                    <MDBCard className="mb-2">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\boeuff.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Le Boeuf</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                            <Link to={"/categorie/bouef"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="2">
                                    <MDBCard className="mb-2">
                                        <div className="col-md-20 text-center">
                                            <MDBCardImage cascade top src="\assets\img\categories\charcuterie-halal.jpg"
                                            />

                                        </div>

                                        <MDBCardBody>
                                            <MDBCardTitle>Charcuterie</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>

                                            <Link to={"/categorie/charcuterie"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol> 
                            </MDBRow>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBRow>
                                <MDBCol md="2">

                                </MDBCol>
                                <MDBCol md="2">
                                    <MDBCard className="mb-1">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\volaille.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Le Volaille</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                            <Link to={"/categorie/volaille"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                <MDBCol md="2">

                                    <MDBCard className="mb-1">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\veau.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Le Veau</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                            <Link to={"/categorie/veau"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol md="1">

                                </MDBCol>
                                <MDBCol md="2">
                                    <MDBCard className="mb-1">
                                        <MDBCardImage className="img-fluid" src="\assets\img\categories\Preparations.jpg" />
                                        <MDBCardBody>
                                            <MDBCardTitle>Préparations</MDBCardTitle>
                                            <MDBCardText>
                                            </MDBCardText>
                                            <Link to={"/categorie/preparations"} class="btn btn-primary stretched-link" >  show products</Link>
                                        </MDBCardBody>
                                    </MDBCard>
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