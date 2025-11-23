import Image from "next/image";
import Banner from "@/component/home-component/banner";
import AboutHome from "@/component/home-component/about-home";
import ServiceHome from "@/component/home-component/service-home";
import FeaturedWork from "@/component/home-component/FeaturedWork";
import PartnerSection from "@/component/home-component/partner";
import ExploreSection from "@/component/home-component/Viewportofolio";
import WhatsappButton from "@/component/WAbutton";
import Head from "next/head";

export const metadata = {
  title: "SpaceHive - Studio Desain Interior Profesional",
  description:
    "SpaceHive menghadirkan desain interior yang timeless dan fungsional. Menciptakan ruang yang indah, tenang, dan bermakna untuk rumah, kantor, dan proyek komersial.",
  metadataBase: new URL("https://www.spacehive.com/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SpaceHive - Studio Desain Interior Profesional",
    description:
      "SpaceHive menghadirkan desain interior yang timeless dan fungsional. Menciptakan ruang yang indah, tenang, dan bermakna untuk rumah, kantor, dan proyek komersial.",
    url: "https://www.spacehive.com/",
    siteName: "SpaceHive",
    images: [
      {
        url: "https://www.spacehive.com/images/og-image.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceHive - Studio Desain Interior Profesional",
    description:
      "SpaceHive menghadirkan desain interior yang timeless dan fungsional.",
    images: ["https://www.spacehive.com/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <Banner
        title="Timeless Interiors Crafted with Precision."
        subtitle="Creating serene and meaningful spaces."
        videoSrc="/video/video.mp4"
        alt="Minimalist luxury interior with neutral tones and soft lighting."
      />   
      <div className="relative w-full flex flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-screen-xl w-full">
            <AboutHome
              title="About Our Studio"
              description="We believe in the power of simplicity and craftsmanship. Our design philosophy centers on creating spaces that are not only beautiful but also deeply personal and functional, using natural materials and a refined aesthetic to evoke a sense of calm and timeless elegance."
              buttonText="OUR STUDIO"
              image="/image/spacehive.jpeg"
              alt="Studio interior material detail"
            />
            <ServiceHome 
              label = "Our Services"
              title = "A Holistic Approach to Design"
              services = {[
                "Interior Design",
                "Space Planning",
                "Custom Furniture",
                "Renovation Concepting",
                "Styling & Accessorizing",
                "Turnkey Projects",
              ]}
            />
            <FeaturedWork />
            <PartnerSection />
            <ExploreSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
