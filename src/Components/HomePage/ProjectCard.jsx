import React, { useState } from 'react';
import {
  Center,
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Wrap,
  SimpleGrid,
  Button,
  Stack,
  Input,
  Image,
  Text,
  Grid,
  Progress,
  Select,
  WrapItem,
  GridItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({
  id,
  img,
  title,
  fund,
  description,
  category,
  percentage,
  daysLeft,
}) => {

 

  return (
   
//       <Grid
//   h='500px'
//   templateRows='repeat(2, 1fr)'
//   templateColumns='repeat(5, 1fr)'
// >
//                   <GridItem key={id} border="1px solid #e1e1e1" textAlign="left">
//                     {/* <Link to={`/SingleProductPage/${id}`}> */}
//                       <Image src={img} w="100%" />
//                       <Box padding={'20px'}>
//                         <Box mb={'10px'}>
//                           <Flex
//                             justifyContent="space-between"
//                             gap="10px"
//                             alignItems={'center'}
//                           >
//                             <Text fontSize="sm" color="teal">
//                               {category}
//                             </Text>
//                             {/* <AiOutlineHeart /> */}
//                           </Flex>
//                         </Box>
//                         <hr />
//                         <Text fontSize="lg" fontWeight="550">
//                           {title}
//                         </Text>
//                         <p
//                           fontWeight="500"
//                           style={{
//                             fontSize: '13.5px',
//                             color: 'rgb(122,121,121)',
//                             marginBottom: '20px',
//                           }}
//                         >
//                           {description}
//                         </p>

//                         <h3>AUDIO</h3>
//                         <Box>
//                           <Flex
//                             justifyContent={'space-between'}
//                             alignItems={'center'}
//                           >
//                             <Box>
//                               <h2>{fund}</h2>
//                               <p>raised</p>
//                             </Box>
//                             <Box>
//                               <p>{percentage}%</p>
//                             </Box>
//                           </Flex>
//                         </Box>
//                         <Progress
//                           borderRadius={'10px'}
//                           colorScheme="green"
//                           size="sm"
//                           value={percentage}
//                         />
//                         <Box>
//                           {daysLeft === 'Now Funding through InDemand'}
//                           <p>
//                             {daysLeft === 'Now Funding through InDemand'
//                               ? daysLeft
//                               : daysLeft + ' days left'}
//                           </p>
//                         </Box>
//                       </Box>
//                     {/* </Link> */}
//                   </GridItem>
//                   </Grid>
      <div></div>

  );
};
