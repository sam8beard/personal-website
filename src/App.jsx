import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
function App() {
  
  return (
    <>
      <div className="container">
        <Router>
          <Nav/>
          <Routes>
            <Route 
                path='/'
                element={<Home/>}
            /> 
            <Route 
                path='/about'
                element={<About/>}
            />
          </Routes>
        </Router>
      </div>
    </> 
  )
}

export default App
