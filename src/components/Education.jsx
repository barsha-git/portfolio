import { education } from '../data/education.js';

export default function Education() {
  return (
    <section id="education" className="section-block education-block">
      <div className="section-heading">
        <p className="section-label">Education</p>
        <h2>Academic background supporting engineering and systems work.</h2>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.title} className="education-card">
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            {item.school && <p>{item.school}</p>}
            <span className="education-years">{item.years}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
