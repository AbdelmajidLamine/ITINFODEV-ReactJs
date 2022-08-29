import React, { useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer/Footer";
import axios from "axios";

const Contact = () => {

  const [unsaved, setUnsaved] = useState(false)
  const [saved, setSaved] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [subjetCommande, setSubjetCommande] = useState(false)
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const formData = new FormData();
  formData.append("name", name)
  formData.append("email", email)
  formData.append("tel", tel)
  formData.append("subjetCommande", subjetCommande)
  formData.append("subject", subject)
  formData.append("description", description)


  const handleSubmit = e => {
    console.log('handleSubmit() Submit form with state:', formData);
    e.preventDefault();
  }



  const addContact = () => {
    if (name, description, tel, subject, description) {
      axios.post("http://localhost:8080/contact", formData)
        .then(res => alert("votre message est envoyer ")

        )
        .catch(err => alert("remplire toul les chomp "))

      // .then( 
      //   alert("votre message est envoyer "),
      //   )
      // .catch(
      //   alert(" votre message n'est pas envoyer ,renvoyer plaise"),

      //   )

    }


  }
  return (
    <div>
      <div className=' w-100 fixed'  >
      < NavBar />
      </div>
      <section className="my-5">

        <div class="bg-image d-flex justify-content-center align-items-center" style=
          {{
            backgroundImage: 'url("/assets/img/produits/products.jpg")',
             backgroundSize:"100% 600px",
             height:"600px"
          }}>
          <div class="w-100 p-3 d-flex justify-content-center align-items-center" style={{ height: "300px", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <h1 style={{ width: "rem", height: "50px" }}>

              <strong class="text-white mb-0" >
                Contact  </strong>
            </h1>
          </div>

        </div>
        {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
       
        Contact us
      </h2> */}
        <div>
          <MDBRow>
            <MDBCol >

              <br />
              <MDBRow className="text-center">
                <MDBCol md="5">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="map-marker" />
                  </MDBBtn>
                  <p>2 Rue Ernest Renan, 45100</p>
                  <p className="mb-md-0">Orléans, France</p>
                </MDBCol>
                <MDBCol md="3">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="phone" />
                  </MDBBtn>
                  <p>+33238630042</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                  <p>org12@hotmail.fr</p>

                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

        </div>
        <hr />
        {/* <form className="needs-validation" novalidate>
          <MDBRow className="col-md-20 justify-content-center">
            <MDBCol lg="8" className="col-md-6">
              <MDBCard >
                <MDBCardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2 text-center">
                      <MDBIcon icon="envelope" />Contactez nous
                    </h3>
                    <h7>Les champs marqués d’un <a style={{ color: "red" }}> * </a> sont obligatoires</h7>
                  </div>
                  <p></p>
                  <div className="md-form ">
                    <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                    <MDBInput
                      iconClass="grey-text"
                      type="text"
                      placeholder=" Nom et prenom"
                      onChange={(event) => setName(event.target.value)}
                      id="materialFormRegisterNameEx"
                      required

                    />
                  </div>
                  <div className="md-form">
                    <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                    <MDBInput
                      icon="envelope"
                      label={<h7> Votre email <a style={{ color: "red" }}> * </a> </h7>}

                      iconClass="grey-text"
                      placeholder="Email"
                      type="email"
                      id="materialFormRegisterConfirmEx3"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />

                  </div>
                  <div className="md-form">
                    <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                    <MDBInput
                      icon="phone"
                      label={<h7> télephone<a style={{ color: "red" }}> * </a> </h7>}

                      iconClass="grey-text"
                      type="tel"

                      placeholder=" télephone"
                      onChange={(event) => setTel(event.target.value)}
                      required
                    />
                  </div>
                  <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                  <div className="md-form">
                    <label htmlFor="floatingSelect" >Sujet de commande ?</label><br />
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event) => setSubjetCommande(event.target.value)} onClick={console.log(subjetCommande)} >

                      <option value="false" > NO</option>
                      <option value="true">OUI</option>

                    </select>

                  </div>
                  <div className="md-form">
                    <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                    <MDBInput
                      icon="tag"

                      label={<h7> Subject <a style={{ color: "red" }}> * </a> </h7>}
                      iconClass="grey-text"
                      type="text"

                      id="materialFormRegisterConfirmEx3"
                      placeholder=" objectif"
                      onChange={(event) => setSubject(event.target.value)}
                      required
                    />
                  </div>
                  <div className="md-form">
                    <label> <i className="fas fa-user-alt" > </i> <h7  > Votre Nom <a style={{ color: "red" }}> * </a> </h7></label>

                    <MDBInput
                      icon="pencil"

                      label={<h7>message <a style={{ color: "red" }}> * </a> </h7>}
                      iconClass="grey-text"
                      type="textarea"
                      id="materialFormRegisterConfirmEx3"


                      placeholder=" description"
                      onChange={(event) => setDescription(event.target.value)}
                      required
                    />
                  </div>

                  {unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}
                  {saved && <div className='alert alert-success' > product was added </div>}
                  <div className="text-center">
                    <button className="btn btn-danger btn-sm btn-block" onClick={addContact} >Save</button>

                  </div>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>

          </MDBRow>
        </form> */}





        <div className="container">

          <div className="row justify-content-center">

            <div className="col-12 col-lg-10">

              <div >

            
                  <h1 >
                    <strong >  Contactez nous</strong>
                  </h1>

               

                <div className="card-body p-5">


                  {/* <div className="form-header blue accent-1">
                    <h1 className="mt-2">
                    <strong  >  Contactez nous</strong>
                    </h1>
                    <div style={{height:"20px"}}   > </div>

                    <h7>Les champs marqués d’un <a style={{ color: "red" }}> * </a> sont obligatoires</h7>
              </div> */}

                  <h7>Les champs marqués d’un <a style={{ color: "red" }}> * </a> sont obligatoires</h7>


                  <p></p>
                  <form className="needs-validation" >

                    <div className="form-outline mb-4">
                      <div className="form-outline">
                        <input type="text" 
                          placeholder=" Nom et prenom"
                          onChange={(event) => setName(event.target.value)}
                          id="materialFormRegisterNameEx"
                          required
                          className="form-control" />
                        <label className="form-label" >   <h7  > Nomet et  Prenom <a style={{ color: "red" }}> * </a> </h7></label>

                      </div>
                    </div>


                    <div className="form-outline mb-4">
                      <input placeholder="Email"
                        type="email"
                        id="materialFormRegisterConfirmEx3"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className="form-control" />
                      <label className="form-label" >   <h7  > Email<a style={{ color: "red" }}> * </a> </h7></label>
                    </div>


                    <div className="form-outline mb-4">
                      <input type="text" 

                        placeholder=" télephone"
                        onChange={(event) => setTel(event.target.value)}
                        required className="form-control" />
                      <label className="form-label" >   <h7  > télephone<a style={{ color: "red" }}> * </a> </h7></label>

                    </div>


                    <div className="md-form">
                      <label htmlFor="floatingSelect" >Sujet de commande ?<a style={{ color: "red" }}> * </a> </label><br />
                      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(event) => setSubjetCommande(event.target.value)} onClick={console.log(subjetCommande)} >

                        <option value="false" > NO</option>
                        <option value="true">OUI</option>

                      </select>

                    </div>
                    <div className="form-outline mb-4">
                      <input type="text"

                        id="materialFormRegisterConfirmEx3"
                        placeholder=" objectif"
                        onChange={(event) => setSubject(event.target.value)}
                        required className="form-control" />
                      <label className="form-label" >   <h7  > Subject<a style={{ color: "red" }}> * </a> </h7></label>
                    </div>


                    <div className="form-outline mb-4">
                      <textarea className="form-control" id="materialFormRegisterConfirmEx3"


                        placeholder=" description"
                        onChange={(event) => setDescription(event.target.value)}
                        required rows="4"></textarea>
                      <label className="form-label" >   <h7  > message<a style={{ color: "red" }}> * </a> </h7></label>
                    </div>




                    {unsaved && <div className='alert alert-warning' > Something goes wrong please check your inputs </div>}
                    {saved && <div className='alert alert-success' > product was added </div>}
                    <div className="text-center">
                      <button className="btn btn-danger btn-sm btn-block" onClick={addContact} >Envoyer</button>

                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section>
        <div

        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.101716773115!2d1.9323640514755624!3d47.83762277988083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e408c08ede47%3A0xe59550281f36e76a!2sBoucherie%202002!5e0!3m2!1sfr!2sma!4v1597412335716!5m2!1sfr!2sma" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;