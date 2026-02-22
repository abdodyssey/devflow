import Navbar from "@/components/shared/Navbar";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-accent/20 selection:text-accent font-sans">
      <Navbar />
      {children}
    </div>
  );
}
