import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo2 from "../assets/LogoKK.png";
import Icon from "../assets/avatar.png";

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (currentUser) {
      navigate("/account");
    } else {
      navigate("/auth/signin");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-50 backdrop-blur-md border-b border-gray-300 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo2} className="h-8" alt="Flowbite Logo" />
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600"
            style={{ fontFamily: "Niconne" }}
          >
            Kasih Karunia
          </span>
        </a>
        {/* Navigation Links */}
        <div className="w-full md:w-auto flex justify-center">
          <ul className="flex space-x-8 font-medium p-4 md:p-0">
            {/* Dropdown Section */}
            <li className="relative group">
              <a
                href="#"
                className="py-2 px-3 text-gray-700 hover:text-blue-700 flex items-center"
              >
                Category
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {/* Dropdown Content */}
              <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white border border-gray-200 rounded-lg shadow-lg w-[600px] p-4">
                <div className="grid grid-cols-4 gap-4">
                  {/* Percetakan */}
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      PERCETAKAN
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Poster</li>
                      <li>Brosur</li>
                      <li>Kartu Nama</li>
                      <li>Sticker</li>
                      <li>Name Tag</li>
                      <li>Amplop</li>
                      <li>Undangan</li>
                      <li>Nota | Kwitansi</li>
                      <li>Kalender Dinding</li>
                      <li>Kalender Duduk</li>
                    </ul>
                  </div>
                  {/* Souvenir */}
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      SOUVENIR
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Goodie Bag</li>
                      <li>Thumbler</li>
                      <li>PIN</li>
                      <li>Bolpen</li>
                      <li>Payung</li>
                      <li>Tali ID Card</li>
                    </ul>
                  </div>
                  {/* Advertising */}
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      ADVERTISING
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Roll Banner</li>
                      <li>X-Banner</li>
                      <li>MMT</li>
                    </ul>
                  </div>
                  {/* Packaging */}
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      PACKAGING
                    </h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>Dus Corrugated</li>
                      <li>Box Jinjing | Gabel Box</li>
                      <li>Paperbag Tali</li>
                      <li>Plastic</li>
                    </ul>
                  </div>
                </div>
              </div>
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
          </ul>
        </div>
        {/* Profile Icon */}
        <button onClick={handleProfileClick}>
          <img src={Icon} alt="Icon" className="scale-75" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
