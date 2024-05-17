import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUP from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import DashBoard from './Components/DashBoard.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>    
  <Routes>
    <Route path="/" element={<DashBoard />} />
    <Route path="/SignUp" element={<SignUP />} />
    <Route path="/SignIn" element={<SignIn />} />
  </Routes>
  </BrowserRouter>

  </React.StrictMode>,
)
