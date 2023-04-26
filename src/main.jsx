import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import News from './Pages/News.jsx';
import SignUp_Comp from './Component/SignUp_Comp.jsx'
import LogIn_Comp from './Component/LogIn_Comp.jsx'
import AuthProvider from './Auth/AuthProvider.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/news',
        element:<News/>
      },
      {
        path:'/signup',
        element: <SignUp_Comp/>
      },
      {
        path:'/login',
        element: <LogIn_Comp/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
