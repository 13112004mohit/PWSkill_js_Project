import React from 'react'
import {VStack,Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Button,useDisclosure, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
import {HashLink} from 'react-router-hash-link'
import { Image } from "@chakra-ui/react";
import logopan from '../assets/logopan.png'

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
            <Image src={logopan} alt="Netaji_pan" />
         </DrawerHeader>
         <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to={'/#home'}>Home</HashLink>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to='/#about'>About</HashLink>
                </Button>
                
                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <Link  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/videos'}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to='/#gallery'>Gallery</HashLink>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to='/#pricing'>Pricing</HashLink>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to='/#contact'>Contact</HashLink>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                    <HashLink to='/#Blog'>Blog</HashLink>
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