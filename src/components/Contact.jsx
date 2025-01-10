import React from "react";
import blueBG from "../assets/Blue-bg.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Bagian Header dengan Background Gambar */}
      <div
        className="relative w-full h-40 flex justify-center items-center bg-cover bg-center text-white font-bold text-4xl"
        style={{ backgroundImage: `url(${blueBG})` }}
      >
        <h1 className="text-4xl font-bold">
          <span className="text-black" >Kontak</span>{" "}
          <span className="text-blue-500">Kami</span>
          
        </h1>
      </div>

      {/* Konten Utama */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Bagian Peta */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.991063032889!2d110.42040431540591!3d-7.76418497926886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a144c9f20e68f%3A0x421ff9fdf3dc6cf5!2sJl.%20Delta%20Mas%202%20No.%20147!5e0!3m2!1sen!2sid!4v1624453907246!5m2!1sen!2sid"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>

          {/* Bagian Kontak */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Alamat</h2>
            <p className="text-gray-700 mb-4">
              Jl. Delta Mas 2 No. 147, Kuningan, Kec. Semarang Utara, Kota
              Semarang, Jawa Tengah 50176
            </p>
            <h2 className="text-lg font-semibold mb-4">Whatsapp</h2>
            <p className="text-gray-700 mb-4">+62 882-4753-9988</p>
            <h2 className="text-lg font-semibold mb-4">Email</h2>
            <p className="text-gray-700">kasihkarunia@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
