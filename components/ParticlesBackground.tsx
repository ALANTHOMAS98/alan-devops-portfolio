import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#11161d" },
        fpsLimit: 60,
        particles: {
          color: { value: "#3b82f6" }, // Tailwind blue-500
          links: { enable: true, color: "#3b82f6", opacity: 0.4 },
          move: { enable: true, speed: 1 },
          number: { value: 65, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
        fullScreen: { enable: true, zIndex: -1 },
      }}
    />
  );
}
