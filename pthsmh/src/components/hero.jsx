import React from 'react'
import '../style/hero.css'
import { Text } from '@chakra-ui/react'



const hero = () => {
  return (
    <>
        <section className="hero_m_con">
                <div className="heri_F_col">
                     <h1 id='hero_h1'>Welcom To Our </h1>
                     <p id='hero_p1'>Pandit Harihar Shastri Siksha SevaSansthan </p>
                     <p id='hero_p2'>Ayurveda Collage </p>
                     <p id='hero_p3'>अमृतवाणीसंस्कृतभाषा, नैवक्लिष्टानचकठिना | <br />सुरससुबोधाविश्वमनोज्ञा, ललिताहृद्यारमणीया ||</p>
                     <button  className="animated_button">  <span>Read More</span>   </button>
                </div>
        </section>
    </>
  )
}

export default hero