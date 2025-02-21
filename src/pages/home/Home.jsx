import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS untuk animasi

import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/herosection/HeroSection";
import TrustedBy from "../../components/TrustedBy";
import Footer from "../../components/footer/Footer";
import Testimoni from "../../components/testimoni/Testimoni";
import StepsSection from "../../components/stepsection/StepSection";
import CategoryCards from "../../components/category/CategoryCard";
import Hooks from "../../components/hooks/Hooks";
import Goals from "../../components/goals/Goals";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animasi 1 detik, hanya berjalan sekali
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div data-aos="fade-up">
          <HeroSection />
        </div>

        {/* Hooks (Carousel) */}
        <div className="p-10" data-aos="zoom-in">
          <Hooks />
        </div>

        {/* TrustedBy */}
        <div data-aos="fade-up">
          <TrustedBy />
        </div>

        {/* Kategori (Cards) */}
        <div data-aos="fade-right">
          <CategoryCards />
        </div>

        {/* Goals */}
        <div data-aos="fade-left">
          <Goals />
        </div>

        {/* Steps Section */}
        <div data-aos="zoom-in-up">
          <StepsSection />
        </div>

        {/* Testimoni */}
        <div data-aos="flip-up">
          <Testimoni />
        </div>
      </main>

      {/* Footer */}
      <div data-aos="fade-in">
        <Footer />
      </div>
    </>
  );
}

export default Home;
