import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <span className="logo">KEMAL.EXE</span>

      <ul>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
