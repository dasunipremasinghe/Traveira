function CTA() {
  return (
    <section className="cta-section" id="contact">

      <div className="cta-pattern"></div>

      <div className="container cta-content">

        <div>
          <span className="section-label light-label">
            YOUR SRI LANKA JOURNEY
          </span>

          <h2>
            Ready to discover Sri Lanka?
          </h2>

          <p>
            Tell us how you want to travel and we'll help create
            an unforgettable Sri Lankan experience around you.
          </p>
        </div>

        <div className="cta-actions">

          <a href="mailto:hello@traveira.com" className="primary-btn">
            Plan Your Journey
          </a>

          <a href="tel:+94000000000" className="cta-phone">
            <span>☎</span>

            <div>
              <small>Talk to us</small>
              <strong>+94 XX XXX XXXX</strong>
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;