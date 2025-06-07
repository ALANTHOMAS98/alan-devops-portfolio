export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen pt-20 bg-bgLight"
    >
      <h1 className="text-5xl font-bold text-textDark mb-4 text-center">
        Alan Thomas
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
        Building Scalable Cloud Systems | Terraform | Kubernetes | AWS
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Curious and driven DevOps enthusiast passionate about cloud, CI/CD, Terraform, Kubernetes, and AWS. Currently pursuing a Master's in Telecommunication Engineering &amp; Network Management at RTU, Latvia.
      </p>
      <a
        href="/AlanThomas_CV.pdf"
        download
        className="px-6 py-3 bg-primary text-white rounded-xl shadow-soft hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}

