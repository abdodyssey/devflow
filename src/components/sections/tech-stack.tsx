import { IconCloud } from "../ui/icon-cloud";

export default function TechStack() {
    const slugs = [
        "typescript", "javascript", "react", "nextdotjs",
        "tailwindcss", "nodedotjs", "laravel", "postgresql",
        "prisma", "docker", "tensorflow", "python",
        "n8n", "github", "vercel", "linux"
    ];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    )

    return (
        <div id="tech" className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
            <div className="flex flex-col items-center text-center mb-10 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Tech Stack
                </h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">
                    Alat dan teknologi yang gue gunakan untuk membangun solusi digital di <strong>DevFlow</strong>.
                </p>
            </div>


            <div className="relative flex h-[400px] w-full max-w-[400px] items-center justify-center">
                <IconCloud images={images} iconSlugs={slugs} />
            </div>
        </div>
    );
}