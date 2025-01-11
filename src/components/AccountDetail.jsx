import React from 'react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AccountDetail = () => {
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
        <h6 className='hover:underline'><a href="/">back to home</a></h6>
      <h1 className="text-2xl font-bold mb-4">Account Details</h1>
      <p>Email: {currentUser.email}</p>
      <button 
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountDetail;