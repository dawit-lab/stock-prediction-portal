import { useState } from 'react'
import  './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'



function App() {
 

  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Login' element={<Login />} /> 
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} /> 
        </Routes>
      <Footer />
      </BrowserRouter>
      </AuthProvider>
      
      
     

      
    </>
  )
}

export default App
