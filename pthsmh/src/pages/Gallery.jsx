import React from 'react'
import Images from '../components/Images'
import '../style/gallery.css'

const Contact = () => {
  return (
    <>

         <section className="gallery_m_con">
           <div className="gallery_heading">
              <h1 className="gallery_h1">
                 Gallery
              </h1>
              <div style={{width:'7%',position:'relative',bottom:'-1.7rem',left:'-7.8rem'}} id="underline_"></div>
           </div>

           <div className="gallery_images">
              <Images/>
           </div>
         </section>
    </>
  )
}

export default Contact