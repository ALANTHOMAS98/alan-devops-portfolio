import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const [open, setOpen] = useState(true);

  return (
    <section id="experience" className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
        <FaBriefcase className="text-yellow-300" /> Work Experience
      </h2>
      <div className="border border-blue-800 rounded-xl bg-[#181c20]">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none"
        >
          <div>
            <span className="text-lg font-semibold text-blue-400">
              DevOps Engineer
            </span>
            <span className="ml-2 text-gray-400">
              @ Polus Solutions, Trivandrum, India
            </span>
            <span className="ml-4 text-sm text-blue-300">
              May 2021 – Aug 2023
            </span>
          </div>
          <span className="ml-2 text-blue-300">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div className="px-4 pb-4 text-gray-200 space-y-2">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Led DevOps transformation, reducing deployment time by 80% through automation and CI/CD pipelines.
              </li>
              <li>
                Deployed and managed Dockerized applications on Kubernetes (EKS/AKS), ensuring 99.9% uptime and scalable architecture.
              </li>
              <li>
                Designed and implemented cloud-based solutions using AWS (EKS, EC2, S3) and Azure Kubernetes Service (AKS) for high availability and resilience.
              </li>
              <li>
                Automated configuration management by engineering Ansible playbooks, streamlining system maintenance and reducing manual errors.
              </li>
              <li>
                Hardened system security by deploying Fortinet firewalls and configuring Linux/Windows security policies, mitigating cyber threats by 50%.
              </li>
              <li>
                Implemented ELK Stack and Nagios, enabling real-time log analysis and reducing incident response time by 50%.
              </li>
              <li>
                Collaborated with development teams to integrate Node.js, WebSocket, Nginx, optimizing application performance and scalability.
              </li>
              <li>
                Managed high-performance databases (MySQL, Oracle), optimizing queries for 50% faster execution and ensuring data integrity.
              </li>
              <li>
                Integrated Active Directory and Single Sign-On (SSO) using Shibboleth, improving authentication security and user experience.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
