import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Hero from '../pages/Hero/Hero'
import Docs from '../pages/Docs/Docs'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/docs' element={<Docs/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
