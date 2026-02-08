import AboutPersonal from "@/components/sections/about-personal";
import ProblemSection from "@/components/sections/problem";
import SolutionSection from "@/components/sections/solution";
import HowIWork from "@/components/sections/how-i-work";
import WhoIHelp from "@/components/sections/who-i-help";
import CTASection from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import WhyWorkWithMe from "@/components/sections/why-work-with-me";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getAllProjectsMetadata } from "@/lib/mdx";

export default async function HomePage() {
  const projects = await getAllProjectsMetadata();

  return (
    <section className="">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <ProblemSection />
      </ScrollReveal>
      <ScrollReveal>
        <SolutionSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowIWork />
      </ScrollReveal>
      <ScrollReveal>
        <WhoIHelp />
      </ScrollReveal>
      <ScrollReveal>
        <Projects projects={projects || []} />
      </ScrollReveal>
      <ScrollReveal>
        <WhyWorkWithMe />
      </ScrollReveal>
      <ScrollReveal>
        <AboutPersonal />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </section>
  );
}
