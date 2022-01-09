import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {

  return (

    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0" style={{ backgroundColor: "#000" }}>
      
      <MDBContainer className="mt-5 mb-4 text-center text-md-left" >
        <MDBRow> </MDBRow>
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold text-danger">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <img src="/logo.png" />
              Boucherie
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-2" >
            <h6 className="text-uppercase font-weight-bold text-danger">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>

              <a href="/product/agneau" style={{ color: "#858796" }} >L'Agneau</a>
            </p>
            <p>
              <a href="/product/abats" style={{ color: "#858796" }} >Abats</a>
            </p>
            <p>
              <a href="/product/charcuterie" style={{ color: "#858796" }} >Charcuterie</a>
            </p>
            <p>
              <a href="/product/preparations" style={{ color: "#858796" }} >Préparations</a>
            </p>
            <p>
              <a href="/product/bouef" style={{ color: "#858796" }} >Le Boeuf</a>
            </p>
            <p>
              <a href="/product/veau" style={{ color: "#858796" }} >Le Veau </a>
            </p>
            <p>
              <a href="/product/volaille" style={{ color: "#858796" }} >Le Volaille </a>
            </p>

          </MDBCol>
          <MDBCol md="3" lg="2" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold text-danger">
              <strong>Retrouvez-nous</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a >2 Rue Ernest Renan, 45100</a>
            </p>
            <p>
              <a >Orléans, France</a>
            </p>
            <p className="fa  mr-3">
              <a ></a>
            </p>
            <p>
              <strong className="text-uppercase font-weight-bold ">Overt</strong>
            </p>
            <p>
              <a >Tous les jours</a>
            </p>
            <p>
              <a >Du 9:00 à  19:30</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold text-danger">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />

            <p>
              <i className="fa fa-envelope mr-3" /> org12@hotmail.fr
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +33238630042
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
            <p>
              <i className="fa  mr-3" />
            </p>
            <p>
              <i className="fa  mr-3" />
            </p>
            <p>
              <img src="/payment.png" />
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 btn-secondary " >
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} @Powered by <a href="#">ITINFODEV </a> © Boucherie 2002 - All rights reserved
        </MDBContainer>
      </div>
    </MDBFooter>

  );
}

export default Footer
