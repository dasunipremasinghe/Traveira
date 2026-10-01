function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <div className="brand footer-logo">
            <div className="brand-icon">➤</div>

            <div>
              <span className="brand-name">Traveira</span>
            </div>
          </div>

          <p>
            Creating meaningful journeys across Sri Lanka through
            thoughtful travel planning, local knowledge and unforgettable
            experiences.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="TikTok">♪</a>
          </div>

        </div>

        <div className="footer-column">

          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#tours">Tours</a>
          <a href="#destinations">Destinations</a>
          <a href="#experiences">Experiences</a>

        </div>

        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About Traveira</a>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Plan Your Trip</a>

        </div>

        <div className="footer-column">

          <h4>Contact</h4>

          <p>Sri Lanka</p>

          <a href="mailto:hello@traveira.com">
            hello@traveira.com
          </a>

          <a href="tel:+94000000000">
            +94 XX XXX XXXX
          </a>

        </div>

      </div>

      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Traveira. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;