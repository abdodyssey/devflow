export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#141b1e] text-[#dadada] relative selection:bg-[#e57474]/30 selection:text-white font-sans">
      {/* 
          Everblush Engineering Lab Layout:
          - Deep warm dark background (#141b1e)
          - Warm off-white text (#dadada)
          - Single page flow
      */}
      {children}
    </div>
  );
}
