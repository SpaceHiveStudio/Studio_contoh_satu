// app/service/page.tsx
import Services from "@/component/service-component/service";

export const metadata = {
  title: "Layanan Desain Interior Profesional - SpaceHive",
  description:
    "SpaceHive menawarkan layanan desain interior lengkap: interior rumah, kantor, custom furniture, renovasi, dan turnkey projects. Menciptakan ruang yang estetik, fungsional, dan timeless.",
  openGraph: {
    title: "Layanan Desain Interior Profesional - SpaceHive",
    description:
      "SpaceHive menawarkan layanan desain interior lengkap: interior rumah, kantor, custom furniture, renovasi, dan turnkey projects. Menciptakan ruang yang estetik, fungsional, dan timeless.",
    url: "https://www.spacehive.com/service",
    type: "website",
    images: ["https://www.spacehive.com/images/service-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Desain Interior Profesional - SpaceHive",
    description:
      "SpaceHive menawarkan layanan desain interior lengkap: interior rumah, kantor, custom furniture, renovasi, dan turnkey projects. Menciptakan ruang yang estetik, fungsional, dan timeless.",
    images: ["https://www.spacehive.com/images/service-og.jpg"],
  },
};

export default function ServicePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
            {/* Section Service */}
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
