import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {IoMdArrowDropright} from 'react-icons/io'
import {RiSendPlaneFill} from 'react-icons/ri'
import {CgWebsite} from 'react-icons/cg'
import {BsFacebook,BsLinkedin,BsTwitter} from 'react-icons/bs'

import '../style/footer.css'



const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <div className="footer_four_col_">
                  <div className="footer_col1">
                      <h1>श्री शक्तिमयी आयुर्वेदिक फार्मेसी एवं नर्सिंग कॉलेज</h1>
                       <br /> <a href="tel:+8726274444">+91 8726274444</a>
                       <p id='footer_location_data'><MdLocationOn id='footer_location'/>Shri Shaktimayi Hospital , Kharihani Azamgarh.</p>
                       <p id='copyright'> &copy; All Right Reserved. Designed by Techomind An IT Company</p>
                  </div>

                  <div className="footer_col3">
                     <h3>Quick Links</h3>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Know more</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}>About</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'}>Gallery</NavLink></p>
                     <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact</NavLink></p>

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
                        <a className='footer_socal_icon' href="https://shrishaktimayi.com/" target={'_blank'}><BsFacebook className='animated_icon'/></a>
                        <a className='footer_socal_icon' href="https://shrishaktimayi.com/" target={'_blank'}><BsLinkedin className='animated_icon'/></a>
                        <a className='footer_socal_icon' href="https://shrishaktimayi.com/" target={'_blank'}><BsTwitter className='animated_icon'/></a>
                        <a className='footer_socal_icon' href="https://shrishaktimayi.com/" target={'_blank'}><CgWebsite className='animated_icon'/></a>
                      </p>
                  </div>
               </div>
            </div>   
    </>
  )
}

export default Footer