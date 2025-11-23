// app/projects/[slug]/page.tsx
import WhatsappButton from "@/component/WAbutton";
import Head from "next/head";
import { notFound } from "next/navigation";

const PROJECTS = [
    {
        title: "Mayfair Residence",
        slug: "mayfair-residence",
        location: "London, UK",
        year: "2024",
        services: "Luxury Interior Design & Consultation",
        description: [
            "Mayfair Residence is a sophisticated urban apartment designed to balance modern luxury with classical elegance. The design incorporates high-quality materials and sleek finishes to enhance the refined aesthetic.",
            "Attention to lighting and space planning ensures a comfortable and functional living environment. Art pieces and custom furnishings were integrated to reflect the client's unique taste and lifestyle.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6aeR9W-RkJROgZfVrSTmTUOR-bSmA3EJHFnJdDWc3xqsTQ9XegTvuNj3RmtSKD3H83odh5d_Ii_4d1RoMHK9kzWq38ug4_0qDuDIMkFousZ_6jQ3dzr3Bdn17VO4PMD6VZKNKnbSABrVnNxPaPwHZNMwwAJXPWBDV0DlghwXjgH9xvOy0piDkmR_dw5w_9cZpzsrARLXIHx---61vSS7yotkDrQqbR6aznR-BWBSjgsw-nNDGUVCLmAhd5VQ4Vwyl-K4RMEWtpA",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "Park Avenue Apartment",
        slug: "park-avenue-apartment",
        location: "New York, USA",
        year: "2023",
        services: "Full-Service Residential Interior Design",
        description: [
            "Park Avenue Apartment is a contemporary city residence designed with open spaces and natural light in mind. The interior blends modern materials with warm textures to create a welcoming environment.",
            "Key design elements include custom cabinetry, statement lighting fixtures, and bespoke furniture that aligns with the client's lifestyle and aesthetic preferences.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDRQiYmU0X0sBcwCr2SRG1QXwlyZl5FiriZFrnBsqMhejTcmjVvJbQoU3Mq0DTGu61BbtYe3x_Uabb_lmzV63uG6o8szY7P8ttkQ4j04lFapKP3otzURJwsnRPdg9CAvo0looaiuyqdQFCoaTH2R4JEhOpaoWzQiS0DaR3j51k4c3Ei2q4OMPDC8Bdo_NtstRaIUIoHNInz_12FTfOzOIkpnmqkP6dRk6H4pAtb8Zx3O8U_Fmeq89Wv1ugC5g9uVrR34JuriDIYv70",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "Coastal Sanctuary",
        slug: "coastal-sanctuary",
        location: "Malibu, USA",
        year: "2025",
        services: "Beachfront Interior Design",
        description: [
            "Coastal Sanctuary is a serene retreat designed to merge indoor and outdoor living. Neutral tones, natural wood, and expansive windows capture the coastal vibe.",
            "The design emphasizes relaxation and comfort while maintaining a stylish and modern aesthetic, perfect for a luxury beach home.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuC5o3pc7hVkldMa1KGQEa--JPtO0bFWe1tS_HLXM72hqsnaYAJ26iy1_psKzMZX7pfsXHkrgihuLONCSn_9MEChUyIqNWcdoUiFuRm27eMrPcWzm6wpwIbQ72E4CvhHRmU54cc7wgJ6Bp517nhKfiAfUwa3Msa9873xd2tC3Seaaxm9dsJR70uhuRDI09DzBoyOzCxSe1mTwZ2McDb2mpZy57FWL0EJGqaxW8CyhsudlnM9sLW9AX7zuDBJpx6eKsvDe_86WAQYrwI",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "The Glass House",
        slug: "the-glass-house",
        location: "Sydney, Australia",
        year: "2024",
        services: "Modern Glass Architecture & Interior Design",
        description: [
            "The Glass House is an architectural masterpiece that maximizes transparency and natural light. Interiors are kept minimal to highlight structural design and panoramic views.",
            "Materials such as glass, steel, and natural stone create a modern and luxurious environment, blending the interior seamlessly with its surroundings.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCifzGc6M0dI7zHQOzXllMcNO-GANCgfS3UriPxH5Q7Xl8E7p8Bvo1D7AYA4UJj5hTNcLVNMQX_xei-8UcCQA_BlXax5MJfRJJY8Vz3-7RoyJ9aFWA3qtcwHZbhjiYi5gbcxf6ISVkxFx7YIDSJBYGRdsUq4s0xf63IN3Vk4olpRQSjgvqqMEVQ84qwk8H52OPO-F5U1eggAFD379Rd9tMmCodxvSWnbNacBZ4HFWhgt4eKdsu2iSPTgAl2VEkxPwKgH9qbRCWcTfA",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "Desert Modern Villa",
        slug: "desert-modern-villa",
        location: "Palm Springs, USA",
        year: "2023",
        services: "Desert Luxury Residential Design",
        description: [
            "Desert Modern Villa combines modernist architecture with desert landscape. Interiors feature clean lines, earthy materials, and wide open spaces to complement the natural surroundings.",
            "Attention to outdoor living spaces, pools, and terraces ensures a seamless indoor-outdoor experience perfect for desert living.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9GNzC8LZ1rTc3uS3BrhbSY5TKBt-w8jr7A0h3ToPuc5lKh9rEh1skX61sfzwY0AxNZfN83LS1F39X0clK4dzE7zf-vwBrYS4VVIDusNc8wuyI-XDXcpyfXWn__EGpyuhw4zD3wnGyZLUYHM1Yhs6o1tI-taUFAYzH2qZAEca68NK5qghsb_GiEtmd1uYdbk9MX6vbNmnNk9Agd4ByTZP8xglsjamKUJBytw6-fXs3lOTUsUSWbS-ZJf13D6Ye0-QYnZD5oo-Kuw",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "Lakeside Retreat",
        slug: "lakeside-retreat",
        location: "London, UK",
        year: "2023",
        services: "Full-Service Interior Design",
        description: [
        "The Kensington Residence project was born from a desire to create a sanctuary of calm within the vibrant heart of London. Our design philosophy centered on the principles of wabi-sabi, finding beauty in imperfection and embracing a natural, understated aesthetic. We worked closely with the client to understand their vision for a home that was both a peaceful retreat and a functional space for modern living.",
        "Materiality was key. We sourced natural materials like European oak, travertine, and hand-applied lime wash to build a tactile and visually serene palette. Each element was chosen for its ability to age gracefully, adding character to the space over time. The layout was reconfigured to maximize natural light, creating an open, flowing sequence of rooms that feel both spacious and intimate.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAraIjfQ9L4IvYhhkcJR7hXu_dqQI_I2OSlRdG0MY6KTkI-pvQyJLkKwPZ49W9uHpB2eqWSnYO6r0NicXiV_y2EVqsK8y3p64wRpddhdltKqRlGS202WilMGCn_iZuK7GTO6owDfuOl8TCJcjy3E-Ek9EfBiMOB4ymtn2N2MDpvHsCkRHRrbzg1DL9D1-qaP_WmYFQv8TLaH5JU2jnAlA2V9O5aOqY_Fw4682SAwOmLGOl9cees37f9tiNwSm5OJiERj6CvTAMqEuY",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "City Penthouse",
        slug: "city-penthouse",
        location: "London, UK",
        year: "2023",
        services: "Full-Service Interior Design",
        description: [
        "The Kensington Residence project was born from a desire to create a sanctuary of calm within the vibrant heart of London. Our design philosophy centered on the principles of wabi-sabi, finding beauty in imperfection and embracing a natural, understated aesthetic. We worked closely with the client to understand their vision for a home that was both a peaceful retreat and a functional space for modern living.",
        "Materiality was key. We sourced natural materials like European oak, travertine, and hand-applied lime wash to build a tactile and visually serene palette. Each element was chosen for its ability to age gracefully, adding character to the space over time. The layout was reconfigured to maximize natural light, creating an open, flowing sequence of rooms that feel both spacious and intimate.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6QrGECquVNTguBP1tbxPArhnNquS8SjH8G0bqng1jfdiVdiRWR7d4nW5UTd846oWQETwf7CuUrnc7wrDZiyQ_ha7ycWcyGJACHIGEGae4vQvExPlPYqotuNj8Mwieoe74WzYV-UW2MSZ2mEZtoIX5uZWDTVpC7HSVuN5UjAkCknYSdsAW3Q-zezURQzdbiG76Ps4f3psBJXG1z6RxoQUTuzkihcxK92fW23p7ErFdIoATw4CIp76RbGoDqHU8p5K-rcGzGop9cE",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "Hillside Estate",
        slug: "hillside-estate",
        location: "London, UK",
        year: "2023",
        services: "Full-Service Interior Design",
        description: [
        "The Kensington Residence project was born from a desire to create a sanctuary of calm within the vibrant heart of London. Our design philosophy centered on the principles of wabi-sabi, finding beauty in imperfection and embracing a natural, understated aesthetic. We worked closely with the client to understand their vision for a home that was both a peaceful retreat and a functional space for modern living.",
        "Materiality was key. We sourced natural materials like European oak, travertine, and hand-applied lime wash to build a tactile and visually serene palette. Each element was chosen for its ability to age gracefully, adding character to the space over time. The layout was reconfigured to maximize natural light, creating an open, flowing sequence of rooms that feel both spacious and intimate.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3qbSK5PIimfWXK2PwEV8Z007mUrxKH5IFhHPJbaxTqDDVDzBTYt9G72tdaAK4qHu48qfGTtBBWX1pTZbskOEY9j1oX9DM4LKky9bxBSWrpdoPmaEzm1Pyo2QMcfcT1nSt6vXFfFAGu-24bvwtkvY1VnQwFPwnyEOL4GIdd6TfkOKkxKBXoddliUTKzEsMfclSZjNWpdLGkn3w7xAoNHzMdRUH5Wh2SMtzCzCTxCl4DFjKknFhKW-C97RuLjhRKATKC0zh1fpYSM",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    {
        title: "SoHo Loft",
        slug: "soho-loft",
        location: "London, UK",
        year: "2023",
        services: "Full-Service Interior Design",
        description: [
        "The Kensington Residence project was born from a desire to create a sanctuary of calm within the vibrant heart of London. Our design philosophy centered on the principles of wabi-sabi, finding beauty in imperfection and embracing a natural, understated aesthetic. We worked closely with the client to understand their vision for a home that was both a peaceful retreat and a functional space for modern living.",
        "Materiality was key. We sourced natural materials like European oak, travertine, and hand-applied lime wash to build a tactile and visually serene palette. Each element was chosen for its ability to age gracefully, adding character to the space over time. The layout was reconfigured to maximize natural light, creating an open, flowing sequence of rooms that feel both spacious and intimate.",
        ],
        images: [
        {
            src: 
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAAWXx2BxgtU-vED1Sma_PuAnYCPbmqlGTA65R65srL_HJrT6cmWR2ArPribcWZ4PLbCMP0bX__NpaeB4DXlnsoApKvq1QAXMr6ZL8ARLwonqS9ldgzPmfsIgoJLC2T46z9hL8Pkc5bXyebqnThabYG41vtYW0aOwiAR5NWGXPPNZPCJx-endRH7QzHz4Iem49NK4voXhdgkf8UYbODKT3V97sJQMRX5Acg9biARWk3-ACiYNfPGt7Jygx8LxFSCtdXT6OB0qooHQw",
            alt: "A bright, minimalist living room with a large cream sofa and floor-to-ceiling windows.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRH_fX9MjanfBkWv2gESHMCmMVJsw2MoZY_ynfYREcavB7fKR9RG3aKL2Uk1FKxe8srqTUXHII-qtkGY626SQD8Afrnl5UZcDIne_2mImUdTLfRa4Wmc8530t1Gz6OOWrpI0PdQG8mltwtwcpIPU7rm3mZPFjiEXtDPrIkGaeim_I2VTEugLb3TP6IJIpiir-HlOC_mddF5lKQhCg1XkyWup7pfSh4N-saUCUGBKiPrcxjO4eUOCWLm8zCWe5MbemBO_IbsqgH8U",
            alt: "Detail shot of a textured plaster wall with a modern art piece.",
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEXyFrcuBlnJlOOdssKEEGGrY1fiZwTMn4ruGico4gKWGkwKUMJLYexXRdaOsPaPn-5nwePpnGTsiE-FotRkCkltohIR-Pf5fqfio07-hS5qA22QdjARZxiilZVpPGuCBgr2qNgdFCtLpu94GAFMW5GrTX4IJka0DJyn4cwkhhzC5Skd4BPD_sWSgigLR0YbvvCg_K5fIHehHxsWQdoUNbfqQiZjOpdcydkMR9LODCTOTTneAD-CDml-OS2igzIB9RJwrWr04abXc",
            alt: "A minimalist kitchen with light wood cabinetry and marble countertops.",
        },
        ],
    },
    // Tambahkan project lain di sini dengan slug unik
];

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
            <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
                        {/* HEADER */}
                        <section className="text-center px-4">
                            <h1 className="font-serif text-charcoal dark:text-black-100 tracking-tight text-4xl sm:text-5xl md:text-6xl font-medium leading-tight pb-3 pt-6">
                            {project.title}
                            </h1>
                            <p className="text-taupe dark:text-black-400 text-sm font-normal leading-normal pt-1">
                            {project.location}
                            </p>
                        </section>

                        {/* IMAGE GALLERY */}
                        <section className="flex flex-col gap-6 md:gap-8">
                            {project.images.map((img, idx) => (
                            <div key={idx} className="flex w-full grow bg-cream dark:bg-background-dark @container">
                                <div className="w-full gap-1 overflow-hidden bg-cream dark:bg-background-dark @[480px]:gap-2 aspect-[3/2] flex">
                                <div
                                    className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                                    style={{ backgroundImage: `url("${img.src}")` }}
                                    data-alt={img.alt}
                                />
                                </div>
                            </div>
                            ))}
                        </section>

                        {/* DESCRIPTION */}
                        <section className="px-4 py-8">
                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                            <div className="md:col-span-2 space-y-4 text-charcoal/90 dark:text-black-300 text-base leading-relaxed">
                                {project.description.map((p, i) => (
                                <p key={i}>{p}</p>
                                ))}
                            </div>
                            <div className="space-y-6">
                                <div className="pb-3 border-b border-taupe/30 dark:border-black-600">
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-taupe dark:text-black-400 mb-1">Location</h3>
                                <p className="text-charcoal dark:text-black-200">{project.location}</p>
                                </div>
                                <div className="pb-3 border-b border-taupe/30 dark:border-black-600">
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-taupe dark:text-black-400 mb-1">Year</h3>
                                <p className="text-charcoal dark:text-black-200">{project.year}</p>
                                </div>
                                <div className="pb-3 border-b border-taupe/30 dark:border-black-600">
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-taupe dark:text-black-400 mb-1">Services</h3>
                                <p className="text-charcoal dark:text-black-200">{project.services}</p>
                                </div>
                            </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    </div>
  );
}