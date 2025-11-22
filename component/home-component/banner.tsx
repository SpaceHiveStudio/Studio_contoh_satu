"use client";

type BannerProps = {
    title: string;
    subtitle?: string;
    videoSrc: string; // ganti dari image ke video
    alt?: string;
};

export default function Banner({ title, subtitle, videoSrc, alt }: BannerProps) {
    return (
        <section className="@container relative min-h-screen py-0 md:py-0 overflow-hidden">
        {/* Video Background */}
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-label={alt}
        />

        {/* Overlay Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 items-center justify-center min-h-screen p-4">
            <div className="flex flex-col gap-4 text-center max-w-3xl">
            <h1 className="text-white font-display text-4xl font-medium leading-tight tracking-tight @[480px]:text-5xl @[720px]:text-6xl">
                {title}
            </h1>

            {subtitle && (
                <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg">
                {subtitle}
                </h2>
            )}
            </div>
        </div>
        </section>
    );
}
