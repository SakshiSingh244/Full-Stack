import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import TestimonialImg from '../assets/TestimonialImg.png';
import leftChevron from '../assets/leftChevron.png';
import rightChevron from '../assets/RightChevron.png';
import TestimonialAvatar from '../assets/TestimonialAvatar.png';

const testimonials = [
    {
        heading: "From Math Anxiety to Math Mastery",
        para: "Attending math classes here felt like solving the ultimate puzzle! The tutor is a math wizard, turning tricky problems into simple solutions with a wave of their marker.",
        name: "Janvi Chandra",
        percentage: "97%",
    },
    {
        heading: "Boosted My Confidence",
        para: "These classes have boosted my confidence in math. I can now solve problems faster and more accurately. The supportive environment and dedicated teachers make learning fun!",
        name: "Alex Johnson",
        percentage: "95%",
    },
    {
        heading: "Achieved My Dream Score",
        para: "I was struggling with math until I joined these classes. The tailored approach and extra practice sessions helped me achieve my dream score in my exams.",
        name: "Mia Thompson",
        percentage: "98%",
    }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
      setIsSliding(false);
    }, 500);
  }

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrent((current - 1 + testimonials.length) % testimonials.length);
      setIsSliding(false);
    }, 500);
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className='container'>
      <h2 id='testimonial-heading'>Hear from the <span>Happy Students</span></h2>
      <div id='testimonial'>
        <div className="left">
        <div className={`testimonial-content ${isSliding ? 'sliding' : ''}`}>
        <h3 className='sub-heading'>{testimonials[current].heading}</h3>
            <p className='sub-para'>{testimonials[current].para}</p>
            <div className="testimonial-footer">
              <img src={TestimonialAvatar} alt="Student Avatar" />
              <div className="student-info">
                <p>{testimonials[current].name}</p>
                <p>&nbsp;|&nbsp;</p>
                <p>{testimonials[current].percentage}</p>
              </div>
            </div>
          </div>
          <div className="testimonial-buttons">
            <button onClick={handlePrev}><img src={leftChevron} alt="Previous" /></button>
            <button onClick={handleNext}><img src={rightChevron} alt="Next" /></button>
          </div>
        </div>
        <div className="testimonial-img">
          <img src={TestimonialImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
