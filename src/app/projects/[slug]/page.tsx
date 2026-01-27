import { getProjectBySlug, getAllProjectsMetadata } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import * as motion from "framer-motion/client";
import { BorderBeam } from "@/components/ui/border-beam";
import { Badge } from "@/components/ui/badge";

// 1. Import ProjectSlider lu di sini
import ProjectSlider from "@/components/ui/project-slider";

export async function generateStaticParams() {
    const projects = await getAllProjectsMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) notFound();

    const { metadata, content } = project;

    // 2. Daftarkan komponen agar bisa dipakai di dalam file .mdx
    const components = {
        ProjectSlider,
    };

    return (
        <article className="min-h-screen w-full pb-20 pt-10">
            <div className="mx-auto max-w-4xl px-6 mt-20">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to projects
                    </Link>
                </motion.div>

                {/* Hero Headers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                            {metadata.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                            {metadata.summary}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                        {metadata.publishedAt && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={metadata.publishedAt}>
                                    {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </time>
                            </div>
                        )}
                        <span className="hidden text-muted-foreground md:inline">•</span>
                        <div className="flex flex-wrap gap-2">
                            {metadata.tech.map((t: string) => (
                                <Badge key={t} variant="secondary" className="rounded-full px-3 py-1 text-xs">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <hr className="my-8 border-border/40" />

                {/* MDX Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="prose prose-zinc dark:prose-invert max-w-none
                        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-li:text-muted-foreground
                        prose-strong:font-medium prose-strong:text-foreground
                        prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
                        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
                >
                    {/* 3. Masukkan objek components ke MDXRemote */}
                    <MDXRemote source={content} components={components} />
                </motion.div>
            </div>
        </article>
    );
}