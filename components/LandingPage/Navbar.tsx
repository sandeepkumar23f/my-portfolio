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
    <nav className="fixed w-full shadow-md z-50 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl sm:text-4xl font-bold text-blue-400">
          Sandeep Yadav
        </Link>

        <div className="hidden md:flex space-x-12 text-xl font-semibold">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="md:hidden text-blue-400 text-4xl focus:outline-none"
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
        className={`mobile-menu fixed top-0 right-0 w-72 h-full bg-slate-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden px-10 pt-28 pb-10 space-y-8 text-xl font-semibold backdrop-blur`}
        aria-hidden={!menuOpen}
      >
        <Link href="/" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/skills" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link href="/projects" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link href="/#contact" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
