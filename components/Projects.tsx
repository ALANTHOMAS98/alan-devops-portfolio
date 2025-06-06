import { useState } from "react";

const projects = [
  {
    title: "Infrastructure as Code (IaC) with Terraform and Continuous Deployment using ArgoCD",
    description: `Set up a GitOps workflow using ArgoCD to automate infrastructure deployment and application updates in a Kubernetes-based cloud environment. Automated provisioning and deployment using Terraform and ensured continuous delivery with ArgoCD.`,
    stack: [
      "Terraform",
      "ArgoCD",
      "Kubernetes (AWS EKS)",
      "Helm",
      "GitLab CI",
      "Prometheus & Grafana"
    ]
  },
  {
    title: "Serverless Web Application on AWS",
    description: `Developed a serverless To-Do app with AWS Lambda for backend and AWS S3 for frontend hosting. Explored serverless architecture, leveraging AWS services for scalability and minimal management.`,
    stack: [
      "AWS Lambda",
      "AWS API Gateway",
      "AWS DynamoDB",
      "AWS S3",
      "AWS CloudFormation",
      "AWS CloudWatch"
    ]
  },
  {
    title: "Automated CI/CD Pipeline for Microservices Application",
    description: `Built a microservices-based e-commerce app and automated the CI/CD pipeline for each service using GitLab CI. Containerized services with Docker and orchestrated deployments in AWS EKS using Kubernetes.`,
    stack: [
      "Docker",
      "Kubernetes (AWS EKS)",
      "GitLab CI",
      "Jenkins",
      "Terraform",
      "MySQL",
      "Redis"
    ]
  },
  {
    title: "Cloud Security Automation with HashiCorp Vault",
    description: `Explored managing secrets securely using HashiCorp Vault. Automated the deployment and configuration of Vault to secure and manage access to sensitive data in a cloud environment.`,
    stack: [
      "HashiCorp Vault",
      "AWS EC2, IAM",
      "Terraform",
      "Kubernetes",
      "Ansible"
    ]
  }
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Projects</h2>
      <div className="space-y-5">
        {projects.map((proj, idx) => (
          <div key={proj.title} className="border border-blue-800 rounded-xl bg-[#181c20]">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-blue-400">{proj.title}</span>
              <span className="ml-2 text-blue-300">{open === idx ? "▲" : "▼"}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-gray-200">
                <p className="mb-2">{proj.description}</p>
                <div>
                  <span className="text-blue-300 font-semibold">Tech Stack:</span>
                  <ul className="list-disc list-inside ml-4">
                    {proj.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
