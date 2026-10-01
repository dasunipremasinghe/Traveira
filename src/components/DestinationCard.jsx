function DestinationCard({
  image,
  title,
  location,
  description,
  duration,
  type,
}) {
  return (
    <article className="destination-card">

      <div className="destination-image">

        <img src={image} alt={title} />

        {type && (
          <span className="destination-badge">
            {type}
          </span>
        )}

      </div>

      <div className="destination-content">

        <span className="destination-location">
          {location}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="destination-footer">

          {duration && (
            <span className="duration">
              ◷ {duration}
            </span>
          )}

          <a href="#contact">
            View Journey →
          </a>

        </div>

      </div>

    </article>
  );
}

export default DestinationCard;