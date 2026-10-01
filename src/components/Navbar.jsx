import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="brand" onClick={handleNavClick}>
          <div className="brand-icon">➤</div>

          <div>
            <span className="brand-name">Traveira</span>
            <span className="brand-tagline">Explore. Experience. Remember.</span>
          </div>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={handleNavClick}>
            Home
          </a>

          <a href="#tours" onClick={handleNavClick}>
            Tours
          </a>

          <a href="#destinations" onClick={handleNavClick}>
            Destinations
          </a>

          <a href="#experiences" onClick={handleNavClick}>
            Experiences
          </a>

          <a href="#about" onClick={handleNavClick}>
            About
          </a>

          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="primary-btn navbar-cta">
          Plan Your Trip
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;