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

// Config Types
export interface PortfolioConfig {
  visual: boolean;
}

// Consolidated Portfolio Data
export interface PortfolioData {
  basics: BasicsData;
  projects: Project[];
  services: Service[];
  config?: PortfolioConfig;
}
