import React from 'react'
import '../style/home.css'
import Hero from '../components/hero'
import Courses from '../pages/Courses'
import Team from '../pages/Team'
import Twocon from '../components/Two_con'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import About from './About'
import Point from '../components/points'

const Home = () => {

  return (
    <>
    <Hero/>

    <div id="about">
     <About />
    </div>

     <Point/>

     <div id="courses">
      <Courses />
     </div>

     <div id="team">
      <Team/>
     </div>
     
      <Twocon/>

      <div id="gallery">
      <Gallery />
      </div>
      <Contact/>
   </>
   
  )
}

export default Home

