import Hero from "../components/Hero";
import AboutAndSkills from "../components/AboutAndSkills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Awards from "../components/Awards";
import Hobbies from "../components/Hobbies";
import TravelVlogs from "../components/TravelVlogs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-bgLight min-h-screen text-textDark">
      <Hero />
      <AboutAndSkills />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Hobbies />
      <TravelVlogs />
      <Contact />
      <div className="h-10" />
    </main>
  );
}

