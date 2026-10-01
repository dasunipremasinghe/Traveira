function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </article>
  );
}

export default ServiceCard;