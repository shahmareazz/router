import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Header from './Units/Header';

export default function App() {
  return (
    <div>
<Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<Notfound />} />
  </Routes>
    </div>
  )
}
