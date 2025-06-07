// components/Navbar.tsx
import Link from "next/link";

const navItems = [
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
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo or Brand */}
        <a href="#home" className="text-2xl font-extrabold text-blue-700 tracking-tight">
          AlanThomas
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-gray-800 hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile nav toggle (simple hamburger) */}
        {/* You can add a mobile menu for more advanced usage */}
      </nav>
    </header>
  );
}

