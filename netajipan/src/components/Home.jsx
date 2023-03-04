import React, { useRef, useEffect } from 'react'
import Carousel  from '../components/Carousel1';
import '../style/home.css'
import About from './About';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Contact from './Contact';
import Pricing from './Pricing';
import Blog from './Blog';


import homevideo from '../assets/homevideo.mp4'



const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>

         {/* Home */}
          <div id="home" >
          <section class="home">
             <div class="content">
               <h3>Welcome to Netaji Pann Bhandar </h3>
               <p>we provide more variety  of Pan's</p>
                <Link className='discoverbutton'  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/videos'}>Discover</Link>
             </div>

              <div class="video-container">
                <video  src={homevideo}  ref={videoRef}
                loop
                autoPlay
                controls={false} />
              </div> 

          </section>
          </div>

      
         {/* About */}
          <div id="about" style={{height:'100vh'}}>
             <About/>
           </div>
         




         {/*  Gallery*/}
          <div id="gallery" style={{height:'100vh'}}>
            <Gallery/>
          </div>





         {/* Blog */}
         <div id="Blog" >
          <Blog/>
         </div>


         {/* Pricing */}
         <div id="pricing"  style={{height:'100vh'}}>
          <Pricing/>
         </div>



         {/* Contact */}
         <div id="contact" style={{height:'100vh'}}>
          <Contact/>
         </div>



    </>
  )
}

export default Home