import React from 'react'
import { NavLink } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import {MdLocationOn,MdEmail} from 'react-icons/md'
import {IoMdArrowDropright} from 'react-icons/io'
import {GiLoveMystery} from 'react-icons/gi'
import {BsFacebook,BsWhatsapp,BsYoutube,BsTwitter} from 'react-icons/bs'

import '../style/Footer.css'


import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
           <section className="footer_m_con">
           <div class="custom-shape-divider-bottom-1678685392">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
                 <div className="footer_grid_three_col">

                        <div className="footer_F_col ">
                             <img src={logo} alt="" />
                             <p><MdLocationOn/> <span> CK 8/151 Garhwasi Tola, Chowk,Near Shanti Guest House, Manikarnika Ghat, Varanasi, U.P 221001</span></p>
                             <p><MdEmail/> <a style={{textDecoration:'none',color:'white'}} href="mailto:ricepuddingrooftop@gmail.com">ricepuddingrooftop@gmail.com</a></p>
                             <h4>follow us</h4>
                             <div className="footer_icons">
                                 <span><BsFacebook/></span>
                                 <span><BsYoutube/></span>
                                 <span><BsWhatsapp/></span>
                                 <span><BsTwitter/></span>
                             </div>
                        </div>

                           <div className="footer_col3">
                               <h3>Quick Links</h3>
                               <p><IoMdArrowDropright/> <HashLink smooth to={'/#about'}>About us</HashLink></p>
                               <p><IoMdArrowDropright/> <HashLink smooth to={'/#speciality'}>Our Speciality</HashLink></p>
                               <p><IoMdArrowDropright/> <HashLink smooth to={'/#ourmenu'}>Our Menu</HashLink></p>
                               <p><IoMdArrowDropright/> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}>Contact us</NavLink></p>

                            </div>


                        <div className="footer_T_col footer_col__">
                                <h4>GET IN TOUCH</h4>
                             <form className="footer_col__" action="" >
                                  <input placeholder="Full Name" type="text" name="name" id="name" />
                                  <input placeholder="Email" type="email" name="name" id="name" />
                                  <input placeholder="Subject" type="text" name="name" id="name" />
                                  <textarea name="message" id="messege" cols="30" rows="6" placeholder="Message..." />
                                  <button>Submit</button>
                             </form>
                        </div>

                 </div>
                 <br/>
                 <p id="copyright">Made with <GiLoveMystery style={{color:'red',fontSize:'1.2rem'}}/> by Techomind2021. All Rights Reserved</p>
               </section>
    </>
  )
}

export default Footer