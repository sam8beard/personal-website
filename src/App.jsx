import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route 
              path='/'
              element={<Home/>}
            /> 
        </Routes>
      </Router>
    </div> 
  )
}

export default App
