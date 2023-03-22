import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style/About.css'

import img1 from '../assets/about1.jpg';
import img2 from '../assets/about2.jpg';
import img3 from '../assets/about3.jpg';
import img4 from '../assets/about4.jpg';

const About = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
 
  };
  const setting={
    autoPlay:true,
    swipeable:true,
    draggable:true,
    showDots:true,
    arrows:false,
    autoPlaySpeed:3500,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll:1,
    keyBoardControl:true,
    transitionDuration:500,
   
   } 

  return (
    <>
         <section className="abouth">
        <div className="twocol">
           <div className="firstabouth">
                <div className="about1img1">
                  <img  data-aos="fade-right"  data-aos-duration="1000" id='abimgsz' src={img1} alt="" />
                </div>
                <div className="about1img2">
                  <img id='abimgsz' src={img2} alt="" />
                </div>
                <div className="about1img3">
                  <img id='abimgsz' src={img3} alt="" />
                </div>
                <div className="about1img4">
                  <img  id='abimgsz' src={img4} alt="" />
                </div>
           </div>
           
           <div className="carsole_second_con">
                 <h1  className="carsole_about_name">About us</h1>
                 <div id="underline"></div>
                 <h1 className="carsole_h1">सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः सर्वे <br /> भद्राणि पश्यन्तु, मा कश्चिद् दुखः भाग्भवेत</h1>
                 <Carousel  {...setting} responsive={responsive}>
                     <div className="carsole_custmer_review">
                        <p>Shri Shaktimayi Ayurvedic Pharmecy and Narsing College. Kharagpur Azamgarh – in the year- 2015 This Medical College is established by Vaidya Satnarayan Pandey. They have also established –<b>Shri Shaktimayi Ayurvedic Pharmecy – 2009</b> , Pt Harihar Shashtri Sanskrit Mahavidyalaya – 2007</p>
                    </div>
                     <div className="carsole_custmer_review">
                        <p>Shri Shaktimayi Ayurvedic Hospital – in the city and rural areas. We are please to say that whole familyof the above Sansthapak is doing well for the extension of the education for society.</p>
                   </div>
                     <div className="carsole_custmer_review">
                        <p>This College is Situated Kharagpur , near Kharihani Market Azamgarh in up . Sharishaktimayi Ayurvedic Farmecy and Narsing Cpllege . Pt. Hariharshastri Shikshan Seva Sansthan which is under Society act 1860. The College is recognized by Board of Ayurveda Unnani Tibbi Chikitsa Parishad Lucknow U.P</p>
                  </div>
               
                 </Carousel>
           </div>
        </div>
       </section>
    </>
  )
}

export default About