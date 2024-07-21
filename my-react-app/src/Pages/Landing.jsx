import React from 'react'
import Hero from '../Components/Hero';
import SecondSection from '../Components/SecondSection';
import NotConvinced from '../Components/NotConvinced';
import ChildPerformance from '../Components/ChildPerformance';
import Testimonial from '../Components/Testimonial';
import StudyMaterial from '../Components/StudyMaterial';
import Stats from '../Components/Stats';

const Landing = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <SecondSection />
      <StudyMaterial />
      <ChildPerformance />
      <Testimonial />
      <NotConvinced />
    </div>
  )
}

export default Landing
