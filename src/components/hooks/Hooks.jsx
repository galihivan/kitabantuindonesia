import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS animasi

const images = [
  "images/ailbhe-flynn-jkZs3Oi9pq0-unsplash.jpg",
  "images/copy-writer.jpg",
  "images/kelly-sikkema-Lo6OIm82gTs-unsplash.jpg",
  "images/kelly-sikkema-PdJTxF9h23Y-unsplash.jpg",
  "images/proramer.jpg"
];

const Hooks = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-blue-200 text-black flex flex-col md:flex-row items-center justify-center">
      {/* Bagian Kiri */}
      <div 
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-6 md:p-12 text-center md:text-left"
        data-aos="fade-right"
      >
        <h1 className="text-3xl md:text-5xl mb-4">Dapatkan Yang Anda Perlukan</h1>
        <p className="text-base md:text-lg">
          Dapatkan talenta terbaik dan peluang kerja potensial yang sesuai dengan kebutuhanmu.
        </p>
        <a 
          href="/register" 
          className="bg-blue-500 hover:bg-red-600 transition-all duration-500 text-white font-semibold px-4 md:px-6 py-2 rounded-xl mt-6"
        >
          Daftar Sekarang
        </a>
      </div>

      {/* Bagian Carousel */}
      <div 
        className="w-full md:w-1/2 flex items-center justify-center"
        data-aos="fade-left"
      >
        <div className="relative w-full max-w-lg h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Carousel ${index}`} 
              className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out
                ${index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            />
          ))}
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Hooks;
