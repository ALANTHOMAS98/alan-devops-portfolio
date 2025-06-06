import { useState } from "react";
import Image from "next/image";

const education = [
  {
    degree: "Masters in Telecommunication Technologies and Networks Management",
    school: "Riga Technical University (RTU)",
    location: "Riga, Latvia",
    duration: "Sep 2023 – Present",
    logo: "/rtu-logo.png",
    website: "https://www.rtu.lv/en",
    field: "Information and Communication Technologies (ICTs)",
    thesis: "BGP Hijacking and Route Leak Analysis",
    details: [
      "Specializing in Networking and Cybersecurity, with a focus on Internet Routing Security.",
      "Conducting research on BGP Hijacking and Route Leak Analysis, aiming to enhance internet infrastructure security.",
      "Exploring anomaly detection, threat mitigation, and protocol enhancements in Border Gateway Protocol (BGP).",
      "Conducted a university workshop on DevOps & Cloud for Beginners, providing hands-on training on Docker, Kubernetes, and AWS.",
      "Actively engaged in academic research, network security labs, and technical discussions, contributing to advancements in cybersecurity.",
    ]
  },
  {
    degree: "Bachelors of Technology in Electronics and Communication",
    school: "APJ Abdul Kalam Technological University (KTU)",
    location: "Trivandrum, India",
    duration: "Aug 2016 – Aug 2020",
    logo: "/ktulogo.png",
    details: [
      "NSS, IEEE, IEDC: Actively participated in extracurricular activities, fostering teamwork and community engagement.",
      "Collaborated as an active member, contributing to technical and social initiatives.",
      "Department Student Coordinator: Facilitated communication between students and faculty, and organized academic/co-curricular activities.",
      "Projects & Events: Led 'Navritri' (2020) — a national-level project competition, demonstrating leadership and event management.",
      "Key Takeaways: Developed expertise in team collaboration, leadership, effective communication, and problem-solving."
    ]
  }
];

export default function Education() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Education</h2>
      <div className="space-y-5">
        {education.map((ed, idx) => (
          <div key={ed.school} className="border border-blue-800 rounded-xl bg-[#181c20]">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 relative">
                  <Image
                    src={ed.logo}
                    alt={ed.school}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-semibold text-blue-400">{ed.degree}</span>
                  <div className="text-sm text-gray-400">{ed.school} &middot; {ed.location}</div>
                  <div className="text-sm text-blue-300">{ed.duration}</div>
                </div>
              </div>
              <span className="ml-2 text-blue-300">{open === idx ? "▲" : "▼"}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-gray-200 space-y-2">
                {ed.website && (
                  <div>
                    <a
                      href={ed.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      {ed.school} Website
                    </a>
                  </div>
                )}
                {ed.field && <div><strong>Field of study:</strong> {ed.field}</div>}
                {ed.thesis && <div><strong>Thesis:</strong> {ed.thesis}</div>}
                <ul className="list-disc list-inside ml-4">
                  {ed.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
