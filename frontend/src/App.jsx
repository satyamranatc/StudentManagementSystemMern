import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

import Navbar from './Components/Nav';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Students from './Pages/Student';
import NotFound from './Components/NotFound.jsx';
import Login from './Components/Login.jsx';

export default function App() {
  let [LoginSuccess,SetLoginSuccess] = useState(false)
  return (
    <div>


      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/students" element={<Students/>} />
          {/* <Route path="/admin" element={LoginSuccess?<Admin/>: <Login SetLoginSuccess = {SetLoginSuccess}/> } /> */}
          <Route path="/admin/" element={<Admin/>} />
          <Route path="*" element={<NotFound/>} />


        </Routes>
      
      </BrowserRouter>



    </div>
  )
}
