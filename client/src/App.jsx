import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"


import LandingPage from './pages/Landingpage';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/profile/profile';
import MyLinks from './pages/Mylinks/Mylinks';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>s
        <Route path='/landingpage' element={<LandingPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myLinks" element={<MyLinks />} />
      </Routes>
  )
}

export default App;
