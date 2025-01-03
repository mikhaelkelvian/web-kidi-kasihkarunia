import React from "react";
import Poster from "../assets/Poster.png";
import Brosur from "../assets/Brosur.png";
import KartuNama from "../assets/Kartu-nama.png";
import Sticker from "../assets/Sticker.png";
import NameTag from "../assets/Name-tag.png";
import Amplop from "../assets/Amplop.png";
import Undangan from "../assets/Undangan.png";
import Note from "../assets/Note-kwitansi.png";
import KalenderDinding from "../assets/Kalender-dinding.png";
import KalenderDuduk from "../assets/kalender-duduk.png";
import TaliIdCard from "../assets/tali-idcard.png";
import DusCorrugated from "../assets/Dus-Corrugated.png";
import BoxJinjingGabelBox from "../assets/Box Jinjing-Gabel Box.png";
import Papperbagtali from "../assets/Papperbag-tali.png";
import Plastic from "../assets/Plastic.png"
import Goodiebag from "../assets/Goodie-bag.png";
import Thumbler from "../assets/Thumbler.png"

const Gallery = () => {
  const galleryItems = [
    { title: "GoodieBag", image: Goodiebag },
    { title: "Thumbler", image: Thumbler },
    { title: "Poster", image: Poster },
    { title: "Brosur", image: Brosur },
    { title: "Kartu Nama", image: KartuNama },
    { title: "Sticker", image: Sticker },
    { title: "Name Tag", image: NameTag },
    { title: "Amplop", image: Amplop },
    { title: "Undangan", image: Undangan },
    { title: "Note | Kwitansi", image: Note },
    { title: "Kalender Dinding", image: KalenderDinding },
    { title: "Kalender Duduk", image: KalenderDuduk },
    { title: "Tali Id Card", image: TaliIdCard },
    { title: "Dus Corrugated", image: DusCorrugated },
    { title: "BoxJinjing | GabelBox", image: BoxJinjingGabelBox },
    { title: "Papper Bag Tali", image: Papperbagtali },
    { title: "Plastic", image: Plastic },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen">
      {/* Gallery Section */}
      <div className="py-16 px-6 bg-white rounded-t-3xl shadow-lg">
        {/* Filter */}
        <h1
          className="text-xl font-bold text-center text-gray-600 mb-6"
          style={{ fontFamily: "Montserrat" }}
        >
          <span className="cursor-pointer text-blue-600 hover:underline">
            All
          </span>{" "}
          | <span className="cursor-pointer hover:underline">Percetakan</span> |{" "}
          <span className="cursor-pointer hover:underline">Souvenir</span> |{" "}
          <span className="cursor-pointer hover:underline">Advertising</span> |{" "}
          <span className="cursor-pointer hover:underline">Packaging</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-center py-2 opacity-90">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
