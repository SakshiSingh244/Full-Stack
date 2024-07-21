import React from 'react';
import './NotConvinced.css';
import { Link } from 'react-router-dom';

const NotConvinced = () => {
  return (
    <div>
      <div className="ConvincedContainer">
        <h2 className="not-convinced">Still Not Convinced?</h2>
        <p className="not-convinced-para">Experience the difference for yourself! Book a trial class now and see how we can help you excel in math. Have questions? We're here to help!</p>
        <div className="buttons">
          <Link to="/bookclass">
            <button className="book-trial-class">Book Trial Class</button>
          </Link>
          <Link to="/contact">
            <button className="contact">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotConvinced;
