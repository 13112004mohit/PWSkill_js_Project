import React from 'react'
import '../style/home.css'
import '../style/hovereffect.css'
import Carsole2  from './Carsole2'

import home2img1 from '../assets/work02.jpg'
import home2img2 from '../assets/work08.jpg'



const Home1 = () => {
  return (
    <>
       <section className="home2_three_con">
        {/* first row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="first_con">
            <h1 className="first_h1">Check out our latest works</h1>
            <p className="first_p">Magnis modipsae que voloratati andigen daepeditem quiate re porem aut labor.</p>
         </div>
         {/* second row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="home2_second_con">
              <div className="home2_img_cart_det ">
                 <div className="home2_img_con image-box">
                     <img src={home2img1} alt="" />
                     <div class="overlay" >
                       <p style={{fontSize:'35px'}}>+</p>
                     </div>
                 </div>
                 <div className="home2_data_con">
                     <h1>Grand Motel gets an identity brushup</h1> 
                     <p>Identity</p>
                 </div>
              </div>
              <div className="home2_img_cart_det">
                 <div className="home2_img_con image-box">
                     <img src={home2img2} alt="" />
                     <div class="overlay" >
                       <p style={{fontSize:'35px'}}>+</p>
                     </div>
                 </div>
                 <div className="home2_data_con">
                     <h1>Fresh branding for a creative startup</h1> 
                     <p >Identity</p>
                 </div>
              </div>
         </div>
         {/* third row */}
          <Carsole2/>
       </section>
    </>
  )
}

export default Home1;