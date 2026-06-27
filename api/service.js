// api/service.js — Updated: Development | AI Development | Cloud

// ─── TAB 1: DEVELOPMENT (shown first) ─────────────────────────────────────
export const DevServices = [
  {
    Id: 'd1',
    sTitle: 'Full-Stack Web Development',
    description: 'Building high-performance, scalable web apps with React, Next.js, Node.js, and MongoDB. End-to-end ownership from UI to REST API.',
    icon: 'flaticon-coding',
    badge: 'MERN · Next.js · TypeScript',
  },
  {
    Id: 'd2',
    sTitle: 'Backend & API Engineering',
    description: 'Designing robust REST and GraphQL APIs using Express, FastAPI, and PostgreSQL — optimised for speed, security, and 10k+ req/min throughput.',
    icon: 'flaticon-smartphone',
    badge: 'Node.js · FastAPI · PostgreSQL',
  },
  {
    Id: 'd3',
    sTitle: 'Mobile App Development',
    description: 'Cross-platform mobile apps for Android & iOS built with React + Capacitor, integrating Google/Facebook OAuth and Razorpay/Apple Pay payments.',
    icon: 'flaticon-app-development',
    badge: 'React · Capacitor · OAuth',
  },
];

// ─── TAB 2: AI DEVELOPMENT ────────────────────────────────────────────────
export const AIServices = [
  {
    Id: 'a1',
    sTitle: 'LLM Pipeline & RAG Systems',
    description: 'Building production-grade LangChain + RAG pipelines using OpenAI, Groq AI, and ChromaDB — achieving 87%+ retrieval accuracy and 60% less manual processing.',
    icon: 'flaticon-vector',
    badge: 'LangChain · OpenAI · Groq AI',
  },
  {
    Id: 'a2',
    sTitle: 'ML Model Engineering',
    description: 'Training, evaluating, and deploying ML models (XGBoost, Scikit-learn) for real-world problems like phishing detection — 94% accuracy on 50k+ URL datasets.',
    icon: 'flaticon-palette',
    badge: 'Python · XGBoost · FastAPI',
  },
  {
    Id: 'a3',
    sTitle: 'AI Automation & Integration',
    description: 'Embedding AI capabilities into existing platforms via microservices — automated Q&A, intelligent content pipelines, and LLM-powered decision systems.',
    icon: 'flaticon-add',
    badge: 'OpenAI API · LangGraph · Gemini',
  },
];

// ─── TAB 3: CLOUD DEVELOPMENT & HOSTING ──────────────────────────────────
export const CloudServices = [
  {
    Id: 'c1',
    sTitle: 'Cloud Infrastructure (AWS)',
    description: 'Architecting and deploying scalable cloud solutions on AWS EC2, S3, Lambda, and RDS — achieving 99.8% uptime with CI/CD pipelines and auto-scaling groups.',
    icon: 'flaticon-promotion',
    badge: 'AWS EC2 · S3 · Lambda · RDS',
  },
  {
    Id: 'c2',
    sTitle: 'Docker & Container Deployment',
    description: 'Containerising full-stack applications with Docker and orchestrating deployments via Docker Compose — ensuring consistent, portable, production-ready environments.',
    icon: 'flaticon-email-marketing',
    badge: 'Docker · Compose · Nginx',
  },
  {
    Id: 'c3',
    sTitle: 'CI/CD & DevOps Pipelines',
    description: 'Setting up automated build, test, and deploy pipelines using GitHub Actions and AWS CodePipeline — shipping features faster with zero-downtime deployments.',
    icon: 'flaticon-social-media',
    badge: 'GitHub Actions · AWS · DevOps',
  },
];

// Legacy default export (kept for backward compatibility)
const Services = [...DevServices, ...AIServices, ...CloudServices];
export default Services;