const Footer = () => {
  const buildTime = new Date().toISOString();

  return (
    <footer
      style={{
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "0.75rem",
        opacity: 0.5,
        padding: "60px 40px",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <span>BUILD v1.0.0</span>
      <span>{buildTime}</span>
    </footer>
  );
};

export default Footer;
