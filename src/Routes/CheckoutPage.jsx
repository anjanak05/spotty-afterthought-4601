import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const CheckoutPage = () => {
  return (
    <div>
        <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
  bgColor="#e51075"
  color="white"
>
  <AlertIcon boxSize='40px' mr={0} color="white"/>
  <AlertTitle mt={4} mb={1} fontSize='lg'>
   Payment Successful
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>
    </div>
  )
}

export default CheckoutPage