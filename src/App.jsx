import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import DestinationCard from "./components/DestinationCard";
import ServiceCard from "./components/ServiceCard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import culturalJourneyImg from "./assets/images/destinations/Sri Lankan Cultural Journey.png";
import countryEscapeImg from "./assets/images/destinations/Country Escape.png";
import GalleImg from "./assets/images/destinations/Galle.png";
import sigiriyaImg from "./assets/images/destinations/sigiriya.jpg";
import EllaImg from "./assets/images/destinations/Ella.png";
import beachAdventureImg from "./assets/images/destinations/beachAdventureImg.jpg";
import YalaImg from "./assets/images/destinations/Yala.jpg";
import TravelSriLankaImg from "./assets/images/destinations/Travel Sri Lanka.jpg";

const tours = [
  {
    id: 1,
    title: "Sri Lanka Cultural Journey",
    location: "Sigiriya • Kandy • Dambulla",
    duration: "7 Days / 6 Nights",
    type: "Culture",
    description:
      "Discover ancient kingdoms, sacred temples and the remarkable cultural heritage of Sri Lanka.",
    image:
      culturalJourneyImg,
  },

  {
    id: 2,
    title: "Hill Country Escape",
    location: "Kandy • Nuwara Eliya • Ella",
    duration: "6 Days / 5 Nights",
    type: "Nature",
    description:
      "Journey through tea-covered hills, beautiful waterfalls and Sri Lanka's breathtaking highlands.",
    image:
      countryEscapeImg,
  },

  {
    id: 3,
    title: "Wildlife & Beach Adventure",
    location: "Yala • Mirissa • Galle",
    duration: "8 Days / 7 Nights",
    type: "Adventure",
    description:
      "Combine wildlife encounters, tropical beaches and the charming southern coast of Sri Lanka.",
    image:
      beachAdventureImg,
  },
];

const services = [
  {
    id: 1,
    icon: "⌖",
    title: "Local Expertise",
    description:
      "Experience Sri Lanka with carefully selected destinations and experiences backed by local knowledge.",
  },

  {
    id: 2,
    icon: "✦",
    title: "Tailored Journeys",
    description:
      "We design flexible itineraries around your interests, travel style, schedule and expectations.",
  },

  {
    id: 3,
    icon: "♡",
    title: "Authentic Experiences",
    description:
      "Go beyond sightseeing and discover the people, traditions, landscapes and stories of Sri Lanka.",
  },

  {
    id: 4,
    icon: "✓",
    title: "Travel With Confidence",
    description:
      "From planning to your journey itself, Traveira is here to provide reliable support throughout your trip.",
  },
];

const destinations = [
  {
    name: "Sigiriya",
    text: "Ancient heritage",
    image:
      sigiriyaImg,
  },

  {
    name: "Ella",
    text: "Mountains & nature",
    image:
      EllaImg,
  },

  {
    name: "Galle",
    text: "Heritage & coast",
    image:
      GalleImg,
  },

  {
    name: "Yala",
    text: "Wildlife adventures",
    image:
      YalaImg,
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <SearchBar />

        {/* TOURS */}

        <section className="section tours-section" id="tours">

          <div className="container">

            <div className="section-heading">

              <span className="section-label">
                EXPLORE SRI LANKA
              </span>

              <h2>
                Journeys designed to show you the best of Sri Lanka.
              </h2>

              <p>
                Explore thoughtfully created travel experiences combining
                culture, nature, wildlife, adventure and beautiful coastlines.
              </p>

            </div>

            <div className="destination-grid">

              {tours.map((tour) => (
                <DestinationCard
                  key={tour.id}
                  {...tour}
                />
              ))}

            </div>

          </div>

        </section>

        {/* DESTINATIONS */}

        <section
          className="section destination-showcase"
          id="destinations"
        >

          <div className="container">

            <div className="section-heading center">

              <span className="section-label">
                DISCOVER THE ISLAND
              </span>

              <h2>
                Places that make Sri Lanka unforgettable.
              </h2>

              <p>
                From UNESCO heritage sites to misty mountain towns
                and spectacular wildlife reserves.
              </p>

            </div>

            <div className="places-grid">

              {destinations.map((destination) => (

                <article
                  className="place-card"
                  key={destination.name}
                >

                  <img
                    src={destination.image}
                    alt={destination.name}
                  />

                  <div className="place-overlay"></div>

                  <div className="place-content">

                    <span>{destination.text}</span>

                    <h3>{destination.name}</h3>

                    <a href="#contact">
                      Explore →
                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section className="about-section" id="about">

          <div className="container about-grid">

            <div className="about-image">

              <img
                src={TravelSriLankaImg}
                alt="Sri Lanka travel"
              />

              <div className="experience-box">
                <strong>Explore</strong>
                <span>Sri Lanka differently</span>
              </div>

            </div>

            <div className="about-content">

              <span className="section-label">
                ABOUT TRAVEIRA
              </span>

              <h2>
                More than a holiday. A journey worth remembering.
              </h2>

              <p>
                At Traveira, we believe the best journeys are not simply
                about where you go, but how you experience each destination.
              </p>

              <p>
                Our Sri Lankan journeys are designed to connect travellers
                with the country's remarkable culture, landscapes, wildlife,
                coastlines and local experiences.
              </p>

              <div className="about-points">

                <div>
                  <span>✓</span>
                  Personalised itineraries
                </div>

                <div>
                  <span>✓</span>
                  Carefully selected experiences
                </div>

                <div>
                  <span>✓</span>
                  Local destination knowledge
                </div>

                <div>
                  <span>✓</span>
                  Support throughout your journey
                </div>

              </div>

              <a href="#contact" className="primary-btn">
                Start Planning
              </a>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section
          className="section services-section"
          id="experiences"
        >

          <div className="container">

            <div className="section-heading center">

              <span className="section-label">
                WHY TRAVEIRA
              </span>

              <h2>
                Travel Sri Lanka with confidence.
              </h2>

              <p>
                Thoughtful planning, authentic experiences and support
                designed around your journey.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                />
              ))}

            </div>

          </div>

        </section>

        {/* EXPERIENCE STRIP */}

        <section className="experience-section">

          <div className="container">

            <div className="experience-heading">

              <span>DISCOVER SRI LANKA YOUR WAY</span>

              <h2>
                One island. Endless experiences.
              </h2>

            </div>

            <div className="experience-list">

              <div>
                <strong>01</strong>
                <span>Culture</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Wildlife</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Beaches</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Nature</span>
              </div>

              <div>
                <strong>05</strong>
                <span>Adventure</span>
              </div>

            </div>

          </div>

        </section>

        <CTA />

      </main>

      <Footer />
    </>
  );
}

export default App;