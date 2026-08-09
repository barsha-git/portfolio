export default function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-card-head">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <ul className="project-features">
        {project.features.slice(0, featured ? 5 : 4).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="project-actions">
        <a className="link-secondary" href={project.link} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <button className="button button-tertiary" type="button">
          View Case Study
        </button>
      </div>
    </article>
  );
}
