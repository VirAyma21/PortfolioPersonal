import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageProjects from '../pages/PageProjects';

import Layout from "../components/Layout/Layout";
import Home from '../pages/Home';

import PageContacto from '../pages/PageContacto'



const Router = () =>{
    return (
        <>
        <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/projects' element={<PageProjects />}></Route>
        <Route path='/contacto' element={<PageContacto/>}></Route>
        </Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Router;