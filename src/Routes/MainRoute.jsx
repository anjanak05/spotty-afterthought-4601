import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';
import Login from './Login';
import PaymentPage from './PaymentPage';
import ProductsPage from './ProductsPage';
import SingleProductPage from './SingleProductPage';
import Signup from './Signup';
import Home from './Home';
import PrivateRoute from '../Components/PrivateRoute';

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductsPage' element={<ProductsPage></ProductsPage>}></Route>
        <Route path='/SingleProductPage/:id' element={<SingleProductPage></SingleProductPage>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='/PaymentPage/:id' element={<PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>}></Route>
        <Route path='/CheckoutPage' element={<CheckoutPage></CheckoutPage>}></Route>
       
    </Routes>
  )
}

export default MainRoute