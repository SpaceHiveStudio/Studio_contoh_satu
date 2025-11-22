// app/about/page.tsx

import AboutSection from "@/component/about-component/about";

export const metadata = {
  title: "About Us | SpaceHive Studio - Luxury Interior Design",
  description:
    "Discover SpaceHive Studio, our design philosophy, talented team, and our commitment to creating luxury interiors that combine elegance and functionality.",
  openGraph: {
    title: "About Us | SpaceHive Studio - Luxury Interior Design",
    description:
      "Discover SpaceHive Studio, our design philosophy, talented team, and our commitment to creating luxury interiors that combine elegance and functionality.",
    url: "https://www.spacehive.com/about",
    type: "website",
    images: ["https://www.spacehive.com/images/about-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SpaceHive Studio - Luxury Interior Design",
    description:
      "Discover SpaceHive Studio, our design philosophy, talented team, and our commitment to creating luxury interiors that combine elegance and functionality.",
    images: ["https://www.spacehive.com/images/about-og.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="relative w-full flex flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-screen-xl w-full">
            <main className="flex flex-col gap-12 md:gap-24 py-12 md:py-24">
              <AboutSection />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
