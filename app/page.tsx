import Image from "next/image";
import Banner from "@/component/home-component/banner";
import AboutHome from "@/component/home-component/about-home";
import ServiceHome from "@/component/home-component/service-home";
import FeaturedWork from "@/component/home-component/FeaturedWork";
import PartnerSection from "@/component/home-component/partner";
import ExploreSection from "@/component/home-component/Viewportofolio";
import WhatsappButton from "@/component/WAbutton";

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
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBH4LeSmxs-VLEsGtFc4rCQ5osg5anDGvUAP4f3oR8skU2zrTVkvOq1BXEf0fTE3fQkGiopzc3T_pJRx_XCrvRdUlQjNUsfpTfdsGElP_1etGDP0JfO0XDhNJNC2xyuddIW8yGgldqN9CiAoHI25-6YLxe1YAugSkASx-WnGYEIlmhivNeMSXn6ItnCLnoG-cRdOckNVCvovWZTH6jk9FlQmaP2kaMwfpm6qZxu6SYMSk4bqVRQThnDkG3jxu6AvSFjbIp3LR2VfRI"
              alt="Studio interior material detail"
            />
            <ServiceHome 
              label = "Our Services"
              title = "A Holistic Approach to Design"
              services = {[
                "Interior Architecture",
                "Custom Furnishings",
                "Lighting Design",
                "Art Curation",
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
