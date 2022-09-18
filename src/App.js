import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Layout from './components/pages/Layout'
import Lists from './components/pages/Lists'
import Search from './components/pages/Search';



const App = () =>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> 
                    <Route path="lists" element={<Lists />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App