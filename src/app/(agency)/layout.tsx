import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function AgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col px-6 pt-0 pb-12 md:px-12 lg:px-24">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
