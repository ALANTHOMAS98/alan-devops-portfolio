// components/AboutAndSkills.tsx
export default function AboutAndSkills() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-[#f5f8fd] min-h-[60vh] flex items-center justify-center"
    >
      <div className="max-w-5xl w-full grid gap-8 md:grid-cols-2">
        {/* About Me Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-700 mb-2">
            I’m a curious and driven DevOps engineer with a passion for cloud technologies and automation.
            <br />
            I thrive on solving complex challenges, whether it’s building secure cloud environments or optimizing CI/CD pipelines. With hands-on experience in Terraform, Kubernetes, and AWS, I’m always excited to learn and improve systems that make a real impact.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills & Tools</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Cloud Platforms</h4>
              <ul className="text-gray-700 text-sm list-disc ml-4">
                <li>AWS (EKS, EC2, S3)</li>
                <li>Azure (AKS)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">IaC & CI/CD</h4>
              <ul className="text-gray-700 text-sm list-disc ml-4">
                <li>Terraform</li>
                <li>GitLab CI</li>
                <li>Jenkins</li>
                <li>Ansible</li>
                <li>Helm</li>
              </ul>
            </div>
            {/* Add more skill categories here */}
          </div>
        </div>
      </div>
    </section>
  );
}

