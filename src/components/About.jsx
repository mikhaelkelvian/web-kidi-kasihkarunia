import React from "react";
import ProdukBeragamIcon from "../assets/produk-beragam.png";
import DesainIcon from "../assets/desain.png";
import DataAmanIcon from "../assets/data-aman.png";
import ProsesOrderIcon from "../assets/proses-order.png";
import HargaIcon from "../assets/harga.png";
import PengirimanIcon from "../assets/pengiriman.png";
import KonsultasiIcon from "../assets/konsultasi.png";
import KomunikasiIcon from "../assets/komunikasi.png";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-4" id="about">
      <h2 className="text-3xl font-bold text-center mb-8">Mengapa Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
        {/* Item 1 */}
        <div className="flex items-start gap-4">
          <img src={ProdukBeragamIcon} alt="Produk Beragam" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Produk Beragam</h3>
            <p>Kami bisa memenuhi hampir seluruh kebutuhan cetak Anda.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-4">
          <img src={DesainIcon} alt="Belum Punya Desain" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Belum Punya Desain?</h3>
            <p>Kami siap membantu.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-4">
          <img src={DataAmanIcon} alt="Data Aman" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Data Kami Simpan Dengan Aman</h3>
            <p>Jika ingin cetak ulang tak perlu khawatir data hilang.</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-start gap-4">
          <img src={ProsesOrderIcon} alt="Proses Order Mudah" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Proses Order Sangat Mudah</h3>
            <p>Pilih produk, konfirmasi, pembayaran, barang siap dikirim.</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex items-start gap-4">
          <img src={HargaIcon} alt="Harga Kompetitif" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Harga Kompetitif</h3>
            <p>Kami memberikan dan menyarankan harga yang optimal.</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex items-start gap-4">
          <img src={PengirimanIcon} alt="Pengiriman Seluruh Indonesia" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Pengiriman Seluruh Indonesia</h3>
            <p>Kami berpengalaman mengirim barang ke seluruh Indonesia.</p>
          </div>
        </div>

        {/* Item 7 */}
        <div className="flex items-start gap-4">
          <img src={KonsultasiIcon} alt="Konsultasi" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Konsultasikan Pada Kami</h3>
            <p>Kami siap memberikan saran untuk optimasi kebutuhan Anda.</p>
          </div>
        </div>

        {/* Item 8 */}
        <div className="flex items-start gap-4">
          <img src={KomunikasiIcon} alt="Media Komunikasi" className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">Berbagai Media Komunikasi</h3>
            <p>Melalui WA, e-mail, Telpon, kami siap berkomunikasi dengan Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
