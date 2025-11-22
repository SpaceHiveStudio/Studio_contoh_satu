export default function Footer() {
    return (
        <footer className="w-full bg-background-light border-t border-border mt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
                © 2024 SpaceHive. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
                <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                Instagram
                </a>
                <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                Pinterest
                </a>
                <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                LinkedIn
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
}
