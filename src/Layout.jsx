import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    
    <Outlet/>

    <Footer/>
    </>
  )
}

export default Layout
