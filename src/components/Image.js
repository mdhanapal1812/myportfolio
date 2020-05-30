import React from "react";
import Modal from "./Modal";

class Image extends React.Component {
  renderAction() {
    return (
      <main id='main'>
        <section id='portfolio-details' className='portfolio-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='slideshow'>
                  <iframe
                    width='360'
                    height='315'
                    title='image'
                    src='https://www.youtube.com/embed/d-R5Jf8ZwpM'
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: JAVA , JAVA Swing
                  </li>
                  <li>
                    <strong> Pattern Followed </strong>: MVC Pattern
                  </li>
                  <li>
                    <strong>IDE Used</strong>: IntelliJ
                  </li>
                </ul>

                <p>
                  Implemented a user-friendly image processing application that
                  allows the users to edit , filter images and generate various
                  image patterns. Please vist the demo link to view the project
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
        title='Image Processing Application'
        content={this.renderAction()}
      ></Modal>
    );
  }
}

export default Image;
