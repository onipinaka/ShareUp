import React from 'react'
import Home from './pages/Home'
import {Router, BrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App