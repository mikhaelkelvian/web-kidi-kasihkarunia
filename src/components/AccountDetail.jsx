import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

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
    <div className="flex flex-col items-center bg-blue-50 min-h-screen p-6 md:p-10 lg:p-20 pt-16">
      <h1 className="text-3xl md:text-4xl font-bold my-3 text-center">
        Akun Saya
      </h1>
      <div className="w-full max-w-2xl flex flex-col gap-5 bg-white rounded-lg p-6 md:p-10 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold">Email:</h2>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="text-lg bg-blue-100 p-3 rounded-md border border-blue-300">
              {currentUser.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold">Nama Lengkap:</h2>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="text-lg bg-blue-100 p-3 rounded-md border border-blue-300">
              John Doe
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold">Alamat:</h2>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="text-lg bg-blue-100 p-3 rounded-md border border-blue-300">
              Jl. Raya No.123, Jakarta
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-1/3">
            <h2 className="text-xl font-semibold">Nomor Hp:</h2>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="text-lg bg-blue-100 p-3 rounded-md border border-blue-300">
              08123456789
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
          <button
            onClick={() => alert("Edit data akan tersedia!")}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
          >
            Edit
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
