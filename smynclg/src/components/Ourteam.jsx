import React from 'react'
import '../style/Ourteam.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Ourteam = () => {
        const responsive = {
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 3
                },
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1
                }
              };
              const setting={
                autoPlay:true,
                swipeable:true,
                draggable:true,
                showDots:false,
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
       <section className="otm_m_con_fbgc">
           <div className="otm_m_con">
               <h1>Our Team</h1>
               <div id="underline_"></div>

               <div className="otm_data">
                 <Carousel  {...setting} responsive={responsive}>
                     <div className="carsole_otm_works"> 
                        <h1 id='member_otm_name'>Dr. Chandan Kumar Ray</h1>
                        <p id='member_otm_deg'>B.A.M.S. M.D</p>
                        <p id='member_otm_position'> Principal<div id='line_'></div></p>
                     </div>
                     <div className="carsole_otm_works">
                        <h1 id='member_otm_name'>Dr.Dewanand Pandey</h1>
                        <p id='member_otm_deg'>B.A.M.S. M.D <br />(Neturopathy) C.C.Y.P. (BHU)</p>
                        <p id='member_otm_position'>Director<div id='line_'></div> </p>
                     </div>
                     <div className="carsole_otm_works">
                        <h1 id='member_otm_name'>Dr.Sahajanand Pandey.</h1>
                        <p id='member_otm_deg'>P.H.D.</p>
                        <p id='member_otm_position'>Manager<div id='line_'></div> </p>
                    </div>
               
                 </Carousel>
               </div> 
           </div>         
       </section>
    </>
  )
}

export default Ourteam