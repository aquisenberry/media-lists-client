import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Layout from './components/pages/Layout'



const App = () =>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App