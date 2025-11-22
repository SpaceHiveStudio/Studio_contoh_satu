import PortfolioSection from "@/component/portofolio-component/portofolio-list";

export default function PortofolioPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
                        {/* Section Portofolio */}
                            <PortfolioSection />
                    </div>
                </div>
            </div>
        </div>
    );
}