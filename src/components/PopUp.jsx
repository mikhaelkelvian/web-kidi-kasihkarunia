import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Pesanan from "../assets/Logo-WA.png";

const PopUp = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleRedirect = async () => {
    if (currentUser) {
      const waNumber = "62882005722916";
      
      // If we haven't fetched user data yet, fetch it now
      if (!userData) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }

      // Compose message with user details
      const message = `Halo, saya ingin memesan produk.
      
Detail Pemesan:
Nama: ${userData?.fullName || 'Guest'}
Email: ${userData?.email || currentUser.email}
Alamat: ${userData?.address || 'Not set'}
No. HP: ${userData?.phone || 'Not set'}

Pesanan:
[Silakan isi detail pesanan Anda di sini]`;

      // Create WhatsApp link with formatted message
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.open(waLink, '_blank');
    } else {
      navigate("/auth/signin");
    }
  };

  return (
    <>
      {/* Tombol untuk membuka/tutup pop-up */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed z-20 top-1/3 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-r-lg shadow-lg hover:bg-slate-100"
      >
        {isVisible ? (
          "<"
        ) : (
          <img src={Pesanan} alt="Keranjang" className="w-5 h-5" />
        )}
      </button>

      {/* Pop-up */}
      <div
        className={`fixed z-10 top-1/3 transform -translate-y-1/2 bg-white text-black p-3 lg:p-4 rounded-e-lg shadow-lg cursor-pointer hover:bg-slate-100 transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={handleRedirect}
      >
        <div className="flex items-center space-x-2 self-center">
          <span className="font-bold text-sm lg:text-base">
            🛒 Pesan Sekarang
          </span>
        </div>
      </div>
    </>
  );
};

export default PopUp;