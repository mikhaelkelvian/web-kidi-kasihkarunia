import React, { useState } from "react";
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
import Plastic from "../assets/Plastic.png";
import Goodiebag from "../assets/Goodie-bag.png";
import Thumbler from "../assets/Thumbler.png";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      title: "GoodieBag",
      image: Goodiebag,
      description:
        "Sekali dayung dua tiga pulau terlampaui.Kalau bisa membantu menyelamatkan lingkungan sambil promosi kenapa tidak? Mari kita dukung pengurangan penggunaan kantong plastik yang sudah semakin urgent. Untuk tas kain yang lebih awet dengan hasil cetak yang memuaskan, informasih lebih lanjut bisa hubungi No WhatsApp.",
    },
    {
      title: "Thumbler",
      image: Thumbler,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Poster",
      image: Poster,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Brosur",
      image: Brosur,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Kartu Nama",
      image: KartuNama,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Sticker",
      image: Sticker,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Name Tag",
      image: NameTag,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Amplop",
      image: Amplop,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Undangan",
      image: Undangan,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Note | Kwitansi",
      image: Note,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Kalender Dinding",
      image: KalenderDinding,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Kalender Duduk",
      image: KalenderDuduk,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Tali Id Card",
      image: TaliIdCard,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Dus Corrugated",
      image: DusCorrugated,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "BoxJinjing | GabelBox",
      image: BoxJinjingGabelBox,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Papper Bag Tali",
      image: Papperbagtali,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
    {
      title: "Plastic",
      image: Plastic,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, dolor deleniti non dolorem placeat deserunt nemo consectetur commodi repellendus veritatis rem sunt, magni reprehenderit voluptatibus.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen p-8">
      {/* Jika Item dipilih */}
      {selectedItem ? (
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">{selectedItem.title}</h1>
            <p className="text-gray-700">{selectedItem.description}</p>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Kembali
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 group"
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
      )}
    </div>
  );
};

export default Gallery;
