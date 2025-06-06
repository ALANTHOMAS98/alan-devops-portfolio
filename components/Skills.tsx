const skills = [
  {
    category: "Cloud Platforms",
    items: ["AWS (EKS, EC2, S3)", "Azure (AKS)"]
  },
  {
    category: "IaC & CI/CD",
    items: ["Terraform", "GitLab CI", "Jenkins", "Ansible", "Helm"]
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (EKS, AKS)", "Podman"]
  },
  {
    category: "Monitoring",
    items: ["Prometheus", "Grafana", "ELK Stack", "Nagios"]
  },
  {
    category: "Languages/Scripting",
    items: ["Python", "Bash", "Node.js"]
  },
  {
    category: "Others",
    items: [
      "HashiCorp Vault",
      "Fortify",
      "SonarQube",
      "Shibboleth",
      "Active Directory",
      "VMware Horizon",
      "GitLab",
      "CloudFormation",
      "Pulse Secure VPN"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Skills & Tools</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="bg-[#181c20] rounded-xl p-5 shadow-lg">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{group.category}</h3>
            <ul className="space-y-1 list-disc list-inside text-gray-200">
              {group.items.map((item) => (
                <li key={item} className="text-base">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
