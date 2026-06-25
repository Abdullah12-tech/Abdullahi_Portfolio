import type { ExperienceItem, SkillCategory, Achievement, PerformanceMetric } from '@/types';

export const experience: ExperienceItem[] = [
  {
    company: 'ATC Africa',
    role: 'Frontend Developer',
    period: 'May 2025 — Dec 2025',
    location: 'Remote',
    type: 'Contract',
    summary:
      "Owned development, maintenance, and optimization of ATC Africa's main website and event platforms — building responsive, user-friendly digital experiences that support community engagement and organizational growth.",
    achievements: [
      'Improved website responsiveness and cross-device compatibility, ensuring a seamless experience from mobile to desktop',
      'Enhanced overall website performance and usability, directly contributing to better user engagement',
      'Developed event platforms and landing pages that streamlined event promotion and participant registration',
      'Built a library of reusable frontend components, improving development efficiency and long-term maintainability',
      'Translated business and community requirements into accessible, visually polished interfaces',
    ],
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  { label: 'Performance Optimization', value: 95, description: 'Improved website speed, responsiveness, and overall user experience.' },
  { label: 'Code Quality', value: 90, description: 'Clean, maintainable, and scalable frontend solutions.' },
  { label: 'Problem Solving', value: 95, description: 'Translated business requirements into functional web solutions.' },
  { label: 'UI/UX Implementation', value: 92, description: 'Intuitive, user-friendly interfaces focused on engagement.' },
  { label: 'Responsive Design', value: 100, description: 'Seamless experience across mobile, tablet, and desktop.' },
  { label: 'Project Delivery', value: 93, description: 'Consistently delivered on time, within scope.' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    command: 'ls frontend/',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 98 },
    ],
  },
  {
    category: 'Backend',
    command: 'ls backend/',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Socket.io', level: 78 },
      { name: 'JWT & Auth', level: 85 },
    ],
  },
  {
    category: 'Tools & Workflow',
    command: 'ls tools/',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vercel', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 78 },
      { name: 'Canva', level: 80 },
      { name: 'Chrome DevTools', level: 90 },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Show Your Work & Win Recognition',
    org: 'SQI College of ICT',
    year: '2025',
    description:
      'Selected among the institution\'s top innovators for designing and developing Trackify — a personal finance management platform helping users track expenses, manage budgets, and gain actionable insight into spending habits.',
    metric: 'Top Innovator',
  },
  {
    title: 'Professional Diploma, Software Engineering',
    org: 'SQI College of ICT',
    year: '2024 — 2025',
    description:
      'Completed comprehensive training across web development, software design, database management, and version control — applied through real-world project delivery.',
  },
  {
    title: 'Workplace Readiness Certification',
    org: 'Mastercard, Propel & JobberMan',
    year: '2025',
    description:
      'Completed professional employability training covering communication, leadership, emotional intelligence, and adaptability for modern, cross-functional work environments.',
  },
  {
    title: 'BSc. Computer Science (In Progress)',
    org: 'University of the People',
    year: '2026 — Present',
    description:
      'Building formal academic depth in data structures, algorithms, and computer systems alongside continued real-world shipping.',
  },
];
