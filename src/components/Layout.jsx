import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16"> {/* Tambahkan margin top untuk mengimbangi navbar fixed */}
        <Outlet /> {/* Ini akan menampilkan Home, About, Gallery sesuai rute */}
      </main>
    </div>
  );
};

export default Layout;