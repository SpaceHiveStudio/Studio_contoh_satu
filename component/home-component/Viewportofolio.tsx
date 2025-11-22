import Link from "next/link";

export default function ExploreSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center py-20 md:py-32">
      
      <h3 className="text-foreground text-2xl md:text-3xl font-bold leading-tight max-w-2xl">
        Explore our portfolio of bespoke interiors.
      </h3>

      <Link
        href="/portofolio"
        className="flex min-w-[84px] max-w-[480px] items-center justify-center cursor-pointer
        overflow-hidden rounded-lg h-12 px-6 bg-black text-white text-base font-medium
        tracking-wide hover:bg-black/90 transition-colors"
      >
        <span className="truncate">View Our Work</span>
      </Link>
    </section>
  );
}
