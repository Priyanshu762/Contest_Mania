import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/user-view/Dashboard';
import CheckAuth from './components/common/checkAuth';
import Home from './pages/Home';
import AuthLayout from './components/auth/layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' 
        
        
        element={
        <Navigate to="/login" />
      } 
        />

        <Route path='/auth' 
        element={
          <CheckAuth isAuthenticated={true} >
            <AuthLayout></AuthLayout>
          </CheckAuth>
        }
        >
          <Route path='login' element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;