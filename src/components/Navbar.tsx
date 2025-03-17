"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-5 px-10 flex justify-between items-center z-50 shadow-lg">
      {/* ✅ Full Name Displayed in Navbar */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white">Isha Joshi</h1>

      {/* ✅ Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium">
        {["Home", "About", "Skills", "Projects", "Resume", "Blog", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* ✅ Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
        ☰
      </button>

      {/* ✅ Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 p-6 space-y-5 text-center md:hidden">
          {["Home", "About", "Services", "Portfolio", "Resume", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg hover:text-red-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
