import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdWatchLater,MdLocationOn,MdEmail} from 'react-icons/md'
import {IoMdShare,IoMdArrowDropright,IoLogoTwitter,IoLogoPinterest,IoLogoFacebook,IoLogoGoogle} from 'react-icons/io'

import footerimg2 from '../assets/gallery2.jpg'
import footerimg3 from '../assets/gallery3.jpg'
import footerimg4 from '../assets/gallery4.jpg'
import footerimg5 from '../assets/gallery5.jpeg'
import footerimg6 from '../assets/gallery6.jpg'
import footerimg7 from '../assets/gallery7.jpg'

import '../style/Footer.css'

import logo from '../assets/logopan.png'

const Footer = () => {
  return (
    <>
         {/* <div className="footer_m_con_img"> */}
           <div className="footer_m_con">
               <div className="footer_contact_box">
                    <div className="footer_1contact_twocol">
                           <h1>Contact us now!</h1>
                           <p><MdEmail id='emailfcb' /> Email: info@netajipaanbhandar.com</p>
                    </div>
                    <div className="footer_2contact_twocol">
                           <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}><button className='footer_contact_button'>Contact Now</button></NavLink>
                    </div>
               </div> 


               <div className="footer_four_col_">
                     <div className="footer_col1">
                          <img src={logo} alt="brand" />
                          <br /> <a href="tel:+8887531870">+91 09696913696</a>
                          <p id='footer_location_data'><MdLocationOn id='footer_location'/> Location: CK 39/73, Godowlia Rd, Govindpura
Varanasi, Uttar Pradesh 221001</p>
                          <p id='copyright'>© Copyright Netaji Paan Bhandar. All Rights Reserved</p>
                     </div>
                     <div className="footer_col2">
                            <h3>INFORMATION</h3>
                            <p id='infofooterdata'>We Provide 24X7 Our Service For our Repatuted Cuestermers</p>
                            <p className='footer_col2_p'>Email</p>
                             <p className='footer_col2_span'><MdEmail id='footericon_'/> info@netajipaanbhandar.com</p>
                            <p className='footer_col2_p'>Working Hours:</p>
                            <p className='footer_col2_span'><MdWatchLater id='footericon_'/>  24x7 365 days</p>
                     </div>
                     <div className="footer_col3">
                        <h3>Links</h3>
                        <div className='divcon'><IoMdShare id='footericon_'/> <a target='_blank' href="https://www.netajipaanbhandar.com/index.php">shar</a></div>
                     </div>

                     <div className="footer_col4">
                        <h3>INSTAGRAM </h3>
                         <div className="footer_garrary">
                              <div className="footerimg2_box">
                                <img src={footerimg2} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg3} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg4} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg5} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg6} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg7} alt="footerimg2" />
                              </div>
                         </div>
                           
                         <p id='socal_icon_m_con'>
                           <IoLogoFacebook className='footer_socal_icon'/>
                           <IoLogoGoogle className='footer_socal_icon'/>
                           <IoLogoPinterest className='footer_socal_icon'/>
                           <IoLogoTwitter className='footer_socal_icon'/>
                         </p>
                     </div>
               </div>

            </div>   
        {/* </div> */}
    </>
  )
}

export default Footer