import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainRoute from './Routes/MainRoute';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <MainRoute></MainRoute>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
