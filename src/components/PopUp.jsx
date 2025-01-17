import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Pesanan from "../assets/Logo-WA.png";

const PopUp = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      {/* Tombol untuk membuka/tutup pop-up */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed z-20 top-1/3 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-r-lg shadow-lg hover:bg-blue-600"
      >
        {isVisible ? (
          "<"
        ) : (
          <img src={Pesanan} alt="Keranjang" className="w-5 h-5" />
        )}
      </button>

      {/* Pop-up */}
      <div
        className={`fixed z-10 top-1/3 transform -translate-y-1/2 bg-white text-black p-3 lg:p-4 rounded-e-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-transform duration-300 ${
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
