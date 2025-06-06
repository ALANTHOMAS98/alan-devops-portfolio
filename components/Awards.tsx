import { useState } from "react";
import { FaAward } from "react-icons/fa";

export default function Awards() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
        <FaAward className="text-yellow-400" /> Honours & Awards
      </h2>
      <div className="border border-blue-800 rounded-xl bg-[#181c20]">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none"
        >
          <span className="text-lg font-semibold text-blue-400">
            SPOT AWARD, September 2022 – Polus Solutions
          </span>
          <span className="ml-2 text-blue-300">{open ? "▲" : "▼"}</span>
        </button>
        {open && (
          <div className="px-4 pb-4 text-gray-200 space-y-2">
            <div>
              <strong>Date:</strong> 01/10/2023
            </div>
            <ul className="list-disc list-inside ml-4">
              <li>
                Recognized for outstanding performance and contribution as a DevOps Engineer. Awarded for my dedication to improving deployment processes and consistently delivering high-quality solutions in a timely manner.
              </li>
              <li>
                Acknowledged by management for my proactive approach to problem-solving and ability to collaborate effectively with cross-functional teams.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
