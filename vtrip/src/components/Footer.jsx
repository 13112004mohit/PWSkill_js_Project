import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoMdArrowDropright} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import '../style/footer.css'



const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <div className="footer_four_col_">
                  <div className="footer_col1">
                      <h1>VTrip</h1>
                       <br /> <a href="tel:+8887531870">+91 08874454454</a>
                       <p id='footer_location_data'><MdLocationOn id='footer_location'/> Varanasi Near TAIC IT Company</p>
                       <p id='copyright'>COPYRIGHT &copy; 2013 VTrip.ORG - ALL RIGHTS RESERVED</p>
                  </div>

                  <div className="footer_col3">
                     <h3>Links</h3>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Know more</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/message'}>Message</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/friends'}>Friends</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Explore</NavLink></p>

                  </div>
                  <div className="footer_col4">
                     <h3>Subscribe Newsletter</h3>
                     <p className='footer_col4_p'>Subscribe our newsletter gor get notification about new updates.</p>
                      <div className="footer_col4_emailbox">
                        <input type="email" name="email" id="email" placeholder='Enter your email...'/>
                        <div className="sendmail"><RiSendPlaneFill/></div>
                      </div>
                      <p style={{color:'#453f'}}>DESIGNED BY : TECHOMIND AN IT COMPANY</p>
                      <p id='socal_icon_m_con'>
                        <BsFacebook className='footer_socal_icon'/>
                        <BsInstagram className='footer_socal_icon'/>
                        <BsLinkedin className='footer_socal_icon'/>
                        <BsTwitter className='footer_socal_icon'/>
                      </p>
                  </div>
               </div>
            </div>   
        {/* </div> */}
    </>
  )
}

export default Footer