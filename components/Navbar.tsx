import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-soft z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="#home" className="text-xl font-bold text-primary">
          AlanThomas
        </Link>
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-md text-gray-700 hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

