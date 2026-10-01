import heroVideo from "../assets/videos/HeroVideo.mp4";

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <span className="hero-eyebrow">
          Welcome to Sri Lanka
        </span>

        <h1>
          Discover the
          <span> Wonder of Sri Lanka.</span>
        </h1>

        <p>
          From ancient kingdoms and misty mountains to golden beaches
          and extraordinary wildlife, experience Sri Lanka through journeys
          thoughtfully designed by Traveira.
        </p>

        <div className="hero-buttons">
          <a href="#tours" className="primary-btn">
            Explore Our Tours →
          </a>

          <a href="#destinations" className="secondary-btn">
            Discover Sri Lanka
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;