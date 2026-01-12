import "../styles/section.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">/projects</h2>

      <div className="catalog-list">

        <div className="catalog-item">
          <div className="catalog-row">
            <span className="catalog-label">NAME</span>
            <span>Cyber Portfolio</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">STACK</span>
            <span>React · TypeScript · Playwright</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">ROLE</span>
            <span>Design · Frontend · Testing</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">STATUS</span>
            <span>Active</span>
          </div>
        </div>

        <div className="catalog-item">
          <div className="catalog-row">
            <span className="catalog-label">NAME</span>
            <span>Recon Toolkit</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">STACK</span>
            <span>Bash · Python · OSINT</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">FOCUS</span>
            <span>Enumeration · Automation</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">STATUS</span>
            <span>Internal Use</span>
          </div>
        </div>

        <div className="catalog-item">
          <div className="catalog-row">
            <span className="catalog-label">NAME</span>
            <span>Security Notes</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">FORMAT</span>
            <span>Markdown · Knowledge Base</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">CONTENT</span>
            <span>Web · OWASP · Systems</span>
          </div>
          <div className="catalog-row">
            <span className="catalog-label">STATUS</span>
            <span>Living Document</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
