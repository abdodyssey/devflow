import EngineeringIdentity from "@/components/sections/engineering/identity";
import SystemProfile from "@/components/sections/engineering/summary";
import EngineeringTechStack from "@/components/sections/engineering/tech-stack";
import EngineeringCaseStudies from "@/components/sections/engineering/case-studies";
import EngineeringWorkLog from "@/components/sections/engineering/work-log";
import EngineeringContact from "@/components/sections/engineering/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function PortfolioPage() {
  return (
    <main className="relative">
      {/* Subtle Low-Opacity Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] bg-size-[40px_40px] bg-[linear-gradient(to_right,#e57474_1px,transparent_1px),linear-gradient(to_bottom,#e57474_1px,transparent_1px)]" />

      <div className="relative z-10 w-full">
        <ScrollReveal>
          <EngineeringIdentity />
        </ScrollReveal>

        <ScrollReveal>
          <SystemProfile />
        </ScrollReveal>

        <ScrollReveal>
          <EngineeringTechStack />
        </ScrollReveal>

        <ScrollReveal>
          <EngineeringCaseStudies />
        </ScrollReveal>

        <ScrollReveal>
          <EngineeringWorkLog />
        </ScrollReveal>

        <ScrollReveal>
          <EngineeringContact />
        </ScrollReveal>
      </div>
    </main>
  );
}
