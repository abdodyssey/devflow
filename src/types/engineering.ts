export interface Project {
  name: string;
  role: string;
  stack: string[];
  details: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}
