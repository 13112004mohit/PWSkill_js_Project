import React from 'react'
import Carsole1 from '../components/Carsole1'
import About from './About'
import Courses from './Courses'
import '../style/Contact.css'
import Ourteam from '../components/Ourteam'

import {MdPhoneInTalk,MdEmail,MdLocationOn} from 'react-icons/md'
import Images from '../components/Images'

const Home = () => {

  return (
    <>
       <Carsole1/>

       <About/>
 
        <Courses/>
       
        <Ourteam/>

        <Images/>

       {/* contact us */}
       <div className="contact_main">
        <div  className="contact_info">
            <h1>Contact Us</h1>
            <div data-aos-duration='1000' data-aos="fade-right" className="contact_info_mohit">
                   <div className='contact_info_data'>
                        <MdPhoneInTalk id='contact_icons'/>
                        <a href="tel:8726274444">Call:  8726274444</a>
           
                        
                   </div>
                   <div className='contact_info_data'>
                        <MdEmail id='contact_icons'/>
                        <a href="mailto:info@shrishaktimayi.com">info@shrishaktimayi.com</a>

                   </div>
                   <div className='contact_info_data'>
                        <MdLocationOn id='contact_icons'/>
                        <p>Location: Shri Shaktimayi Hospital , Kharihani Azamgarh.</p>
                        
                   </div>
            </div>

        </div>

        <div className="contact_3_con">
        <form action="https://formspree.io/f/xwkzjoqw" method="post">
                       <span>LEAVE A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                        <input name="name" type="text" placeholder="Your Name"/>
                        <input name="Email" type="email" placeholder="E-mail"/>
                        <input name="subject" type="text" placeholder="Subject"/>
                        {/* <input name="PASSWORD" type="password" placeholder="password"/> */}
                        <textarea name="Messege" id="" cols="30" rows="10" placeholder="Your Message"/>
                        <button type="submit" class="normal">Submit</button>
                </form>
        </div>
      </div>


      
    </>
  )
}

export default Home