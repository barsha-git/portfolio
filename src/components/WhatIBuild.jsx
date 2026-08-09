const buildItems = [
  {
    title: 'AI Applications',
    description: 'RAG systems, LLM applications, document intelligence, and AI-powered developer tools.',
    tags: ['RAG', 'LangChain', 'LLMs', 'Embeddings', 'Prompt Engineering'],
  },
  {
    title: 'Backend Systems',
    description: 'Reliable REST APIs, authentication systems, async services, and database-backed applications.',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
  },
  {
    title: 'Retrieval & Search',
    description: 'Search and retrieval pipelines combining semantic and keyword-based approaches.',
    tags: ['FAISS', 'BM25', 'Hybrid Retrieval', 'Vector Search', 'FlashRank'],
  },
];

export default function WhatIBuild() {
  return (
    <section className="section-block build-block">
      <div className="section-heading">
        <p className="section-label">What I Build</p>
        <h2>Systems and APIs built for practical AI engineering.</h2>
      </div>
      <div className="build-grid">
        {buildItems.map((item) => (
          <article key={item.title} className="build-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
