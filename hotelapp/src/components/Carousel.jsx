import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/carousel.css'

import hotel_img1 from '../assets/hotelrestorent.avif';
import hotel_img2 from '../assets/hotelreceptation.avif';
import hotel_img3 from '../assets/hotel3img.avif';
import hotel_img4 from '../assets/hotel4img.avif';
import hotel_img5 from '../assets/hotel5img.avif';

const Carousel_ = () => {
  return (
    <>
       <div className="carousel_m_c">
           <Carousel
              autoPlay
              infiniteLoop
              interval={1000}
              showStatus={false}
              showThumbs={false}
              showArrows={true}
            >
                <div >
                  <img className='carsoul_image_size' src={hotel_img1} alt='hotelrestorent' />
                   <div className='carsoul_heading_'>
                      Restaurants 
                  </div>
                </div>
                <div >
                  <img className='carsoul_image_size' src={hotel_img2} alt='hotelrestorent' />
                   <div className='carsoul_heading_'>
                     Hotel Reception
                  </div>
                </div>
                <div >
                  <img className='carsoul_image_size' src={hotel_img3} alt='hotelrestorent' />
                   <div className='carsoul_heading_'>
                     Beatch Areas
                  </div>
                </div>
                <div >
                  <img className='carsoul_image_size' src={hotel_img4} alt='hotelrestorent' />
                   <div  className='carsoul_heading_'>
                     Hotel Rooms
                  </div>
                </div>
                <div >
                  <img className='carsoul_image_size' src={hotel_img5} alt='hotelrestorent' />
                   <div className='carsoul_heading_'>
                     Sweeming Areas
                  </div>
                </div>
   
            </Carousel>
       </div>
        
    </>
  )
}

export default Carousel_