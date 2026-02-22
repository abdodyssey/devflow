import { LucideIcon } from "lucide-react";

export interface IconContentItem {
  title: string;
  description: string;
  icon: LucideIcon;
  hoverColor?: string;
}

export interface HeroData {
  title: string;
  highlight: string;
  description: string;
}
