import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../Pages/Home"
import Cart from '../Pages/Cart'

const AllRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    
  )
}

export default AllRoutes
