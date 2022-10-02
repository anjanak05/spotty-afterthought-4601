import React, { useState } from 'react';
import axios from 'axios';
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
import { Link, useNavigate } from 'react-router-dom';

const Singup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = () => {
    let formData = {
      name: name,
      email: email,
      password: password,
      username: userName,
      mobile: phoneNo,
      description: 'A Transformation in education!',
    };

    return axios
      .post(`https://masai-api-mocker.herokuapp.com/auth/register`, formData)
      .then(res => {
        console.log(res);
        alert('Registrations successfully!');
        navigate('/Login');
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'md'} py={5} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={6}
          >
            <Stack align={'center'}>
              <Heading paddingBottom={'15px'} fontSize={'xl'} color={'#e51075'}>
                Sign up to join Indiegogo.{' '}
              </Heading>
              {/* <Text fontSize={'lg'} color={'gray.600'}>
                Sign up to join Indiegogo.
              </Text> */}
            </Stack>

            <Stack spacing={3}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontSize={'13px'} mb={'2px'}>
                      First Name
                    </FormLabel>
                    <Input
                      height={'33px'}
                      placeholder="Your First Name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel fontSize={'13px'} mb={'2px'}>
                      Last Name
                    </FormLabel>
                    <Input
                      height={'33px'}
                      placeholder="Your Last Name"
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel fontSize={'13px'} mb={'2px'}>
                  Email address
                </FormLabel>
                <Input
                  height={'33px'}
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontSize={'13px'} mb={'2px'}>
                  User Name
                </FormLabel>
                <Input
                  height={'33px'}
                  type="text"
                  placeholder="Enter userName"
                  name="username"
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontSize={'13px'} mb={'2px'}>
                  Mobile No
                </FormLabel>
                <Input
                  height={'33px'}
                  type="text"
                  placeholder="Enter phone no"
                  name="phoneno"
                  value={phoneNo}
                  onChange={e => setPhoneNo(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel fontSize={'13px'} mb={'2px'}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    height={'33px'}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </InputGroup>

                <Box display={'flex'}>
                  <Checkbox
                    marginTop="5px"
                    fontSize="2px"
                    defaultChecked
                  ></Checkbox>{' '}
                  <p
                    style={{
                      fontSize: '13px',
                      marginTop: '1.5%',
                      marginLeft: '2%',
                    }}
                  >
                    Sign me up for the Indiegogo newsletter
                  </p>
                </Box>
                <br></br>

                <Box display={'flex'} mt={"-18px"}>
                  <Checkbox
                    marginTop="5px"
                    fontSize="2px"
                    defaultChecked
                  ></Checkbox>{' '}
                  <p
                    style={{
                      fontSize: '13px',
                      marginTop: '1.5%',
                      marginLeft: '2%',
                    }}
                  >
                    I agree to the{' '}
                    <Link
                      style={{
                        color: '#CF0C67',
                        textDecoration: 'underline',
                        fontWeight: 'semibold',
                      }}
                    >
                      {' '}
                      Terms of Use
                    </Link>{' '}
                    and have read and understand the{' '}
                    <Link
                      style={{
                        color: '#CF0C67',
                        textDecoration: 'underline',
                        fontWeight: 'semibold',
                      }}
                    >
                      {' '}
                      Privacy Policy
                    </Link>
                  </p>
                </Box>
              </FormControl>
              <Stack spacing={2} alignContent="center">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  borderRadius="none"
                  loadingText="Submitting"
                  width="350px"
                  size="md"
                  backgroundColor="#E51075"
                  color={'white'}
                  _hover={{
                    bg: 'pink.600',
                  }}
                >
                  Create Account
                </Button>
                <p style={{ marginLeft: '160px', marginTop:"2px" }}>or</p>
                <Button
                  borderRadius="none"
                  loadingText="Submitting"
                  width="350px"
                  size="md"
                  backgroundColor="#32569A"
                  color={'white'}
                  _hover={{
                    bg: 'blue.600',
                  }}
                >
                  Continue with FaceBook
                </Button>
              </Stack>
              <Stack pt={"-2px"}>
                <Text align={'center'} fontSize={"14px"}>
                  Already a user?{' '}
                  <Link
                    style={{
                      textDecoration: 'underline',
                    }}
                    to="/Login"
                    color={'blue.400'}
                  >
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Singup;
