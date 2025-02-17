export interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  github: string;
  live?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export type Theme = 'light' | 'dark';
export type Language = 'pt-BR' | 'en' | 'es';