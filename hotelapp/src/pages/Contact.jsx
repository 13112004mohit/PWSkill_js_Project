import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight,MdOutlineEmail} from 'react-icons/md'
import {IoCall,IoLocationSharp} from 'react-icons/io5'
import {BiTime} from 'react-icons/bi'
import '../style/contact.css'


const Contact = () => {
  return (
    <>
       <div className="contact_m_con">
         
            <div className="contact_1_con">
               <h1>Contact Us</h1><br />
              <span id='contact_1_con_span'> <NavLink to={'/'}> Home</NavLink><MdOutlineKeyboardArrowRight id='contact_1_con_icon'/> Contact Us</span>
            </div>

            <div className="contact_2_con">
                <div className="_2_con_1con">
                        <div className="_2_1_con1">
                           <IoCall className='_2_1_con1ICON'/>
                           <h1>Phone</h1>
                           <a href="tel:+8887531870">(+91) 542-240-5656, 2405757, 8887531870</a>
                        </div>
                        <div className="_2_1_con1">
                           <IoLocationSharp className='_2_1_con1ICON'/>
                           <h1>Address</h1>
                           <p>Plot no.1, Gulab Bagh, in front of Sigra Thana, Varanasi, Utter Pradesh 221010</p>
                        </div>
                        <div className="_2_1_con1">
                           <BiTime className='_2_1_con1ICON'/>
                           <h1>Open time</h1>
                           <p>24/7</p>
                        </div>
                        <div className="_2_1_con1">
                           <MdOutlineEmail className='_2_1_con1ICON'/>
                           <h1>Email</h1>
                           <a href="mailto:reservation@hotelrkgrand.com">reservation@hotelrkgrand.com</a>
                        </div>
                 </div>
                 <div className="_2_con_2con">
                        <div className="_2_2_map">
                          <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7213.209430742696!2d82.99039564285277!3d25.317481496770522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2df940000001%3A0xc8249db441066cc3!2sHotel%20R%20K%20Grand!5e0!3m2!1sen!2sin!4v1677653051334!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                          ></iframe>
                        </div>
                  </div>
            </div>

            <div className="contact_3_con" >
                <form action="https://formspree.io/f/xwkzjoqw" method="post">
                       <span>LEAVE A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                        <input name="name" type="text" placeholder="Your Name"/>
                        <input name="Email" type="email" placeholder="E-mail"/>
                        <input name="subject" type="text" placeholder="Subject"/>
                        <input name="PASSWORD" type="password" placeholder="email@ password"/>
                        <textarea name="Messege" id="" cols="30" rows="10" placeholder="Your Message"/>
                        <button type="submit" class="normal">Submit</button>
                </form>
              
            </div>
       </div>
    </>
  )
}

export default Contact