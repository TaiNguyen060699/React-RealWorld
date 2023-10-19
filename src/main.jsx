import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import AuthProvider from "./context/AuthContext";
import Login from "./pages/Login";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
