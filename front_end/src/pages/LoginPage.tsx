import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import { Box, Flex } from '@chakra-ui/react'
import backgroundImage from '../assets/loginpage.jpg'

const LoginPage = () => {
  return (
    <Box 
      h="calc(100vh - 60px)"
      overflow="hidden"
      w="100%"
      position="relative"
      bgImage={backgroundImage}
      bgSize="cover"
      bgPosition="center"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }
      }}
    >
      <Flex
        position="absolute"
        top="0"
        left="60%"
        right="0"
        bottom="0"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
      >
        <LoginForm />
      </Flex>
    </Box>
  )
}

export default LoginPage 