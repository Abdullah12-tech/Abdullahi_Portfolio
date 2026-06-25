export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'fintech' | 'saas' | 'platform' | 'tool' | 'education';
  status: 'live' | 'in-development' | 'archived';
  cover: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  features: string[];
  challenges: { problem: string; solution: string }[];
  businessImpact: string[];
  year: string;
  role: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  command: string;
  skills: { name: string; level: number }[];
}

export interface Achievement {
  title: string;
  org: string;
  year: string;
  description: string;
  metric?: string;
}

export interface PerformanceMetric {
  label: string;
  value: number;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'React' | 'JavaScript' | 'Frontend Development' | 'Career Growth' | 'Software Engineering';
  date: string;
  readTime: string;
  content: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
