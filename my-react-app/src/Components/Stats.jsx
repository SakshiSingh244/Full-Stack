import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="container">
    <div className="rectangle-box"> 
    <div className="stat block">
        <h2 className="stat-heading">10YRS+</h2>
        <p className="stat-para">EXPERIENCE</p>
    </div>
    <div className="stat block">
    <h2 className="stat-heading">100+</h2>
        <p className="stat-para">STUDENTS</p></div>
    <div className="stat block">
    <h2 className="stat-heading">30+</h2>
        <p className="stat-para">WORKSHEETS</p></div>
    <div className="stat block">
    <h2 className="stat-heading">24/7</h2>
        <p className="stat-para">DOUBT/SOLVING</p></div>
    </div>
    </div>
  );
};

export default Stats;