import React from "react";
import blueBG from "../assets/Blue-bg.png";
import profile from "../assets/Profile.png";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 bg-gray-100">
      {/* Bagian Header dengan Background Gambar */}
      <div className="relative w-full h-40 flex justify-center items-center bg-cover bg-center text-white font-bold text-4xl" style={{ backgroundImage: `url(${blueBG})` }}>
        <h1 className="text-4xl font-bold">
          <span className="text-black">PROFILE</span>{" "}
        </h1>
      </div>

      {/* Gambar Profile */}
      <div className="flex flex-col items-center mt-8">
        <img src={profile} alt="Profile" className="w-500 h-80 border-10 " />
      </div>

      {/* dokumentasi */}
      <div className="flex flex-col my-10 gap-5 items-center">
        <h2 className="font-semibold text-3xl">Dokumentasi</h2>
        <div className="grid grid-cols-2">
          <img src={profile} alt="foto1" className="h-72" />
          <img src={profile} alt="foto2" className="h-72" />
        </div>
        <div className="grid grid-cols-3">
          <img src={profile} alt="foto3" className="h-52" />
          <img src={profile} alt="foto4" className="h-52" />
          <img src={profile} alt="foto5" className="h-52" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
