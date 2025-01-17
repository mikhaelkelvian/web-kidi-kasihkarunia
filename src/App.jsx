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
import Admin from "./components/Admin";
import Products from "./components/Product";
import LoginAdmin from "./components/LoginAdmin";
import AdminRoute from "./components/AdminRoute";
import ConditionalPopUp from "./components/ConditionalPopUp";
import EditAccount from "./components/EditAccount";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ConditionalPopUp>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Home />
                  <Products />
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

            {/* admin route */}
            <Route path="/login-admin" element={<LoginAdmin />} />

            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />

            {/* client route */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
            </Route>

            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Navbar />
                  <AccountDetail />
                </PrivateRoute>
              }
            />

            <Route
              path="/edit-account"
              element={
                <PrivateRoute>
                  <Navbar />
                  <EditAccount />
                </PrivateRoute>
              }
            />
          </Routes>
        </ConditionalPopUp>
      </Router>
    </AuthProvider>
  );
}

export default App;
