import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getMovies } from './redux/actions/external';
import Home from './components/pages/Home'
import Layout from './components/pages/Layout'



const App = () =>{
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMovies())
    }, [])
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