'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest(".mobile-menu") && !target.closest("button")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed w-full shadow-md z-50 bg-lime-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-semibold">
          <Link href="/"><span className="text-gray-800 hover:text-blue-600">Home</span></Link>
          <Link href="/about"><span className="text-gray-800 hover:text-blue-600">About</span></Link>
          <Link href="/skills"><span className="text-gray-800 hover:text-blue-600">Skills</span></Link>
          <Link href="/projects"><span className="text-gray-800 hover:text-blue-600">Projects</span></Link>
          <Link href="/#contact"><span className="text-gray-800 hover:text-blue-600">Contact</span></Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="md:hidden text-blue-700 text-3xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-lime-200 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden px-8 pt-24 pb-6 space-y-6 text-lg font-semibold`}
        aria-hidden={!menuOpen}
      >
        <Link href="/" className="block text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" className="block text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/skills" className="block text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link href="/projects" className="block text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/#contact" className="block text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
