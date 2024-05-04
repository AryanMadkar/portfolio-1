import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import Experiencemain from './pages/Home/Experiencemain';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/Experiences" element={<Experiencemain/>}/>
    
      
    </Routes>
   </BrowserRouter>
  )
}

export default App
 