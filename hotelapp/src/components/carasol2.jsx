import React from 'react'
import '../style/carosel2.css'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {BiBed} from 'react-icons/bi'

import  room1 from '../assets/familyroom1.avif'
import  room2 from '../assets/familyroom2.avif'
import  room3 from '../assets/familyroom3.avif'


const Carousel2 = () => {
  
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1
  };

  return (

        <div className='slider-content '>
          <Carousels  {...settings}>
 
            <div className="slider_content_m_con">
                 <div className='slider-item_img_container'>
                      <img className='slider_img' src ={room1} alt = "Family_Room" />
                 </div>
                 <div className="slider_content_">
                       <h1>Family Room</h1>
                        <h2>Only for 4 Person 4200 INR<span>/Day</span> </h2>
                        <p><BiBed className='slider_icon_'/>Extra Bed : 700 INR</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Taxes are applicable as per Goverment Rules</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Check out time 11am % Check in time 1pm</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Volume corporate and group rates are available throough our sales office</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Tariff and taxes are subjects to change without notice</p>
                         <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/rooms'}> 
                         <button className='slider_button'>View Details</button>
                         </NavLink>
                 </div>
            </div>

            <div className="slider_content_m_con">
                 <div className='slider-item_img_container'>
                   <img className='slider_img' src ={room2} alt = "Club Royal Room" />
                 </div>
                 <div className="slider_content_">
                       <h1>Club Royal Room</h1>
                       <h2>4000 INR<span>/Day</span> </h2>
                        <p><BiBed  className='slider_icon_'/>Extra Bed : 700 INR</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Taxes are applicable as per Goverment Rules</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Check out time 11am % Check in time 1pm</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Volume corporate and group rates are available throough our sales office</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Tariff and taxes are subjects to change without notice</p>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/rooms'}> 
                         <button className='slider_button'>View Details</button>
                         </NavLink>
                 </div>
            </div>

            <div className="slider_content_m_con">
                 <div className='slider-item_img_container'>
                   <img className='slider_img' src ={room3} alt = "Delux Room" />
                 </div>
                 <div className="slider_content_">
                        <h1>Delux Room</h1>
                        <h2>3200 INR<span>/Day</span> </h2>
                        <p><BiBed  className='slider_icon_'/>Extra Bed : 700 INR</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Taxes are applicable as per Goverment Rules</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Check out time 11am % Check in time 1pm</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Volume corporate and group rates are available throough our sales office</p>
                        <p><IoMdCheckmarkCircleOutline className='slider_icon_'/> Tariff and taxes are subjects to change without notice</p>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/rooms'}> 
                         <button className='slider_button'>View Details</button>
                         </NavLink>
                 </div>
            </div>

          </Carousels>
        </div>
  )
}
export default Carousel2;