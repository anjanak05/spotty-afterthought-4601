import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Input,
  VStack,
  Heading,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* <br></br> */}
      <Box fontSize="sm" bg={useColorModeValue('#F5F5F5', 'gray.900')}>
        <Container as={Stack} maxW={'6xl'} py={4}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
            <Stack align={'flex-start'}>
              <Heading color="gray.600" fontSize="md" fontWeight="semibold">
                EXPLORE
              </Heading>
              <Link href={'#'}>What we do</Link>
              <Link href={'#'}>Funding</Link>
            </Stack>

            <Stack align={'flex-start'}>
              <Heading color="gray.600" fontSize="md" fontWeight="semibold">
                ABOUT
              </Heading>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Trust & Safety</Link>
              <Link href={'#'}>Help & Support</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact</Link>
            </Stack>

            <Stack align={'flex-start'}>
              <Heading color="gray.600" fontSize="md" fontWeight="semibold">
                ENTREPRENEURS
              </Heading>
              <Link href={'#'}>How It Works</Link>
              <Link href={'#'}>Indiegogo vs. Kickstarter</Link>
              <Link href={'#'}>Education Center</Link>
              <Link href={'#'}>Experts Directory</Link>
              <Link href={'#'}>Fees</Link>
              <Link href={'#'}>Enterprise</Link>
              <Link href={'#'}> China</Link>
            </Stack>
            <VStack>
              <Heading fontSize="md">Find it first on Indiegogo</Heading>
              <Heading fontSize="20px" fontWeight="normal">
                Discover new and clever products in the Indiegogo newsletter
              </Heading>
              <br />
              <br />

              <Input
                placeholder="Your Email Address"
                backgroundColor="white"
                border="1px solid black"
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <Heading fontWeight="medium" fontSize="small" marginTop="10px">
                <Checkbox
                  ml="2px"
                  border="1px gray"
                  backgroundColor="gray.200"
                ></Checkbox>
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
              </Heading>
              <Link to="/Signup">
                <Button
                  marginTop="7%"
                  borderRadius="none"
                  loadingText="Submitting"
                  size="md"
                  fontSize="small"
                  padding="20px"
                  width="300px"
                  backgroundColor="#E51075"
                  color={'white'}
                  _hover={{
                    bg: 'pink.600',
                  }}
                >
                  Sign Me Up
                </Button>
              </Link>
            </VStack>
          </SimpleGrid>
          <Box display="flex" gap="20px">
            <Box
              w="150px"
              justifyContent="space-evenly"
              fontSize="smaller"
              h="25px"
              border="1px"
              paddingLeft="30px"
            >
              {' '}
              ₹ Indian Rupee
            </Box>
            <Heading gap="20px" display="flex" fontSize="md">
              <FaFacebookF /> <FaTwitter /> <FaYoutube /> <FaInstagram />{' '}
              <FaLinkedinIn /> <FaSpotify />{' '}
            </Heading>
          </Box>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            fontSize="smaller"
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'center' }}
            align={{ md: 'center' }}
          >
            <Text>
              {' '}
              <Link> Terms of Use</Link>{' '}
            </Text>
            <Text>
              {' '}
              <Link> Privacy Policy</Link>{' '}
            </Text>
            <Text>
              {' '}
              <Link> Cookie Policy</Link>{' '}
            </Text>
            <Text>
              {' '}
              <Link> Do Not Sell My Personal Information</Link>{' '}
            </Text>
            <Text>
              {' '}
              <Link> Accessibility</Link>{' '}
            </Text>
            <Text>
              {' '}
              <Link>© 2022 Indiegogo, Inc. All Rights Reserved</Link>{' '}
            </Text>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
