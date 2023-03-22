import React from 'react'
import '../style/Contact.css'

import girlA from '../assets/girlcontactus.png'

const Contact = () => {
  return (
    <>   
    
       <section className="contactus_m_con">
         <div className="grid_two_col">
                 <div className="contact_first">
                       <img src={girlA} alt="please fill your own form"/>
                 </div>     

                 <div className="contact_second">
                         <h1>CONTACT US</h1>
                         <form className="contact_form" action="">
                                 <label for="name">Name</label> <br/>
                                  <input placeholder="Enter your Name"  type="text" name="name" id="name"/>  <br/>                                     
                                 <div id="Underline_"></div>     

                                  <label for="email">Email</label> <br/>
                                  <input placeholder="Enter your email"  type="text" name="name" id="name"/>  <br/>                                     
                                   <div id="Underline_"></div>     

                                  <label for="phone">Phone</label> <br/>
                                   <input  placeholder="Enter your phone number" type="phone" name="name" id="phone"/> <br/>
                                   <div id="Underline_"></div>     

                                  <label for="messege">Message</label> <br/>
                                  <textarea name="message" id="messege" cols="30" rows="6" ></textarea> <br/>
                                  <div id="Underline_"></div>     

                               <div className="checkbox">
                                       <input type="checkbox" name="accepted" id="accept" />
                                       <label for="accept"> I accepted all terms and condation</label>
                                 </div>
                              <br/>
                              <button className="contact_btn">Submit</button>
                         </form>
                 </div>
         </div>
     </section></>
  )
}

export default Contact