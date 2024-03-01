import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Router } from 'express'
import Home from './pages/Home'
import './assets/images/sammy.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <div>
        <Route path="/home"> 
          <Home/>
        </Route>
      </div> 
      

    </Router>
  )
}

export default App
