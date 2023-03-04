import React, { useState } from 'react'
import '../style/gallery.css'

import gallery_img1  from '../assets/carsole1.jpg';
import gallery_img2  from '../assets/carsole2.jpg';
import gallery_img3  from '../assets/carsole3.jpg';
import gallery_img4  from '../assets/carsole4.jpg';
import gallery_img5  from '../assets/carsole5.jpg';
import gallery_img6  from '../assets/carsole6.jpeg';
import gallery_img7  from '../assets/gallery1.jpeg';
import gallery_img8  from '../assets/gallery2.jpg';
import gallery_img9  from '../assets/gallery3.jpg';
import gallery_img10 from '../assets/gallery4.jpg';
import gallery_img11 from '../assets/gallery5.jpeg';
import gallery_img12 from '../assets/gallery6.jpg';
import gallery_img13 from '../assets/gallery7.jpg';
import gallery_img14 from '../assets/gallery8.jpg';

const Gallery = () => {

        const videosArr = [  gallery_img1 ,  gallery_img2 ,   gallery_img3 , gallery_img4 , gallery_img5 ,   gallery_img6 ,  gallery_img7 ,    gallery_img8 ,  gallery_img9 ,   gallery_img10,gallery_img11, gallery_img12, gallery_img13, gallery_img14,];
        const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <>
      <div className="gallery_m_con" >
          <h1 data-aos-duration='1000' data-aos='zoom-in' >Our Gallery</h1>
         <div className="gallery_grid_two">

               <div className="grid_big_image">
                        <img src={videoSrc} alt="panbhandar of netaji" />
               </div>

               <div className="grid_hole_image">
               {videosArr.map((item, index) => (
                      <button  className='next_img_btn'  onClick={() => setVideoSrc(item)}> 
                         <img src={item} alt="pan bhandar of netaji" />                     
                      </button>
                    ))}
               </div>
         </div>
      </div>
    </>
  )
}

export default Gallery