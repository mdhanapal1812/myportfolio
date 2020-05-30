import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <main id='main'>
      <section id='portfolio' className='portfolio'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Portfolio</h2>
            <p>
              I love indulging in projects that makes use of top-notch
              technologies ! Here are some of the projects that I have worked
              on.
            </p>
            <p>
              <h3>Please click on the image for details of project.</h3>
            </p>
          </div>
          <div className='row' data-aos='fade-up' data-aos-delay='100'>
            <div className='col-lg-12 d-flex justify-content-center'>
              <ul id='portfolio-flters'>
                <li data-filter='*' className='filter-active'>
                  All
                </li>
                <li data-filter='.filter-app'> JAVA</li>
                <li data-filter='.filter-card'>Web-Technology</li>
                <li data-filter='.filter-web'>Data Science</li>
              </ul>
            </div>
          </div>

          <div
            className='row portfolio-container'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/image_editor.jpg'
                  className='img-fluid'
                  alt=''
                  style={{
                    objectFit: "cover",
                    width: "300%",
                    height: "900%",
                  }}
                ></img>
                <div className='portfolio-info'>
                  <h4>Fun with Images</h4>
                  <p> JAVA , JAVA SWING , AWT , MVC Pattern</p>
                  <div className='portfolio-links'>
                    <Link to='/image' className='venobox' data-vbtype='iframe'>
                      <i className='bx bx-link'>Project Demo </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/project2.jpg'
                  className='img-fluid'
                  alt=''
                ></img>
                <div className='portfolio-info'>
                  <h4> Boston Housing Prediction and Classification</h4>
                  <p>
                    Python , Scikit-learn , Data analysis and visualisation ,
                    Linear Regression , Logistic Regression ,Decission tree ,
                    Random forest, Naive Bayes.
                  </p>
                  <div className='portfolio-links'>
                    <a
                      href='https://github.com/mdhanapal1812/Artificial-Intelligence-Project-Report'
                      title='App 2'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='bx bx-plus'>GitHub Link</i>
                    </a>
                    <Link
                      to='/bostonhousing'
                      className='venobox'
                      data-vbtype='iframe'
                    >
                      <i className='bx bx-link'>Project Details</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/dbms.jpg'
                  className='img-fluid'
                  alt=''
                ></img>
                <div className='portfolio-info'>
                  <h4> Interactive Cookbook Website</h4>
                  <p> React.js , Node.js , MongoDB , Mongoose</p>
                  <div className='portfolio-links'>
                    <a
                      href='https://github.com/mdhanapal1812/CookBookRecipe_CS5200_PROJECT/tree/master/DBMS-final-project-CS5200-master'
                      title='App 2'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='bx bx-plus'>GitHub Link</i>
                    </a>
                    <Link
                      to='/cookbook'
                      className='venobox'
                      data-vbtype='iframe'
                    >
                      <i className='bx bx-link'>Project Demo</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
              <div className='portfolio-wrap'>
                <img
                  src='assets/img/aparment.jpg'
                  className='img-fluid'
                  alt=''
                ></img>
                <div className='portfolio-info'>
                  <h4> Apartment Management Software</h4>
                  <p>
                    JavaServer Pages, XML , HTML , CSS ,MySQL ,Apache Tomcat
                    server
                  </p>
                  <div className='portfolio-links'>
                    <Link
                      to='/apartment'
                      className='venobox'
                      data-vbtype='iframe'
                    >
                      <i className='bx bx-link'> Project Details</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
