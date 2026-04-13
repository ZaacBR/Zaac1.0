export type View = 'home' | 'portfolio' | 'about' | 'experiences' | 'contact' | 'solar-case' | 'zaac-case' | 'thanks';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  image: string;
  logicId?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}
