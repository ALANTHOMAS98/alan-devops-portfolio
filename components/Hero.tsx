import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-bgLight pt-32 px-6">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Alan Thomas</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Building Scalable Cloud Systems | Terraform | Kubernetes | AWS
        </h2>
        <p className="text-lg text-gray-700">
          Curious and driven DevOps enthusiast passionate about cloud, CI/CD, Terraform, Kubernetes, and AWS. Currently pursuing a Master's in Telecommunication Engineering & Network Management at RTU, Latvia.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-5 py-2 rounded-xl bg-primary text-white font-bold shadow-soft hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
      <div className="mt-10 md:mt-0 flex-shrink-0 flex flex-col items-center">
        <img
          src="/profile.png"
          alt="Alan Thomas"
          className="rounded-full border-4 border-primary shadow-soft w-44 h-44 object-cover"
        />
      </div>
    </section>
  );
}

