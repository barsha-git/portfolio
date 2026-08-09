import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section-block projects-block">
      <div className="section-heading">
        <p className="section-label">Selected Work</p>
        <h2>A selection of systems and applications I've built.</h2>
      </div>
      <div className="projects-grid">
        <ProjectCard project={projects[0]} featured />
        <div className="side-projects">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
