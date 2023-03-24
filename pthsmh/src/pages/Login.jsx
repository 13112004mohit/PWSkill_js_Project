import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,InputGroup,InputRightElement
} from '@chakra-ui/react';
import React from 'react';
import {BiHide,BiShow} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
             <InputGroup size='md'>
                     <Input
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

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
