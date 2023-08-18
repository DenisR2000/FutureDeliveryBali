import React, { lazy } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route, Link, resolvePath } from 'react-router-dom';
// import Home from '../pages/Home';
// import Blog from '../pages/Blog'
import Contacts from '../pages/Contacts';
import Catalog from '../features/good_catalogs/components/Catalog/Catalog';
import Product from '../features/good_catalogs/components/Product/Product';
import Login from '../features/authentication/components/login/Login'
import Cart from '../features/staff/components/Cart';
import Registtration from '../features/authentication/components/Registtration/Registtration';

const Home = lazy(() => import("../pages/Home"))
const Blog = lazy(() => wait(200).then(() =>  import("../pages/Blog")))
const AboutUs = lazy(() =>
  import("../pages/AboutUs").then(model => {
    return { default: model.AboutUs }
  }))

function NavigationInHeader() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/create-account" element={<Registtration/>}></Route>
                    <Route exact path="/mail/catalogs/:catalogId" element={<Catalog/>}></Route>
                    <Route exact path='/mail/catalogs/product/:productId' element={<Product />} />
                    <Route exact path="/about" element={<AboutUs />}></Route>
                    <Route exact path="/contacts" element={<Contacts />}></Route>
                    <Route exact path="/blog" element={<Blog />}></Route>
                    <Route exact path="/cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </>
    )
}

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default NavigationInHeader


