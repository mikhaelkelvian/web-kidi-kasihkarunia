import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const EditAccount = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    address: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [currentUser.uid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, userDetails);
      navigate("/account");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1 bg-blue-50 p-10 m-20 rounded-xl border border-blue-500">
      <h1 className="text-4xl font-bold my-3 mx-auto">Edit Profil</h1>
      <span className="h-[1px] bg-slate-400 opacity-75 mx-10 my-4"></span>

      <form onSubmit={handleSubmit} className="mx-10 flex flex-col gap-5">
        <div className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <label className="text-2xl font-semibold">Email:</label>
          <p className="text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500">{currentUser.email}</p>
        </div>

        <div className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <label className="text-2xl font-semibold">Nama Lengkap:</label>
          <input type="text" name="fullName" value={userDetails.fullName} onChange={handleChange} className="w-full text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500" required />
        </div>

        <div className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <label className="text-2xl font-semibold">Alamat:</label>
          <input type="text" name="address" value={userDetails.address} onChange={handleChange} className="w-full text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500" required />
        </div>

        <div className="py-4 px-7 space-y-2 bg-blue-100 rounded-lg border border-blue-500">
          <label className="text-2xl font-semibold">Nomor Hp:</label>
          <input type="text" name="phone" value={userDetails.phone} onChange={handleChange} className="w-full text-lg font-medium py-2 px-4 bg-blue-200 rounded-lg border border-blue-500" required />
        </div>

        <div className="my-4 flex flex-col gap-3">
          <button type="submit" disabled={isLoading} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition duration-150 text-white text-lg font-medium rounded-lg disabled:bg-blue-300">
            {isLoading ? "Menyimpan..." : "Simpan"}
          </button>
          <button type="button" onClick={() => navigate("/account")} className="px-4 py-2 bg-slate-500 hover:bg-slate-600 transition duration-150 text-white text-lg font-medium rounded-lg">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
