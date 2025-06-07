import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo or Profile Pic */}
        <div className="flex items-center space-x-2">
          {/* If you want profile pic as logo, uncomment below and put your image in /public/profile.jpg */}
          {/* <Image src="/profile.jpg" alt="Profile" width={40} height={40} className="rounded-full" /> */}
          <span className="text-xl font-bold text-blue-700">Alan</span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="#home" className="hover:text-blue-500 font-medium transition">Home</Link>
          <Link href="#about" className="hover:text-blue-500 font-medium transition">About</Link>
          <Link href="#experience" className="hover:text-blue-500 font-medium transition">Experience</Link>
          <Link href="#projects" className="hover:text-blue-500 font-medium transition">Projects</Link>
          <Link href="#education" className="hover:text-blue-500 font-medium transition">Education</Link>
          <Link href="#contact" className="hover:text-blue-500 font-medium transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

