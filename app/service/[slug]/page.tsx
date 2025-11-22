"use client";

import WhatsappButton from "@/component/WAbutton";
import React from "react";

const SERVICE_DATA: Record<
  string,
  {
    title: string;
    slug: string;
    description: string;
    image: string;
    longText1: string;
    longText2: string;
  }
> = {
  "interior-design": {
    title: "Interior Design",
    slug: "interior-design",
    description:
      "Our full-service interior design transforms your house into a home, meticulously tailored to your lifestyle and aesthetic vision, from initial concept to final installation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm9-ZqBiG6QIBBOHASLHRis82eGxSyWyv3USIo5q44km92DfdOHnrTu6TOMJzhFzyGBZ8NPNHje84A1SvkHNlUHGD7sOBfEqG2PHB32zvtmmqtdnpGFS54tn_HZc2hXjM_Yo2et90eImvt9DL6Q03vTw6c6OQUydZKNCW8z-_nm6ZfTUZ5sFjowyxAIOve3fvQzaUpecU0vEcTyuB1kdDEiPSgoB_0BVmJrlvrD_u2m8LeUh5NhthUdG3iI0NiEZ-8rBOruTa7o28",
    longText1:
      "We believe that a well-designed space has the power to transform daily life. Our approach to interior design is holistic and client-centric, focusing on creating environments that are not only beautiful but also deeply personal and functional. We manage every detail of the project, ensuring a seamless and enjoyable experience.",
    longText2:
      "Our team collaborates with you to understand your needs, aspirations, and the unique character of your space. We blend timeless principles with modern sensibilities, selecting materials, furnishings, and art that resonate with your story. The result is a harmonious sanctuary that feels both refined and effortlessly livable.",
  },
  "space-planning": {
    title: "Space Planning",
    slug: "space-planning",
    description:
      "Our space planning services optimize every square foot of your home or office, balancing functionality and aesthetic appeal. We ensure every layout maximizes comfort, flow, and usability without compromising style.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRQiYmU0X0sBcwCr2SRG1QXwlyZl5FiriZFrnBsqMhejTcmjVvJbQoU3Mq0DTGu61BbtYe3x_Uabb_lmzV63uG6o8szY7P8ttkQ4j04lFapKP3otzURJwsnRPdg9CAvo0looaiuyqdQFCoaTH2R4JEhOpaoWzQiS0DaR3j51k4c3Ei2q4OMPDC8Bdo_NtstRaIUIoHNInz_12FTfOzOIkpnmqkP6dRk6H4pAtb8Zx3O8U_Fmeq89Wv1ugC5g9uVrR34JuriDIYv70",
    longText1:
      "Space planning is about more than just furniture placement; it is the art of creating harmonious circulation, optimizing natural light, and ensuring every area serves its purpose effectively. We collaborate with you to understand daily routines and spatial requirements.",
    longText2:
      "By combining technical expertise with a refined aesthetic sense, we create layouts that enhance your lifestyle, foster productivity, and promote well-being. Each plan is personalized, flexible, and ready to evolve with your needs.",
  },
  "custom-furnitur": {
    title: "Custom Furniture",
    slug: "custom-furnitur",
    description:
      "We design bespoke furniture pieces that perfectly complement your interior. Each creation is a balance of craftsmanship, function, and luxury aesthetic, tailored to your space and personality.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5o3pc7hVkldMa1KGQEa--JPtO0bFWe1tS_HLXM72hqsnaYAJ26iy1_psKzMZX7pfsXHkrgihuLONCSn_9MEChUyIqNWcdoUiFuRm27eMrPcWzm6wpwIbQ72E4CvhHRmU54cc7wgJ6Bp517nhKfiAfUwa3Msa9873xd2tC3Seaaxm9dsJR70uhuRDI09DzBoyOzCxSe1mTwZ2McDb2mpZy57FWL0EJGqaxW8CyhsudlnM9sLW9AX7zuDBJpx6eKsvDe_86WAQYrwI",
    longText1:
      "Our custom furniture service transforms your ideas into tangible, functional art. From concept sketches to material selection, every detail is considered to ensure durability, comfort, and timeless elegance.",
    longText2:
      "Each piece is crafted by skilled artisans and designed to integrate seamlessly with your interiors. We prioritize harmony, scale, and proportion so that your furniture feels naturally part of the environment while making a distinctive statement.",
  },
  "renovation-concepting": {
    title: "Renovation Concepting",
    slug: "renovation-concepting",
    description:
      "We provide complete renovation concepting services, from conceptual design to detailed planning. Our approach ensures that every renovation is functional, stylish, and aligned with your vision.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCifzGc6M0dI7zHQOzXllMcNO-GANCgfS3UriPxH5Q7Xl8E7p8Bvo1D7AYA4UJj5hTNcLVNMQX_xei-8UcCQA_BlXax5MJfRJJY8Vz3-7RoyJ9aFWA3qtcwHZbhjiYi5gbcxf6ISVkxFx7YIDSJBYGRdsUq4s0xf63IN3Vk4olpRQSjgvqqMEVQ84qwk8H52OPO-F5U1eggAFD379Rd9tMmCodxvSWnbNacBZ4HFWhgt4eKdsu2iSPTgAl2VEkxPwKgH9qbRCWcTfA",
    longText1:
      "Our renovation concepting focuses on enhancing existing spaces with modern design sensibilities, while addressing structural, functional, and aesthetic considerations. Every project begins with a deep understanding of your goals and property potential.",
    longText2:
      "We create a detailed roadmap including spatial reconfiguration, material selection, and design strategy. Our process ensures that your renovated space feels contemporary, cohesive, and optimized for your lifestyle, all while maintaining a sense of luxury and refinement.",
  },
};

interface ServiceDetailProps {
  params: Promise<{ slug: string }>; // params adalah Promise
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = React.use(params); // unwrap Promise
  const data = SERVICE_DATA[slug]; // langsung pakai slug

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
