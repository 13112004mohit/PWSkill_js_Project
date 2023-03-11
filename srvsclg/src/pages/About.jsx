import React from 'react'
import '../style/about.css'
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'


import  about_mn from '../assets/about/about_.png'
import  about_img2 from '../assets/about/1.jpg'
import  about_img3 from '../assets/about/2.jpg'
import  about_img4 from '../assets/about/3.jpg'
import  about_img5 from '../assets/about/4.jpg'
import  about_img6 from '../assets/about/5.jpg'

const About = () => {
  return (
    <>
      <div className="about_main_con">
      <div className="about_square_container">
              <h1>About Us</h1>
           </div>
        <div className="about_two_row">

           <div className="about_first_r">
             <div className="about_first_r_col">
                <img src={about_mn} alt="" />
             </div> 
             <div className="about_second_r_col">
              <p>यह शिक्षण संस्था हमारे पूर्वज स्व0 रामविलास सिंह जी(दादा/परदादा) ग्राम-तियरी,पोस्ट-बेन तियरी, तहसील-चकिया,जिला-चन्दौली की स्मृति में स्व0 रामविलास सिंह शिक्षण संस्था के नाम से ट्रस्ट का निर्माण करके श्रद्धांजली स्वरुप उनकी इच्छाओं को पूर्ण करने हेतु चकिया क्षेत्र एवं विभिन्न स्थानों पर शिक्षण संस्था के माध्यम से अपने क्षेत्र,गाॅव व जिले की महिलाओं को उच्च स्तरीय शिक्षा प्रदान करने हेतु महिला महाविद्यालय का निर्माण किया गया है ताकि हमारे क्षेत्र के युवकतियो का सार्वभौमिक और सर्वांगीण विकास हो जिससे उनका भविष्य उज्ज्वल बन सके,हमारा यह प्रयास है कि हम उनके दिखाये गये मार्ग पर चलते हुए देश व समाज की नई पीढ़ी को शिक्षित करें और एक स्वस्थ भरत का निर्माण कर सकें।</p>
             </div>
           </div>

           <div className="about_second_r">
                <div className="about_deprment_cart">
                    <div className="about_dep_img">
                       <img src={about_img5} alt="" />
                    </div>
                    <p>श्री छत्रबली सिंह (मैनेजिंग डायरेक्टर)</p>
                    <div class="overlay">
                      <p><FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/></p>
                    </div>
                </div>   
                <div className="about_deprment_cart">
                    <div className="about_dep_img">
                       <img src={about_img6} alt="" />
                    </div>
                    <p>श्रीमती सरिता सिंह (डायरेक्टर)</p>
                    <div class="overlay">
                      <p><FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/></p>
                    </div>
                </div>   
                <div className="about_deprment_cart">
                    <div className="about_dep_img">
                       <img src={about_img2} alt="" />
                    </div>
                    <p>श्री वकील सिंह जी (संस्थापक)</p>
                    <div class="overlay">
                      <p><FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/></p>
                    </div>
                </div>   
                <div className="about_deprment_cart">
                    <div className="about_dep_img">
                       <img src={about_img3} alt="" />
                    </div>
                    <p>श्री श्यामजी सिंह (सहायक मैनेजिंग डायरेक्टर)</p>
                    <div class="overlay">
                      <p><FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/></p>
                    </div>
                </div>   
                <div className="about_deprment_cart">
                    <div className="about_dep_img">
                       <img src={about_img4} alt="" />
                    </div>
                    <p>श्री सुनील सिंह (सहायक मैनेजिंग डायरेक्टर)</p>
                    <div class="overlay">
                      <p><FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/></p>
                    </div>
                </div>   
           </div>

        </div>
      </div>
    </>
  )
}

export default About