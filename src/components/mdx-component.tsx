import ProjectSlider from "@/components/ui/project-slider";
// ... import komponen lain (h1, p, img, dll)

export const components = {
    // Masukkan ProjectSlider di sini
    ProjectSlider: (props: any) => <ProjectSlider {...props} />,

    // Komponen MDX lainnya...
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    p: (props: any) => <p className="text-zinc-400 leading-relaxed mb-4" {...props} />,
};