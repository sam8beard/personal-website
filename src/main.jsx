import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>  */}
      <App />
      {/* <RouterProvider router={router} /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
