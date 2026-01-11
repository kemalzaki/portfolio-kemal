import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" data-testid="hero">
      <h1 className="glitch" data-text="KEMAL">
        KEMAL
      </h1>
      <p className="subtitle">React • Cybersecurity • Systems</p>
      <span className="scanline" />
    </section>
  );
};

export default Hero;
