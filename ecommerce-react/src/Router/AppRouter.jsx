import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../components/Product';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Single_Product from '../pages/Single_Product';
import Categories from '../pages/All_Categories';
import Billing from '../pages/Billing';

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<Single_Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/categories/:id" element={<Categories />} />
                <Route path="/Billing" element={<Billing />} />
            </Routes>
        </>
    );
}

export default AppRouter;
