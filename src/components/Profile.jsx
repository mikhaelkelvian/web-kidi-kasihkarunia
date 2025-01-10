import React from "react";
import blueBG from "../assets/Blue-bg.png";
import profile from "../assets/Profile.png"; 

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Bagian Header dengan Background Gambar */}
      <div
        className="relative w-full h-40 flex justify-center items-center bg-cover bg-center text-white font-bold text-4xl"
        style={{ backgroundImage: `url(${blueBG})` }}
      >
        <h1 className="text-4xl font-bold">
          <span className="text-black">PROFILE</span>{" "}
          
        </h1>
      </div>

      {/* Gambar Profile */}
      <div className="flex flex-col items-center mt-8">
        <img
          src={profile}
          alt="Profile"
          className="w-500 h-80 border-10 "
        />
      </div>
    </div>
  );
};

export default Profile;
