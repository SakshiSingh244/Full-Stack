import React from 'react';
import './Hero.css';
import HeroImg from '../assets/HeroImg.png';
import '../index.css'

const Hero = () => {
  return (
    <nav className="hero">
      <div className="hero-content">
        <div className="left-side">
          <h1 className='heading'>Unlock Your Child's Potential with Expert <span>Math Tutoring</span></h1>
          <p className='hero-para'>Personalized, offline classes for 5th-10th  graders with over 10 years of proven success.</p>
          <button className='hero-button'>Book Trial Class</button>
        </div>
        <div className="right-side">
          <img
            src={HeroImg}
            alt="Description"
            className="hero-image"
          />
        </div>
      </div>
    </nav>
  );
};

export default Hero;
