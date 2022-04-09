import './App.css';
import React, { useState, useContext, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';



import LandingPage from './pages/Landingpage';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/profile/profile';
import MyLinks from './pages/Mylinks/Mylinks';
import InsertPage from './pages/Insertpage/InsertPage';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}


function App() {
  const [state, dispatch] = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!state.isLogin) {
      navigate("/landingpage")
    }
  }, [state])

  const checkUser = async () => {
    try {
      const response = await API.get('/checkAuth')

      if (response.status == 404) {
        dispatch({
          type: "AUTH_ERROR"
        })
      }

      let payload = response.data.data.user
      payload.token = localStorage.token

      dispatch({
        type: "USER_SUCCESS",
        payload
      })

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUser()
  }, [])
  return (
      <Routes>
        <Route exact path='/' element={<LandingPage />}/>s
        <Route path='/landingpage' element={<LandingPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myLinks" element={<MyLinks />} />
        <Route path="/insertLink" element={<InsertPage />} />
      </Routes>
  )
}

export default App;
