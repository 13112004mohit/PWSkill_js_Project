import React from 'react'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FaRegPlayCircle} from 'react-icons/fa'
import '../style/home.css'

import car from '../assets/car_.jpg'
import haven from '../assets/haven_.jpg'
import haiking from '../assets/mountain_.jpg'
import tour from '../assets/tour_.jpg'

const carsole = () => {
        const responsive = {
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1224 },
                  items: 3
                },
                desktop: {
                  breakpoint: { max: 1224, min: 1024 },
                  items: 3
                },
                tablet: {
                  breakpoint: { max: 1024, min: 614 },
                  items: 3
                },
                mobile: {
                  breakpoint: { max: 614, min: 0 },
                  items: 2
                }
             
              };
              const Multisetting={
                autoPlay:true,
                swipeable:false,
                // draggable:false,
                showDots:false,
                autoPlaySpeed:1000,
                infinite:true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll:1,
                keyBoardControl:true,
                transitionDuration:1000
                // removeArrowOnDeviceType:["tablet", "mobile"]
               } 
        let settings = {
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                dots: false,
                infinite: true,
                speed: 1500,
                slidesToShow: 1,
                slidesToScroll:1
              };
  return (

    <>
                  <div className="carsole_first_con">
                         <Carousels  {...settings}>
                           <div className="carsole_images_con">
                                   <img className='carsole_imgs' src={haiking} alt="our_members" />
                                <h1 className='carsole_h1'>Mark Hodding,Sydney trip <br /> <span><FaRegPlayCircle/></span></h1>
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={car} alt="our_members" />
                               <h1 className='carsole_h1'>Road traveling, trip <br /> <span><FaRegPlayCircle/></span></h1>
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={haven} alt="our_members" />
                               <h1 className='carsole_h1'>Mountain hiking trip <br /> <span><FaRegPlayCircle/></span></h1>
                           </div>
                           <div className="carsole_images_con">
                               <img className='carsole_imgs' src={tour} alt="our_members" />
                               <h1 className='carsole_h1'>Mark Hodding,Sydney trip <br /> <span><FaRegPlayCircle/></span></h1>
                           </div>
                         </Carousels>
                      </div>   

                      <div className="second_carsole">
                      <MultiCarousel  {...Multisetting} responsive={responsive}>
                           <div className="carsole_user_images_con">
                                   <img className='carsole_imgs' src={'data:image/jpeg;base64,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'} alt="our_members" />
                           </div>
                           <div className="carsole_user_images_con">
                               <img className='carsole_imgs' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GgQixmip71q45FvhB2u87vutICgqaKzNsg&usqp=CAU'} alt="our_members" />
                           </div>
                           <div className="carsole_user_images_con">
                               <img className='carsole_imgs' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU'} alt="our_members" />
                           </div>
                           <div className="carsole_user_images_con">
                               <img className='carsole_imgs' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU'} alt="our_members" />
                           </div>
                         </MultiCarousel>
                      </div>
    </>

  )
}

export default carsole