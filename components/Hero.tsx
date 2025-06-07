// components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-bgLight pt-12"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 text-center">
        Alan Thomas
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 text-center">
        Building Scalable Cloud Systems | Terraform | Kubernetes | AWS
      </h2>
      <p className="max-w-2xl text-gray-700 text-center mb-6 px-4">
        Curious and driven DevOps enthusiast passionate about cloud, CI/CD, Terraform, Kubernetes, and AWS.
        Currently pursuing a Master&apos;s in Telecommunication Engineering &amp; Network Management at RTU, Latvia.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

