import React from 'react'
import '../style/team.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {FaFacebook,FaLinkedin} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

import  team_img1 from '../assets/members1.jpg'
import  team_img2 from '../assets/members2.jpg'
import  team_img3 from '../assets/members3.jpg'
import  team_img4 from '../assets/members4.jpg'

const Ourteam = () => {
        const responsive = {
                desktop: {
                  breakpoint: { max: 4000, min: 864 },
                  items: 3
                },
                tablet: {
                  breakpoint: { max: 864, min: 484 },
                  items: 2
                },
                mobile: {
                  breakpoint: { max: 484, min: 0 },
                  items: 1
                }
              };
              const setting={
                autoPlay:true,
                swipeable:true,
                draggable:true,
                showDots:false,
                arrows:false,
                autoPlaySpeed:1500,
                infinite:true,
                slidesToShow: 1,
                slidesToScroll:1,
                keyBoardControl:true,
                transitionDuration:500,
               
               } 
               const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
       <section className="otm_m_con_fbgc">
           <div className="otm_m_con">
               <h1>Our Team</h1>
               <div id="underline_"></div>

               <div className="otm_data">
                 <Carousel  {...setting} responsive={responsive}>
                   <div className="about_deprment_cart">
                         <div className="about_dep_img">
                            <img src={team_img1} alt="" />
                         </div>
                         <p style={{zIndex:'90'}}> ॐ विश्वानि देव सवितार्... <br />
                               {/* usemodal start */}
                            <Button colorScheme='black.700' variant='link'size='sm'  onClick={onOpen}> Read More</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Welcome to our college </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <p>ॐ विश्वानि देव सवितार्दुरितानी परासुव| यद भद्रं तन्न आसुव || हिरण्यगर्भः समवर्तताग्रे भूतस्य जातः परितेक आसीत् |
स दाधार पृथ्वी धामुतेमां कस्मै देवाय हविषा विधेम||२||
य आत्मदा बलदा यस्य विश्व उपासते प्रशिषं यस्य देवा|
यस्य छायाअमृतं यस्य मृत्युः कस्मै देवाय हविषा विधेम ||३||

</p>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>About us</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
{/* usemodal end */}
                         </p>
                         
                         <div class="overlay"> 
                           <FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/>
                         </div>
                     </div>   
                   <div className="about_deprment_cart">
                         <div className="about_dep_img">
                            <img src={team_img2} alt="" />
                         </div>
                         <p>प्राचार्य- विजयानन्द पाण्डेय <br /> <span>(M.A, B.ED)</span></p>
                         <div class="overlay">
                           <FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/>
                         </div>
                     </div>   
                     <div className="about_deprment_cart">
                         <div className="about_dep_img">
                            <img src={team_img3} alt="" />
                         </div>
                         <p>Welcome to our collge <br /> .</p>
                         <div class="overlay">
                           <FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/>
                         </div>
                     </div>   
                     <div className="about_deprment_cart">
                         <div className="about_dep_img">
                            <img src={team_img4} alt="" />
                         </div>
                         <p>-डॉ सहजानन्द पाण्डेय <br /> <span>प्रबंधक</span></p>
                         <div class="overlay">
                           <FaFacebook id='about_icon'/> <GrInstagram id='about_icon'/> <FaLinkedin id='about_icon'/>
                         </div>
                     </div>   
                 </Carousel>
               </div> 
           </div>         
       </section>
    </>
  )
}

export default Ourteam