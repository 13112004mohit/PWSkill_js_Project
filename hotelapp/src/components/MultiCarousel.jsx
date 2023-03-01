import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style/MultiCarsole.css'


import  meetroom1 from '../assets/meetingroom.avif'
import  gestroom2 from '../assets/gesthalls.avif'
import  traveldesk from '../assets/traveldesk.avif'
import  originalcost from '../assets/originalcost.avif'
import  reception from '../assets/reception.avif'

const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1224 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1224, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 614 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 614, min: 0 },
          items: 1
        }
     
      };

       const setting={
        autoPlay:true,
        swipeable:false,
        // draggable:false,
        showDots:false,
        autoPlaySpeed:2500,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:1,
        keyBoardControl:true,
        transitionDuration:500
        // removeArrowOnDeviceType:["tablet", "mobile"]
       } 

const MultiCarousel = () => {
  return (
    <>
      <Carousel  {...setting} responsive={responsive}>
        <div class="Acard">
               <img src={gestroom2} alt="reception" />   
           <div class="Aintro">
                <h2>Mehamaan Nawazi</h2>
                <p>The Banquet Hall accomodating 250pax with accessibility to high quality audio-visual equipment state of art communication facilities, creative menu options and of course themes which makes business at Mehmaan Nawazi not usual but extraordinary.</p>
                
            </div>
        </div>
        <div class="Acard">
               <img src={traveldesk} alt="reception" />   
           <div class="Aintro">
                <h2>TRAVEL DESK </h2>
                <p>At Hotel R K Grand, we execute customized transportation and travel plans by fleet of all major vehicles like SWIFT/ ETIOS/ EON/ INOVA/ERTIGA through the efficient travel desk. The Travel desk is well established in Hotel Lobby only. AIRPORT DROP / AIRPORT PICKUP, RAILWAY STATION DROP /PICKUP, VARANASI CITY TOUR, CABS AVAILABLE FOR ALL OVER INDIA </p>
                
            </div>
        </div>
        <div class="Acard">
               <img src={meetroom1} alt="reception" />   
           <div class="Aintro">
                <h2>Meeting & Events</h2>
                <p>Discuss new ideas in the fragrant open air. Make this year’s business plan to the stunning azure backdrop of the Adriatic. With a variety of flexible indoor and outdoor spaces,  Hotel R K Grand offers a diverse array of possibilities for meetings. Our locations are easily adaptable to meet your specifications and our professional team is at your service. </p>
                
            </div>
        </div>
        <div class="Acard">
               <img src={reception} alt="reception" />   
           <div class="Aintro">
                <h2>Our Recaptionsnist</h2>
                <p>The Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate provident reprehenderit itaque, beatae incidunt cumque libero velit quasi dignissimos accusantium et suscipit sint ea. Consequatur iure autem laborum adipisci nihil dolores tempore, quasi cupiditate! </p>
                
            </div>
        </div>
        <div class="Acard">
               <img src={originalcost} alt="reception" />   
           <div class="Aintro">
                <h2>Original cost </h2>
                <p>The Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quae libero eaque tempore vitae laboriosam praesentium esse deserunt non aut vero obcaecati ratione, labore magni repellat adipisci officiis aspernatur, quibusdam et cumque iusto eveniet? Necessitatibus eveniet amet assumenda sint sequi! </p>
                
            </div>
        </div>
      </Carousel>
    </>
  )
}

export default MultiCarousel