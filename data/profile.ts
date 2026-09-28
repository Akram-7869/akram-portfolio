export const profile = {
  name: 'Mohammed Akram Sulthan A',
  shortName: 'Akram Sulthan',
  role: 'Full Stack & AI Integration Developer',
  location: 'Bangalore, India',
  email: 'akramsulthan7869@gmail.com',
  phone: '+91 6379872633',
  whatsappNumber: '916379872633',
  resumeUrl: '/resume/Resume-Akram.pdf',
  availability: 'Open to Full-Stack, Backend & AI Roles',
  intro: 'Building scalable full-stack applications & intelligent AI integrations.',
  summary: 'Full Stack & AI Integration Developer specializing in modern frontend (React 19, Next.js) and robust backend architectures (Node.js, Express, PostgreSQL, Redis). Experienced in building enterprise SaaS platforms, high-throughput APIs, and AI applications using RAG & MCP.',
  learning: 'Full-Stack Architecture, Production APIs, Model Context Protocol (MCP), and AI Agents.',
}

export const socials = {
  github: 'https://github.com/Akram-7869',
  linkedin: 'https://www.linkedin.com/in/mohammed-akram-sulthan-8b1276228',
  leetcode: 'https://leetcode.com/u/Mohammed_7869',
  codechef: 'https://www.codechef.com/users/akramsulthan78',
  geeksforgeeks: 'https://www.geeksforgeeks.org/user/akramsulthan7869',
}

export const stats = [
  { value: '1.6+', label: 'Years Experience', note: 'Frontend & full-stack production' },
  { value: '40+', label: 'REST APIs Architected', note: 'Enterprise SaaS & integrations' },
  { value: '1,500+', label: 'DSA Problems Solved', note: 'LeetCode, GFG & CodeChef' },
  { value: '2×', label: 'Star of the Month', note: 'Awarded at Shloka Solutions' },
]

export interface ProjectItem {
  title: string
  subtitle: string
  category: 'Frontend & Web' | 'Full Stack & SaaS' | 'AI & Copilot'
  clientType: 'Production · Client' | 'Enterprise SaaS' | 'Personal · Open Source'
  description: string
  technologies: string[]
  highlights: string[]
  demoUrl?: string
  githubUrl?: string
  badge: string
  featured?: boolean
}

export const allProjects: ProjectItem[] = [
  // 1. Batavia Landing Page
  {
    title: 'Batavia Luxury Interior',
    subtitle: 'High-Conversion Luxury Brand Website',
    category: 'Frontend & Web',
    clientType: 'Production · Client',
    badge: 'Next.js + Framer Motion',
    featured: true,
    description: 'A premium interior design brand website engineered for visual storytelling, high engagement, and lead generation.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    highlights: [
      'Luxury brand hero section with fluid motion and conversion-focused CTAs.',
      'Multi-page collection browsing, project showcase galleries, and client testimonials.',
      'Interactive inquiry and contact flows with custom validation and responsive UX.',
    ],
  },
  // 2. Krrpa Web Platform
  {
    title: 'Krrpa Property & Living',
    subtitle: 'Interactive Retirement & Property Experience',
    category: 'Frontend & Web',
    clientType: 'Production · Client',
    badge: 'Next.js 15 + Redux Toolkit',
    featured: true,
    description: 'A consumer-facing Next.js 15 web platform featuring property discovery, voice-driven search, and retirement planning journeys.',
    technologies: ['Next.js 15', 'React 19', 'Redux Toolkit', 'Tailwind CSS', 'Voice API'],
    highlights: [
      'Interactive voice-search and voice-form experiences for seamless property exploration.',
      'Multi-step decision flow guiding users through tailored retirement calculations.',
      'Centralized Redux Toolkit slices for auth, saved properties, and modal states.',
    ],
  },
  // 3. Fores Global
  {
    title: 'Fores Global SaaS',
    subtitle: 'Enterprise Construction & Contractor Platform',
    category: 'Full Stack & SaaS',
    clientType: 'Enterprise SaaS',
    badge: 'Full-Stack TypeScript',
    featured: true,
    description: 'An enterprise contractor management SaaS platform with multi-entity workflow automation and 40+ RESTful APIs.',
    technologies: ['React 19', 'TypeScript', 'Redux Toolkit', 'Express.js', 'PostgreSQL', 'Redis', 'Knex ORM'],
    highlights: [
      '40+ RESTful APIs with RBAC, JWT authentication, and Redis token sessions.',
      'Full-stack TypeScript with modal-driven CRUD, data tables, and Redux Toolkit.',
      'Daily worker timesheet tracking and automated NMR billing generator.',
    ],
  },
  // 4. CareerFlow AI
  {
    title: 'CareerFlow AI',
    subtitle: 'Full-Stack AI Job Application Platform',
    category: 'AI & Copilot',
    clientType: 'Personal · Open Source',
    badge: 'React + Gemini API + RAG',
    featured: true,
    description: 'An AI-powered career assistant featuring automated resume parsing, ATS scoring, and evidence-based career copilot.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Gemini API', 'RAG', 'JWT Auth'],
    highlights: [
      'Full-stack AI platform powered by React, Express, PostgreSQL, and Google Gemini API.',
      'AI Career Copilot with RAG for evidence-based resume tailoring and interview prep.',
      'Secure JWT authentication, ATS score analysis, and instant guest demo access.',
    ],
    demoUrl: 'https://carrer-flow-frontend.vercel.app',
    githubUrl: 'https://github.com/Akram-7869/CarrerFlow',
  },
  // 5. Study-Notion
  {
    title: 'Study-Notion Platform',
    subtitle: 'Ed-Tech Content & Course Platform',
    category: 'Frontend & Web',
    clientType: 'Personal · Open Source',
    badge: 'MERN + Redux + Cloudinary',
    featured: true,
    description: 'A full-stack ed-tech platform for instructors to create rich courses and learners to consume and rate interactive content.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Redux', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    highlights: [
      'Interactive student and instructor dashboards with Redux state management.',
      'REST APIs for authentication, course authoring, and student enrollments.',
      'Cloudinary integration for optimized video streaming and media asset storage.',
    ],
    demoUrl: 'https://study-notion-platform-kappa.vercel.app',
    githubUrl: 'https://github.com/Akram-7869/Study-Notion-Platform',
  },
  // 6. Phoenix Marketplace
  {
    title: 'Phoenix Marketplace Platform',
    subtitle: 'Vendor-Side Marketplace & Invoicing Engine',
    category: 'Full Stack & SaaS',
    clientType: 'Production · Client',
    badge: 'PostgreSQL + React + Node',
    description: 'Vendor marketplace platform supporting order processing, automated invoice generation, and vendor dashboards.',
    technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'TypeScript'],
    highlights: [
      '15+ RESTful APIs for vendor order processing, invoices, and payouts.',
      'Role-based permissions, transaction workflows, and data validation.',
      'Responsive vendor administration dashboard built with React and Tailwind.',
    ],
  },
  // 7. Ramaiah Evolve
  {
    title: 'Ramaiah Evolve',
    subtitle: 'Startup Incubation & Evaluation Platform',
    category: 'Full Stack & SaaS',
    clientType: 'Production · Client',
    badge: 'PERN Stack + RBAC',
    description: 'Enterprise startup evaluation platform for administrators to assign applications to mentors for scoring and review.',
    technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'RBAC'],
    highlights: [
      'PERN-based evaluation pipeline for application submission and mentor scoring.',
      'Granular Role-Based Access Control (RBAC) across multi-stage review workflows.',
      'Evaluation dashboards with consolidated feedback aggregation.',
    ],
  },
  // 8. KSTDC Bus Booking System
  {
    title: 'KSTDC Bus Booking System',
    subtitle: 'Real-Time Inventory & Payment Integration',
    category: 'Full Stack & SaaS',
    clientType: 'Production · Client',
    badge: 'Salesforce + PhonePe Webhooks',
    description: 'Backend APIs integrating Salesforce booking services for real-time seat availability and ticket reservations.',
    technologies: ['Node.js', 'PostgreSQL', 'Salesforce API', 'PhonePe Gateway', 'Webhooks'],
    highlights: [
      'Real-time seat availability and booking synchronization with Salesforce.',
      'PhonePe payment gateway integration with idempotent webhooks.',
      'Resilient booking confirmation flow with transaction failover handling.',
    ],
  },
  // 9. HR Management System
  {
    title: 'HR Management System',
    subtitle: 'Enterprise Attendance & Payroll Dashboard',
    category: 'Full Stack & SaaS',
    clientType: 'Production · Client',
    badge: 'React.js + Role-Based UI',
    description: 'Administrative dashboard for attendance tracking, payroll computation, leave management, and company hierarchy.',
    technologies: ['React.js', 'Node.js', 'REST APIs', 'Role-Based UI'],
    highlights: [
      'Attendance, automated payroll calculation, and leave management modules.',
      'Role-based UI components with employee, manager, and HR permissions.',
      'Real-time dashboard summaries and organizational hierarchy mapping.',
    ],
  },
]

export const technicalSkills = {
  'Frontend Engineering': ['React 19', 'Next.js 15/16', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Responsive Design'],
  'AI & Intelligent Systems': ['RAG Architecture', 'Model Context Protocol (MCP)', 'AI Agents', 'LangGraph Basics', 'Prompt Engineering', 'Function / Tool Calling', 'Gemini API'],
  'Backend & APIs': ['Node.js', 'Express.js', 'RESTful APIs (40+ Endpoints)', 'Knex ORM', 'Prisma ORM', 'Redis', 'JWT & RBAC'],
  'Databases & Cloud': ['PostgreSQL', 'MongoDB', 'AWS (EC2, S3)', 'Docker', 'CI/CD Pipelines', 'Vercel Deployment'],
  'Tools & Architecture': ['Git & GitHub', 'Vite', 'Turborepo', 'NPM Workspaces', 'Component Architecture', 'Low-Level Design (LLD)'],
  'Computer Science': ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'C++', 'System Design Principles'],
}

export const achievements = [
  {
    title: '1,500+ Algorithmic Problems Solved',
    description: 'Demonstrated DSA problem-solving speed and rigor across LeetCode, GeeksforGeeks, and CodeChef.',
    highlight: '1,500+ Solved',
    link: socials.leetcode,
    linkLabel: 'LeetCode Profile',
    platform: 'LeetCode / GFG / CodeChef',
  },
  {
    title: '2nd Institute Rank on GeeksforGeeks',
    description: 'Ranked #2 across the institute by solving 600+ DSA problems with consistent accuracy.',
    highlight: 'Rank #2',
    link: socials.geeksforgeeks,
    linkLabel: 'GFG Profile',
    platform: 'GeeksforGeeks',
  },
  {
    title: 'CodeChef Country Rank 67,486',
    description: 'Achieved rank 67,486 in a weekly contest by solving 5 of 7 algorithmic challenges.',
    highlight: 'Rank 67,486',
    link: socials.codechef,
    linkLabel: 'CodeChef Profile',
    platform: 'CodeChef',
  },
  {
    title: 'Star of the Month (Twice)',
    description: 'Awarded twice at Shloka Solutions for outstanding engineering delivery and team contributions.',
    highlight: '2× Recipient',
    platform: 'Shloka Solutions',
  },
]

export const experience = {
  company: 'Shloka Solutions',
  title: 'Software Developer',
  location: 'Bangalore, India',
  period: 'Apr 2025 – Present',
  summary: 'Engineering frontend architectures, enterprise SaaS modules, and production APIs across high-scale client platforms.',
  highlights: [
    'Engineered high-conversion Next.js landing pages (Batavia) and interactive property experiences with voice search (Krrpa).',
    'Architected full-stack enterprise SaaS systems (Fores Global) with 40+ RESTful APIs, Knex ORM, and Redux Toolkit.',
    'Delivered marketplace, booking, evaluation, and HR management systems with secure RBAC and payment gateways.',
  ],
}

export const education = {
  institution: 'Adhiyamaan College of Engineering',
  location: 'Hosur, Tamil Nadu',
  degree: 'Bachelor of Computer Science and Engineering',
  period: 'Oct 2020 – May 2024',
  grade: 'CGPA: 8.0 / 10',
  description: 'Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, and Software Engineering.',
}

export const services = [
  {
    title: 'Modern Frontend Engineering',
    description: 'High-performance, responsive user interfaces built with React 19, Next.js App Router, Tailwind CSS, Framer Motion, and design systems.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend & Scalable REST APIs',
    description: 'Robust server-side architectures, 40+ RESTful endpoints, relational database modeling with Knex/PostgreSQL, Redis caching, and RBAC.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Knex ORM', 'Redis'],
  },
  {
    title: 'Full-Stack SaaS & Enterprise Systems',
    description: 'End-to-end multi-entity platforms with complex business workflows, Redux Toolkit state, data tables, billing systems, and cloud deployment.',
    tags: ['PERN Stack', 'TypeScript', 'Redux Toolkit', 'Database Design', 'CI/CD'],
  },
  {
    title: 'AI Engineering & Third-Party Integrations',
    description: 'Practical AI implementations using Gemini API, RAG copilots, Model Context Protocol (MCP), and payment/CRM integrations (PhonePe, Salesforce).',
    tags: ['Gemini API', 'RAG', 'MCP & Agents', 'PhonePe', 'Salesforce'],
  },
]
