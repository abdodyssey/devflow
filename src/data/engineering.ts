import { Project, TechGroup } from "@/types/engineering";

export const engineeringProjects: Project[] = [
  {
    name: "Rafanovation",
    role: "Fullstack Developer",
    stack: ["React", "Tailwind CSS", "PostgreSQL", "Supabase"],
    details:
      "Focus: Optimized Client-Side Performance dengan implementasi Debouncing, Ref-based caching, dan Race-condition handling pada proses autentikasi, menghasilkan initial load time di bawah 1.5 detik. Built a Scalable Design System berbasis Tailwind CSS dan Framer Motion, menghadirkan Professional-Grade UI yang responsif dengan fokus pada aksesibilitas dan High-End Aesthetics.",
    githubUrl: "#",
    liveUrl: "https://rafanovation.cloud/",
  },
  // You can easily add more projects here
  {
    name: "Academic Information System",
    role: "Fullstack Developer",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    details: "Focus: Relational modeling & scalable state synchronization",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    name: "Infrastructure Dashboard",
    role: "Lead Engineer",
    stack: ["React", "TypeScript", "Supabase"],
    details: "Focus: Real-time monitoring & high-availability inventory logic",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const techStackGroups: TechGroup[] = [
  {
    title: "frontend",
    items: ["react", "nextjs", "typescript", "tailwind", "framer-motion"],
  },
  {
    title: "backend",
    items: ["nodejs", "express", "prisma-orm", "nextauth", "zod"],
  },
  {
    title: "database",
    items: ["postgresql", "mysql", "supabase", "redis"],
  },
  {
    title: "toolchain",
    items: ["git", "docker", "vercel", "linux-shell", "postman"],
  },
];
