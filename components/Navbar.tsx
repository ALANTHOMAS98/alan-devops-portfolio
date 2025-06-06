import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-soft z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        <div className="font-bold text-2xl text-primary">AT</div>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-md font-medium text-gray-800 hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

