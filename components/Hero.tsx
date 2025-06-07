// components/Hero.tsx

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-bgLight pt-32 px-6">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Alan Thomas</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          DevOps & Cloud Engineer
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Building scalable, resilient infrastructure and automating everything.
        </p>
        <div className="flex space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src="/profile.jpg"
          alt="Alan Thomas"
          className="rounded-full shadow-lg w-60 h-60 object-cover border-4 border-blue-200"
        />
      </div>
    </section>
  );
}

