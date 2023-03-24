import React from 'react'
import '../style/Two_con.css'
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

import img1 from '../assets/29.jpg';
import img2 from '../assets/6.jpg';

const Two_con = () => {
        const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
        const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
        const btnRef1 = React.useRef(null)
        const btnRef2 = React.useRef(null)
  return (
    <>

              <div className="twocol2_m_con">
                  <div   className="twocol2_first_col">
                     <h1 className='twocol2_h1'>भूमिपूजनप्रबंधक</h1>
                     <span className='twocol2_span'>डा० सत्यनारायण पांडेय एवं श्रीमती उर्मिला पांडेय</span> <br />
                     <p className='twocol2_content'>डा० सत्यनारायण पांडेय एवं श्रीमती उर्मिला पांडेय ने किया भूमिपूजन क्षेत्र के विद्वान ब्राह्मणों के द्वारा हुआ इस अवसर पर अपने गांव के गणमान्य लोग एवं हमारे पांचों पुत्र उपस्थित थे I महाविद्यालय के निर्माण में तीन वर्ष लगे I उसी वर्ष से संस्कृत दिवस पं० हरिहर शास्त्री शिक्षण सेवा संस्थान में मनाया गया तब से यह उत्सव दिवस इस संस्थान के द्वारा प्रतिवर्ष मनाया जाने लगा I अब यह परम पुनीत कार्य प्रति वर्ष होता है I</p> 
                    
                     <Button colorScheme='purple'  onClick={onOpen1}>Read More</Button>                        

                        <Modal   onClose={onClose1} isOpen={isOpen1} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>भूमिपूजनप्रबंधक</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <p>डा० सत्यनारायण पांडेय एवं श्रीमती उर्मिला पांडेय ने किया भूमिपूजन क्षेत्र के विद्वान ब्राह्मणों के द्वारा हुआ इस अवसर पर अपने गांव के गणमान्य लोग एवं हमारे पांचों पुत्र उपस्थित थे I महाविद्यालय के निर्माण में तीन वर्ष लगे I उसी वर्ष से संस्कृत दिवस पं० हरिहर शास्त्री शिक्षण सेवा संस्थान में मनाया गया तब से यह उत्सव दिवस इस संस्थान के द्वारा प्रतिवर्ष मनाया जाने लगा I अब यह परम पुनीत कार्य प्रति वर्ष होता है I महाविद्यालय जो अपना पूर्ण मूर्तरूप 2015 में प्राप्त कर सका I सन 2016 में इस महाविद्यालय को सम्पूर्णानन्द संस्कृत विश्वविद्यालय वाराणसी से पूर्ण मान्यता प्राप्त हुआ इसीसंकल्पकल्पनाकायहमूर्तरूपपं०हरिहरशास्त्रीसंस्कृत महाविद्यालयआजपुष्पितएवंपल्वितहोरहाहै I जिसविशालजनकल्याणकेलक्ष्यकोलेकरइससंस्थानकीस्थापनाकी आधारशिलास्थापित गयी वह निरंतर अपने विकास को ओर उन्मुख है I</p>
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={onClose1}>Close</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                                         
                  </div>

                  <div data-aos-duration='1000' data-aos="fade-right"  className="twocol2_second_col">
                         <img className='twocol2_img_size' src={img1} alt="foodLover" />
                  </div>
             </div>

              <div className="twocol2_m_con">
                  <div data-aos-duration='1000' data-aos="fade-right"  className="twocol2_second_col">
                         <img className='twocol2_img_size' src={img2} alt="foodLover" />
                  </div>
                  <div   className="twocol2_first_col">
                     <h1 className='twocol2_h1'>भूतपूर्वप्रभारीचिकित्साधिकारी (आयुर्वेद )</h1>
                     <span className='twocol2_span'>प्रचार्य का सन्देश</span> <br />
                     <p className='twocol2_content'>ऐसे पुण्य पवित्र भूमि भारत में उत्तरप्रदेश के पूर्वांचल में देवल ऋषि दत्तात्रेय दुर्वाषा चन्द्रमा ऋषि महर्षियों की तपो भूमि पवन नदी तमसा के दक्षिणी भू - भाग पर एवं पतितोद्धारिणी गंगा के उत्तरी दिग्गविभाग में स्थित आजमगढ़ जनपद के बेलहा क्षेत्र के नाम से प्रशिद्ध बाबा खड्गसीराव के द्वारा स्थापित गांव खरगपुर के पवन पुण्य भूमि पर पं० हरिहर प्रसाद पांडेय का जन्म हुआ जो अपने समय के पूर्ण संस्कृत निष्ठ एवं संस्कृत शिक्षा</p> 
                    
                     <Button variant='outline' colorScheme='purple' ref={btnRef2} onClick={onOpen2}>Read More</Button>
                        
                        <Modal  finalFocusRef={btnRef2}  scrollBehavior={'inside'} onClose={onClose2} isOpen={isOpen2} isCentered>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>प्रचार्य का सन्देश</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <p>ऐसे पुण्य पवित्र भूमि भारत में उत्तरप्रदेश के पूर्वांचल में देवल ऋषि दत्तात्रेय दुर्वाषा चन्द्रमा ऋषि महर्षियों की तपो भूमि पवन नदी तमसा के दक्षिणी भू - भाग पर एवं पतितोद्धारिणी गंगा के उत्तरी दिग्गविभाग में स्थित आजमगढ़ जनपद के बेलहा क्षेत्र के नाम से प्रशिद्ध बाबा खड्गसीराव के द्वारा स्थापित गांव खरगपुर के पवन पुण्य भूमि पर पं० हरिहर प्रसाद पांडेय का जन्म हुआ जो अपने समय के पूर्ण संस्कृत निष्ठ एवं संस्कृत शिक्षा के क्षेत्र में स्वनामधन्य व्यक्तित्व प्रधानाचार्य के रूप में महेश्वर संस्कृतपाठशालार सूलपुरगोमाडीहमेंविद्यादानकरतेहुएअपनेपदनामको अलंकृत किये I इनके पढ़ाये अनेकानेक क्षात्र संस्कृत के विद्वान हुए और कुलपति के पद तक को भी विभूषित किये ,जिनमे पूर्ण संस्कृत निष्टडा. राजदेव मिश्र कुलपति सम्पूर्णानन्द संस्कृत वि . वि . वाराणसी प्रमुख रहे पं० हरिहर प्रसाद पांडेय जी की मृत्यु के बाद भी संस्कृत के प्रति समर्पण इस परिवार का बना रहा इस क्रम को आगे बढ़ाते हुए उनके सुयोग्य पुत्र हुए डा. सत्यनारायण पांडेय ने अपने पिता के स्वप्न को मूर्त रूप प्रदान करने हेतु पं० हरिहर शास्त्री संस्कृत महाविद्यालय की स्थापना श्रावण त्रयोदशी श्रावणी पर्व संस्कृत दिवस के दो दिन पूर्व संस्कृत महाविद्यालय की आधार शिला रखकर पूर्ण किया पं . हरिहर शास्त्री संस्कृत महाविद्यालय की स्थापना भूमिपूजन श्री संवत 2065 शाके 1930 याम्यायनं सौभ्यागोलः वर्षरतुः तदनुसार श्रावणशुक्ल त्रयोदशी दिन - गुरुवार दिनांक 14 अगस्त 2008 को दिन में 12 : 28 से 2 : 45 मिनट तक पूजन का कार्य हुआ</p>
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={onClose2}>Close</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                 
                  </div>
             </div>
             
    </>
  )
}

export default Two_con