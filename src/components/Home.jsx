import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import Gambar1 from "../assets/G6.png";
import Gambar2 from "../assets/G7.png";
import Gambar3 from "../assets/G8.png";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-gray-300 to-blue-300 min-h-screen flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mb-8 lg:mb-0">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600"
          style={{ fontFamily: "Niconne" }}
        >
          Percetakan
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
          Kasih Karunia tempat percetakan <br />
          yang murah, cepat, dan terpercaya.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src={Gambar1}
              alt="Contoh Produk 1"
              className="object-contain w-full max-h-[400px] lg:max-h-[500px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gambar2}
              alt="Contoh Produk 2"
              className="object-contain w-full max-h-[400px] lg:max-h-[500px] mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Gambar3}
              alt="Contoh Produk 3"
              className="object-contain w-full max-h-[400px] lg:max-h-[500px] mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default App;
