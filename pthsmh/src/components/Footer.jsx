import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {MdLocationOn} from 'react-icons/md'
import {MdEmail,MdPhoneAndroid} from 'react-icons/md'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'
import {IoLogoTwitter,IoLogoLinkedin,IoLogoFacebook,IoLogoGoogle} from 'react-icons/io'

import '../style/footer.css'


import logo from '../assets/logo.png'
// import footerimg2 from '../assets/work02.jpg'
// import footerimg3 from '../assets/work03.jpg'
// import footerimg4 from '../assets/work07.jpg'
// import footerimg5 from '../assets/work01.jpg'

const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

{/* footer contact box */}
               <div className="footer_contact_box">
                   <div className="footer_1contact_twocol">
                           <h1>Contact us now!</h1>
                           <p><MdEmail id='emailfcb' /> Email: info@pthariharsss.org</p>
                   </div>
                   <div className="footer_2contact_twocol">
                          <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}><button className='footer_contact_button'>Contact Now</button></NavLink>
                   </div>
               </div> 
{/* column 1 */}
               <div className="footer_four_col_">
                  <div className="footer_col1">
                       <p id='col_1_p1'>WHO WE ARE</p>
                       <img src={logo} alt="brand" />
                       <p id='col_1_p2'>
                       उत्तरोत्तर बेहतर परीक्षाफल ,सर्वोत्तम अनुशासन, छात्राओं के लिए एन.एस.एस की व्यवस्था, पूर्णतया कम्प्यूटरीकृत कार्यालय
                       </p>
                       <p id='col_1_p3'>More about us <FaLongArrowAltRight id='col_1_arrow'/></p>
                  </div>

{/* column 3 */}
                  <div className="footer_col3">
                            <h3>GET IN TOUCH</h3> 
                            <p id='infofooterdata'>Pandit Harihar Shastri Siksha Seva Sansthan , Ayurveda Collage </p> 
                            <div><MdLocationOn id='smallinfo_icon'/>  Kharagpur ,Uttar Pradesh Azamgarh</div>
                            <div><MdPhoneAndroid id='smallinfo_icon'/><a href="tel: 9415940255"> 9415940255</a></div> 
                            <div><MdEmail id='smallinfo_icon'/> <a href="mailto:info@pthariharsss.org">info@pthariharsss.org</a></div> 
                  </div>
{/* column 4 */}
                  <div className="footer_col4">
                     <h3>FREE UPDATES</h3>
                     <p className='footer_col4_p'>Subscribe our newsletter or get notification about new updates.</p>
                      <div className="footer_col4_emailbox">
                        <input type="email" name="email" id="email" placeholder='Enter your email address'/>
                        <button type='submit' className="sendmail"><span>SUBSCRIBE</span></button>
                      </div>
                      <div id='socal_icon_m_con'>
                           <IoLogoFacebook className='footer_socal_icon'/>
                           <IoLogoGoogle className='footer_socal_icon'/>
                           <IoLogoLinkedin className='footer_socal_icon'/>
                           <IoLogoTwitter className='footer_socal_icon'/>
                      </div>
                  </div>

               </div>

{/* footer two col */}

               <div className="footer_two_col">
                 <div className='copyright'>
                    <p>Copyright &copy;  2018 by TECHNOMIND & COMPANY</p>
                 </div>
                  <div className="footer_navbar_">
                      <ul>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home</NavLink></li>
                         <li> <HashLink to={'/#about'}>About</HashLink></li>
                         <li> <HashLink to={'/#courses'}>Courses</HashLink></li>
                         <li> <HashLink to={'/#team'}>Team</HashLink></li>
                         <li> <HashLink to={'/#gallery'}>Gallery</HashLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact</NavLink></li>
                      </ul>
                  </div>
               </div>

            </div>   
    </>
  )
}

export default Footer