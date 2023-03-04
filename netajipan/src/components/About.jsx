import React from 'react'
import '../style/About.css'

import aboutimg from '../assets/about1.jpg'

const About = () => {
  return (
    <>
      <div className="about_m_con">
         
        <div className="about_grid_two_col">

                <div className="about_first_g_col">
                   <div className="design_1_box"></div>
                   <div className="design_2_box_img">
                        <img data-aos-duration='1000' data-aos="fade-right" src={aboutimg} alt="Netaji_pan_bhandar" />
                   </div>
                   <div className="design_3_box_"></div>
                </div>

                <div className="about_second_g_col">
                     <h1 data-aos-duration='1000' data-aos="zoom-in" className='abouth1'>About Netaji Paan Bhandar</h1>
                     <p className='aboutp1'>OUR SPECIALITY</p>
                     <p className='aboutcon'>आजादी के समय से देश ही नहीं विदेशों में भी जाता है यहाँ का पान, जानें नेता जी पान भंडार आज किसी परिचय का मोहताज नहीं है। नेता जी पान भंडार न केवल वाराणसी में बल्कि कई राज्य समेत विदेशो में भी अपने गुणवत्ता और स्वाद के लिए फेमस है। आजादी के पहले (1928) से यह पान की दुकान चौक थाने के पास अनवरत चल रही है। अब तक इस दुकान में महत्मा गाँधी से लेकर इंद्रा गाँधी तक पान का स्वाद ले चुकी हैं। क्या है खास !</p>
                </div>
        </div>
      </div>
    </>
  )
}

export default About