import React from "react";

const Contact = () => {
  return (
    <div>
      <section id='contact' className='contact'>
        <img
          className='ui medium circular image'
          src='assets/img/contact.JPG'
          alt='contact'
          style={{
            objectFit: "cover",
            display: "block",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></img>
        <div className='container' data-aos='fade-up'>
          <div className='section-title' className='blocktext'>
            <h2>Contact</h2>
            <p>Glad to hear Your feedback !</p>
          </div>

          <div className='row mt-5' style={{ alignContent: "center" }}>
            <div className='col-lg-4'>
              <div className='info'>
                <div className='address'>
                  <i className='icofont-google-map'></i>
                  <h4> Location:</h4>
                  <p>1574 , Tremont Street , Boston , MA</p>
                </div>

                <div className='email'>
                  <i className='icofont-envelope'></i>
                  <h4>Email:</h4>
                  <p>dhanapal.m@husky.neu.edu</p>
                </div>

                <div className='phone'>
                  <i className='icofont-phone'></i>
                  <h4>Call:</h4>
                  <p>+1 8572698359</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
