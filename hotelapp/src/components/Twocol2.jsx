import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/home.css'

import foodLover from '../assets/foodLover.jpg';

const Twocol2 = () => {
  return (
      <div className="twocol2_m_con">
                <div className="twocol2_first_col">
                   <h1 className='twocol2_h1'>Food Lover - <br />A Multicuisine Restaurant</h1>
                   <span className='twocol2_span'>DINING & RESTAURANT</span> <br />
                   <span className='twocol2_content'>“In a land of so many diverse people, there is one passion that binds a billion people together – food! “ Naturally, The Food Lover serves up a range of dining experiences tries to recreate the Indian passion for food, both Indian and international. For the way to a guest’s heart is also through the stomach.</span> <br />
                   <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/foodl'} >
                        <button className='towcol2button'>Read More</button>
                   </NavLink>
                </div>

                <div className="twocol2_second_col">
                       <img className='twocol2_img_size' src={foodLover} alt="foodLover" />
                </div>
      </div>
  )
}

export default Twocol2