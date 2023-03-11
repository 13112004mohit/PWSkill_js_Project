import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoMdArrowDropright} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import '../style/Footer.css'


import logo from '../assets/home/logo.jpg'

const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <div className="footer_four_col_">
                  <div className="footer_col1">
                       <img src={logo} alt="brand" />
                       <br /> <a href="tel:+8887531870">+91 8765128702</a>
                       <p id='footer_location_data'><MdLocationOn id='footer_location'/> Rewsa ( Pachpherwa , G.T Road ) Post-Janso Ki Madai</p>
                       <p id='copyright'>COPYRIGHT © 2016 SRVSMMV1245.ORG - ALL RIGHTS RESERVED</p>
                  </div>
                  <div className="footer_col2">
                         <h3>Our WEbSites</h3>
                         <p className='footer_col2_p'> <a target={'_blank'} href="https://www.srvs1245.org/">➡ www.srvs1245.org</a></p>
                         <p className='footer_col2_p'>  <a target={'_blank'} href="https://www.srvsedutrust.org/">➡ www.srvsedutrust.org</a></p>
                         <p className='footer_col2_p'>  <a target={'_blank'} href="https:/www.srvsmmva1245.org/">➡ www.srvsmmva1245.org</a></p>
                  </div>
                  <div className="footer_col3">
                     <h3>Links</h3>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}>About us</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/courses'}>Courses</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'}>Gallery</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact us</NavLink></p>

                  </div>
                  <div className="footer_col4">
                     <h3>Subscribe Newsletter</h3>
                     <p className='footer_col4_p'>Subscribe our newsletter gor get notification about new updates.</p>
                      <div className="footer_col4_emailbox">
                        <input type="email" name="email" id="email" placeholder='Enter your email...'/>
                        <div className="sendmail"><RiSendPlaneFill/></div>
                      </div>
                      <p style={{color:'#fff'}}>DESIGNED BY : TECHOMIND AN IT COMPANY</p>
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