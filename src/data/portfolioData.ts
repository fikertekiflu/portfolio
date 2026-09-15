export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full-Stack / SaaS' | 'Fintech & Systems' | 'Frontend & Web';
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  badge?: string;
  metrics: string[];
  highlights: string[];
  architecture?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Fikerte Kiflu",
  preferredName: "Fikir",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building for scale.",
  subtagline: "Full-Stack Developer specializing in high-performance web applications, fintech workflows, and resilient SaaS architectures. Specialized in Next.js, React, TypeScript, Node.js, and Go.",
  status: "AVAILABLE FOR HIRE / 2026",
  email: "casssiopfiker@gmail.com",
  phone: "+251993817650",
  github: "https://github.com/fikertekiflu",
  avatarUrl: "https://avatars.githubusercontent.com/u/135379684?v=4",
  location: "Ethiopia / Remote Worldwide",
  bio: "Full-Stack Software Engineer with professional experience at Matrix Technology and independent delivery of fintech and enterprise SaaS applications. Passionate about building performant, type-safe web systems that scale seamlessly under load.",
  stats: [
    { label: "Curated Production Projects", value: "6+" },
    { label: "Production Deployments", value: "4+" },
    { label: "Core Technologies", value: "15+" },
    { label: "Client & Work Quality", value: "100%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "lm-laundry",
    title: "LM Laundry",
    subtitle: "Boutique Garment Care & Smart Scheduling Platform",
    description: "Full-stack garment care and bespoke scheduling platform built with Next.js 15 and TypeScript. Features seamless appointment reservation flows, dynamic service pricing calculators, and interactive stage tracking.",
    category: "Full-Stack / SaaS",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://lmlanundary.vercel.app",
    githubUrl: "https://github.com/fikertekiflu/LM-LAUNDRY-",
    featured: true,
    accentColor: "#10B981",
    badge: "LIVE SAAS",
    metrics: ["Production Deployment", "Sub-second Page Loads", "100% Mobile Responsive"],
    highlights: [
      "Custom scheduling and reservation workflow with validation",
      "Tailored boutique aesthetic with responsive micro-interactions",
      "Interactive checkout celebration and real-time state feedback"
    ],
    architecture: "Next.js App Router + TypeScript + Tailwind CSS UI"
  },
  {
    id: "pharmacy-saas",
    title: "PharmaCare SaaS",
    subtitle: "Multi-Tenant Pharmacy Inventory & Dispensing Engine",
    description: "Modern healthcare SaaS designed for pharmacies to manage complex medication stocks, track batch expirations, automate reorder alerts, and monitor sales trends with dynamic Recharts data visualizations.",
    category: "Full-Stack / SaaS",
    tags: ["Next.js", "React", "TypeScript", "Recharts", "Framer Motion"],
    liveUrl: "https://pharmacy-management-system-drab.vercel.app",
    githubUrl: "https://github.com/fikertekiflu/pharmacy_management_system",
    featured: true,
    accentColor: "#00FF88",
    badge: "HEALTH SAAS",
    metrics: ["Real-time Inventory Analytics", "Automated Expiry Alerts", "POS Billing Flow"],
    highlights: [
      "Dynamic interactive charting for daily and monthly revenue metrics",
      "Batch number & expiration date tracking with color-coded safety indicators",
      "Framer-motion powered dialogs and state transitions"
    ],
    architecture: "Next.js + TypeScript + Framer Motion + Recharts"
  },
  {
    id: "trustify-escrow",
    title: "Trustify Escrow",
    subtitle: "Fintech Peer-to-Peer Escrow Transaction Architecture",
    description: "Secure transactional escrow platform engineered for buyer-seller dispute protection and multi-step payment release workflows. Focuses on bulletproof financial state transitions and high integrity.",
    category: "Fintech & Systems",
    tags: ["React", "JavaScript", "Fintech", "Payment Security", "REST APIs"],
    githubUrl: "https://github.com/fikertekiflu/Trustify_Escrow",
    featured: true,
    accentColor: "#38BDF8",
    badge: "FINTECH",
    metrics: ["Escrow Protection", "Multi-party Signoff", "Fraud Prevention"],
    highlights: [
      "Multi-stage funds lock, inspection period, and automated release triggers",
      "Dispute arbitration flow with cryptographic verification principles",
      "Seamless buyer and seller dashboard interfaces"
    ],
    architecture: "React + Transaction State Machine + Secure REST Backend"
  },
  {
    id: "super-erp",
    title: "SuperERP Enterprise",
    subtitle: "Modular Enterprise Resource Planning Platform",
    description: "Comprehensive enterprise operations suite uniting a TypeScript Next.js client with a NestJS and TypeORM backend. Includes Kanban drag-and-drop order workflows, multi-role RBAC security, and automated auditing.",
    category: "Fintech & Systems",
    tags: ["TypeScript", "NestJS", "TypeORM", "PostgreSQL", "Next.js", "Dnd-Kit"],
    githubUrl: "https://github.com/fikertekiflu/SuperERp",
    featured: true,
    accentColor: "#A78BFA",
    badge: "ENTERPRISE",
    metrics: ["Modular NestJS Microservices", "Swagger OpenAPI Specs", "Dnd-Kit Kanban"],
    highlights: [
      "Multi-tenant data isolation with TypeORM schemas",
      "Interactive drag-and-drop task boards using @dnd-kit",
      "JWT authorization guards and encrypted credential vaults"
    ],
    architecture: "NestJS Backend (TypeORM/PostgreSQL) + Next.js Frontend"
  },
  {
    id: "advanced-workforce",
    title: "Advanced Workforce",
    subtitle: "High-Concurrency Go Backend & Distributed Services",
    description: "High-throughput workforce tracking and shift allocation system featuring Go goroutine concurrency, Python analytical pipelines, and a TypeScript frontend. Engineered for zero-downtime and millisecond-level scheduling.",
    category: "Fintech & Systems",
    tags: ["Go (Golang)", "Python", "TypeScript", "Goroutines", "REST APIs"],
    githubUrl: "https://github.com/fikertekiflu/Advanced_workforce_backend",
    featured: true,
    accentColor: "#06B6D4",
    badge: "GO BACKEND",
    metrics: ["Sub-5ms Execution", "Goroutine Parallelism", "Multi-Service Architecture"],
    highlights: [
      "Concurrent shift constraint validator built in Go",
      "Python data normalization workers for attendance summaries",
      "Unified TypeScript dashboard with live status feeds"
    ],
    architecture: "Go (Golang) Microservices + Python + TypeScript Client"
  },
  {
    id: "google-form-clone",
    title: "FormCraft Engine",
    subtitle: "Dynamic Drag & Drop Form Builder & Collector",
    description: "Full-featured Google Form clone engineered with React, TypeScript, and Radix UI primitives. Allows dynamic addition of short answers, multiple-choice, dropdowns, and checkboxes with schema validation.",
    category: "Frontend & Web",
    tags: ["TypeScript", "React", "Radix UI", "React Hook Form", "Vercel"],
    liveUrl: "https://google-form-mu.vercel.app",
    githubUrl: "https://github.com/fikertekiflu/Google_form",
    featured: true,
    accentColor: "#F59E0B",
    badge: "LIVE DEMO",
    metrics: ["Zero-Delay Field Edits", "Keyboard Accessible", "JSON Schema Export"],
    highlights: [
      "Dynamic question typing (radio, checkbox, dropdown, paragraphs)",
      "Strict form validation using React Hook Form & Zod schemas",
      "Live preview switch allowing instant tester walkthroughs"
    ],
    architecture: "React + TypeScript + Radix UI + React Hook Form"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Intermediate" },
      { name: "Next.js (App Router / SSR)", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Intermediate" },
      { name: "Tailwind CSS & Modern CSS", level: "Intermediate" },
      { name: "HTML5 / Semantic Web", level: "Intermediate" },
      { name: "Radix UI & UI Component Patterns", level: "Intermediate" },
      { name: "Responsive & Accessible UX", level: "Intermediate" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js & Express.js", level: "Intermediate" },
      { name: "Go (Golang)", level: "Intermediate" },
      { name: "NestJS & TypeORM", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "RESTful API Architecture", level: "Intermediate" },
      { name: "Microservices & API Gateways", level: "Intermediate" },
      { name: "Fintech & Escrow Workflows", level: "Intermediate" },
      { name: "JWT, OAuth & Auth Security", level: "Intermediate" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB & Mongoose", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Redis (Cache & Pub/Sub)", level: "Intermediate" },
      { name: "Database Schema Design", level: "Intermediate" },
      { name: "TypeORM & ORMs", level: "Intermediate" }
    ]
  },
  {
    title: "DevOps & Tooling",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub Workflow", level: "Intermediate" },
      { name: "Linux & Bash Shell", level: "Intermediate" },
      { name: "Vercel & Cloud Deployment", level: "Intermediate" },
      { name: "Bull Queues & Background Jobs", level: "Intermediate" },
      { name: "Postman & API Testing", level: "Intermediate" },
      { name: "CI/CD Foundations", level: "Intermediate" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    organization: "Matrix Technology",
    type: "Full-Time / Engineering",
    description: "Architecting and maintaining scalable web applications and enterprise services across the stack using Next.js, React, TypeScript, and Node.js.",
    bullets: [
      "Engineered high-performance web applications and responsive client platforms with Next.js and TypeScript.",
      "Designed and deployed secure RESTful APIs, integrating authentication, role-based authorization, and real-time features.",
      "Optimized PostgreSQL and MongoDB databases, cutting query latency and improving data consistency.",
      "Collaborated in cross-functional agile teams to deliver clean, maintainable, and thoroughly tested software."
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"]
  },
  {
    period: "2023 — Present",
    role: "Freelance Full-Stack Developer (Fintech & SaaS)",
    organization: "Independent & Client Solutions",
    type: "Contract / Freelance",
    description: "Designing and building specialized fintech platforms, peer-to-peer escrow engines, and bespoke business management systems.",
    bullets: [
      "Built Trustify Escrow, implementing multi-step transaction locks, dispute mediation flows, and secure fund release logic.",
      "Shipped LM Laundry (Boutique Garment Care SaaS) with complete scheduling, dynamic pricing, and mobile-first UX.",
      "Developed PharmaCare SaaS for pharmacy inventory tracking, batch expiry management, and sales reporting.",
      "Consulted with clients to translate business requirements into resilient technical architectures."
    ],
    tags: ["Fintech", "Escrow", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"]
  },
  {
    period: "2023 — 2024",
    role: "Backend Software Engineering Specialization",
    organization: "ALX Software Engineering Program",
    type: "Intensive Program",
    description: "Deep dive into low-level systems, distributed backend infrastructure, asynchronous queue architectures, and database scalability.",
    bullets: [
      "Architected distributed file management engines utilizing Redis caching and Bull background workers.",
      "Implemented secured authentication pipelines utilizing bcrypt encryption, token session validation, and JWT.",
      "Engineered complex data structures, algorithms, and microservice APIs with Node.js, Python, and C.",
      "Collaborated in agile peer programming teams adhering to strict code review and CI/CD best practices."
    ],
    tags: ["Distributed Systems", "Node.js", "Redis", "MongoDB", "Python", "Linux/Bash"]
  }
];

export const TERMINAL_COMMANDS: Record<string, string | { type: string; content: any }> = {
  help: `Available commands:
  • about      - Learn about Fikerte Kiflu
  • experience - View professional background (Matrix Technology & Freelance)
  • skills     - View core technology competencies
  • projects   - List curated production projects
  • contact    - Get email and contact coordinates
  • stack      - View current primary tech stack
  • sudo hire  - Direct channel to hire Fikerte
  • clear      - Clear the terminal screen`,

  about: `Fikerte Kiflu (Fikir)
Full-Stack Developer & Software Engineer
Professional experience at Matrix Technology and independent delivery of fintech & SaaS solutions.
Focus: Next.js, React, TypeScript, Node.js, Go, PostgreSQL, MongoDB.
Status: Available for full-time roles, contracts, and high-impact engineering projects.`,

  experience: `PROFESSIONAL BACKGROUND:
  [1] Matrix Technology | Full Stack Developer (2024 - Present)
      Next.js, TypeScript, React, Node.js, PostgreSQL, REST APIs
  [2] Freelance Developer | Fintech & SaaS Projects (2023 - Present)
      Trustify Escrow, LM Laundry SaaS, PharmaCare SaaS
  [3] ALX Software Engineering | Backend Specialization (2023 - 2024)
      Distributed Systems, Redis, Bull Queues, Python`,

  skills: `FRONTEND: Next.js (App Router), React, TypeScript, Tailwind CSS, Radix UI
BACKEND:  Node.js, Express, Go (Golang), NestJS, Python, RESTful APIs
DATABASE: PostgreSQL, MongoDB, Redis, MySQL, TypeORM
SPECIALTY: Fintech escrow workflows, SaaS architectures, high concurrency`,

  projects: `CURATED PRODUCTION PROJECTS:
  [1] LM Laundry (Next.js 15/TS SaaS) -> https://lmlanundary.vercel.app
  [2] PharmaCare SaaS (Healthcare SaaS) -> https://pharmacy-management-system-drab.vercel.app
  [3] Trustify Escrow (Fintech Escrow) -> github.com/fikertekiflu/Trustify_Escrow
  [4] SuperERP Enterprise (NestJS/TypeORM/Next.js) -> github.com/fikertekiflu/SuperERp
  [5] Advanced Workforce (Go Concurrency) -> github.com/fikertekiflu/Advanced_workforce_backend
  [6] FormCraft Google Form Clone (React/TS) -> https://google-form-mu.vercel.app`,

  contact: `CONTACT COORDINATES:
  Email:    casssiopfiker@gmail.com
  Phone:    +251993817650 (Direct / WhatsApp / Telegram)
  GitHub:   https://github.com/fikertekiflu
  Location: Remote Worldwide / Ethiopia
  Status:   Open to opportunities`,

  stack: `PRIMARY TECH STACK:
  • Frontend: Next.js 15 + TypeScript + Tailwind CSS
  • Backend:  Node.js (Express/NestJS) & Go (Golang)
  • Database: PostgreSQL & MongoDB & Redis
  • Specialty: Fintech & Scalable SaaS Applications`,

  "sudo hire": `>>> ACCESS GRANTED: EXCELLENT DECISION! <<<
Direct Phone: +251993817650
Email: casssiopfiker@gmail.com
Redirecting to contact transmission module below...`
};
