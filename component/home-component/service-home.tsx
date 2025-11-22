"use client";

type ServiceHomeProps = {
    label?: string;
    title?: string;
    services: string[];
};

export default function ServiceHome({
    label,
    title,
    services,
}: ServiceHomeProps) {
    return (
        <section className="py-20 md:py-32 bg-black/20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* TOP LABEL */}
                <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
                {label}
                </h3>

                {/* TITLE */}
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12">
                {title}
                </h2>

                {/* GRID SERVICES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-foreground/80 text-lg">
                {services.map((item, index) => (
                    <div
                    key={index}
                    className="border-t border-muted-foreground/30 pt-6"
                    >
                    {item}
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
