import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style/carsole_2.css';
import '../style/hovereffect.css'

import car2img1 from '../assets/work03.jpg'
import car2img2 from '../assets/work04.jpg'
import car2img3 from '../assets/work07.jpg'
import car2img4 from '../assets/work09.jpg'
import car2img5 from '../assets/work16.jpg'
import car2img6 from '../assets/work10.jpg'
import car2img7 from '../assets/work05a.jpg'
import car2img8 from '../assets/work12.jpg'


const Carsole2 = () => {
        const responsive = {
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1024 },
                  items: 4
                },
                desktop: {
                  breakpoint: { max: 1024, min: 824 },
                  items: 3
                },
                tablet: {
                  breakpoint: { max: 824, min: 614 },
                  items: 2
                },
                mobile: {
                  breakpoint: { max: 614, min: 0 },
                  items: 1
                }
             
              };
              const setting={
                autoPlay:true,
                swipeable:true,
                draggable:true,
                // showDots:true,
                autoPlaySpeed:2500,
                infinite:true,
                slidesToShow: 1,
                slidesToScroll:1,
                keyBoardControl:true,
                transitionDuration:500,
                removeArrowOnDeviceType:["tablet", "mobile"],
               
               } 
  return (
    <>
      <div className="carsole2_con">
      <Carousel  {...setting} responsive={responsive}>

           <div className="carsole2_images_con image-box">
              <img className='carsole2_imgs' src={car2img1} alt="our_members" />
              <div class="overlay ">
                 <p>Vintage Bicycles</p>
               </div>
           </div>  

          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img2} alt="our_members" />
               <div class="overlay ">
                 <p>Simpli Nota</p>
               </div>
          </div>

          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img3} alt="our_members" />
            <div class="overlay ">
                 <p>Vinyl Records</p>
               </div>
          </div>

          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img4} alt="our_members" />
            <div class="overlay ">
                 <p>Astor &amp; Yancy</p>
               </div>
          </div>

          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img5} alt="our_members" />
            <div class="overlay ">
                 <p>Signwall</p>
               </div>
          </div>
          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img6} alt="our_members" />
            <div class="overlay ">
                 <p>Tri Fold Brochure</p>
               </div>
          </div>
          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img7} alt="our_members" />
            <div class="overlay ">
                 <p>Embroidered</p>
               </div>
          </div>
          <div className="carsole2_images_con image-box">
            <img className='carsole2_imgs' src={car2img8} alt="our_members" />
            <div class="overlay ">
                 <p>El Corcho</p>
               </div>
          </div>

        </Carousel>
      </div>
    </>
  )
}

export default Carsole2
