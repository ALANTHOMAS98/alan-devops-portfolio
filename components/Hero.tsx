// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between py-16 max-w-7xl mx-auto px-6">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Alan Thomas
        </h1>
        <h2 className="text-2xl text-primary font-bold mb-4">
          DevOps & Cloud Engineer
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Building scalable, resilient infrastructure and automating everything.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact" className="px-6 py-2 rounded bg-primary text-white font-semibold hover:bg-blue-700 transition">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-2 rounded border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
            View My Work
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <Image
          src="/profile.jpg"
          alt="Alan Thomas"
          width={220}
          height={220}
          className="rounded-full shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}

