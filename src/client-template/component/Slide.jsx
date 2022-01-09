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
        <MDBCarouselInner style={{ height: "500px", display: "flex" }}>
          <MDBCarouselItem itemId="1">
           <MDBView>
              <img className=" w-100"
                src="https://media.istockphoto.com/photos/pork-display-in-butcher-shop-picture-id450516993?k=6&m=450516993&s=612x612&w=0&h=k8s-fsZLuw34rdjWZehC3iGx504HPIqvvYXzr0azFYs="
              />
              <MDBMask overlay="black-light" />
            </MDBView> 
             <img className=" w-100"
                src="https://media.istockphoto.com/photos/pork-display-in-butcher-shop-picture-id450516993?k=6&m=450516993&s=612x612&w=0&h=k8s-fsZLuw34rdjWZehC3iGx504HPIqvvYXzr0azFYs="
              />
              <MDBMask overlay="black-light" />
            <MDBCarouselCaption className="animated fade-out-up" >
              <div class=" container position-relative ">
                <div class="position-absolute top-0 start-50 translate-middle"></div>
                <h1 className="text-center"
                  md="6"> <strong ><a  >
                    <h1 className="animate__animated animate__fadeInUpBig fw-bold ">
                      <p className=" display-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      > Boucherie2002 orleanslasource</p>
                    </h1></a></strong>
                </h1>
                <h1 style={{ width: "70rem", height: "150px" }} md="6"> <strong><a style={{ height: "100px" }}></a></strong>
                </h1>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className=" w-100"
                src="https://media.istockphoto.com/photos/meat-display-refrigerator-and-walk-in-refrigerator-in-a-grocery-store-picture-id944300590?b=1&k=6&m=944300590&s=170667a&w=0&h=vjJSms1touiqjbRUs-doeWSbV6RW5KLEXhHY7p28QxM="

              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <div className=" container position-relative ">


                <div className="position-absolute top-0 start-50 translate-middle"></div>

                <h1 className="text-center"

                  md="6"> <strong ><a  >
                    <h1 className="animate__animated animate__fadeInUpBig fw-bold ">
                      <p className=" display-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      > Boucherie2002 orleanslasource</p>
                    </h1></a></strong>
                </h1>
                <h1 style={{ width: "70rem", height: "150px" }} md="6"> <strong><a style={{ height: "100px" }}></a></strong>
                </h1>

              </div>


            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className=" w-100"
                src="https://img.freepik.com/photos-gratuite/rencontre-rouge-frais-ouvrier-boucherie-travaillant-arriere-plan_342744-662.jpg?size=338&ext=jpg&uid=R49036081&ga=GA1.2.103577300.1627400707"

              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <div className=" container position-relative ">


                <div className="position-absolute top-0 start-50 translate-middle"></div>

                <h1 className="text-center"

                  md="6"> <strong ><a  >
                    <h1 className="animate__animated animate__fadeInUpBig fw-bold ">
                      <p className=" display-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      > Boucherie2002 orleanslasource</p>
                    </h1></a></strong>
                </h1>
                <h1 style={{ width: "70rem", height: "150px" }} md="6"> <strong><a style={{ height: "100px" }}></a></strong>
                </h1>

              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className=" w-100"
                src="https://media.istockphoto.com/photos/meat-display-refrigerator-and-walk-in-refrigerator-in-a-grocery-store-picture-id944300590?b=1&k=6&m=944300590&s=170667a&w=0&h=vjJSms1touiqjbRUs-doeWSbV6RW5KLEXhHY7p28QxM="

              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="justify-content-center"  >


              <div className=" container position-relative ">


                <div className="position-absolute top-0 start-50 translate-middle"></div>

                <h1 className="text-center"

                  md="6"> <strong ><a  >
                    <h1 className="animate__animated animate__fadeInUpBig fw-bold ">
                      <p className=" display-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      > Boucherie2002 orleanslasource</p>
                    </h1></a></strong>
                </h1>
                <h1 style={{ width: "70rem", height: "150px" }} md="6"> <strong><a style={{ height: "100px" }}></a></strong>
                </h1>

              </div>


            </MDBCarouselCaption>
          </MDBCarouselItem> 
        </MDBCarouselInner>
      </MDBCarousel> 
    </MDBCard>

  );
}

export default Slide;