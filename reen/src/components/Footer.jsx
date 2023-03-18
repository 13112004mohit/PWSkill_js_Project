import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdEmail,MdPhoneAndroid} from 'react-icons/md'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

import '../style/Footer.css'


import logo from '../assets/logowhite.png'
import footerimg2 from '../assets/work02.jpg'
import footerimg3 from '../assets/work03.jpg'
import footerimg4 from '../assets/work07.jpg'
import footerimg5 from '../assets/work01.jpg'

const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <div className="footer_four_col_">
                  <div className="footer_col1">
                       <p id='col_1_p1'>WHO WE ARE</p>
                       <img src={logo} alt="brand" />
                       <p id='col_1_p2'>Magnis modipsae voloratati andigen daepeditem quiate re porem que aut labor. Laceaque eictemperum quiae sitiorem rest non restibusaes maio es dem tumquam.</p>
                       <p id='col_1_p3'>More about us <FaLongArrowAltRight id='col_1_arrow'/></p>
                  </div>

                  <div className="footer_col2">
                        <h3>LATEST WORKS </h3>
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
                         </div>
                  </div>

                  <div className="footer_col3">
                            <h3>GET IN TOUCH</h3>
                            <p id='infofooterdata'>Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et consent accullignis dentibea autem inisita.</p>
                            <span id='footer_location_data'><MdLocationOn id='footer_location'/>  84 Street, City, State 24813</span><br />
                            <span><MdPhoneAndroid id='smallinfo_icon'/><a href="tel:+ +00(123)4567890"> +00 (123) 456 78 90</a></span> <br />
                            <span><MdEmail id='smallinfo_icon'/> <a href="mailto:info@reen.com">info@reen.com</a></span> 
                  </div>

                  <div className="footer_col4">
                     <h3>FREE UPDATES</h3>
                     <p className='footer_col4_p'>Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.</p>
                      <div className="footer_col4_emailbox">
                        <input type="email" name="email" id="email" placeholder='Enter your email address'/>
                        <div className="sendmail"><span>SUBSCRIBE</span></div>
                      </div>
                  </div>

               </div>

               <div className="footer_two_col">
                 <div className='copyright'>
                    <p>&copy; 2019 REEN. All rights reserved.</p>
                 </div>
                  <div className="footer_navbar_">
                      <ul>
                         <li> <NavLink to={'/'}>Home</NavLink></li>
                         <li> <NavLink to={'/protfolio'}>Portfolio</NavLink></li>
                         <li> <NavLink to={'/Blog'}>Blog</NavLink></li>
                         <li> <NavLink to={'/MegaMenu'}>About</NavLink></li>
                         <li> <NavLink to={'/Features'}>Services</NavLink></li>
                         <li> <NavLink to={'/contact'}>Contact</NavLink></li>
                      </ul>
                  </div>
               </div>
            </div>   
    </>
  )
}

export default Footer