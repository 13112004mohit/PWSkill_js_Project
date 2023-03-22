import React from 'react';
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/carsole.css';
import './Carsole.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gest1 from '../assets/slider1.jpg';
import gest2 from '../assets/slider4.jpeg';
import gest3 from '../assets/slider2.jpg';
import gest4 from '../assets/slider3.jpg';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack className='carsole_arrow' />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward className='carsole_arrow' />
    </div>
  );
};

const Carsole1 = () => {


  return (
    <>
      <div className="carsole_first_con">
        <Carousels
          autoplay={true}
          autoplaySpeed={3000}
          arrows={true}
          dots={true}
          infinite={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          customPaging={(i) => {
            return (
              <div>
                {i}
              </div>
            )
          }}
          responsive={[
                {
                  breakpoint: 768, // adjust as needed for other many devices
                  settings: {
                    arrows: false,
                    dots: false
                  }
                }
              ]}
          dotsClass="slick-dots custom-indicator"
        >
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


        </Carousels>
      </div>
    </>
  )
}

export default Carsole1
