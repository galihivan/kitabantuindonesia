import { useState, useEffect } from 'react';
import logo from '../../assets/logo1.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full border-b border-gray-300 bg-white shadow-md">
      <nav
        className={`flex justify-between items-center p-4 fixed w-full top-0 left-0 z-10 transition-shadow ${
          scrolling ? 'shadow-md' : ''
        } bg-customBlue`}
      >
        <div className="flex justify-between items-center h-[60px] px-4 sm:px-[120px]">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 h-auto" />
          </Link>
        </div>
       
        {/* Menu untuk layar besar (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white">Bantu Pro</a>
          <a href="#" className="text-white">Explore</a>
          <a href="#" className="text-white">English</a>
          <Link to="/login">
            <button className="border px-3 py-1 rounded text-white border-white">Log In</button>
          </Link>
          <Link to="/register">
            <button className="bg-white text-customBlue px-3 py-1 rounded">Join</button>
          </Link>
        </div>

        {/* Tombol hamburger untuk mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
        
        {/* Menu dropdown untuk layar kecil */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-customBlue py-4 text-center`}>
          <a href="#" className="block text-white py-2">Bantu Pro</a>
          <a href="#" className="block text-white py-2">Explore</a>
          <a href="#" className="block text-white py-2">English</a>
          <Link to="/login">
            <button className="block mx-auto border px-3 py-1 rounded text-white border-white mt-2">Log In</button>
          </Link>
          <Link to="/register">
            <button className="block mx-auto bg-white text-customBlue px-3 py-1 rounded mt-2">Join</button>
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
