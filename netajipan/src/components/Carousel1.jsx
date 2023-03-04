import React from 'react'
import '../style/carsole3.css'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from 'react-icons/ai'

import  gest1 from '../assets/slider1.jpg'

const carsole3 = () => {

        let settings = {
                autoplay: true,
                autoplaySpeed: 2000,
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

                        <div data-aos-duration='1000' data-aos='fade-left'  className="carsole3_first_images_con">
                            <img className='carsole3_imgs' src={gest1} alt="our_members" />
                        </div>

             </div>
             <div className="carsole3_second_con">
                 <p className="carsole_span_name">TESTIMONIALS</p>
                 <h1 className="carsole_h1">Our Guests Love Us</h1>
                 <Carousels  {...settings}>
                     <div  className="carsole_custmer_review">
                        <p> Legend has it that the ‘Banarasi Paan’ name was coined here. Presidents and Prime Ministers have visited this paan bhandar. Forget all that, one brief conversation with Ajay Kumar Chaurasia is all you need, to know that he loves making paan. And it ensures that you will remember the paan you eat here for a long time.</p>
                       <p className="carsole_customer_names">Santosh Rao<span> --</span></p>
                     </div>
                     <div  className="carsole_custmer_review">
                        <p>I haven't visited this shop so I can't give any feedback for this shop I will certainly write when I will visit this shop. Although this shop will serve good paan.</p>
                        <p className="carsole_customer_names">Raj Kumar <span>--</span></p>
                     </div>
                     <div  className="carsole_custmer_review">
                        <p> Best paan u can eat In varanasi... Friendly and helpful guy... Must try Mango paan and green chutney.</p>
                        <p className="carsole_customer_names">KhelaKuda & SabKuch <span>--</span></p>
                     </div>
               
                 </Carousels>
            </div>
       </div>
    </>
  )
}

export default carsole3