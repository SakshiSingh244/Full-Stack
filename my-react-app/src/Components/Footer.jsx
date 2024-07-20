import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-row">
        <p className='footer-heading'>Math Champs - A place where we unlock student's potential</p>
      </div>
      <div className="footer-bottom-row">
        <a href="/">Home</a>
        <div> | </div>
        <a href="/contact">Contact</a>
        <div> | Copyright @2024 | All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
