import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Ourmenu from './Ourmenu'
import Speciality from './Speciality'

const Home = () => {
  return (
    <>
    
      <Hero/>
      

     <div id="about">
        <About />
     </div>

     <div id="speciality">
        <Speciality/>
     </div>

     <div id="ourmenu">
        <Ourmenu/>
     </div>



    </>
  )
}

export default Home