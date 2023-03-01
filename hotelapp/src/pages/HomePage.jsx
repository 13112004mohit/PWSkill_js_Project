import React from 'react'
import Carousel  from '../components/Carousel';
import Twocol from '../components/Twocol';
import Twocol2 from '../components/Twocol2';
import Services from '../components/services'
import Carousel2 from '../components/carasol2'
import Carousel3 from '../components/carsole3'
import MultiCarousel from '../components/MultiCarousel';
import LatestNews from '../components/LatestNews';
import '../style/home.css'



const HomePage = () => {
  return (
    <>
    <div className="home_main_c">
         <Carousel />

         <Twocol />
         <Services/>
         <Carousel2/> 
         <Twocol2  />
         <Carousel3/> 
         <MultiCarousel/> 
         <LatestNews/>   

    </div>
    </>
  )
}

export default HomePage