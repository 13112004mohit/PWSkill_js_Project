import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdOutlineEmail,MdWhatsapp} from 'react-icons/md'
import {IoCall,IoLocationSharp,IoTime} from 'react-icons/io5'
import {FcTimeline,FcOvertime} from 'react-icons/fc'
import '../style/contact.css'


const Contact = () => {
  return (
    <>
       <div className="contact_m_con">

         <div className="contact_top_parrlex">
            <h1>CONTACT US</h1>
         </div>

            <div className="contact_2_con">
                <div className="_2_con_1con">
                        <div data-aos-duration='1000' data-aos="fade-up" className="_2_1_con1">
                           <IoCall className='_2_1_con1ICON'/>
                           <h1>Call</h1>
                           <a href="tel:+9839136949">  09839136949</a> <br />
                          
                           <MdWhatsapp className='_2_1_con1ICON'/>
                           <h1>Whatsappp</h1>
                           <a href="tel:+9839136949">09839136949</a> <br />
                          
                        </div>
                        <div className="_2_1_con1">
                           <IoLocationSharp className='_2_1_con1ICON'/>
                           <h1>Address</h1>
                           <p><span>CK 8/151, near Shanti Guest House Manikarnika Ghat, Garwasitola, Govindpura, Varanasi, Uttar Pradesh 221001 <hr /> <br /><b>Near : </b>Shanti Guest House,
Manikarnika Ghat, Varanasi, U.P 221001</span></p>
                        </div>

                        <div className="_2_1_con1">
                           <IoTime className='_2_1_con1ICON'/>
                           <h1>Get the Delicious Food</h1>
                            <span>
                             <b><FcOvertime /> Monday To Sunday</b> 
                            </span> 
                             <span><FcTimeline />( In Summer )</span>  
                             <span>5:00 Am to 7:00 Pm</span> <br />
                             <span><FcTimeline /> ( In Winter )</span> 
                             <span>7:00 Am to 5:00 Pm</span>
                        </div>

                        <div data-aos-duration='1000' data-aos="fade-up" className="_2_1_con1">
                           <MdOutlineEmail className='_2_1_con1ICON'/>
                           <h1>Email</h1>
                           <a href="mailto:ricepuddingrooftop@gmail.com">🍴contact us with gmail</a>
                           <a href="mailto:ricepuddingrooftop@gmail.com">ricepuddingrooftop@gmail.com</a> <br />
                        </div>
                 </div>
            </div>

            <div className="contactus_m_con">
                <div className="grid_two_col">
                        <div className="contact_first">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57704.45115164194!2d82.9660790056027!3d25.320050962693486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f213f1fe579%3A0xaabd961e1cb9442b!2sRice%20Pudding!5e0!3m2!1sen!2sin!4v1678693082242!5m2!1sen!2sin"  width="100%"
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