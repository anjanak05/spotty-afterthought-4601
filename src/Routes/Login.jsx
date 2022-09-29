import React, { useState } from 'react'
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
  InputRightElement
} from "@chakra-ui/react";

import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authReducer/action';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const [email,setEmail]= useState("eve.holt@reqres.in");
  const [password,setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email&&password){
      dispatch(login({email,password}))
      .then((r)=>{
        navigate("/")
      })
    }
    }

  return (
    <div>Login

<Flex
      flexDirection="column"
      width="100%"
      height="100%"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
             
        <Box minW={{ base: "90%", md: "468px" }}>
    
          <form onSubmit={handleSubmit} >
            <Stack
              spacing={10}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
                  <Heading fontWeight="semibold" color="black">Welcome Back!</Heading>
        <h4>Login in to Continue</h4>
              <FormControl>
              <label>Email</label>

                <InputGroup>
                
                  <Input type="email" placeholder="Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
              <label>Password</label>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText color="black" textAlign="right">
                  <Link style={{
                    textDecoration:"underline"
                  }}>Forgot your password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Login
              </Button>
              <h4>
              or

              </h4>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme=" dark blue"
                width="full"
                backgroundColor="darkblue"
              >
                Continue with Facebook
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to Indiegogo?{" "}
        <Link style={{
          textDecoration:"underline"
        }} to="/SignUp">
          Sign Up
        </Link>
      </Box>
    </Flex>
    </div>
  )
}

export default Login