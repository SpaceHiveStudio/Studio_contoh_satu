export default function FeaturedWork() {
    const works = [
        {
        title: "Manhattan Loft",
        category: "Residential",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuByRj2NL8PWaqZPsRMqicAsmOuqKnTkJzNGUi6Z4WKaQtKUYC6-yIEP_X35PYkBkaA848K4usyWRmSSb3HNFGD9slE47rqCb_tgO8hEH1hVJX6vjlufZexAgSVPn3YeEnBTXKvL4Pxm_kQHGBkmkxY2D51wKIwM3hb5pj34zOebghF4he-uWETxoeSyRwuqvqyjPwqD3n4RL2bYTPZlJQtbA6isGOcAzNa3EgYvnd6ZfzuGFqHRI6Ysl1gDvU_mIjA7Cwd2GowcyGc",
        },
        {
        title: "Coastal Residence",
        category: "Residential",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB7TfcMFwulJK152oPsXRyn1Ql5nlyU4hoHdOtOsr0wR8q1JdCEgntS4RZZ9YgjsStz4_1Hijyazkr-KIk7oH7IkHL9s6xJZW_vt0NsypC-IRq2ouFHZIG2MaQxLxpAh_HzDqRfW-RszzRiKcCFARW1A4qbEbtHkuWW6J3K57a-3nqr3cjU_p8GMOr3Po5q1Q1vs5QP278eOXw8X8NE4GPMm92m_98HBZ30xuqPClJAJIXkaiWMAQaUM4B7OGfs3Qkk080HDNCGPFo",
        },
        {
        title: "Lakeside Villa",
        category: "Hospitality",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBdSHop5OvfXaSM68-rbF1bItenXcX1R9_J-QBW1XgPOl-aYANs8J5p8LL1baI9YPOjXZ2VMbDxRYNxw_4_uEniZFCrCuiKIFDm0QarwCfBYuiiCOhx4ik_1iThKZAfNTzyoA2WiL-qzGilAY4_qwl9c_TZvnh80C0H-RIgmml_Zh933SOnUWSYaUmHqbiXXCAld2nMjUJe7DKn-O3r3ibascHQTmDFQo-g8SbK_G8qoqpI4w3Lqj33mnyMHKCZ-9EW_YF3avoKY",
        },
    ];

    return (
        <section className="w-full">
        <h2 className="text-foreground font-display text-4xl md:text-5xl font-medium leading-tight tracking-tight px-4 pb-12 pt-20 md:pt-32 text-center">
            Featured Work
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {works.map((work, index) => (
            <div key={index} className="flex flex-col gap-4 group">
                <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    style={{ backgroundImage: `url('${work.image}')` }}
                ></div>
                </div>

                <div>
                <p className="text-foreground text-base font-semibold leading-normal">
                    {work.title}
                </p>
                <p className="text-muted-foreground text-sm font-normal leading-normal">
                    {work.category}
                </p>
                </div>
            </div>
            ))}
        </section>
        </section>
    );
}
