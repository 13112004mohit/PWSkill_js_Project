import React from 'react'
import '../style/home.css'
import '../style/hovereffect.css'

import home2img1 from '../assets/work02.jpg'
import home2img2 from '../assets/work08.png'



const Home1 = () => {
  return (
    <>
       <section className="home2_three_con">
        {/* first row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="first_con">
            <h1 className="first_h1">Courses We Provide</h1>
        </div>
        <div id="underline_c"></div>
         {/* second row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="home2_second_con">
              <div className="home2_img_cart_det ">
                 <div className="home2_img_con image-box">
                     <img src={home2img1} alt="" />
                     <div class="overlay" >
                       <p style={{fontSize:'25px'}}>J.N.M  ( General Nursing) <br /><small>Courses Duration 3 years & 6 months</small></p>
                     </div>
                 </div>
                 <div className="home2_data_con">
                     <h1>J.N.M  ( General Nursing) </h1> 
                     <p>Courses Duration 3 years & 6 months</p>
                 </div>
              </div>
              <div className="home2_img_cart_det">
                 <div className="home2_img_con image-box">
                     <img src={home2img2} alt="" />
                     <div class="overlay" >
                       <p style={{fontSize:'25px'}}>D Pharma in Ayurveda. <br /> <small> Courses Duration 2 years</small></p>
                     </div>
                 </div>
                 <div className="home2_data_con">
                     <h1>D Pharma in Ayurveda.</h1> 
                     <p >Courses Duration 2 years</p>
                 </div>
              </div>
         </div>
       </section>
    </>
  )
}

export default Home1;