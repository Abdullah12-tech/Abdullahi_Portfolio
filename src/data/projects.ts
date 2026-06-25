import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'trackify',
    title: 'Trackify',
    tagline: 'Personal finance management platform for everyday budgeting clarity',
    category: 'fintech',
    status: 'live',
    cover: 'trackify',
    githubUrl: 'https://github.com/abdullah12-tech',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Chart.js'],
    features: [
      'Expense tracking with category-based breakdowns',
      'Budget creation with real-time spend-vs-limit visualization',
      'Financial goal tracking with progress milestones',
      'Spending insight dashboard surfacing habits over time',
      'Responsive interface optimized for daily mobile use',
    ],
    challenges: [
      {
        problem: 'Users needed to understand spending patterns at a glance, not just see raw transaction lists.',
        solution: 'Designed a visual-first dashboard using charted breakdowns and color-coded budget thresholds, turning raw data into immediately actionable insight.',
      },
      {
        problem: 'Budget data needed to feel live and trustworthy without a heavy backend.',
        solution: 'Used Firebase for real-time data sync, so updates to spending reflect instantly across the budget view without manual refreshes.',
      },
    ],
    businessImpact: [
      'Recognized as a top innovator project in SQI College of ICT\'s "Show Your Work & Win" program',
      'Demonstrated ability to translate a financial product brief into a usable, polished consumer interface',
      'Used as the core technical reference project in international FinTech job applications',
    ],
    year: '2025',
    role: 'Solo Developer · Frontend & Product Design',
  },
  {
    slug: 'attendiq',
    title: 'AttendIQ',
    tagline: 'Attendance management SaaS for organizations tracking presence at scale',
    category: 'saas',
    status: 'in-development',
    cover: 'attendiq',
    githubUrl: 'https://github.com/abdullah12-tech',
    techStack: ['React', 'Vite', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'JWT'],
    features: [
      'Role-based dashboards for admins, supervisors, and staff',
      'Real-time attendance updates pushed via Socket.io',
      'Secure authentication with JWT and email verification flow',
      'Structured logging and monitoring for backend reliability',
      'Scalable MongoDB data layer built for multi-organization use',
    ],
    challenges: [
      {
        problem: 'Early backend builds suffered from duplicate Mongoose index warnings and inconsistent logger output, putting data integrity and debugging speed at risk.',
        solution: 'Audited and resolved schema-level duplicate indexes, fixed Winston logger serialization, and corrected the MongoDB Atlas connection configuration to stabilize the backend.',
      },
      {
        problem: 'New users had no safe, verified way to onboard into an organization\'s attendance system.',
        solution: 'Extended the auth controller with full signup, email verification, and resend-verification flows, closing a key gap in the account lifecycle.',
      },
    ],
    businessImpact: [
      'Architected as a genuinely multi-tenant SaaS pattern, reusable across client organizations',
      'Backend hardened against silent failures through structured logging and connection fixes',
      'Serves as the architectural blueprint for subsequent full-stack platforms, including ALIBGS',
    ],
    year: '2025 – Present',
    role: 'Full Stack Developer · Architecture & Backend',
  },
  {
    slug: 'alibgs-school-management',
    title: 'ALIBGS School Management System',
    tagline: 'Full-stack platform for a multi-level Nigerian Islamic institution',
    category: 'education',
    status: 'in-development',
    cover: 'alibgs',
    techStack: ['React', 'Vite', 'TailwindCSS', 'Shadcn UI', 'Zustand', 'TanStack Query', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'JWT', 'Cloudinary'],
    features: [
      'Public-facing institutional site alongside secured internal portals',
      'Role-based access for administrators, teachers, students, and guardians',
      'WAEC-aligned grading and three-term Nigerian academic session structure',
      'JSS/SS class naming conventions built natively into the data model',
      'Naira-denominated fee and finance tracking throughout the platform',
    ],
    challenges: [
      {
        problem: 'Generic school software ignores Nigerian academic conventions, forcing schools to work around foreign data models.',
        solution: 'Designed the data model from the ground up around WAEC grading, three-term sessions, and JSS/SS class structures, so the system fits the institution instead of the other way around.',
      },
      {
        problem: 'A school spans very different audiences — the public, staff, students, and guardians — each needing a different experience from one platform.',
        solution: 'Structured the application around distinct public and internal portals with role-based access, so each audience sees exactly what is relevant to them.',
      },
    ],
    businessImpact: [
      'Built for a real, operating multi-level Islamic institution, not a hypothetical client',
      'Brings production-grade software practices to an underserved segment of Nigerian education',
      'Reuses and matures the AttendIQ architecture, proving the stack across two distinct domains',
    ],
    year: '2025 – Present',
    role: 'Lead Full Stack Developer',
  },
  {
    slug: 'job-portal',
    title: 'Job Portal Application',
    tagline: 'Two-sided platform connecting job seekers with employers',
    category: 'platform',
    status: 'live',
    cover: 'jobportal',
    githubUrl: 'https://github.com/abdullah12-tech',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      'Separate seeker and employer dashboards with tailored workflows',
      'Job posting, search, and filtered discovery by role and location',
      'Application tracking from submission through review',
      'Authentication and protected routes for each user type',
    ],
    challenges: [
      {
        problem: 'Two very different user types — seekers and employers — needed to share one platform without confusing either workflow.',
        solution: 'Split the application into role-aware dashboards and routing, so each user type only ever sees the tools relevant to their goal.',
      },
    ],
    businessImpact: [
      'Demonstrates two-sided marketplace thinking, a pattern directly transferable to recruiting and HR-tech products',
    ],
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    slug: 'chat-application',
    title: 'Real-Time Chat Application',
    tagline: 'Live messaging platform with instant delivery and presence',
    category: 'tool',
    status: 'live',
    cover: 'chatapp',
    githubUrl: 'https://github.com/abdullah12-tech',
    techStack: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Real-time one-to-one messaging over WebSockets',
      'Online presence indicators and typing status',
      'Persisted message history per conversation',
      'Responsive chat interface modeled on familiar messaging UX patterns',
    ],
    challenges: [
      {
        problem: 'Messaging needs to feel instant — any perceptible lag breaks the experience.',
        solution: 'Implemented Socket.io event-driven delivery with optimistic UI updates, so messages appear the moment they are sent rather than waiting on a round trip.',
      },
    ],
    businessImpact: [
      'Proves real-time, event-driven architecture skills directly applicable to collaboration and support-tooling products',
    ],
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    slug: 'recharge-card-generator',
    title: 'Recharge Card Generator',
    tagline: 'Bulk PIN generation and management tool for telecom recharge cards',
    category: 'tool',
    status: 'live',
    cover: 'rechargecard',
    githubUrl: 'https://github.com/abdullah12-tech',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Bulk generation of unique, non-repeating recharge PINs',
      'Batch export for print-ready card production',
      'Searchable record of generated batches for auditing',
    ],
    challenges: [
      {
        problem: 'Generated PINs must be guaranteed unique across very large batches, with no risk of collision.',
        solution: 'Built a generation and validation routine that checks new PINs against existing records before committing a batch, eliminating duplicate-card risk.',
      },
    ],
    businessImpact: [
      'Solves a real, practical Nigerian telecom and retail workflow with a focused, reliable tool',
    ],
    year: '2024',
    role: 'Full Stack Developer',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
