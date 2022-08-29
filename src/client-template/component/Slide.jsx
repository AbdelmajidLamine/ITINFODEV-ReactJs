import React from "react";
import {  MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBCard } from
  "mdbreact";
import "animate.css"

function Slide(){

  return (

    <MDBCard   >
    
       <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}

      >
        <MDBCarouselInner style={{ height: "700px", display: "flex" }}>
          <MDBCarouselItem itemId="1">
           <MDBView>
              <img 
              height="100%"
              width="100%"
              
                src="/assets/img/categories/image.jpg"
              />
              <MDBMask overlay="black-light" />
            </MDBView> 
            
             
            <MDBCarouselCaption className="animated fade-out-up" >
            <div class="static-slider10">
                <div class="container">
                
                  <div class="row justify-content-center ">
                
                    <div class="col-md-8 align-self-center text-center">
                      <span class="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">B2002</span>
                      <h1 class="my-3 title text-white text-uppercase">Boucherie2002 orleanslasource</h1>
                      <h6 class="text-white font-weight-normal op-8">Très bonne qualité, très bon service , très bon prix...</h6>
                      <a class="btn btn-outline-light rounded-pill btn-md mt-3" href="/product"><span>commencé vos achats!</span></a>
                    </div>
                  

                  </div>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                height="100%"
                width="100%"
                src="/assets/img/categories/image2.jpg"

              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
            <div class="static-slider7" >
  <div class="container">
    
    <div class="row justify-content-center">
     
      <div class="col-md-8 align-self-center text-center">
        <h1 class="title text-white typewrite" data-period="2000" data-type='[ "Colour", "Wrapkit" ]'>Boucherie</h1>
        <h5 class="text-white">Très bonne qualité, très bon service , très bon prix...</h5>
        <a class="btn btn-danger-gradiant rounded-pill btn-md mt-3 border-0 text-white" href="/product"><span>Products <i class="ti-arrow-right"></i></span></a>
        <a class="btn btn-outline-light rounded-pill btn-md mt-3" data-toggle="modal" data-target="#static-slide7" href="/home"><i class="mr-2 icon-control-play"></i> Intro </a>
      </div>
    
     
    </div>
  </div>
</div>
            


            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                height="100%"
                width="100%"
                src="/assets/img/categories/butcher.jpg"

              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
            <div class="static-slider7" >
  <div class="container">
    
    <div class="row justify-content-center">
     
      <div class="col-md-8 align-self-center text-center">
        <h1 class="title text-white typewrite" data-period="2000" data-type='[ "Colour", "Wrapkit" ]'>2002</h1>
        <h5 class="text-white">Très bonne qualité, très bon service , très bon prix...</h5>
        <a class="btn btn-danger-gradiant rounded-pill btn-md mt-3 border-0 text-white" href="/product"><span>Products <i class="ti-arrow-right"></i></span></a>
        <a class="btn btn-outline-light rounded-pill btn-md mt-3" data-toggle="modal" data-target="#static-slide7" href="/home"><i class="mr-2 icon-control-play"></i> Intro </a>
      </div>
    
     
    </div>
  </div>
</div>
             
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                height="100%"
                width="100%"
                src="/assets/img/categories/image3.jpg"

              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="justify-content-center"  >

            <div class="static-slider10">
                <div class="container">
                
                  <div class="row justify-content-center ">
                
                    <div class="col-md-8 align-self-center text-center">
                      <span class="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">B2002</span>
                      <h1 class="my-3 title text-white text-uppercase">Boucherie2002 orleanslasource</h1>
                      <h6 class="text-white font-weight-normal op-8">Très bonne qualité, très bon service , très bon prix...</h6>
                      <a class="btn btn-outline-light rounded-pill btn-md mt-3" href="/product"><span>commencé vos achats!</span></a>
                    </div>
                  

                  </div>
                </div>
              </div>


            </MDBCarouselCaption>
          </MDBCarouselItem> 
        </MDBCarouselInner>
      </MDBCarousel> 
    </MDBCard>

  );
}

export default Slide;