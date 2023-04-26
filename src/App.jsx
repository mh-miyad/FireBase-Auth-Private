import React from 'react'
import NabarCom from './Component/NabarCom'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
        <NabarCom/>
        <Outlet/>
        <ToastContainer />
    </div>
  )
}

export default App