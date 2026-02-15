import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function AgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-blue-600/10 selection:text-blue-600">
      <Navbar />
      <main className="flex flex-1 flex-col pt-0 pb-24">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
