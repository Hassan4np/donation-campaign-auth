import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MyBrowser } from './Components/Routs/Routs.jsx'
import AuthProvider from './Components/Routs/AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyBrowser} />
    </AuthProvider>
  </React.StrictMode>,
  
)
