import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import './index.css'
import { Home,Components, Services, About, Contact,Project } from './pages/Glassory'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/components" element={<Components />} />
        <Route path="/project" element={<Project />} />
        <Route index element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
