import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <section id='hero' className='d-flex align-items-center'>
        <div
          className='container d-flex flex-column align-items-center'
          data-aos='zoom-in'
          data-aos-delay='100'
        >
          <h1>Hi </h1>
          <h3 style={{ color: "black", backgroundColor: "white" }}>
            This is Muthouazhagi , Nice to have you here. Please take a look
            around !
          </h3>
          <Link to='/about' className='btn-about'>
            About Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
