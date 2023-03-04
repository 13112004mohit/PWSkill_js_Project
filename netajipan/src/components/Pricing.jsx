import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {GiPriceTag} from 'react-icons/gi'
import {FiChevronDown} from 'react-icons/fi'
import '../style/Pricing.css'
import { Link } from 'react-router-dom';


const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1224 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1224, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 577 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 577, min: 0 },
          items: 1
        }
     
      };

       const setting={
        autoPlay:true,
        swipeable:true,
        // draggable:false,
        showDots:false,
        autoPlaySpeed:2500,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:1,
        keyBoardControl:true,
        transitionDuration:500,
        removeArrowOnDeviceType:["mobile"]
       } 

const Pricing = () => {
  return (
    <>
       <div className="pricing-table">
       <Carousel style={{display:'flex',justifyContent:'center'}} {...setting} responsive={responsive}>
            <div data-aos-duration='1000' data-aos='slide-up' className="pricing-column">
              <div className="pricing-header">
                <h3>NORMAL PAAN</h3>
                <h2 ><span ><FiChevronDown /></span></h2>
              </div>
              <ul className="pricing-features">
                <li>Gilauri Paan<span id='priceP'>Rs.30</span> </li> <hr />
                <li>Singhada Paan <span id='priceP'>Rs.25</span></li> <hr />
                <li>Sadharan Paan <span id='priceP'>Rs.10</span></li> <hr />
                <li>Sadharan Paan-II<span id='priceP'> Rs.5</span></li> <hr />
                <li>Gujiya Paan <span id='priceP'>Rs.100</span></li> <hr />
                <li>Roll Paan <span id='priceP'>Rs.120</span></li> <hr />
                <li>Langlota Paan<span id='priceP'>Rs.130</span> </li> <hr />
              </ul>
              <a href="#" className="btn">See More</a>
            </div>

            <div data-aos-duration='1500' data-aos='slide-up' data-aos-delay='300' className="pricing-column">
              <div style={{backgroundColor:'#04b5acc5'}} className="pricing-header">
                <h3 ><GiPriceTag style={{fontSize:'2rem'}}/>FLAVOUR</h3>
                <h2><span>Top Sale</span></h2>
              </div>
              <ul className="pricing-features">
                <li>Chocolate Flavour Paan <span id='priceP'>Rs.50</span> </li> <hr />
                <li>Pineapple Paan <span id='priceP'>Rs.60</span></li> <hr />
                <li>Banana Flavour Paan<span id='priceP'>Rs.70</span> </li> <hr />
                <li>Malai Paan<span id='priceP'>Rs.100</span> </li> <hr />
                <li>strawberry paan<span id='priceP'>Rs.80</span> </li> <hr />
                <li>Mango Paan <span id='priceP'>Rs.50</span></li> <hr />
                <li><span id='priceP'>24x7</span> support</li> <hr />
              </ul>
              <a href="#"  style={{backgroundColor:'#04b5acc5'}} className="btn">See More</a>
            </div>

             <div data-aos-duration='2000' data-aos='slide-up' data-aos-delay='500' className="pricing-column">
               <div className="pricing-header">
                 <h3>PREMIUM</h3>
                 <h2>$150<span>/month</span></h2>
               </div>
               <ul className="pricing-features">
                 <li>Online system </li> <hr />
                 <li>Full access</li> <hr />
                 <li>Free apps</li> <hr />
                 <li>Multiple slider</li> <hr />
                 <li>Free domin</li> <hr />
                 <li>Support unlimited</li> <hr />
                 <li>Payment online</li> <hr />
                 <li>Cash back</li> <hr />
               </ul>
               <Link onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/signup'} className="btn">Sign Up Now</Link>
             </div>

             </Carousel>
       </div>
    </>
  )
}

export default Pricing