import React from 'react';
import './ContactComp.css';
import ContactImg from '../assets/Contact.png';

const ContactComp = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-left-container">
        <div className="contact-upper-container">
          <h2 className="ContactHead">Contact Us</h2>
          <p className="ContactSub">Have some queries? Feel free to contact us</p>
        </div>
        <div className="contact-lower-container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No.</label>
              <input type="text" id="phone" name="phone" placeholder="Enter Phone No." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter Message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-right-container">
        <img src={ContactImg} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactComp;
