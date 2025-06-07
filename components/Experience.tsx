import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const Icon = FaBriefcase as React.ElementType;

export default function Experience() {
  const [open, setOpen] = useState(true); // expanded by default, set to false if you want it closed initially

  return (
    <section id="experience" className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
        <Icon className="text-yellow-300" /> Work Experience
      </h2>
      <div className="border border-blue-800 rounded-xl bg-[#181c20] shadow-xl">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none hover:bg-[#20242b] transition"
        >
          <span className="text-lg font-semibold text-blue-400">
            Polus Solutions, Trivandrum, India — DevOps Engineer
            <span className="block text-sm font-normal text-blue-200">
              May 2021 – Aug 2023
            </span>
          </span>
          <span className="ml-2 text-blue-300 text-xl">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div className="px-4 pb-4 pt-2 text-gray-200 space-y-2">
            <ul className="list-disc list-inside ml-4 text-base space-y-1">
              <li>
                <b>Led DevOps transformation</b>, reducing deployment time by 80% through automation and CI/CD pipelines.
              </li>
              <li>
                <b>Deployed and managed Dockerized applications</b> on Kubernetes (EKS/AKS), ensuring 99.9% uptime and scalable architecture.
              </li>
              <li>
                <b>Designed and implemented cloud-based solutions</b> using AWS (EKS, EC2, S3) and Azure Kubernetes Service (AKS) for high availability and resilience.
              </li>
              <li>
                <b>Automated configuration management</b> by engineering Ansible playbooks, streamlining system maintenance and reducing manual errors.
              </li>
              <li>
                <b>Hardened system security</b> by deploying Fortinet firewalls and configuring Linux/Windows security policies, mitigating cyber threats by 50%.
              </li>
              <li>
                <b>Implemented ELK Stack and Nagios</b>, enabling real-time log analysis and reducing incident response time by 50%.
              </li>
              <li>
                <b>Collaborated with development teams</b> to integrate Node.js, WebSocket, Nginx—optimizing application performance and scalability.
              </li>
              <li>
                <b>Managed high-performance databases</b> (MySQL, Oracle), optimizing queries for 50% faster execution and ensuring data integrity.
              </li>
              <li>
                <b>Integrated Active Directory and Single Sign-On (SSO)</b> using Shibboleth, improving authentication security and user experience.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

