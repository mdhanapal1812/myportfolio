import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id='header' className='fixed-top'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <h1 className='logo'>
          <Link to='/'>Muthouazhagi Dhanapal</Link>
        </h1>

        <nav className='nav-menu d-none d-lg-block'>
          <ul>
            <li>
              <Link to='/'>Home </Link>
            </li>
            <li>
              <Link to='/about'>About </Link>
            </li>
            <li>
              <Link to='/resume'>Resume </Link>
            </li>
            <li>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li>
              <Link to='/contact'>Contact </Link>
            </li>
          </ul>
        </nav>

        <div className='header-social-links'>
          <button className='ui linkedin button'>
            <i className='linkedin icon'></i>
            <a
              href='https://www.linkedin.com/in/muthouazhagi-dhanapal/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </button>

          <button className='ui github button'>
            <i className='github icon'></i>
            <a
              href='https://github.com/mdhanapal1812'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
