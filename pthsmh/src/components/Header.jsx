import React from 'react'
import {VStack,Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Button,useDisclosure, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {BiMenuAltLeft} from 'react-icons/bi'
import { Image } from "@chakra-ui/react";
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {MdLibraryBooks} from 'react-icons/md'
import {RiTeamFill,RiGalleryFill,RiContactsBookFill} from 'react-icons/ri'

import logo from '../assets/logo.png'

// style
const hdta={
     display:'flex',
     width:'10rem',
}
const hdicon={
    margin:'0 1rem 0 0 ',
    fontSize:'1.4rem',
}
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
       <Button   zIndex={'overlay'} onClick={onOpen} pos={'fixed'} w={'10'} h={'10'}borderRadius={'full'}  top={'4'} left={'4'} colorScheme={'purple'} p={'0'} ><BiMenuAltLeft size={20}/></Button>
       <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
        <DrawerOverlay/>
        <DrawerContent>
         <DrawerCloseButton/>
         <DrawerHeader>
            <Image src={logo} alt="Netaji_pan" />
         </DrawerHeader>
         <DrawerBody>
            <VStack alignItems={'flex-start'}>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}> <div style={hdta}><FaHome style={hdicon}/> Home</div> </Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink   to={'/#about'}><div style={hdta}><FcAbout style={hdicon}/> About</div> </HashLink>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink   to={'/#courses'}><div style={hdta}><MdLibraryBooks style={hdicon}/> Courses</div> </HashLink>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink   to={'/#team'}><div style={hdta}><RiTeamFill style={hdicon}/> Team</div> </HashLink>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink   to={'/#gallery'}><div style={hdta}><RiGalleryFill style={hdicon}/> Gallery</div> </HashLink>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}><div style={hdta}><RiContactsBookFill style={hdicon}/> Contact</div> </Link>
                </Button>

            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
               <Button onClick={onClose} colorScheme={'purple'}>
                    <Link  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}  to={'/login'}>Log In</Link>
                </Button>

                <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                 <Link  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}}  to={'/signup'}>Sign Up</Link>
                </Button>

            </HStack>
         </DrawerBody>
        </DrawerContent>
       </Drawer>
    </>
  )
}

export default Header