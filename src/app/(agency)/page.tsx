import SolutionSection from "@/components/sections/solution";
import HowIWork from "@/components/sections/how-i-work";
import WhoIHelp from "@/components/sections/who-i-help";
import CTASection from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import WhyWorkWithMe from "@/components/sections/why-work-with-me";
import PortfolioTeaser from "@/components/sections/portfolio-teaser";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default async function HomePage() {
  return (
    <section className="">
      <ScrollReveal>
        <Hero />
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
        <WhyWorkWithMe />
      </ScrollReveal>

      <ScrollReveal>
        <PortfolioTeaser />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </section>
  );
}
