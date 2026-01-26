import path from "path";
import fs from 'fs';
import matter from "gray-matter";
const rootDirectory = path.join(process.cwd(), 'src/content/projects');
export type ProjectMetadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image: string;
    tech: string[];
    slug: string;

};

export async function getAllProjectsMetadata(): Promise<ProjectMetadata[]> {
    try {


        const files = fs.readdirSync(rootDirectory);

        const projects = files.map((file) => {
            const filePath = path.join(rootDirectory, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data } = matter(fileContent);

            return {
                ...data,
                slug: file.replace(/\.mdx?$/, "")

            } as ProjectMetadata;
        })

        return projects.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}


export async function getProjectBySlug(slug: string) {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { metadata: data as ProjectMetadata, content }
}