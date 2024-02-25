import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Home from './Main/Home'
import Contact from './Main/Contact'
import About from './Main/About'
import Career from './Main/Career'
import ProtectedRoutes from './ProtectedRoutes'

function MainRoutes() {
    return (
        <div>
            <BrowserRouter>
            {/* {isLogin && <Header logindetails={isLogin} />} */}
            <Header/>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/home' element={<ProtectedRoutes Comp={Home} />} />
                    <Route path='/contact' element={<ProtectedRoutes Comp={Contact} />} />
                    <Route path='/career' element={<ProtectedRoutes Comp={Career} />} />
                    <Route path='/about' element={<ProtectedRoutes Comp={About} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainRoutes