// Skills Types
export interface SkillKeyword {
  name: string;
  icon: string;
  url?: string;
}

export interface Skill {
  name: string;
  keywords: SkillKeyword[];
}

// Profile Types
export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Location {
  city: string;
  country: string;
}

// Multilingual Types
export interface MultilingualText {
  en: string;
  es: string;
}

export interface MultilingualArray {
  en: string[];
  es: string[];
}

// Basics Data
export interface BasicsData {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: MultilingualText;
  location: Location;
  profiles: Profile[];
  skills: Skill[];
}

// Project Types
export interface Project {
  id: number;
  name: MultilingualText;
  description: MultilingualText;
  technologies: string[];
  url: string;
  featured: boolean;
}

export interface ProjectsData {
  projects: Project[];
}

// Service Types
export interface Service {
  id: number;
  icon: string;
  title: MultilingualText;
  description: MultilingualText;
  features: MultilingualArray;
}

export interface ServicesData {
  services: Service[];
}

// Work Experience Types
export interface WorkExperience {
  id: number;
  company: string;
  position: MultilingualText;
  startDate: string;
  endDate: string | null;
  current: boolean;
  location: string;
  description: MultilingualText;
  highlights: MultilingualArray;
  technologies: string[];
}

// Education Types
export interface Education {
  id: number;
  institution: string;
  area: MultilingualText;
  studyType: MultilingualText;
  startDate: string;
  endDate: string;
  score?: string;
  location?: string;
  courses: MultilingualArray;
}

// Certification Types
export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
  logo?: string;
}

// Code Snippet Types
export interface CodeSnippet {
  id: number;
  title: MultilingualText;
  description: MultilingualText;
  language: string;
  category: string;
  tags: string[];
  code: string;
  featured: boolean;
  fileName?: string;
}

// Blog Post Types
export interface BlogPost {
  id: number;
  slug: string;
  title: MultilingualText;
  excerpt: MultilingualText;
  content?: MultilingualText;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

// Config Types
export interface PortfolioConfig {
  visual: boolean;
}

// Consolidated Portfolio Data
export interface PortfolioData {
  basics: BasicsData;
  projects: Project[];
  services: Service[];
  work?: WorkExperience[];
  education?: Education[];
  certifications?: Certification[];
  codeSnippets?: CodeSnippet[];
  blogPosts?: BlogPost[];
  config?: PortfolioConfig;
}
