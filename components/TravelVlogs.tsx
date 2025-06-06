import { FaYoutube } from "react-icons/fa";

const videos = [
  "https://www.youtube.com/embed/wc2RgxWhIvI",
  "https://www.youtube.com/embed/W0UqwYK_5XU",
  "https://www.youtube.com/embed/M_0YjHgVyUk",
  "https://www.youtube.com/embed/0xlXUCka4ks"
];

export default function TravelVlogs() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-300 gap-2">
        <FaYoutube className="text-red-500" /> Travel Vlogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((url, idx) => (
          <div key={url} className="rounded-xl overflow-hidden shadow-lg border border-blue-800 bg-[#181c20]">
            <iframe
              src={url}
              title={`Travel Vlog ${idx + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://www.youtube.com/@Latvian_Achayan"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg font-bold text-white shadow hover:bg-blue-800 transition"
        >
          <FaYoutube className="text-red-500" />
          Visit my YouTube Travel Blog
        </a>
      </div>
    </section>
  );
}
