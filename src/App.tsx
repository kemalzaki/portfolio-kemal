import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import MatrixRain from "./components/MatrixRain";

const App = () => {
  return (
    <>
      <MatrixRain />
      <div className="grid-overlay" />
      <Particles />
      {/* rest */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
