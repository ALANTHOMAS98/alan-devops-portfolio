import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import other components as needed...

export default function Home() {
  return (
    <main className="bg-bgLight min-h-screen text-textDark">
      <Navbar />
      <div className="pt-20">
        <Hero />
        {/* Other sections here, About, Projects, etc. */}
      </div>
    </main>
  );
}

