import React, { useState } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './css.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer/Footer';

const SignInForm = () => {


  const [password, setPasswod] = useState('')
  const [logWrong, setLogWrong] = useState(false)
  const [email, setEmail] = useState('')
  const history = useHistory()
  const prixPanier = sessionStorage.getItem('prixFinal');
  const chekoutUser = sessionStorage.getItem('authenticatLoginchekout');




  const [id, setId] = useState();

  const registerSuccessfulLoging = (name, idClient, email, idPanier) => {

    //  const [idPanie,setidPanier]=useState(16381)
    const idPanieDelet = sessionStorage.getItem('newPanier');

    const fr = new FormData();
    fr.append('idPanier', idPanier)
    fr.append('prixPanier', Number(prixPanier).toFixed(3))

    if (chekoutUser == 1) {

      sessionStorage.setItem('authenticatLoginchekout', 0);
      sessionStorage.setItem('countActivé', 1);
      sessionStorage.setItem('authenticatedId', idClient);
      sessionStorage.setItem('authenticatedIdPanier', idPanier);
      sessionStorage.setItem('prixFinal', prixPanier)

      axios.put("http://localhost:8080/modifyP", fr);

      // axios.delete('http://localhost:8080/deletePanier/' + idPanieDelet)

      history.push('/chekout')



    }
    else if (name) {
      sessionStorage.setItem('authenticatedUser', name);
      sessionStorage.setItem('authenticatedId', idClient);
      sessionStorage.setItem('authenticatedMail', email);
      sessionStorage.setItem('authenticatedIdPanier', idPanier);
      history.push('/User')
    }
    else setLogWrong(true);
  }


  const loginHandling = () => {

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios.post("http://localhost:8080/SignIn", formData)
      .then(res => registerSuccessfulLoging(res.data.name, res.data.idClient, res.data.email, res.data.panier.idPanier))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          setLogWrong(true);
        } else if (error.request) {
          // The request was made but no response was received
          setLogWrong(true);
        } else {
          // Something happened in setting up the request that triggered an Error
          setLogWrong(true)
        }
      });
  }




  return (

    <div style={{        backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
    height: "700px"            }}>

     
      
      {/* <div style={{ height: "20px" }} ></div>
      <div class="bg-image d-flex justify-content-center align-items-center" style=
        {{
          backgroundImage: 'url("https://boucherie2002-orleanslasource.fr/wp-content/uploads/2020/08/boucherie-en-ligne.jpg")',
          height: "300px"
        }}>
        <div class="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <h1 style={{ width: "rem", height: "50px" }}>

            <strong class="text-white mb-0" >
              Log in  </strong>
          </h1>
        </div>

      </div> */}
      <h2 className="my-3 h2 text-center"></h2>
      {/* <Breadcrumbs class=" my-3 nav justify-content-center">
        <nav aria-label="breadcrumb">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="/Home" > Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">/</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled"  >Cart</a>
            </li>

          </ul>
        </nav>

      </Breadcrumbs> */}
<div style={{ height: "80px" }} ></div>
      <MDBContainer  >

        <MDBRow className="d-flex justify-content-center p-2 w-100" >
          <MDBCol md="6" >
            <MDBCard style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} >
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className=" mt-3 mb-4 pb-1 mx-5">
                  <strong class="text-white mb-0" >
              Log in  </strong>
                  </h3>

                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4" >
                <MDBInput  group type="email" containerClass="mb-0" validate onChange={(event) => setEmail(event.target.value)} />
                <label > <strong className="text-white mb-0" >
                Your email</strong> </label>
                <MDBInput
                
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={(event) => setPasswod(event.target.value)}
                />
                <label > <strong className="text-white mb-0" >
                Your password </strong> </label>
                <p className="font-small d-flex justify-content-end">
                <strong className="text-white mb-0" >
                Forgot </strong>
                 
                  <a
                    href="/forgot-password"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                  <strong> Password?</strong>
                  </a>
                </p>
                {logWrong && <div className='alert alert-warning' > connexion failed </div>}
                <button className="btn btn-danger btn-block text-white btn-user  " onClick={loginHandling}>Log in</button>
                <div className="text-center mb-4 mt-5">

                </div>

                <p className="font-small text-white d-flex justify-content-center">

                <strong>    Don't have an account?</strong>
                
                  <a
                    href="/SignUp"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Sign up
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
     
      <div style={{ height: "100px" }} ></div>
      <div> 
        <Footer />
      </div>
      
    </div>
  );
};

export default SignInForm;