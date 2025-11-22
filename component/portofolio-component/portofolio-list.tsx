export default function PortfolioSection() {
  return (
    <main className="py-16 sm:py-24 px-4">
      {/* Title */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight w-full">
          Our Selected Works
        </h1>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative overflow-hidden"
          >
            <a href={`/portofolio/${item.slug}`}>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.location}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

const portfolioItems = [
  {
    title: "Mayfair Residence",
    slug: "mayfair-residence",
    location: "London, UK",
    alt: "A bright, minimalist living room with a white sofa and light wood accents.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6aeR9W-RkJROgZfVrSTmTUOR-bSmA3EJHFnJdDWc3xqsTQ9XegTvuNj3RmtSKD3H83odh5d_Ii_4d1RoMHK9kzWq38ug4_0qDuDIMkFousZ_6jQ3dzr3Bdn17VO4PMD6VZKNKnbSABrVnNxPaPwHZNMwwAJXPWBDV0DlghwXjgH9xvOy0piDkmR_dw5w_9cZpzsrARLXIHx---61vSS7yotkDrQqbR6aznR-BWBSjgsw-nNDGUVCLmAhd5VQ4Vwyl-K4RMEWtpA",
  },
  {
    title: "Park Avenue Apartment",
    slug: "park-avenue-apartment",
    location: "New York, USA",
    alt: "A modern kitchen with dark cabinets and marble countertops.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRQiYmU0X0sBcwCr2SRG1QXwlyZl5FiriZFrnBsqMhejTcmjVvJbQoU3Mq0DTGu61BbtYe3x_Uabb_lmzV63uG6o8szY7P8ttkQ4j04lFapKP3otzURJwsnRPdg9CAvo0looaiuyqdQFCoaTH2R4JEhOpaoWzQiS0DaR3j51k4c3Ei2q4OMPDC8Bdo_NtstRaIUIoHNInz_12FTfOzOIkpnmqkP6dRk6H4pAtb8Zx3O8U_Fmeq89Wv1ugC5g9uVrR34JuriDIYv70",
  },
  {
    title: "Coastal Sanctuary",
    slug: "coastal-sanctuary",
    location: "The Hamptons, NY",
    alt: "A spacious bedroom with neutral tones and a large window.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5o3pc7hVkldMa1KGQEa--JPtO0bFWe1tS_HLXM72hqsnaYAJ26iy1_psKzMZX7pfsXHkrgihuLONCSn_9MEChUyIqNWcdoUiFuRm27eMrPcWzm6wpwIbQ72E4CvhHRmU54cc7wgJ6Bp517nhKfiAfUwa3Msa9873xd2tC3Seaaxm9dsJR70uhuRDI09DzBoyOzCxSe1mTwZ2McDb2mpZy57FWL0EJGqaxW8CyhsudlnM9sLW9AX7zuDBJpx6eKsvDe_86WAQYrwI",
  },
  {
    title: "The Glass House",
    slug: "the-glass-house",
    location: "Kyoto, Japan",
    alt: "A minimalist bathroom with a freestanding tub and grey walls.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCifzGc6M0dI7zHQOzXllMcNO-GANCgfS3UriPxH5Q7Xl8E7p8Bvo1D7AYA4UJj5hTNcLVNMQX_xei-8UcCQA_BlXax5MJfRJJY8Vz3-7RoyJ9aFWA3qtcwHZbhjiYi5gbcxf6ISVkxFx7YIDSJBYGRdsUq4s0xf63IN3Vk4olpRQSjgvqqMEVQ84qwk8H52OPO-F5U1eggAFD379Rd9tMmCodxvSWnbNacBZ4HFWhgt4eKdsu2iSPTgAl2VEkxPwKgH9qbRCWcTfA",
  },
  {
    title: "Desert Modern Villa",
    slug: "desert-modern-villa",
    location: "Palm Springs, USA",
    alt: "Living area with a curved sofa and large abstract art.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9GNzC8LZ1rTc3uS3BrhbSY5TKBt-w8jr7A0h3ToPuc5lKh9rEh1skX61sfzwY0AxNZfN83LS1F39X0clK4dzE7zf-vwBrYS4VVIDusNc8wuyI-XDXcpyfXWn__EGpyuhw4zD3wnGyZLUYHM1Yhs6o1tI-taUFAYzH2qZAEca68NK5qghsb_GiEtmd1uYdbk9MX6vbNmnNk9Agd4ByTZP8xglsjamKUJBytw6-fXs3lOTUsUSWbS-ZJf13D6Ye0-QYnZD5oo-Kuw",
  },
  {
    title: "Lakeside Retreat",
    slug: "lakeside-retreat",
    location: "Lake Como, Italy",
    alt: "Elegant dining room with a long wooden table and pendant lights.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAraIjfQ9L4IvYhhkcJR7hXu_dqQI_I2OSlRdG0MY6KTkI-pvQyJLkKwPZ49W9uHpB2eqWSnYO6r0NicXiV_y2EVqsK8y3p64wRpddhdltKqRlGS202WilMGCn_iZuK7GTO6owDfuOl8TCJcjy3E-Ek9EfBiMOB4ymtn2N2MDpvHsCkRHRrbzg1DL9D1-qaP_WmYFQv8TLaH5JU2jnAlA2V9O5aOqY_Fw4682SAwOmLGOl9cees37f9tiNwSm5OJiERj6CvTAMqEuY",
  },
  {
    title: "City Penthouse",
    slug: "city-penthouse",
    location: "Paris, France",
    alt: "Cozy living space with a fireplace and textured rug.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6QrGECquVNTguBP1tbxPArhnNquS8SjH8G0bqng1jfdiVdiRWR7d4nW5UTd846oWQETwf7CuUrnc7wrDZiyQ_ha7ycWcyGJACHIGEGae4vQvExPlPYqotuNj8Mwieoe74WzYV-UW2MSZ2mEZtoIX5uZWDTVpC7HSVuN5UjAkCknYSdsAW3Q-zezURQzdbiG76Ps4f3psBJXG1z6RxoQUTuzkihcxK92fW23p7ErFdIoATw4CIp76RbGoDqHU8p5K-rcGzGop9cE",
  },
  {
    title: "Hillside Estate",
    slug: "hillside-estate",
    location: "Beverly Hills, USA",
    alt: "A grand staircase in a modern home with glass railings.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3qbSK5PIimfWXK2PwEV8Z007mUrxKH5IFhHPJbaxTqDDVDzBTYt9G72tdaAK4qHu48qfGTtBBWX1pTZbskOEY9j1oX9DM4LKky9bxBSWrpdoPmaEzm1Pyo2QMcfcT1nSt6vXFfFAGu-24bvwtkvY1VnQwFPwnyEOL4GIdd6TfkOKkxKBXoddliUTKzEsMfclSZjNWpdLGkn3w7xAoNHzMdRUH5Wh2SMtzCzCTxCl4DFjKknFhKW-C97RuLjhRKATKC0zh1fpYSM",
  },
  {
    title: "SoHo Loft",
    slug: "soho-loft",
    location: "New York, USA",
    alt: "A single iconic chair in a stark white room.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAWXx2BxgtU-vED1Sma_PuAnYCPbmqlGTA65R65srL_HJrT6cmWR2ArPribcWZ4PLbCMP0bX__NpaeB4DXlnsoApKvq1QAXMr6ZL8ARLwonqS9ldgzPmfsIgoJLC2T46z9hL8Pkc5bXyebqnThabYG41vtYW0aOwiAR5NWGXPPNZPCJx-endRH7QzHz4Iem49NK4voXhdgkf8UYbODKT3V97sJQMRX5Acg9biARWk3-ACiYNfPGt7Jygx8LxFSCtdXT6OB0qooHQw",
  },
];
