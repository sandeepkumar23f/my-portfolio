'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full shadow-md z-50 bg-lime-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-blue-600">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-semibold">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/skills" className="text-gray-800 hover:text-blue-600">Skills</Link>
          <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-700 text-3xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-lime-200 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden px-8 pt-24 pb-6 space-y-6 text-lg font-semibold`}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">About</Link>
        <Link href="/skills" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Skills</Link>
        <Link href="/projects" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Projects</Link>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
