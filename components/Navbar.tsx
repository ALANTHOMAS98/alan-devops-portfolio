import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/profile.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-blue-600">AT</span>
        </Link>
        {/* Menu */}
        <div className="flex gap-8 text-base font-semibold text-gray-800">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

