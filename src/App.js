// import logo from './logo.svg';

import React from 'react'
import Home from './pages/Home'
import Shoes from './pages/Shoes';
import SingleShoe from './pages/SingleShoe';
import Error from './pages/Error';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/shoes' element={<Shoes/>}></Route>
      <Route exact path='/shoes/:slug' element={<SingleShoe/>}></Route>
      <Route path="*" element={<Error/>}></Route>  
    </Routes>
    <Footer/>
  </>);
}

export default App;
