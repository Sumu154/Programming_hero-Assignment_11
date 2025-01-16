import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


import router from './routes/router'
import AuthProvider from './contexts/AuthProvider.jsx'
import LoadingProvider from './contexts/LoadingProvider.jsx'
import MarathonProvider from './contexts/MarathonProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <LoadingProvider> <AuthProvider> <MarathonProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </MarathonProvider> </AuthProvider> </LoadingProvider> 
  </StrictMode>,
)
