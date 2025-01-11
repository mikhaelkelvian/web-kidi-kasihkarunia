import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db, auth } from "../firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AccountDetail = () => {
  
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ fullName: "", email: "", address: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Account Details</h1>
      <p>Email: {currentUser.email}</p>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default AccountDetail;
