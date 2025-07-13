import React from 'react'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div>
        <p>hello</p>
      <Outlet/>
    </div>
  )
}

export default Mainlayout;
