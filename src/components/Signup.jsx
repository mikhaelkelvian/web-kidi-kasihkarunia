import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validasi sederhana sebelum membuat akun
    if (password.length < 6) {
      alert("Password harus minimal 6 karakter.");
      return;
    }

    setLoading(true); // Tampilkan loader
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Akun berhasil dibuat. Silakan login.");
      navigate("/auth/login");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        alert("Email sudah terdaftar. Silakan gunakan email lain.");
      } else if (errorCode === "auth/invalid-email") {
        alert("Format email tidak valid.");
      } else {
        alert("Terjadi kesalahan: " + error.message);
      }
    } finally {
      setLoading(false); // Sembunyikan loader
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col w-2/5 h-fit self-center mx-auto gap-6 bg-white p-9 rounded-lg shadow-xl border border-blue-200">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
          <button type="submit" className={`w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4 text-black">
          Sudah punya akun?{" "}
          <Link to="/auth/signin" className="text-blue-500 hover:underline">
            Login Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
