import PortfolioSection from "@/component/portofolio-component/portofolio-list";

export const metadata = {
  title: "Portofolio | SpaceHive Studio",
  description: "Lihat koleksi portofolio terbaru kami. Desain kreatif dan proyek profesional yang menunjukkan kualitas layanan kami.",
  keywords: "portofolio, desain, proyek, kreatif, profesional",
  authors: [{ name: "Nama Anda/Perusahaan" }],
  openGraph: {
    title: "Portofolio - Nama Perusahaan/Brand",
    description: "Lihat koleksi portofolio terbaru kami. Desain kreatif dan proyek profesional yang menunjukkan kualitas layanan kami.",
    url: "https://www.namadomain.com/portofolio",
    siteName: "Nama Perusahaan/Brand",
    images: [
      {
        url: "https://www.namadomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portofolio - Nama Perusahaan/Brand",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio - Nama Perusahaan/Brand",
    description: "Lihat koleksi portofolio terbaru kami. Desain kreatif dan proyek profesional yang menunjukkan kualitas layanan kami.",
    images: ["https://www.namadomain.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.namadomain.com/portofolio"
  }
};

export default function PortofolioPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
                        <main className="py-16 sm:py-24 px-4">
                        {/* Title */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16 text-center">
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight w-full">
                            Our Selected Portofolios
                            </h1>
                        </div>
                        {/* Section Portofolio */}
                            <PortfolioSection />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}