import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../layout/Mainlayout.tsx'
import Send from '../layout/Send.tsx'
import Recieve from '../layout/Recieve.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout/>,
    children: [
      {path: "send", element: <Send/>}
      {path: "recieve", element: <Recieve/>}
    ]

  }
])



export default router
