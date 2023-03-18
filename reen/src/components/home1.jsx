import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {GoLightBulb} from 'react-icons/go'
import {BiStar} from 'react-icons/bi'


import '../style/home.css'




const Home1 = () => {
  return (
    <>
       <section className="home1_two_con">
        {/* first row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="first_con">
            <h1 className="first_h1">Beautiful. Clean. Responsive.</h1>
            <p className="first_p">REEN is a high-quality solution for those who want a beautiful website in no time. It's fully responsive and will adapt itself to any mobile device. iPad, iPhone, Android, it doesn't matter. Your content will always looks its absolute best.</p>
         </div>
         {/* second row */}
         <div data-aos="fade-up"  data-aos-duration="1000" className="second_con">
            <div className="agency_cart_">
                <div className="agency_twocol">
                    <div className="agency_icons"><FiHeart id='agency_icons'/></div>
                    <div className="agency_content">
                       <h1>Passion</h1> 
                       <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis volor.</p>
                    </div>
                </div> 
            </div>
            <div className="agency_cart_">
                <div className="agency_twocol">
                    <div className="agency_icons"><GoLightBulb id='agency_icons'/></div>
                    <div className="agency_content">
                        <h1>Creativity</h1>
                        <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis volor.</p>
                    </div>
                </div> 
            </div>
            <div className="agency_cart_">
                <div className="agency_twocol">
                    <div className="agency_icons"><BiStar id='agency_icons'/></div>
                    <div className="agency_content">
                        <h1>Quality</h1>
                        <p>Magnis modipsae que lib voloratati andigen daepeditem quiate re porem aut labor. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam core posae volor remped modis volor.</p>
                    </div>
                </div> 
            </div>
         </div>
       </section>
    </>
  )
}

export default Home1;