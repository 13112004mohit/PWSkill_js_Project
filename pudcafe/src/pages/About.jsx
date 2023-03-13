import React from 'react'
import '../style/About.css'

import abimg from '../assets/ab.png'

const About = () => {
  return (
    <>
        <section className="about_m_con">
           <div className="about_f_con">
                 <div className="about_img">
                    <img src={abimg} alt="" />
                 </div>
           </div>

           <div data-aos-duration='500' data-aos="fade-right" className="about_S_con">
              <div  className="about_content_con">
                 <span id='aboth1_'>About us</span>
                 <span id='abouth2'>WE COOK TASTY FOODS</span>
                 <p>We believe in serving the Delicious foods , so that everyone get the Taste and enjoy eating.Rice Pudding is our one of the best Speciality we serve , you can also enjoy Roof Top & River Ganga View in our RestaurantOur Aim is to provide Tasty , Healthy & Quality Food to all who visit us..</p>
              </div>            
           </div>
        </section>     
    </>
  )
}

export default About