import { motion } from "framer-motion";
import "../styles/glitch.css";
import "../styles/hero.css";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="hero-inner">
        <motion.h1
          className="glitch"
          data-text="Kemal M.Z."
          animate={{
            textShadow: [
              "0 0 0 rgba(0,0,0,0)",
              "1px 0 0 rgba(255,255,255,0.3)",
              "0 0 0 rgba(0,0,0,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          Kemal M.Z.
        </motion.h1>

        <p className="subtitle">
          FRONTEND ENGINEER / CYBERSECURITY ENTHUSIAST
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
