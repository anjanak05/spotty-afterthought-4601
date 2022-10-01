import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,

  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

const Singup = () => {
  return (
    <div>
 <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
             Welcome!
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Sign up to join Indiegogo.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder='Your First Name' type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder='Your Last Name' type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input placeholder='Your Email'  type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input placeholder='Password' type="password" />
                </InputGroup>

                <Checkbox marginTop="5px" fontSize="5px" defaultChecked>Sign me up for the Indiegogo newsletter </Checkbox>
                <Checkbox marginTop="10px" >I agree to the <Link style={{color:"#CF0C67", textDecoration:"underline" , fontWeight:"semibold"}}> Terms of Use</Link> and have read and understand the <Link style={{color:"#CF0C67", textDecoration:"underline",fontWeight:"semibold"}}> Privacy Policy</Link>
</Checkbox>

              </FormControl>
              <Stack spacing={2} alignContent="center">
              <Link to="/">
                <Button
                borderRadius="none"
                  loadingText="Submitting"
                  width="500px"
                  size="md"
                  backgroundColor="#E51075"
                  color={'white'}
                  _hover={{
                    bg: 'pink.600',
                  }}>
                  Create Account
                </Button>
                </Link>
                <p style={{marginLeft:"220px"}}>Or</p>
                <Button
                borderRadius="none"
                  loadingText="Submitting"
                  width="500px"
                  size="md"
                  backgroundColor="#32569A"
                  color={'white'}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                  Continue with FaceBook
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link style={{
                    textDecoration:"underline"
                  }} to="/Login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  )
}

export default Singup