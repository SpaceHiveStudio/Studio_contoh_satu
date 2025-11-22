export default function Services() {
    const services = [
    {
        title: "Interior Design",
        slug: "interior-design",
        desc: "Full-service interior design, from initial concept to final installation, tailored to your lifestyle and aesthetic vision.",
    },
    {
        title: "Space Planning",
        slug: "space-planning",
        desc: "Creating functional and harmonious layouts that maximize flow, purpose, and the inherent potential of every room.",
    },
    {
        title: "Custom Furniture",
        slug: "custom-furnitur",
        desc: "Designing and commissioning bespoke furniture pieces, meticulously crafted to be the perfect centerpiece for your unique space.",
    },
    {
        title: "Renovation Concepting",
        slug: "renovation-concepting",
        desc: "Envisioning and planning structural transformations to redefine the potential of your home, from minor updates to complete remodels.",
    },
    ];

  return (
    <main className="flex-grow py-16 sm:py-24">
      <div className="px-4 sm:px-6 md:px-10">
        
        {/* TITLE */}
        <div className="flex flex-col gap-4 max-w-3xl mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Crafting Meaningful Spaces
          </h1>
          <p className="text-base font-normal leading-normal text-muted-light dark:text-muted-dark">
            We design timeless interiors that reflect your unique story, blending elegance with functionality to create spaces that inspire.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-6 border border-border-light dark:border-border-dark rounded-lg 
              transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20"
            >
              <h3 className="text-xl font-bold leading-normal">{item.title}</h3>

              <p className="text-sm font-normal leading-relaxed text-muted-light dark:text-muted-dark flex-grow">
                {item.desc}
              </p>

              <a
                className="group text-sm font-medium leading-normal inline-flex items-center gap-2 cursor-pointer"
                href={`/service/${item.slug}`}
              >
                Learn More
              </a>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
