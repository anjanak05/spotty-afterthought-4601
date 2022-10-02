import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authReducer/action';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let loginData = {
      username: email,
      password: password,
    };
    let loggeduser = loginData.username;
    if (email && password) {
      dispatch(login(loginData)).then(r =>
        navigate('/', { state: loggeduser })
      );
    }
  };

  return (
    <Box>
      <Flex
        flexDirection="column"
        width="100%"
        mt="10px"
        height="100%"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          mt={'20px'}
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Box minW={{ base: '90%', md: '368px' }}>
            <form onSubmit={handleSubmit}>
              <Stack
              rounded={"lg"}
                spacing={3}
                p="2rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <Heading
                  fontWeight="700"
                  fontSize={'20px'}
                  color="#e51075"
                  mt={'-8px'}
                >
                  Login in to Continue
                </Heading>

                <FormControl>
                  <label style={{ fontSize: '15px' }}>User ID</label>

                  <InputGroup>
                    <Input
                      height={'33px'}
                      fontSize={'13px'}
                      type="text"
                      placeholder="Your User ID"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <label style={{ fontSize: '15px' }}>Password</label>
                  <InputGroup>
                    <Input
                      height={'33px'}
                      fontSize={'13px'}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText color="black" textAlign="right">
                    <Link
                      style={{
                        textDecoration: 'underline',
                      }}
                    >
                      Forgot your password?
                    </Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  height={'35px'}
                  fontSize={'13px'}
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="pink"
                  width="full"
                >
                  Login
                </Button>
                <h4 style={{ marginLeft: '150px' }}>or</h4>
                <Button
                  fontSize={'13px'}
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme=" dark blue"
                  width="full"
                  height={'35px'}
                  backgroundColor="darkblue"
                >
                  Continue with Facebook
                </Button>
                <Box>
                  New to Indiegogo?{' '}
                  <Link
                    style={{
                      textDecoration: 'underline',
                    }}
                    to="/SignUp"
                  >
                    Sign Up
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
