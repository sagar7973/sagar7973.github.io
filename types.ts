import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  duration: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  points: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SportActivity {
  name: string;
  description: string;
  images: string[];
}