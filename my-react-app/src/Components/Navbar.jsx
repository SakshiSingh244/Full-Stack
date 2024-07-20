import React from 'react';
import './Navbar.css';
import MC from '../assets/MC.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className="logo-link"><img src={MC} alt="" className='logo' /></a>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/resources" className="nav-link">Resources</a>
          <a href="/testimonials" className="nav-link">Testimonial</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        <div className="login-button">
          <a href="/login" className="login-link">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
