import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight,MdOutlineEmail} from 'react-icons/md'
import {IoCall,IoLocationSharp} from 'react-icons/io5'
import {CgWebsite} from 'react-icons/cg'
import '../style/contact.css'


const Contact = () => {
  return (
    <>
       <div className="contact_m_con">

            <div className="contact_2_con">
                <div className="_2_con_1con">
                        <div className="_2_1_con1">
                           <IoCall className='_2_1_con1ICON'/>
                           <h1>Contact</h1>
                           <a href="tel:+8887531870">(+91)  8765128702  / 03</a> <br />
                          <span> <b> Enquiry</b> </span> <a href="tel:+8887531870">(+91)  8765128704  / 05</a> 
                        </div>
                        <div className="_2_1_con1">
                           <IoLocationSharp className='_2_1_con1ICON'/>
                           <h1>Address</h1>
                           <p><span>Rewsa ( Pachpherwa , G.T Road ) Post-Janso Ki Madai <hr /> <br /><b>Near : </b>Mughalsarai, Chandauli (U.P) Pin-232120</span></p>
                        </div>
                        <div className="_2_1_con1">
                           <CgWebsite className='_2_1_con1ICON'/>
                           <h1>Our Websites</h1>
                           <a target={'_blank'} href="https://www.srvs1245.org/">➡ www.srvs1245.org</a>
                           <a target={'_blank'} href="https://www.srvsedutrust.org/">➡ www.srvsedutrust.org</a>
                           <a target={'_blank'} href="https:/www.srvsmmva1245.org/">➡ www.srvsmmva1245.org</a>
                        </div>
                        <div className="_2_1_con1">
                           <MdOutlineEmail className='_2_1_con1ICON'/>
                           <h1>Email</h1>
                           <a href="mailto:info@srvsmmv1245.org">➡ info@srvsmmv1245.org</a> <br />
                           <a href="mailto:srvsmmv@gmail.com">➡ srvsmmv@gmail.com</a>
                        </div>
                 </div>
            </div>

            <div className="contactus_m_con">
                <div className="grid_two_col">
                        <div className="contact_first">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462296.36770159623!2d82.42096531295645!3d25.146156766929458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e4ec9ca604675%3A0x8cbd4a39f4631f1c!2sSRVS%20MAHILA%20MAHAVIDYALAYA!5e0!3m2!1sen!2sin!4v1678443746557!5m2!1sen!2sin"  width="100%"
                                        height="100%"  allowFullScreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <section className="contact_second">
                                <h1>CONTACT US</h1>
                                <form className="contact_form" action="" >
                                         <input placeholder="Enter your Name"  type="text" name="name" id="name" />  <br/>                                     
                                     
                                         <input type="email" placeholder='example@gmail.com' name="email" id="eml" /> <br />
                                        
                                          <input  placeholder="Enter your phone number" type="phone" name="name" id="phone" /> <br/>
                                       
                                         <textarea name="message" placeholder='Message here...' id="messege" cols="30" rows="6" /> <br/>
                                     

                                        <div class="checkbox">
                                              <input type="checkbox"  name="accepted" id="accept" />
                                              <label for="accept"> I accepted all terms and condation</label>
                                        </div>
                                     <br/>
                                     <button className="contact_btn">Submit</button>
                                 </form>
                        </section>
                </div>
        </div>



       </div>
    </>
  )
}

export default Contact