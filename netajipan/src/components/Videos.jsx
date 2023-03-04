import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';


import panvdo1 from '../assets/fvideo.mp4'
import panvdo2 from '../assets/svideo.mp4'
import panvdo3 from '../assets/Tvideo.mp4'

const Videos = () => {
  const videosArr = [
  panvdo1,
  panvdo2,
  panvdo3,
 ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'} >
      <VStack w={'full'}>
        <video
          controls
          autoPlay
          controlsList="download"
          src={videoSrc}
          style={{
            width: '75%',
            height: '75%',
            paddingTop:'1rem'
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'none'}>
          <Heading style={{fontSize:'1.4rem'}} >Banaras Ki san Netaji Pan Ki Dukan</Heading>
          <Text>
          Netaji Paan Bhander 
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
          style={{
            width: '100%',
            height:'20vh',
            // marginBottom:'.2rem', 
               display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          > 
          <video  controlsList="download"
                     src={item}
                     style={{
                       width: '100%',
                       height:'20vh',
                      //  paddingTop:'2rem'
                     }}
                    ></video>
         
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
