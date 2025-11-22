export default function PartnerSection() {
  const partners = [
    {
      id: 1,
      svg: (
        <svg
          className="w-28 h-auto text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 120 40"
        >
          <path d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm0-4c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16zM60 38h-4V2h4v36zM94 40c-8.837 0-16-7.163-16-16S85.163 8 94 8s16 7.163 16 16-7.163 12-16 12zm0-4c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z" />
        </svg>
      ),
    },
    {
      id: 2,
      svg: (
        <svg
          className="w-28 h-auto text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 120 40"
        >
          <path d="M0 2h4v36H0zM22 2h4v36h-4zM42 22a2 2 0 100-4 2 2 0 000 4zM62 2h4v36h-4zM80 38V2h4v36h-4zM100 2h4v36h-4zM116 38V2h4v36h-4zM42 38a2 2 0 100-4 2 2 0 000 4zM42 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      svg: (
        <svg
          className="w-28 h-auto text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 120 40"
        >
          <path d="M20 40c-11.046 0-20-8.954-20-20S8.954 0 20 0h80v40H20zm4-4h72V4H24C13.51 4 5.92 11.023 4.42 20c.55 8.94 7.625 16 16.58 16z" />
        </svg>
      ),
    },
    {
      id: 4,
      svg: (
        <svg
          className="w-28 h-auto text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 120 40"
        >
          <path d="M20 0l-20 20 20 20 20-20L20 0zm0 34.142L5.858 20 20 5.858 34.142 20 20 34.142zM80 0l20 20-20 20-20-20L80 0zm0 34.142L65.858 20 80 5.858 94.142 20 80 34.142zM50 20l-10 10 10 10 10-10-10-10z" />
        </svg>
      ),
    },
    {
      id: 5,
      svg: (
        <svg
          className="w-28 h-auto text-muted-foreground"
          fill="currentColor"
          viewBox="0 0 120 40"
        >
          <path d="M120 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM40 20c0 11.046-8.954 20-20 20S0 31.046 0 20s8.954-20 20-20 20 8.954 20 20z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl px-4">
          <h2 className="text-foreground font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We collaborate with the finest artisans and brands to bring our
            visions to life, ensuring the highest quality materials and
            craftsmanship in every project.
          </p>
        </div>

        {/* Logos */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                {partner.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
