import React from 'react'
import NavbarComponent from '../Component/Navbar/NavbarComponent'
import Footercomponent from '../Component/Footer/Footercomponent'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
        <Footercomponent/>
    </div>
  )
}

export default Layout