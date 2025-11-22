import AboutSection from "@/component/about-component/about";

export default function AboutPage() {
    return (
        <div className="relative w-full flex flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center">
                    <div className="layout-content-container flex flex-col max-w-screen-xl w-full">
                        <main className="flex flex-col gap-12 md:gap-24 py-12 md:py-24">
                        {/* Section About */}
                            <AboutSection />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}