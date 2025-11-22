import PortfolioSection from "@/component/portofolio-component/portofolio-list";
import Head from "next/head";

const seo = {
    title: "Our Portfolio - SpaceHive Interior Studio",
    description:
      "Explore our curated portfolio of interior design projects, showcasing our expertise in creating timeless, functional, and aesthetically refined spaces.",
    url: "https://www.spacehive.com/portofolio",
    ogImage: "https://www.spacehive.com/images/portfolio-og.jpg", // ganti sesuai gambar default
};

export default function PortofolioPage() {
    return (
        <>
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={seo.url} />

            {/* Open Graph */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={seo.ogImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.ogImage} />
        </Head>
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
                        {/* Section Portofolio */}
                            <PortfolioSection />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}