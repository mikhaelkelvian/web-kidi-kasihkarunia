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
    <div className="flex flex-col gap-1 bg-blue-50 p-10 m-20 rounded-xl border border-blue-500">
      <h1 className="text-4xl font-bold my-3 mx-auto">Akun Saya</h1>
      <span className="h-[1px] bg-slate-400 opacity-75 mx-10 my-4"></span>
      <div className="mx-10 flex flex-col gap-5">
        <div id="email" className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <h2 className="text-2xl font-semibold">Email:</h2>
          <p className="text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500">{currentUser.email}</p>
        </div>
        <div id="fullName" className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <h2 className="text-2xl font-semibold">Nama Lengkap:</h2>
          <p className="text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500">{currentUser.email}</p>
        </div>
        <div id="address" className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <h2 className="text-2xl font-semibold">Alamat:</h2>
          <p className="text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500">{currentUser.email}</p>
        </div>
        <div id="phone" className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <h2 className="text-2xl font-semibold">Nomor Hp:</h2>
          <p className="text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500">{currentUser.email}</p>
        </div>
        <div id="action" className="my-4 flex flex-col gap-3">
          <button onClick={handleLogout} className="px-4 py-2 bg-slate-500 hover:bg-slate-600 transition duration-150 text-white text-lg font-medium rounded-lg">
            Edit
          </button>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 hover:bg-red-600 transition duration-150 text-white text-lg font-medium rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
