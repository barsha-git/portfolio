export const projects = [
  {
    id: 'repointel',
    name: 'RepoIntel',
    category: 'AI Codebase Assistant',
    description:
      'AI-powered developer tool that lets users interact with GitHub repositories through natural language.',
    link: 'https://github.com/barsha-git/RepoIntel',
    features: [
      'Repository ingestion with GitHub cloning',
      'Language-aware chunking and AST metadata extraction',
      'Hybrid FAISS + BM25 retrieval with FlashRank reranking',
      'Redis-backed conversational memory and query rewriting',
      'Groq LLMs generating grounded repository answers',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'BM25', 'Redis', 'FlashRank'],
  },
  {
    id: 'taskflow-api',
    name: 'TaskFlow API',
    category: 'Production-Oriented Task Management REST API',
    description:
      'Backend REST API for task management with authentication, async database access, validation, migrations, and Dockerized development.',
    link: 'https://github.com/barsha-git/TaskFlowAPI',
    features: [
      'JWT authentication and OAuth2 password flow',
      'Async SQLAlchemy 2.0 with PostgreSQL',
      'Alembic migrations and container-ready tooling',
      'User-scoped tasks with pagination and status filtering',
      'Pydantic v2 validation and API-first design',
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'Alembic', 'JWT', 'Docker'],
  },
  {
    id: 'rag-doc-qa',
    name: 'RAG-Doc-QA',
    category: 'Local-First Document Question Answering System',
    description:
      'Local-first document Q&A application using RAG to retrieve relevant document context and generate grounded answers.',
    link: 'https://github.com/barsha-git/RAG-doc-QA',
    features: [
      'Incremental ChromaDB indexing with SHA-256 content hashing',
      'Duplicate prevention and semantic retrieval',
      'HuggingFace embeddings and page-level citations',
      'Document deletion, chat reset, and upload-to-chat workflow',
    ],
    tags: ['Python', 'Streamlit', 'LangChain LCEL', 'Groq', 'HuggingFace Embeddings', 'ChromaDB'],
  },
];
