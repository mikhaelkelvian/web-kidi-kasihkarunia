import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Gambar1 from "../assets/G3.jpeg";
import Gambar2 from "../assets/G2.jpeg";
import Gambar3 from "../assets/G4.jpeg";
import Gambar4 from "../assets/G5.jpeg";

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center relative">
      {/* Text Section */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-10">
        {/* h1 dengan font Latin */}
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-600"
          style={{ fontFamily: "Niconne" }}
        >
          Percetakan
        </h1>

        {/* p dengan teks yang rapi */}
        <p className="text-2xl text-gray-600 mt-4 whitespace-pre-line">
          <p>Kasih Karunia tempat percetakan</p>
          yang murah, cepat, dan terpercaya.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-1/2 h-auto ml-auto mt-10 flex items-center justify-center">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src={Gambar1}
              alt="Contoh Produk 1"
              className="object-contain w-full max-h-[500px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gambar2}
              alt="Contoh Produk 2"
              className="object-contain w-full max-h-[500px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gambar3}
              alt="Contoh Produk 3"
              className="object-contain w-full max-h-[500px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gambar4}
              alt="Contoh Produk 3"
              className="object-contain w-full max-h-[500px] mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
