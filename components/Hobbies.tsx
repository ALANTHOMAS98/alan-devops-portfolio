import { FaPlane, FaPeopleCarry, FaVideo, FaCode } from "react-icons/fa";

const hobbies = [
  { icon: FaPlane, label: "Travelling" },
  { icon: FaPeopleCarry, label: "Community Engagement" },
  { icon: FaVideo, label: "Video Blogging" },
  { icon: FaCode, label: "Updating with New Technologies" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
        {/* Example: you can add an icon here if you want */}
        Hobbies & Interests
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon as React.ElementType;
          return (
            <div
              key={hobby.label}
              className="flex flex-col items-center justify-center rounded-xl bg-[#181c20] border border-blue-800 py-6 shadow"
            >
              <Icon className="text-blue-400 text-4xl mb-2" />
              <span className="text-base font-medium text-gray-200">{hobby.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

