import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link href="/">
            <span className="font-extrabold text-2xl text-blue-600 flex items-center gap-2 cursor-pointer">
              {/* Your logo: adjust src if needed */}
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
              AT
            </span>
          </Link>
        </div>
        {/* Menu Links */}
        <div className="flex gap-8 text-lg font-medium">
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

