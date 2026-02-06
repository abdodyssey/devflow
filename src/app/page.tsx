import AboutFounder from "@/components/sections/about-founder";
import WhatIsDevflow from "@/components/sections/about-us";
import AISpecialization from "@/components/sections/ai-spesialization";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getAllProjectsMetadata } from "@/lib/mdx";

export default async function HomePage() {
  const projects = await getAllProjectsMetadata();

  return (
    <section className="pb-12 space-y-12">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <WhatIsDevflow />
      </ScrollReveal>
      <ScrollReveal>
        <Projects projects={projects || []} />
      </ScrollReveal>
      <ScrollReveal>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal>
        <AISpecialization />
      </ScrollReveal>
      <ScrollReveal>
        <AboutFounder />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </section>
  );
}