import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main id='main'>
      <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Hi , Get to know me !</h2>
            <p>
              Hello ! I would describe myself as a dedicated , determined and
              self-motivated women who has a serious passion in softarFe
              development. I have a work experience of 3 years as a Software
              Developer in LTE domain. My first professional experience gave me
              the opportunity to work on a wide variety of interesting projects
              on a daily basis. The work I provide is of highest quality which
              earned me "Excellent Performer of the Year" consecutively during
              my tenure at work.Apart from job , I have always been keen on
              exploring and learning trending technologies in the market.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <img class='img-fluid' alt='' src='assets/img/about.JPG'></img>
              <h4>
                Oh Yeah ...You could always spot me with a laptop , Programming
                is something that I enjoy !
              </h4>
            </div>
            <div className='col-lg-8 pt-4 pt-lg-0 content'>
              <h3>Graduate student at Northeastern University</h3>

              <p className='font-italic'>
                I believe knowledge is power and pursuing Master's in Computer
                Science has always been my dream. And here I am , pursuing a
                Master's of Science degree in Computer Science at Northeastern
                University , Boston.
                <p>
                  I love to work on new projects which follows good practises
                  and uses top-notch technologies.
                </p>
                <h5>
                  I am currently seeking Co-Op / Internship opportunities for
                  Fall 2020 in a creative and innovative environment . Would
                  like to hire me ? Please <Link to='/contact'>contact</Link> me
                  !
                </h5>
              </p>

              <p>
                What if You asked me these questions with the condition to give
                one answer that best suites my personal interest ?
              </p>
              <div className='row'>
                <div className='col-lg-6'>
                  <ul>
                    <li>
                      <i className='icofont-rounded-right'></i>{" "}
                      <strong>Favorite Programming Language : </strong>{" "}
                      <Link to='/resume'> JAVA</Link>
                    </li>
                    <li>
                      <i className='icofont-rounded-right'></i>{" "}
                      <strong>Interested Domain:</strong> Data Science
                    </li>
                    <li>
                      <i className='icofont-rounded-right'></i>{" "}
                      <strong>Favorite course:</strong> Programming Design
                      Paradigms
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6'>
                  <ul>
                    <li>
                      <i className='icofont-rounded-right'></i>{" "}
                      <strong>Best project: </strong> LTE-Wifi integration
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                In my spare time when I am not into any projects or assignments
                , I like to do programming challenges{" "}
                <a href='https://github.com/mdhanapal1812/Leetcode-Programming-Challenges'>
                  here
                </a>
                are some of the LeetCode coding challenges that I have solved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
