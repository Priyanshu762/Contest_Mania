import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Login from './components/Login';
import Login from "./pages/auth/Login";
// import Register from './components/Register';
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user-view/Dashboard";
import CheckAuth from "./components/common/checkAuth";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/layout";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import UpcomingContext from "./pages/UpcomingContext";
import PastContests from "./pages/PastContests"
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={true}>
                <AuthLayout></AuthLayout>
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upcoming-contests" element={<UpcomingContext />} />
          <Route path="/past-contests" element={<PastContests/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
