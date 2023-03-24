import React from 'react'
import '../style/About.css'

import img1 from '../assets/ac_both1.png'
import img2 from '../assets/ac_both.png'

const About = () => {
          
  return (
    <>    
       <section className="about_m_con">
         <div className="about_two_con">
           <div className="about_F_con">
               <img id='about_img1' src={img1} alt="" />
               <img data-aos-duration='1000' data-aos="fade-right" id='about_img2' src={img2} alt="" />
           </div>
           <div className="about_S_con">
              <div className="about_heading">
                <h1>About us</h1>
                <div style={{width:'22%',position:'relative',bottom:'.6rem',left:'-.1rem'}} id="underline_"></div>
              </div>
              <br />
              <pre>
              ( प्राचार्य ) <br />
               विजयानंदपांडेय <br />
               एम. ए. संस्कृतसाहित्याचार्य <br />
               बी. एड.
              </pre>
               <br />
               <p>अमृतवाणीसंस्कृतभाषा, नैवक्लिष्टानचकठिना | <br />
                   सुरससुबोधाविश्वमनोज्ञा, ललिताहृद्यारमणीया ||</p> <br />

               <p>संस्कृत भाषा तथा साहित्य इस भारतवर्ष के आत्मा का प्रतीक है | जिस प्रकार से ह्रदय मनुष्य के शरीर के अंदर रक्त सम्प्रेषण का कार्य करता है, ठीक उसी प्रकार से संस्कृत भी मनुष्य के अंदर सद्गुणों के विकास संवर्धन में सहायक होताहै | इसका एकमात्र कारण संस्कृत साहित्य की प्राचीनता,विपुल साहित्य भंडार सम्पन्नता,विश्ववाङमय में अद्धितीय स्थान का गौरवमय पद प्राप्त करना है | वर्तमान समय में संस्कृत के प्रति दुराग्रह की भावना को दूर करने के उद्देश्य प्रगति के पथ पर अग्रसर है| यह संस्कृत महाविद्यालय संस्कृत जगत में संस्कृत शिक्षा के मानदंडों का नितनूतन प्रतिमान कीर्तिमान प्रस्तुत करने में समर्थ रहें, इन्हीं शुभकामनाओं के साथ</p><br />

               <p>
                   पठामिसंस्कृतमनित्यम, वदामिसंस्कृतमसदा | <br />
                   ध्यायामिसंस्कृतमसम्यक, बन्देसंस्कृतमातरम ||</p> <br />
               <span>धन्यवाद!</span>
           </div>
         </div>
       </section>
    </>
  )
}

export default About