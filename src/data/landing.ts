import {
  Store,
  LineChart,
  Users,
  Target,
  MessageSquare,
  Zap,
  Settings2,
  Handshake,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Search,
  PenTool,
  Rocket,
  BarChart3,
} from "lucide-react";
import { IconContentItem, HeroData } from "@/types/landing";

export const heroData: HeroData = {
  title: "Transformasi Digital",
  highlight: "untuk Bisnis Anda",
  description:
    "Miliki website profesional dan sistem manajemen yang terintegrasi untuk mendigitalkan operasional bisnis Anda agar lebih efisien, efektif, dan siap tumbuh di era digital masa kini.",
};

export const whoIHelpData: IconContentItem[] = [
  {
    title: "Pemilik Bisnis & UMKM",
    description:
      "Anda yang ingin bisnisnya 'naik kelas'. Punya website resmi agar lebih dipercaya, serta sistem operasional yang tidak lagi manual.",
    icon: Store,
    hoverColor: "#6366f1", // Indigo
  },
  {
    title: "Perusahaan Berkembang",
    description:
      "Bisnis yang transaksinya makin ramai. Anda butuh sistem inventory, keuangan, atau manajemen tim yang lebih serius dan terintegrasi.",
    icon: LineChart,
    hoverColor: "#10b981", // Emerald
  },
  {
    title: "Organisasi & Profesional",
    description:
      "Institusi, komunitas, atau konsultan yang membutuhkan platform digital representatif untuk menjangkau audiens dan melayani anggota.",
    icon: Users,
    hoverColor: "#f43f5e", // Rose
  },
];

export const whyWorkWithMeData: IconContentItem[] = [
  {
    title: "Orientasi Profit & Efisiensi",
    description:
      "Lebih dari sekadar kode. Kami merancang sistem yang berdampak langsung pada penghematan biaya dan peningkatan profit bisnis Anda.",
    icon: Target,
    hoverColor: "#f59e0b", // Amber
  },
  {
    title: "Komunikasi Langsung",
    description:
      "Anda berdiskusi langsung dengan pembuatnya. Tidak ada distorsi informasi lewat sales atau project manager.",
    icon: MessageSquare,
    hoverColor: "#0ea5e9", // Sky
  },
  {
    title: "Investasi Cerdas",
    description:
      "Dapatkan kualitas sistem kelas atas dengan biaya yang dialokasikan sepenuhnya untuk pengembangan, bukan overhead kantor mewah.",
    icon: Zap,
    hoverColor: "#8b5cf6", // Violet
  },
  {
    title: "Sesuai Karakter Bisnis",
    description:
      "Anda tidak perlu mengubah cara kerja demi sistem. Kami yang membangun sistem agar pas dengan alur unik bisnis Anda.",
    icon: Settings2,
    hoverColor: "#f97316", // Orange
  },
  {
    title: "Dukungan Berkelanjutan",
    description:
      "Hubungan kita tidak putus saat website rilis. Kami siap menjaga performa sistem Anda dalam jangka panjang.",
    icon: Handshake,
    hoverColor: "#14b8a6", // Teal
  },
];

export const solutionsData: IconContentItem[] = [
  {
    title: "Transformasi Operasional",
    description:
      "Ubah proses manual yang lambat menjadi alur kerja digital yang terotomatisasi. Efisiensi meningkat, kesalahan manusia berkurang drastis.",
    icon: Sparkles,
    hoverColor: "#a855f7", // Purple
  },
  {
    title: "Otomatisasi Cerdas",
    description:
      "Biarkan teknologi bekerja untuk Anda. Sistem akan menangani tugas administratif rutin secara otomatis, memberi Anda waktu untuk fokus pada strategi.",
    icon: Zap,
    hoverColor: "#eab308", // Yellow
  },
  {
    title: "Skalabilitas Bisnis",
    description:
      "Bangun fondasi teknologi yang kokoh. Sistem dirancang untuk tetap stabil and cepat bahkan saat transaksi bisnis Anda meningkat berkali lipat.",
    icon: TrendingUp,
    hoverColor: "#22c55e", // Green
  },
  {
    title: "Solusi Tepat Guna",
    description:
      "Fokus pada dampak, bukan kerumitan. Antarmuka yang intuitif memastikan tim Anda dapat langsung menggunakan sistem tanpa pelatihan panjang.",
    icon: ShieldCheck,
    hoverColor: "#3b82f6", // Blue
  },
];

export const howIWorkData: IconContentItem[] = [
  {
    title: "Diskusi & Pemahaman Masalah",
    description:
      "Kita mulai dengan diskusi mendalam. Kami perlu mengerti di mana letak kebocoran efisiensi bisnis Anda sebelum menawarkan solusi.",
    icon: Search,
    hoverColor: "#64748b", // Slate
  },
  {
    title: "Perancangan Strategi",
    description:
      "Kami merancang sistem yang tidak hanya canggih, tapi juga mudah digunakan oleh tim Anda. Solusi yang pas, bukan yang paling mahal.",
    icon: Target,
    hoverColor: "#f43f5e", // Rose
  },
  {
    title: "Eksekusi & Pengembangan",
    description:
      "Proses pengerjaan dilakukan dengan terstruktur dan teliti. Fokus pada keamanan data, kecepatan akses, dan kestabilan sistem.",
    icon: PenTool,
    hoverColor: "#0ea5e9", // Sky
  },
  {
    title: "Pelatihan & Serah Terima",
    description:
      "Sistem baru tidak akan berguna jika sulit dipakai. Kami akan melatih tim Anda sampai mereka benar-benar nyaman menggunakannya.",
    icon: Rocket,
    hoverColor: "#22c55e", // Green
  },
  {
    title: "Pendampingan Jangka Panjang",
    description:
      "Bisnis Anda terus bergerak, begitupun teknologinya. Kami siap membantu update dan maintenance agar sistem selalu optimal.",
    icon: BarChart3,
    hoverColor: "#8b5cf6", // Violet
  },
];

export const ctaData = {
  title: "Siap Membenahi",
  highlight: "Bisnis Anda?",
  description:
    "Jangan biarkan proses manual menghambat pertumbuhan. Mari kita diskusikan solusi digital yang paling tepat untuk efisiensi operasional Anda.",
};

export const socialLinks = {
  whatsapp:
    "https://wa.me/6285840858761?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20saya",
  email: "mailto:devflow99@gmail.com",
};
