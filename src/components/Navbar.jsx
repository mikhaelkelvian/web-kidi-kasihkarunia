import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo2 from "../assets/LogoKK.png";
import Icon from "../assets/avatar.png";

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfileClick = () => {
    if (currentUser) {
      navigate("/account");
    } else {
      navigate("/auth/signin");
    }
  };

  const handleAdminClick = () => {
    if (currentUser) {
      navigate("/admin");
    } else {
      navigate("/login-admin");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border-b border-gray-300 z-50">
      <div className="max-w-screen-xl flex items-center lg:h-auto h-full justify-between mx-auto p-4 list-none">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo2} className="h-8" alt="Kasih Karunia Logo" />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600"
            style={{ fontFamily: "Niconne" }}
          >
            Kasih Karunia
          </span>
        </a>
        <div className="hidden lg:flex flex-row gap-10">
        <li>
          <a
            href="#product"
            className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
          >
            Product
          </a>
        </li>
        <li>
          <a
            onClick={() => navigate("/contact")}
            className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            onClick={() => navigate("/profile")}
            className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
          >
            Profile
          </a>
        </li>

        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div
          className={`fixed top-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4 p-4 bg-gray-300 h-screen">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo2} className="h-8" alt="Kasih Karunia Logo" />
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600"
                style={{ fontFamily: "Niconne" }}
              >
                Kasih Karunia
              </span>
            </a>
            <li>
              <a
                onClick={() => navigate("/product")}
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                Product
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/contact")}
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/profile")}
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                onClick={handleProfileClick}
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer"
              >
                Akun Saya
              </a>
            </li>
          </ul>
        </div>

        {/* Profile Icon */}
        <button onClick={handleProfileClick} className="hidden lg:block">
          <img src={Icon} alt="Profile Icon" className="scale-75" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
