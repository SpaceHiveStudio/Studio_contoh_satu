import WhatsappButton from "@/component/WAbutton";
import Head from "next/head";
import React from "react";
import { SERVICE_DATA } from "./data";


interface ServiceDetailProps {
  params: { slug: string };
}

// Fungsi generateMetadata harus di sini
export async function generateMetadata({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const data = SERVICE_DATA[slug];
  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.title} - Nama Perusahaan/Brand`,
    description: data.description,
    openGraph: {
      title: `${data.title} - Nama Perusahaan/Brand`,
      description: data.description,
      url: `https://www.namadomain.com/services/${data.slug}`,
      images: [{ url: data.image, width: 1200, height: 630, alt: data.title }],
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = React.use(params); // unwrap Promise di server component
  const data = SERVICE_DATA[slug];
  if (!data) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </main>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">

            <main className="flex-grow py-16 sm:py-24">
              <div className="px-4 sm:px-6 md:px-10">
                {/* HEADER */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                    {data.title}
                  </h1>
                  <p className="mt-6 text-base md:text-lg max-w-2xl font-normal leading-relaxed text-muted-light dark:text-muted-dark">
                    {data.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="mt-16 sm:mt-24">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-auto object-cover aspect-[16/9] md:aspect-[2/1] rounded-lg shadow-lg shadow-gray-200/50 dark:shadow-black/20"
                  />
                </div>

                {/* CONTENT */}
                <div className="max-w-3xl mx-auto mt-16 sm:mt-24">
                  <div className="flex flex-col gap-8 md:gap-12">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-muted-light dark:text-muted-dark font-normal leading-loose">
                      <p>{data.longText1}</p>
                      <p>{data.longText2}</p>
                    </div>

                    {/* PROCESS SECTION */}
                    <div className="border-t border-border-light dark:border-border-dark pt-12">
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark mb-8">
                        Our Process
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold">01. Discovery & Vision</h3>
                          <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
                            We begin with an in-depth consultation to understand your vision, lifestyle, and project goals, establishing a clear creative direction.
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold">02. Concept & Design</h3>
                          <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
                            Our team develops a comprehensive design concept, including space plans, material palettes, and furnishing selections for your approval.
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold">03. Procurement & Management</h3>
                          <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
                            We handle all purchasing, ordering, and project management, coordinating with artisans and contractors to ensure quality and timelines.
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-bold">04. Installation & Styling</h3>
                          <p className="text-base text-muted-light dark:text-muted-dark leading-relaxed">
                            The final phase where our vision comes to life. We oversee complete installation and add the finishing touches that make your space unique.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
