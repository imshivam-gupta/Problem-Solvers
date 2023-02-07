import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'


import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
    </>
  )
}

export default App

