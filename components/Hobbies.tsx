import { FaPlane, FaPeopleCarry, FaVideo, FaCode } from "react-icons/fa";

const hobbies = [
  { icon: <FaPlane className="text-blue-400" />, label: "Travelling" },
  { icon: <FaPeopleCarry className="text-blue-400" />, label: "Community Engagement" },
  { icon: <FaVideo className="text-blue-400" />, label: "Video Blogging" },
  { icon: <FaCode className="text-blue-400" />, label: "Updating with New Technologies" },
];

export default function Hobbies() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Hobbies & Interests</h2>
      <div className="flex flex-wrap gap-6">
        {hobbies.map((h) => (
          <div key={h.label} className="flex flex-col items-center p-5 rounded-xl bg-[#181c20] border border-blue-800 shadow-lg min-w-[120px]">
            <div className="text-4xl mb-2">{h.icon}</div>
            <span className="text-lg font-semibold">{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
