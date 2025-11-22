export default function AboutSection() {
    return (
        <section className="flex flex-col gap-20">

        {/* Heading + Hero Image */}
        <div className="flex flex-col gap-12">
            <h1 className="text-black font-display tracking-tight text-4xl md:text-5xl font-bold leading-tight px-4 text-center">
            Design with Purpose. Spaces with Soul.
            </h1>

            <div className="px-4">
            <div
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-lg min-h-[32rem]"
                style={{
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY_ZCgVcXS65nLLfH0EQ3xFhJ0isvm7jaVSe-6Y-5j3Rj0U3dXn9enZ0I8eLw4-HPQiWgP8JV4fxYKv8h1s-MpTCdWb9IsGUve1gNKFSQ2cxey-KGE6PxjRsQ2LLpaN8M-_4XDK120cx-qBxc3Jp79HSXbaLA_7miOU05sl-3-LPEGnu9TwG5gfsGVNkvV0M4-uB64l7edVCMkxZlNqNRJ0bBTEq8YrFFUdUaBcYecdmkLh2RIzR7lG-KuAGAwVAC0CXeJXZgrG_4')",
                }}
            ></div>
            </div>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col items-center gap-6">
            <p className="font-display font-normal leading-relaxed pb-3 pt-1 px-4 max-w-2xl text-center">
            We believe that a well-designed space is more than just an arrangement of objects; it is an experience, a sanctuary, and a reflection of the soul. Our approach is rooted in a deep understanding of our clients' desires, combined with a commitment to creating environments that are both beautiful and profoundly meaningful.
            </p>

            <p className="text-text-light font-display dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1 px-4 max-w-2xl text-center">
            From initial concept to final execution, our process is a collaborative journey. We honor the principles of modern craftsmanship, sourcing the finest materials and working with skilled artisans to ensure every detail is impeccably realized. The result is a space that feels personal, purposeful, and timeless.
            </p>
        </div>

        {/* Values Section */}
        <div className="flex flex-col items-center gap-10">
            <div className="w-20 h-px bg-primary/10 dark:bg-white/10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full px-4">
            {/* Item 1 */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-primary font-bold font-display dark:text-black text-lg tracking-wide">
                Precision
                </h3>
                <p className="text-text-light/70 font-display dark:text-text-dark/70 text-sm">
                Meticulous attention to every detail, ensuring flawless execution.
                </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-primary font-display dark:text-black text-lg font-semibold tracking-wide">
                Modern Craft
                </h3>
                <p className="text-text-light/70 font-display dark:text-text-dark/70 text-sm">
                Blending innovative techniques with the integrity of artisanal methods.
                </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="text-primary font-display dark:text-black text-lg font-semibold tracking-wide">
                Timeless Aesthetics
                </h3>
                <p className="text-text-light/70 font-display dark:text-text-dark/70 text-sm">
                Creating enduring spaces that transcend fleeting trends.
                </p>
            </div>
            </div>
        </div>
        </section>
    );
}
