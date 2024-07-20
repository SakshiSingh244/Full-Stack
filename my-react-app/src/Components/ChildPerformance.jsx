import React from 'react'
import featureImg1 from '../assets/featureImg1.png';
import featureImg2 from '../assets/featureImg2.png';
import featureImg3 from '../assets/featureImg3.png';
import featuresCheck from '../assets/featuresCheck.png';
import './ChildPerformance.css';

const ChildPerformance = () => {
  return (
    <div className='container'>
      <h2 className='child-performance-heading'>Monitor your <span>Child's Performance</span></h2>

      <div className="performance-imgs">
        <div className="feature-box">
            <img src={featureImg1} alt="" className='feature-img' />
            <p className='feature'>Online Attendance System</p>
        </div>
        <div className="feature-box">
            <img src={featureImg2} alt="" className='feature-img' />
            <p className='feature'>Regular Practice Worksheets</p>
        </div>
        <div className="feature-box">
            <img src={featureImg3} alt="" className='feature-img' />
            <p className='feature'>Periodic Practice Assessments</p>
        </div>
      </div>
      <img src={featuresCheck} alt="" className='featuresCheck' />
    </div>
  )
}

export default ChildPerformance
