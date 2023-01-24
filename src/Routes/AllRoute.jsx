import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Wishlist from '../Pages/Wishlist'

export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
    </Routes>
  )
}
