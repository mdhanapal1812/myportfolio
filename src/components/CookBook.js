import React from "react";
import Modal from "./Modal";

class CookBook extends React.Component {
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
                    src='https://www.youtube.com/embed/T4uAakD1mvU'
                    frameborder='0'
                    title='cookbook'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: React.js , Node.js ,
                    MongoDB , Mongoose
                  </li>
                  <li>
                    <strong> GitHub Link </strong>:
                    <a href='https://github.com/mdhanapal1812/'>Link</a>
                  </li>
                  <li>
                    <strong>IDE Used</strong>: IntelliJ
                  </li>
                </ul>

                <p>
                  Developed an interactive cookbook recipe website , which
                  allows users to post various cooking recipes , comment on
                  other user posts and follow their favorite users.
                </p>
                <p>
                  Implemented the website using React.js for front-end and
                  Node.js , MongoDB for back-end.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  render() {
    return <Modal title='CookBook' content={this.renderAction()}></Modal>;
  }
}

export default CookBook;
