import "../styles/section.css";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">/about</h2>

      <p className="section-text">
        This page documents an ongoing exploration of software systems,
        security research, and technical reasoning.
        <br /><br />
        My work focuses on understanding how modern web applications are
        structured, how vulnerabilities emerge, and how systems behave
        under real-world constraints.
        <br /><br />
        Code is treated not merely as a tool, but as a layered system of
        decisions — shaped by architecture, limits, and human intent.
      </p>
    </section>
  );
};

export default About;
