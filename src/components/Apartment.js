import React from "react";
import Modal from "./Modal";

class Apartment extends React.Component {
  renderAction() {
    return (
      <main id='main'>
        <section id='portfolio-details' className='portfolio-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='slideshow'>
                  <img
                    src='assets/img/aparment.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: JavaServer Pages, XML
                    , HTML , CSS ,MySQL
                  </li>
                </ul>

                <p>
                  Developed a web-based apartment management application which
                  handles the major tasks of managing an apartment such as lease
                  tracking , transactions , maintenance for both owners and
                  tenants
                </p>
                <p>
                  The application was created using JavaServer Pages, XML , HTML
                  , CSS ,MySQL and Apache Tomcat server.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  render() {
    return (
      <Modal
        title='Apartment Management Software'
        content={this.renderAction()}
      ></Modal>
    );
  }
}

export default Apartment;
