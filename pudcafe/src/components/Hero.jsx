import React from 'react'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/home.css'

import  img1 from '../assets/p4-removebg-preview.png'
import  img2 from '../assets/p1-removebg-preview.png'
import  img3 from '../assets/p2-removebg-preview.png'
import  img4 from '../assets/p3-removebg-preview.png'
import  tray from '../assets/ddd-min.png'

const hero = () => {

        let settings = {
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: false,
                outline:false,
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
                      <div data-aos-duration='1000' data-aos="fade-right" className="trayimg">
                          <img src={tray} alt="" />
                      </div>
                      <div className="carsole_first_con">
                         <Carousels  {...settings}>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={img1} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={img2} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={img3} alt="our_members" />
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={img4} alt="our_members" />
                           </div>
                         </Carousels>
                      </div>
                </div>

                <div className="hero_S_col">
                       <h1 >Rice Pudding Cafe <br /> <span>&</span> <br /> Roof Top Rest..</h1>
                       <span>Welcome to Rice Pudding Cafe & Roof Top Restaurant. We Serve Delicious Foods to our customers..</span>
                       <button class="animated-button">
                          <span>know more</span>
                       </button>
                </div>

           </div>
       </section>
    </>
  )
}

export default hero