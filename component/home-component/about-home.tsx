"use client";

import Link from "next/link";

type AboutHomeProps = {
    title?: string;
    description?: string;
    buttonText?: string;
    image: string;
    alt?: string;
};

export default function AboutHome({title,description,buttonText,image,alt}: AboutHomeProps) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-4 py-20 md:py-32 items-center">
        {/* LEFT TEXT */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
            <h2 className="text-text-light tracking-tight font-display text-3xl font-medium leading-tight @[480px]:text-4xl">
                {title}
            </h2>

            <p className="text-foreground/80 text-base font-normal leading-relaxed">
                {description}
            </p>
            </div>

            <Link
                href="/about"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-11 px-5 border border-muted-foreground text-foreground text-sm font-medium tracking-wider w-fit hover:bg-foreground hover:text-background transition-colors"
                >
                <span className="truncate">{buttonText}</span>
            </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
            className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-lg"
            aria-label={alt}
            style={{
            backgroundImage: `url('${image}')`,
            }}
        />
        </section>
    );
}
