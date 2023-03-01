import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/home.css'

import hotel_img1 from '../assets/hotelrestorent.avif';
import hotel_img2 from '../assets/hotelreceptation.avif';
import hotel_img3 from '../assets/hotel3img.avif';
import hotel_img4 from '../assets/hotel4img.avif';
import hotel_img5 from '../assets/hotel5img.avif';

const Twocol = () => {
  return (
      <div className="twocol_m_con">
          <h1 className='twocol_h1'>Budget Luxury Hotel In The Mid Of City</h1>
          <span className='twocol_span'>ABOUT US</span>

          <div className="twocol_c_g">
                <div className="twocol_first_col">
                   <span className='twocol_content'>Welcome to the Hotel R K Grand where the age old Indian tradition of "Atithi Devo Bhava" which means "Guest is God" a way of life & where everyone committed to taking guests to reverential heights. "Welcome to grandeur & luxury In India, a guest is treated like the incarnation of God. At the Hotel R K Grand Varanasi, this credo is part of how we make you feel this way. The other part is by offering a host of divine services that you’d expect to find at the finest business hotel in Varanasi.</span><br />
                   <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'} >
                    <button className="towcolbutton">Read More</button>
                   </NavLink>
                </div>
                <div className="twocol_second_col">

                    <div className="twocol_img">
                        <img  className='twocol_img_size' src={hotel_img1} alt="" />
                    </div>
                    <div className="twocol_img">
                        <img className='twocol_img_size'  src={hotel_img2} alt="" />
                    </div>
                    <div className="twocol_img">
                        <img className='twocol_img_size'  src={hotel_img3} alt="" />
                    </div>
                    <div className="twocol_img">
                        <img className='twocol_img_size'  src={hotel_img4} alt="" />
                    </div>

                </div>
          </div>
      </div>
  )
}

export default Twocol