import React from 'react'
import '../style/points.css'

import pencil_girl from '../assets/pencil_girl.png'

const points = () => {
  return (
    <>
        <section className="point_m_con">
               <div className="cover_box"></div>
                <div className="point_two_col">
                        <div className="point_F_con">
                               <img data-aos-duration='1000' data-aos="fade-up" id='point_g_p' src={pencil_girl} alt="" />
                        </div>
                        <div className="point_S_con">
                                <div className="points_box">
                                        <h1 className="point_heading">
                                        महाविद्यालय की विशेषता:एकझलक
                                        </h1><br />
                                        <ul> 
                                                <p>उत्तरोत्तर बेहतर परीक्षाफल</p><hr />
                                                <p>सर्वोत्तम अनुशासन</p><hr />
                                                <p>सहशिक्षण व्यवस्थाओं में छात्राओं की सुरक्षा पर विशेषध्यान</p><hr />
                                                <p>यू०जी०सी० मानकों के अनुसार सभी विषयों में अधिकतम संभव शिक्षणकार्य</p><hr />
                                                <p>पुस्तकालय को विकसित शिक्षण केंद्रों के समकक्ष लेन के लिए गंभीर प्रयास</p><hr />
                                                <p>पुस्तकालय में कम्प्यूटरीकरण की प्रक्रिया प्रारम्भ</p><hr />
                                                <p>सुसज्जित प्रयोगशालायें</p><hr />
                                                <p>एन.एस.एस./ रोवर्सरेंजर्स प्रशिक्षण, क्रीड़ा की समुचित व्यवस्था</p><hr />
                                                <p>छात्राओं के लिए एन.एस.एस की व्यवस्था</p><hr />
                                                <p>साईकिल, स्कूटरएवंमोटरसाईकिलस्टैंडकीव्यवस्था</p><hr />
                                                <p>छात्राओंकेलिएसुसज्जितकामनरूम</p><hr />
                                                <p>सभीछात्राओंकोशासनादेशकेअनुसारछात्रवृत्तिकीपारदर्शीव्यवस्था</p><hr />
                                                <p>पूर्णतयाकम्प्यूटरीकृतकार्यालय</p><hr />
                                        </ul>
                                </div>
                        </div>
                </div>
        </section>
    </>
  )
}

export default points