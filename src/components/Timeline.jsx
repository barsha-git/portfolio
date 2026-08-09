export default function Timeline() {
  return (
    <section className="section-block timeline-block">
      <div className="section-heading">
        <p className="section-label">Engineering Journey</p>
        <h2>A focused path through backend and AI engineering.</h2>
      </div>
      <div className="timeline-shell">
        <div className="timeline-item">
          <span className="timeline-year">2020</span>
          <div className="timeline-content">
            <p>Begin Bachelor of Computer Engineering.</p>
            <p className="timeline-meta">Python · FastAPI · PostgreSQL</p>
            <p className="timeline-meta">LangChain · RAG · LLMs</p>
            <p className="timeline-meta">FAISS · BM25 · Hybrid Retrieval</p>
          </div>
        </div>
        <div className="timeline-connector" />
        <div className="timeline-item">
          <span className="timeline-year">2026</span>
          <div className="timeline-content">
            <p>AI Engineering + Backend Development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
