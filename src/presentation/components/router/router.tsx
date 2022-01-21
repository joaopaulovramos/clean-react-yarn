import React from 'react'
import Login from '@/presentation/pages/login/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@/presentation/styles/global.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
