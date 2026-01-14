import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/glitch.css";
import "../styles/hero.css";

const Hero = () => {
  const glitchText = (text) => {
    const chars = text.split("");
    const index = Math.floor(Math.random() * chars.length);
    chars[index] = ["#", "@", "%", "Λ", "3"][Math.floor(Math.random() * 5)];
    return chars.join("");
  };

  const [glitch, setGlitch] = useState(false);

  const [displayText, setDisplayText] = useState("Kemal M.Z.");

  useEffect(() => {
    const glitchInterval = setInterval(() => { 
      setDisplayText(glitchText("Kemal M.Z."));
      setGlitch(true);

      setTimeout(() => {
        setDisplayText("Kemal M.Z.");
        setGlitch(false);
      }, 220);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);


  return (
    <motion.section
      className="hero"
    >
      <div className="hero-inner">
        <motion.h1
          className={`glitch ${glitch ? "glitch-active" : ""}`}
          data-text={displayText}
        >
          {displayText}
        </motion.h1>


        <p className="subtitle">
          FRONTEND ENGINEER / CYBERSECURITY ENTHUSIAST
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
