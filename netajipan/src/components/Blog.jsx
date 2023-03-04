import React from 'react'
import { NavLink } from 'react-router-dom'
import Carsole1 from '../components/Carousel1'
import '../style/Blog.css'

import foodLover from '../assets/blog1.jpg';

const Blog = () => {
  return (<>
      <div className="twocol2_m_con">
                <div   className="twocol2_first_col">
                   <h1 className='twocol2_h1'>24X7 OPEN 365 DAYS</h1>
                   <span className='twocol2_span'>OUR BLOG</span> <br />
                   <p className='twocol2_content'>WE BELIEVE IN GIVING THE BEST QUALITY PAAN TO ALL THE NATAIONAL & INTERNATIONAL PAAN LOVERS</p> 
                   <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/foodl'} >
                        <button className='towcol2button'>Read More</button>
                   </NavLink>
                </div>

                <div data-aos-duration='1000' data-aos="fade-right"  className="twocol2_second_col">
                       <img className='twocol2_img_size' src={foodLover} alt="foodLover" />
                </div>
      </div>
      <Carsole1/>
      </>
  )
}

export default Blog;