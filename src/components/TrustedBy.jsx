import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS untuk efek animasi

const TrustedBy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Durasi animasi 1 detik, berjalan sekali
  }, []);

  const companies = [
    { name: "Meta", logo: "meta.png" },
    { name: "Google", logo: "google.png" },
    { name: "Netflix", logo: "netflix.png" },
    { name: "P&G", logo: "png.png" }, // P&G menggunakan "png.png"
    { name: "PayPal", logo: "paypal.png" },
    { name: "Payoneer", logo: "payoneer.png" },
  ];

  return (
    <section className="text-center py-6">
      <p className="text-gray-500 text-lg" data-aos="fade-up">
        Trusted by:
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto"
            data-aos="zoom-in" // Efek animasi saat masuk ke viewport
          >
            {/* Logo Perusahaan */}
            <img
              src={`/logos/${company.logo}`}
              alt={company.name}
              className="w-20 h-16 object-contain"
            />
            {/* Nama Perusahaan */}
            <span className="text-lg font-bold mt-2 min-h-[24px]">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
