import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';
import Login from './Login';
import PaymentPage from './PaymentPage';
import ProductsPage from './ProductsPage';
import SingleProductPage from './SingleProductPage';
import SingleProductCard from "../Components/SingleProductCard"

import Singup from './Singup';
import Home from './Home';

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductsPage' element={<ProductsPage></ProductsPage>}></Route>
        <Route path='/SingleProductPage/:id' element={<SingleProductPage></SingleProductPage>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Singup' element={<Singup></Singup>}></Route>
        <Route path='/PaymentPage' element={<PaymentPage></PaymentPage>}></Route>
        <Route path='/CheckoutPage' element={<CheckoutPage></CheckoutPage>}></Route>
        <Route path='/SingleProductCard' element={<SingleProductCard></SingleProductCard>}></Route>
  </Routes>
  )
}

export default MainRoute