import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rute Utama dengan Layout Navbar */}
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

          {/* Rute Halaman Contact */}
          <Route
            path="/contact"
            element={
              <div>
                <Navbar /> {/* Tambahkan Navbar */}
                <Contact /> {/* Tampilkan halaman kontak */}
                <Footer /> {/* Tambahkan Footer */}
              </div>
            }
          />

          <Route
            path="/profile"
            element={
              <div>
                <Navbar /> {/* Tambahkan Navbar */}
                <Profile /> {/* Tampilkan halaman kontak */}
                <Footer /> {/* Tambahkan Footer */}
              </div>
            }
          />

          {/* Rute Autentikasi */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Rute Akun Pribadi */}
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <AccountDetail />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
