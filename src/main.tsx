import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/auth/Login.tsx'
import Dashboard from './dashboard/index.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { ClerkProvider } from '@clerk/clerk-react';

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ]
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth/login",
    element:<Login/>
  }
  
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
