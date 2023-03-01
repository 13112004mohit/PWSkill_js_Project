import React from 'react'
import '../style/carsole3.css'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from 'react-icons/ai'

import  gest1 from '../assets/gest1.jpg'
import  gest2 from '../assets/gest2.jpg'
import  gest3 from '../assets/gest3.avif'

const carsole3 = () => {

        let settings = {
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll:1
              };

  return (
    <>
       <div className="carsole3_m_con">
             <div className="carsole3_first_con">
                 <Carousels  {...settings}>
                        <div className="carsole3_first_images_con">
                            <img className='carsole3_imgs' src={gest1} alt="our_members" />
                        </div>
                        <div className="carsole3_first_images_con">
                            <img className='carsole3_imgs' src={gest2} alt="our_members" />
                        </div>
                        <div className="carsole3_first_images_con">
                            <img className='carsole3_imgs' src={gest3} alt="our_members" />
                        </div>
                 </Carousels>
             </div>
             <div className="carsole3_second_con">
                 <span className="carsole_span_name">TESTIMONIALS</span>
                 <h1 className="carsole_h1">Our Guests Love Us</h1>
                 <Carousels  {...settings}>
                     <div className="carsole_custmer_review">
                        <p>This Hotel for At Robert Downey we consider our guests like family! We know that you have many other options when choosing where to stay in  Allhabad. The fact that you chose Best for us is a great honour for us. We sincerely hope you enjoyed your stay and will come back again!</p>
                         <p><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></p>
                         <p className="carsole_customer_names">Robert Downey <span>-CEO Deercreative</span></p>
                     </div>
                     <div className="carsole_custmer_review">
                        <p>This Hotel for At Robert Downey we consider our guests like family! We know that you have many other options when choosing where to stay in  Allhabad. The fact that you chose Best for us is a great honour for us. We sincerely hope you enjoyed your stay and will come back again!</p>
                         <p><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></p>
                         <p className="carsole_customer_names">Roney garg <span>--Founder congr</span></p>
                     </div>
                     <div className="carsole_custmer_review">
                        <p>This Hotel for At Robert Downey we consider our guests like family! We know that you have many other options when choosing where to stay in  Allhabad. The fact that you chose Best for us is a great honour for us. We sincerely hope you enjoyed your stay and will come back again!</p>
                         <p><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></p>
                         <p className="carsole_customer_names">Roney garg <span>-Manager Nuina</span></p>
                     </div>
               
                 </Carousels>
            </div>
       </div>
    </>
  )
}

export default carsole3