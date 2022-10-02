import React from "react"
import {Outlet} from "react-router-dom"
import Header from "../components/Navigation/Header"
import Footer from "../components/Navigation/Footer"
import ContextMenu from '../components/ContextMenu'


import './Styles/core.css'
import './Styles/typography.css'
import './Styles/colors.css'



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