import React from 'react'
import '../style/Contact.css'
import {  Input,Textarea ,InputGroup,InputLeftElement,InputRightElement,Button} from '@chakra-ui/react'
import {MdPhoneInTalk,MdEmail,MdLocationOn,MdSubtitles} from 'react-icons/md'
import {IoLogoTwitter,IoLogoLinkedin,IoLogoFacebook,IoLogoGoogle,IoIosSend} from 'react-icons/io'
import {ImPhone} from 'react-icons/im'
import {BiHide,BiShow,BiUser} from 'react-icons/bi'
import {GoKey} from 'react-icons/go'

const Contact = () => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
       <section className="con_m_con">
            
             <div data-aos-duration='1500' data-aos="fade-right" className="contact_info_mohit">
                   <h1 style={
                    {   color:'#fff',
                        position:'relative',
                        bottom:'10%',
                        fontSize:'2rem'
                    }}>Contact Us</h1>
                        
                   <div className='contact_info_data'>
                        <MdPhoneInTalk id='contact_icons'/>
                        <a href="tel:9415940255">Call: 9415940255</a>                        
                   </div>
                   <div className='contact_info_data'>
                        <MdEmail id='contact_icons'/>
                        <a href="mailto:info@pthariharsss.org">info@pthariharsss.org</a>

                   </div>
                   <div className='contact_info_data'>
                        <MdLocationOn style={{fontSize:'1.7rem'}} id='contact_icons'/>
                        <p>Location: Kharagpur ,Uttar Pradesh Azamgarh</p>
                        
                   </div>
                   <div id='socal_icon_m_con' >
                           <IoLogoFacebook className='footer_socal_icon'/>
                           <IoLogoGoogle className='footer_socal_icon'/>
                           <IoLogoLinkedin className='footer_socal_icon'/>
                           <IoLogoTwitter className='footer_socal_icon'/>
                      </div>
            </div>
            <div  className="contact_info">
                 <h1>Get In Touch</h1>
                
                <div className="contact_forms">
                  <form action="">
                    <InputGroup>
                        <InputLeftElement
                          pointerEvents='none'
                          children={<MdEmail />}
                        />
                        <Input variant='flushed' type='email' placeholder='Email id' />
                    </InputGroup>
                         
                    <br />
                         
                    <InputGroup>
                         <InputLeftElement
                           pointerEvents='none'
                           children={<BiUser />}
                         />
                         <Input variant='flushed' type='text' placeholder='User Name' />
                    </InputGroup>
                         
                    <br />
                    
                    <InputGroup>
                         <InputLeftElement
                           pointerEvents='none'
                           children={<ImPhone/>}
                         />
                         <Input variant='flushed' type='tel' placeholder='Phone number' />
                      </InputGroup>
                         
                      <br />
                         
                      <InputGroup>
                           <InputLeftElement
                             pointerEvents='none'
                             children={<MdSubtitles/>}
                           />
                           <Input variant='flushed' type='text' placeholder='subject' />
                      </InputGroup>
                         
                       <br />
                         
                       <InputGroup size='md'>
                           <InputLeftElement
                              pointerEvents='none'
                              children={<GoKey  />}
                            />
                            <Input
                               variant='flushed'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                             />
                             <InputRightElement width='4.5rem'>
                               <Button h='1.75rem' size='sm' onClick={handleClick}>
                                 {show ? <BiShow/> : <BiHide/>}
                               </Button>
                             </InputRightElement>
                       </InputGroup>

                       <br />  
                       <Textarea variant='flushed'  size='sm'  placeholder='           Message' />
                       <br />
                       <br />
                       <Button style={{float:'right'}} leftIcon={<IoIosSend />}  variant='solid' colorScheme='purple'>SUBMIT</Button>
                  </form>
                </div>
                  
            </div>
       </section>
    </>
  )
}

export default Contact