import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoMdArrowDropright} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import '../style/Footer.css'

import fimg1 from '../assets/fimg1.png'
import fimg2 from '../assets/fimg2.png'
import fimg3 from '../assets/fimg3.png'
import fimg4 from '../assets/fimg4.png'
import fimg5 from '../assets/fimg5.png'
import logo from '../assets/rk_grand_logo.jpg'

const Footer = () => {
  return (
    <>
         {/* <div className="footer_m_con_img"> */}
           <div className="footer_m_con">
               <div className="footer_contact_box">
                    <div className="footer_1contact_twocol">
                           <h1>Contact us now!</h1>
                           <p>Contact (+91) 542-240-5656 to book directly or for advice</p>
                    </div>
                    <div className="footer_2contact_twocol">
                           <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}><button className='footer_contact_button'>Contact Now</button></NavLink>
                    </div>
               </div> 

               <div className="footer_companyes_box">
                        <img src={fimg1} alt="trusted_companys" />
                        <img src={fimg2} alt="trusted_companys" />
                        <img src={fimg3} alt="trusted_companys" />
                        <img src={fimg4} alt="trusted_companys" />
                        <img src={fimg5} alt="trusted_companys" />
               </div>

               <div className="footer_four_col_">
                  <div className="footer_col1">
                       <img src={logo} alt="brand" />
                       <br /> <a href="tel:+8887531870">+91 8887-531870</a>
                       <p id='footer_location_data'><MdLocationOn id='footer_location'/> Plot no.1, Gulab Bagh, in front of Sigra Thana, Varanasi, Utter Pradesh 221010</p>
                       <p id='copyright'>Copyright © 2023 All rights reserved</p>
                  </div>
                  <div className="footer_col2">
                         <h3>Our Blog</h3>
                         <p className='footer_col2_p'>Freelance Design Tricks How</p>
                          <span className='footer_col2_span'><MdOutlineWatchLater/> Jan 02, 2019</span>
                         <p className='footer_col2_p'>Freelance Design Tricks How</p>
                         <span className='footer_col2_span'><MdOutlineWatchLater/> Jan 02, 2019</span>
                  </div>
                  <div className="footer_col3">
                     <h3>Links</h3>
                     <p><IoMdArrowDropright/>About Us</p>
                     <p><IoMdArrowDropright/>Our Room</p>
                     <p><IoMdArrowDropright/>Career</p>
                     <p><IoMdArrowDropright/>FAQs</p>

                  </div>
                  <div className="footer_col4">
                     <h3>Subscribe Newsletter</h3>
                     <p className='footer_col4_p'>Subscribe our newsletter gor get notification about new updates.</p>
                      <div className="footer_col4_emailbox">
                        <input type="email" name="email" id="email" placeholder='Enter your email...'/>
                        <div className="sendmail"><RiSendPlaneFill/></div>
                      </div>
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