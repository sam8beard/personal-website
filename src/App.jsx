import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Nav/>
      <div className="container">
        <Router>
          <Routes>
            <Route 
                path='/'
                element={<Home/>}
              /> 
          </Routes>
        </Router>
      </div>
    </> 
  )
}

export default App
