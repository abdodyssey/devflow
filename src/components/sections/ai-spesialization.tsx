import { BrainCircuit, Cpu, Database, MessageSquareCode, Workflow } from "lucide-react";
import { OrbitingCircles } from "../ui/orbiting-circles";

export default function AISpecialization() {
    return (
        <div className="relative flex h-[500px] w-full max-w-4xl mx-auto flex-col items-center justify-center overflow-hidden py-20">
            <div className="z-10 flex flex-col items-center text-center mb-10 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    AI & Automation
                </h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">
                    Mengintegrasikan kecerdasan buatan ke dalam alur kerja bisnis untuk efisiensi maksimal.
                </p>
            </div>

            {/* Orbiting Circles Center Icon */}
            <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                <BrainCircuit className="h-20 w-20 text-primary" />
            </span>

            {/* Inner Circles (Core AI Tools) */}
            <OrbitingCircles className="h-[30px] w-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
                <Database className="text-zinc-500" />
            </OrbitingCircles>
            <OrbitingCircles className="h-[30px] w-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
                <MessageSquareCode className="text-zinc-500" />
            </OrbitingCircles>

            {/* Outer Circles (Automation & Infrastructure) */}
            <OrbitingCircles className="h-[50px] w-[50px] border-none bg-transparent" reverse duration={30} radius={190}>
                <Workflow className="text-primary" />
            </OrbitingCircles>
            <OrbitingCircles className="h-[50px] w-[50px] border-none bg-transparent" reverse duration={30} delay={15} radius={190}>
                <Cpu className="text-primary" />
            </OrbitingCircles>
        </div>
    );
}