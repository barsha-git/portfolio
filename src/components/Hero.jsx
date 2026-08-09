import { useState, useEffect } from 'react';

const techStrip = ['Python', 'FastAPI', 'RAG', 'LangChain', 'PostgreSQL', 'Redis'];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">AI Engineer · Python Backend Developer</p>
          <h1>Hi, I'm Barsha Khonju.</h1>
          <p className="hero-text">
            I build RAG systems, intelligent developer tools, and production-oriented REST APIs using Python,
            FastAPI, LangChain, and modern retrieval technologies.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View My Projects
            </a>
            <a href="https://github.com/barsha-git" target="_blank" rel="noreferrer" className="button button-secondary">
              GitHub ↗
            </a>
          </div>
          <div className="tech-strip">
            {techStrip.map((tech, index) => (
              <span key={tech} className="tech-pill" style={{ animationDelay: `${index * 80}ms` }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <div className="visual-terminal">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <pre>
                <code>
{`$ git clone github.com/barsha-git/RepoIntel
$ python -m pipeline.ingest
> hybrid retrieval ready
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="visual-nodes">
            <span className="node node-1" />
            <span className="node node-2" />
            <span className="node node-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
