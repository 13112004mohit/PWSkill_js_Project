import React from 'react'
import '../style/about.css'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

import hotel_img2 from '../assets/hotelreceptation.avif';

const About = () => {
  return (
    <>
     
    <div className="About_m_con">
         
         <div className="About_1_con">
            <h1>About Us</h1><br />
            <span id='About_1_con_span'> <NavLink to={'/'}> Home</NavLink><MdOutlineKeyboardArrowRight id='About_1_con_icon'/> About Us</span>
         </div>

         <div className="About_2_con">
          <div className="About_2_col_2main">
          <h1 className='About_h1'>Budget Luxury Hotel In The Mid Of City</h1>
            <div className="About_img_con">
                <img src={hotel_img2} alt="" className="About_img_size" />
            </div>
            <p className="About_p">Welcome to the Hotel R K Grand where the age old Indian tradition of "Atithi Devo Bhava" which means "Guest is God" a way of life & where everyone committed to taking guests to reverential heights. "Welcome to grandeur & luxury In India, a guest is treated like the incarnation of God. At the Hotel R K Grand Varanasi, this credo is part of how we make you feel this way. The other part is by offering a host of divine services that you’d expect to find at the finest business hotel in Varanasi.<br /> <br />

Hotel R K Grand is the fresh alternative to traditional hotels, reflecting a contemporary lifestyle at unbeatable value. Every aspect of the R K brand reflects a contemporary lifestyle: the guest rooms are stylish and comfortable, the food light and modern, R K people are friendly and upbeat, and pricing represents great value for money. <br /><br />

A new concept for the City of Temple Varanasi, Hotel R K Grand is driven by customer taste, customer style, customer wants and wishes. It’s all about giving people the freedom to choose, create and inhabit their own personal vibe. Every facet of Hotel R K Grand reflects your lifestyle: the guest rooms are stylish, the food is delicious and the hotel location in Varanasi provides the best that this city has to offer. In concept and performance, Hotel R K Grand is fresh, dynamic and individual. Hotel R K Grand is “hotel with personality” and is an original expression of the city in which it is located. Loved for their character, charm and central location. Hotel R K Grand is a real part of it's local environment, allowing the traveler to experience and absorb the essence of the destination. </p>
        
          </div>
        </div> 
    </div>

    </>
  )
}

export default About