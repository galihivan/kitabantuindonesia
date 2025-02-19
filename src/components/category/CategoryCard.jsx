import { useState, useEffect } from "react";
import { categories } from "../data/categories";

const CategoryCards = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Deteksi layar kecil

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Jika lebar < 768px, anggap sebagai mobile
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Jika di desktop, selalu tampilkan semua kategori
  const visibleCategories = isMobile ? (showAll ? categories : categories.slice(0, 4)) : categories;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-6xl w-full overflow-x-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center justify-center w-full aspect-square border rounded-lg shadow-md cursor-pointer transition-all duration-300
                ${selected === category.id ? "bg-green-100" : "bg-white"}`}
              onClick={() => setSelected(category.id)}
            >
              <span className="text-2xl">{category.icon}</span>
              <p className="text-sm font-semibold mt-2 text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol View More & Minimize hanya muncul di mobile */}
      {isMobile && categories.length > 4 && (
        <button
          className="mt-4 px-4 py-2 text-white bg-customBlue rounded-lg shadow hover:bg-blue-600 transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Minimize" : "View More"}
        </button>
      )}
    </div>
  );
};

export default CategoryCards;
