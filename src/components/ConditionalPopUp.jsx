import React from "react";
import { useLocation } from "react-router-dom";
import PopUp from "./PopUp";

const ConditionalPopUp = ({ children }) => {
  const location = useLocation();

  // Path yang tidak boleh menampilkan PopUp
  const excludedPaths = ["/auth/signin", "/auth/signup", "/account", "/login-admin", "/admin"];

  // Fungsi untuk mengecek apakah current path termasuk dalam excluded paths
  const shouldShowPopup = () => {
    // Cek apakah current path ada dalam excludedPaths
    return !excludedPaths.some(
      (path) =>
        location.pathname === path ||
        // Khusus untuk nested routes /auth/*
        (path.startsWith("/auth/") && location.pathname.startsWith("/auth/"))
    );
  };

  return(
    <div>
        {shouldShowPopup() && <PopUp/>}
        {children}
    </div>
  );

};

export default ConditionalPopUp;
