import React from 'react'
import Header from './Header'
import "../App.css";

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
          <Header />
          <Outlet/>
    </div>
  )
}
