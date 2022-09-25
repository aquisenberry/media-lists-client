import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../Navigation/Header"
import Footer from "../Navigation/Footer"
import ContextMenu from '../ContextMenu'


import '../../Styles/core.css'
import '../../Styles/typography.css'
import '../../Styles/colors.css'



const Layout = () => {
  
    return (
      <>
        <ContextMenu/>
        <Header/>
        <Outlet />
        <Footer/>
      </>
    );
  };
  
  export default Layout;