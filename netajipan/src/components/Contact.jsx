import React from 'react'
import '../style/Contact.css'
import {MdPhoneInTalk,MdEmail,MdLocationOn} from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div className="contact_main">
        <div  className="contact_info">
            <h1>Contact Us</h1>
            <div data-aos-duration='2000' data-aos="fade-right" className="contact_info_mohit">
                   <div className='contact_info_data'>
                        <MdPhoneInTalk id='contact_icons'/>
                        <a href="tel:9696913696">Call: 09696913696</a>
                        <p>Open 24/7</p>
                        
                   </div>
                   <div className='contact_info_data'>
                        <MdEmail id='contact_icons'/>
                        <a href="mailto:info@netajipaanbhandar.com">info@netajipaanbhandar.com</a>

                   </div>
                   <div className='contact_info_data'>
                        <MdLocationOn id='contact_icons'/>
                        <p>Location: CK 39/73, Godowlia Rd, Govindpura Varanasi, Uttar Pradesh 221001</p>
                        
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