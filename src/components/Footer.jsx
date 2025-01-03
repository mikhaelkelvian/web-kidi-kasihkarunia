import React from "react";
import Logo from "../assets/LogoKK.png"; // Path logo
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"; // Import ikon

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        {/* Bagian Kiri */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo KK" className="w-16 h-16" />
          <p className="mt-2 text-sm text-gray-700">© 2024 KasihKarunia</p>
          <p className="text-sm text-gray-700">All rights reserved.</p>
        </div>

        {/* Bagian Tengah */}
        <div className="text-center">
          <h3 className="font-bold text-gray-800">Home</h3>
          <ul className="space-y-2 mt-2">
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:underline hover:text-blue-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="text-gray-700 hover:underline hover:text-blue-700"
              >
                Profil
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian Kanan */}
        <div className="text-center md:text-right">
          <h3 className="font-bold text-gray-800">Contact</h3>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center justify-center md:justify-end">
              <FaMapMarkerAlt className="text-gray-700 w-6 h-6 mr-2" />
              <div className="text-gray-700 text-sm whitespace-pre-line">
                Jl. Delta Mas 2 No. 147, Kuningan,{"\n"}
                Kec. Semarang Utara, Kota Semarang,{"\n"}
                Jawa Tengah 50176
              </div>
            </li>
            <li className="flex items-center justify-center md:justify-end">
              <FaWhatsapp className="text-gray-700 w-6 h-6 mr-2" />
              <a
                href="https://wa.me/6288247539988"
                className="text-gray-700 hover:underline hover:text-blue-700"
              >
                +62 882-4753-9988
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
