import React from "react";
import Modal from "./Modal";

class BostonHousing extends React.Component {
  renderAction() {
    return (
      <main id='main'>
        <section id='portfolio-details' className='portfolio-details'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='slideshow'>
                  <img
                    src='assets/img/project2.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info'>
                <h3>Project information</h3>

                <ul>
                  <li>
                    <strong>Programming Language</strong>: Python
                  </li>

                  <li>
                    <strong>IDE Used</strong>: Spyder
                  </li>
                </ul>

                <p>
                  Developed a Machine Learning model using Python and
                  Scikit-learn to predict the prices of Boston houses and to
                  determine whether an area is safe to reside or not.
                </p>
                <p>
                  Estimated the prices of houses using the linear regression
                  algorithm and determined the area safety using Decision tree,
                  Naïve Bayes, Random forest and Logistic regression algorithms.
                  Visualized the accuracy results of the algorithms in the form
                  of bar graph.
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
        title='Boston Housing Prediction and Classification'
        content={this.renderAction()}
      ></Modal>
    );
  }
}

export default BostonHousing;
