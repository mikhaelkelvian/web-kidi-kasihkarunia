import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
  
      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === "admin") {
          navigate("/admin");
        } else {
          await auth.signOut(); // Logout user immediately if not admin
          alert("Anda bukan admin. Dilarang masuk!");
          navigate("/login-admin");
        }
      } else {
        alert("Data user tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (currentUser) {
      console.log("User already logged in:", currentUser.uid);
    }
  }, [currentUser]);

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col w-2/5 h-fit self-center mx-auto gap-6 bg-white p-9 rounded-lg shadow-xl border border-blue-200">
        <h1 className="text-2xl font-bold text-center">Login Admin</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
