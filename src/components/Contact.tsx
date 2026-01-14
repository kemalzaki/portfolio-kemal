import "../styles/section.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">/contact</h2>

      <div className="spec">
        <div className="spec-row">
          <span className="spec-label">EMAIL</span>
          <span>kemalmzaki@gmail.com</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">GITHUB</span>
          <span>github.com/kemalzaki</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">LOCATION</span>
          <span>ID · Bandung</span>
        </div>

        <div className="spec-row">
          <span className="spec-label">STATUS</span>
          <span>Open for collaboration</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
