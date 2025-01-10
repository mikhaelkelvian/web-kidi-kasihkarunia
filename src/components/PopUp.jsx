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
      className="fixed z-40 top-1/3 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-e-lg shadow-lg cursor-pointer hover:bg-blue-600"
      onClick={handleRedirect}
    >
      <div className="flex items-center space-x-2">
        <span className="font-bold">🛒 Pesan Sekarang</span>
      </div>
    </div>
  );
};

export default PopUp;
