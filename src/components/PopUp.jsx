import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (currentUser) {
      // Redirect ke nomor WhatsApp
      const waNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
      const message = "Halo, saya ingin memesan produk.";
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.location.href = waLink;
    } else {
      // Redirect ke halaman login
      navigate("/auth/signin");
    }
  };

  return (
    <div
      className="fixed left-4 z-40 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-green-600"
      onClick={handleRedirect}
    >
      <div className="flex items-center space-x-2">
        <span className="font-bold">🛒 Pesan Sekarang</span>
      </div>
    </div>
  );
};

export default PopUp;
