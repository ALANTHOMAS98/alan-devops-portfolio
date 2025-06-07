// components/Navbar.tsx
import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Vlogs", href: "#vlogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <a href="#home" className="text-2xl font-bold text-blue-700 tracking-wide">
          Alan<span className="text-blue-400">Thomas</span>
        </a>
        <ul className="hidden md:flex gap-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-medium text-gray-800 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          {/* If you want a hamburger mobile menu, add here */}
        </div>
      </div>
    </nav>
  );
}

