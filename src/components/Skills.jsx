import { skillGroups } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="section-block skills-block">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Technical capabilities across backend, AI, retrieval, and infrastructure.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
