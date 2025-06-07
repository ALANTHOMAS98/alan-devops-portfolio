import { FaYoutube } from "react-icons/fa";

const YoutubeIcon = FaYoutube as React.ElementType;

const videos = [
  "https://youtu.be/wc2RgxWhIvI",
  "https://youtu.be/W0UqwYK_5XU",
];

export default function TravelVlogs() {
  return (
    <section id="travelvlogs" className="my-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-blue-300 gap-2">
        <YoutubeIcon className="text-red-500" /> Travel Vlogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((url, idx) => (
          <div key={url} className="rounded-lg overflow-hidden shadow border border-blue-800 bg-[#181c20]">
            <iframe
              width="100%"
              height="240"
              src={url.replace("youtu.be", "www.youtube.com/embed")}
              title={`Travel Vlog ${idx + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-60"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

