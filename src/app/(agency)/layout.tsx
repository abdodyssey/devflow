import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function AgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent tracking-tight">
      <Navbar />
      <main className="flex flex-1 flex-col pt-0 pb-24">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
