import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import AuthLayout from "./components/AuthLayout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AccountDetail from "./components/AccountDetail";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; 
import Profile from "./components/Profile";
import PopUp from "./components/PopUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Tambahkan PopUp di sini */}
          <PopUp />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Home />
                  <Gallery />
                  <About />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <Navbar />
                  <Contact />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div>
                  <Navbar />
                  <Profile />
                  <Footer />
                </div>
              }
            />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <AccountDetail />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
