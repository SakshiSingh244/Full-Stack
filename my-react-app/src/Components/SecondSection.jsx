import React from 'react';
import './SecondSection.css';
import SecondSecImg from '../assets/SecondSecImg.png';
import Vector from '../assets/Vector.png';

const SecondSection = () => {
  return (
    <div className="App">
      <section className="second-section-heading">
        <h2>Why choose <span className='second-heading'>Math Champs?</span></h2>
        <div className="content">
          <div className="left-section">
            <img src={SecondSecImg} alt="Math Champs" />
          </div>
          <div className="right-section">
            <div className="feature">
                <img src={Vector} alt="" />
                <p>Personal attention to  each student</p>
            </div>
            <div className="feature">
                <img src={Vector} alt="" />
                <p>Proven Track Record with multiple successful students</p>
            </div>
            <div className="feature">
                <img src={Vector} alt="" />
                <p>Engaging teaching methods</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;
