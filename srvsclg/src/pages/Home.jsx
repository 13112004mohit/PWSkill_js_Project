import React from 'react'
import Hero from '../components/hero'
import '../style/home.css'
import { NavLink } from 'react-router-dom'

import img_abt from '../assets/home/about_home.png'

const Home = () => {
  return (
    <>
      <Hero/>
       
       {/* Announcement */}
        <section className="announc">
           <div className="announc_cart">
              <div className="announc_header">
                 <h1>Yearly Examinations</h1>
              </div>
              <div className="announc_content">
                <p>Coming Soon... !</p>
                <p>Coming Soon... !</p>
              </div>
              <button>Learn More</button>
           </div>

           <div className="announc_cart">
              <div className="announc_header">
                 <h1>Results</h1>
              </div>
              <div className="announc_content">
                <p> <b>Result Declared</b>
                    <ul>
                      <li>B.A    3<sup>rd</sup> year</li>
                      <li>B.SC   1<sup>st</sup> year</li>
                      <li>B.SC   2<sup>nd</sup> year</li>
                      <li>B.SC   3<sup>rd</sup> year</li>
                      <li>B.COM  1<sup>st</sup> year</li>
                      <li>B.COM  2<sup>nd</sup> year</li>
                      <li>B.COM  3<sup>rd</sup> year</li>
                    </ul>
                </p>
                <hr />
                <p style={{position:'relative',top:'-3rem'}}><b>Result online MGKVP Website</b></p>
              </div>
           </div>

           <div className="announc_cart">
              <div className="announc_header">
                 <h1>Notices</h1>
              </div>
              <div className="announc_content">
                <p>June 14th, 2019 <br />
                   <b>Admission Open</b>
                </p>
              </div>
              <button>Learn More</button>
           </div>
        </section>


        {/* about us  */}
        <section className="habt_m_con">
             <div className="habt_two_col">
               <div className="habt_img_con">
                 <img src={img_abt} alt="" />
               </div>
               <div className="havt_contant_con">
                  <p>यह शिक्षण संस्था हमारे पूर्वज स्व0 रामविलास सिंह जी ( दादा/परदादा ) के नाम से ट्रस्ट का निर्माण करके श्रद्धांजली स्वरुप उनकी इच्छाओं को पूर्ण करने हेतु चकिया क्षेत्र एवं विभिन्न स्थानों पर शिक्षण संस्था के माध्यम से अपने क्षेत्र,गाॅव जिले के बच्चों को उच्च स्तरीय शिक्षा प्रदान करने हेतु महाविद्यालय का निर्माण किया गया है | [श्री वकील सिंह जी (संस्थापक)] [श्रीमती सरिता सिंह (डायरेक्टर)] [श्री छत्रबली सिंह (मैनेजिंग डायरेक्टर)] [श्री श्यामजी सिंह (सहायक मैनेजिंग डायरेक्टर)] [श्री सुनील सिंह (सहायक मैनेजिंग डायरेक्टर)].</p>
                  <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}>Learn More</NavLink>
               </div>
            </div>
            <br />
            <hr />
            <div className="hmaravichar">
               <h3>हमारा विचार</h3>
               <p><b>शिक्षित </b> महिला ही सशक्त समाज का मजबूत आधार है |</p>
               <span><b>श्री छत्रबली सिंह</b> <br /> मैनेजिंग डायरेक्टर</span>
            </div>
        </section>
    </>
  )
}

export default Home