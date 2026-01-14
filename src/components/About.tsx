import { useRef } from "react";
import useInViewOnce from "../hooks/useInViewOnce";
import TerminalTyping from "../components/TerminalTyping";
import "../styles/section.css";


const About = () => {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);

  return (
    <section ref={ref} id="about" className="section">
      <h2>&lt;About /&gt;</h2>

        <TerminalTyping
        start={inView}
        command="cat about.txt"
        output={[
          "> initializing profile...",
          "> loading cognitive modules...",
          "",
          "This page documents an ongoing exploration of software systems, security research, and technical reasoning.",
          "",
          "My work focuses on understanding how modern web applications are structured, how vulnerabilities emerge, and how systems behave under real-world constraints.",
          "",
          "Code is treated not merely as a tool, but as a layered system of decisions — shaped by architecture, limits, and human intent.",
        ]}
      />
    </section>
  );
};

export default About;
