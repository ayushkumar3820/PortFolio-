// src/api/project.js

const Projects = [
  {
    Id: '2',
    // 🏠 Weboum Property Dashboard (Move to first as requested)
    pImg: 'https://www.researchgate.net/publication/382324214/figure/fig1/AS%3A11431281260799758%401721230439732/Screenshot-of-Google-Analytics-live-analytics-dashboard-displaying-Moodle-site-data.png',
    ps1img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    psub1img1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    psub1img2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    title: 'Weboum Property Dashboard',
    subTitle: 'PHP · MySQL · Real Estate Analytics',
    description: 'Architected and built a full-stack real estate platform featuring a comprehensive admin dashboard, optimized MySQL database queries, and server-side rendering for optimal performance and search engine visibility.',
    projectType: 'Full Stack Web Application',
    duration: '3 Months',
    completion: '2025',
    techStack: 'Next.js · React · Node.js · MySQL',
    strategies: 'Designed a relational database schema with 15+ optimized tables to manage over 10,000 property records seamlessly. Integrated automated WebP image compression pipelines to minimize page load times.',
    results: 'Achieved a 55% reduction in overall page load time, decreased user bounce rate by 30%, and improved organic SEO traffic and rankings by 40%.'
  },
  {
    Id: '1',
    // 🧠 AI-Powered Phishing Detection System
    pImg: 'https://cdn.dribbble.com/userupload/41505620/file/original-f1f399906292094b34a45d0828930d9e.png?resize=1200x&vertical=center',
    ps1img: 'https://media.geeksforgeeks.org/wp-content/uploads/20231214203814/Screenshot-%289%29.png',
    psub1img1: 'https://i.ytimg.com/vi/7BTsepZ9xp8/hq720.jpg',
    psub1img2: 'https://images.unsplash.com/photo-1581092334424-2b6b3a1c3c86?auto=format&fit=crop&w=1200&q=80',
    title: 'AI-Powered Phishing Detection System',
    subTitle: 'Python · ML · FastAPI · Cybersecurity',
    description: 'Designed and launched a production ML-based phishing detection system using random forests and gradient boosting algorithms, processing real-time analysis through a high-performance API.',
    projectType: 'AI & Cybersecurity Microservice',
    duration: '4 Months',
    completion: '2025',
    techStack: 'Python · FastAPI · XGBoost · Docker',
    strategies: 'Trained models on a dataset of 50,000+ URLs. Engineered 25+ domain features including SSL validity, domain age, and WHOIS records. Containerized using Docker for deployment on cloud virtual instances.',
    results: 'Delivered 94% detection accuracy and 92% precision. Scaled processing to support 500+ requests/hour with sub-200ms latency on production environments.'
  },
  {
    Id: '3',
    // 🌐 Weboum Technology Website
    pImg: 'https://cdn.prod.website-files.com/5f16d69f1760cdba99c3ce6e/67505cb9bafeda0debf65be9_AD_4nXdbnTZ0-5fiQg5h8_8UwfUULYs_ppK6vvu4SU0Y4mv-0oQEqNWsbb8VFwQ0P-KLtDXZ7jXLnC_1n_xz-H6i2hoBhrDkViQrF00jZBGPHvJlq7huP8Xf9nhDmWCKUHib_5S2lJ0X.png',
    ps1img: 'https://images.unsplash.com/photo-1502880190213-14c2f3e1f27e?auto=format&fit=crop&w=1200&q=80',
    psub1img1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    psub1img2: 'https://images.unsplash.com/photo-1504691342899-9c8c1b09600d?auto=format&fit=crop&w=1200&q=80',
    title: 'Weboum Technology Website',
    subTitle: 'Next.js · SEO · Corporate UI/UX',
    description: 'Designed and developed the official corporate website for Weboum Technology, focusing on modern aesthetics, responsiveness, page optimization, and high-performance UI/UX components.',
    projectType: 'Corporate Website',
    duration: '2 Months',
    completion: '2025',
    techStack: 'Next.js · React.js · Tailwind CSS · Vercel',
    strategies: 'Developed custom responsive layouts with modern CSS animations and glassmorphism. Optimized image assets and implemented static site generation (SSG) for instant loading.',
    results: 'Achieved 98+ PageSpeed performance score, boosted organic recruiter search appearances, and provided a sleek showcase of company capabilities.'
  },
  {
    Id: '4',
    // 🤖 AI SaaS Platform
    pImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    ps1img: 'https://images.unsplash.com/photo-1581092334424-2b6b3a1c3c86?auto=format&fit=crop&w=1200&q=80',
    psub1img1: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80',
    psub1img2: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1200&q=80',
    title: 'AI SaaS Platform',
    subTitle: 'Next.js · TypeScript · LLM · FastAPI',
    description: 'Engineered an AI-powered software-as-a-service application integrating large language models (LLMs) to perform automated analysis, summarization, and data categorization.',
    projectType: 'AI SaaS Application',
    duration: '3 Months',
    completion: '2025',
    techStack: 'Next.js · LangChain · OpenAI API · FastAPI',
    strategies: 'Built Retrieval-Augmented Generation (RAG) pipelines using vector databases (ChromaDB) and OpenAI embeddings. Implemented custom prompt engineering templates and conversational memory.',
    results: 'Reduced manual document review time by 60%, achieved 87% retrieval accuracy, and provided users with highly contextual answers.'
  },
  {
    Id: '5',
    // 📊 Task Management Analytics Dashboard
    pImg: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
    ps1img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    psub1img1: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    psub1img2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    title: 'Task Management Analytics Dashboard',
    subTitle: 'MERN · Charts.js · Data Insights',
    description: 'Developed a collaborative MERN stack task management application featuring real-time analytics, user role-based access control, and rich visual data dashboards.',
    projectType: 'Full Stack Analytics App',
    duration: '3 Months',
    completion: '2024',
    techStack: 'MongoDB · Express.js · React · Node.js',
    strategies: 'Designed complex MongoDB aggregation pipelines for dashboard metrics. Built role-based access control (RBAC) with JWT and optimized database query execution plans.',
    results: 'Improved query response speed by 35% with Redis caching, secured data flow across 5 distinct user roles, and supported over 100 daily active users.'
  },
];

export default Projects;
