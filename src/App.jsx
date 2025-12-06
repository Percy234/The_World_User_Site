import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Header from './component/Header'
import Home from './pages/Home'
import ErrorPage from './pages/Error'
import Hierarchy from './pages/Hierarchy'


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/hierarchy' element={<Hierarchy />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
