import React from 'react'
import '../style/OurMenu.css'

import  img1 from '../assets/p1.png'
import  img2 from '../assets/p2.png'
import  img3 from '../assets/p3.png'
import  img4 from '../assets/p4.png'

const Ourmenu = () => {
  return (
    <>
       <section className="ourmenu_m">
        <h1 className='ourmenuHeading'>Our Experties</h1>
        <hr style={{marginBottom:'3rem'}}/>

        <div className="omnu_img_content">
             <div data-aos-duration='1000' data-aos="fade-right" className="omu_i">
              <img src={img1} alt="" />
             </div>
             <div className="omu_content">
                <h1>RICE PUDDING ( KHEER )</h1>
                <p>( Rice sugar milk Cashewnut pistachio )</p>
             </div>
        </div>
        <div className="omnu_content_img">
             <div className="omu_content">
               <h1>CHUNDA MUTER</h1>
               <p>( Flattened Rice, pea, chinia Almond,Lemon, Ginger, Asafoetida, Cumin seed, Salt Soya oil )</p>
             </div>
             <div data-aos-duration='1000' data-aos="fade-right" className="omu_i">
              <img src={img2} alt="" />
             </div>
        </div>
        <div className="omnu_img_content">
             <div data-aos-duration='1000' data-aos="fade-right" className="omu_i">
              <img src={img3} alt="" />
             </div>
             <div className="omu_content">
                <h1>RICE NAN</h1>
                <p>( Rice Flour, Gram Flour,Ginger, Garlic, Asafoetida,Cumin seed, salt and soya oil )</p>
             </div>
        </div>
        <div className="omnu_content_img">
             <div className="omu_content">
                <h1>HOT COFEE</h1>
             </div>
             <div data-aos-duration='1000' data-aos="fade-right" className="omu_i">
              <img src={img4} alt="" />
             </div>
        </div>
        
        <hr style={{marginBottom:'3rem'}}/>
       </section>
    </>
  )
}

export default Ourmenu