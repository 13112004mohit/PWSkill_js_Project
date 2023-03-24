import React from 'react'
import '../style/CourseCart.css'
import {Button,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        useDisclosure
      } from '@chakra-ui/react'


const HCourses = (props) => {
        const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
       
                <div className="cart_tour"> 
                       <div className="tour_img_box">
                               <img id="img" src={props.image} alt="Image" />
                       </div>
                       <h2>{props.heading}</h2>
                       <p className="tour_contant_">{(props.content).slice(0,120)}...</p>
                     
                       <button  onClick={onOpen} style={{backgroundColor:' rgb(255, 255, 255)'}}  className="animated-button">
                               <span>Read More</span>
                       </button>
                       <Modal isOpen={isOpen} onClose={onClose}>
                         <ModalOverlay />
                         <ModalContent>
                           <ModalHeader>{props.heading}</ModalHeader>
                           <ModalCloseButton />
                           <ModalBody>
                              <p>{props.content}</p>
                           </ModalBody>
                       
                           <ModalFooter>
                             <Button colorScheme='blue' mr={3} onClick={onClose}>
                               Close
                             </Button>
                           </ModalFooter>
                         </ModalContent>
                       </Modal>
                </div>

    </>
  )
}

export default HCourses