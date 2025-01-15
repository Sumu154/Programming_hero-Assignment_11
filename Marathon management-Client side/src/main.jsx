import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from 'react-router-dom'

import router from './routes/router'
import AuthProvider from './contexts/AuthProvider.jsx'
import LoadingProvider from './contexts/LoadingProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider> <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider> </AuthProvider> 
  </StrictMode>,
)
