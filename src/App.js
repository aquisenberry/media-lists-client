import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Lists from './pages/Lists'
import Search from './pages/Search';
import MediaDetails from './pages/MediaDetails'



const App = () =>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> 
                    <Route path="lists" element={<Lists />} />
                    <Route path="search" element={<Search />} />
                    <Route path="details/:type/:_id" element={<MediaDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App