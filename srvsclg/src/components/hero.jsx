import React from 'react'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typerwriter from 'typewriter-effect'
import '../style/home.css'

import  gest1 from '../assets/home/s1.jpg'
import  gest2 from '../assets/home/s8.jpg'
import  gest3 from '../assets/home/s6.jpg'
import  gest4 from '../assets/home/s13.jpg'
import  gest5 from '../assets/home/s5.jpg'
import  gest6 from '../assets/home/s7.jpg'
import  gest9 from '../assets/home/s4.jpg'
import  gest7 from '../assets/home/s11.jpg'
import  gest8 from '../assets/home/s10.jpg'
import  gest10 from '../assets/home/s9.jpg'

const hero = () => {

        let settings = {
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll:1
              };

  return (
    <>
       <section className="hero_m_con">
           <div className="hero_two_col">
                <div className="hero_F_col">
                   <h1>WELCOME TO </h1>
                   <h2>Swargiya Ramvilash Singh Shikshan Sanstha Mahila Mahavidyalaya </h2>
                    <p><Typerwriter
                      options={{
                        autoStart:true,
                        loop:true,
                        delay:30,
                        strings:["Better Education for A Batter Wrold","Transform your Life Through Ecucation"],
                      
                      }}
                    /></p>
                </div>
                <div class="containerR1">
                           <div class="ring"></div>
                           <div class="ring"></div>
                           <div class="ring"></div>
                      </div>
                <div className="hero_S_col">
              
                      <div className="carsole_first_con">
                         <Carousels  {...settings}>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest1} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest2} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest3} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest4} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest5} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest6} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest7} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest8} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest9} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={gest10} alt="our_members" />
                           </div>
                         </Carousels>
                      </div>
                   
                </div>

           </div>
       </section>
    </>
  )
}

export default hero