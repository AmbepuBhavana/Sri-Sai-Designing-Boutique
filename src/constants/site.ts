import type { FaqItem, GalleryItem, Service, Testimonial } from "@/types";

const SITE_URL = "https://srisaidesigningboutiquerampally.vercel.app";

export const SITE = {
  name: "Sri Sai Designing Boutique",
  shortName: "Sri Sai",
  tagline:
    "Creating Beautiful Designs with Maggam Work, Computer Embroidery, Printing & Custom Stitching.",
  phone: "9542404498",
  phoneDisplay: "+91 95424 04498",
  phoneHref: "tel:+919542404498",
  whatsapp: "919542404498",
  hours: "9 AM – 9 PM",
  hoursNote: "Open all days",
  address: "Rampally, Hyderabad, Telangana",
  instagram: "https://www.instagram.com/sri_sai_designing_boutique",
  instagramHandle: "@sri_sai_designing_boutique",
  instagramReel: "https://www.instagram.com/reel/DbN9GCDT-Jl/?igsh=ZmpqMW43ejFnbjFu",
  mapsShare: "https://maps.app.goo.gl/WdERjk4D7cJ1CqPt5",
  googleReviews: "https://share.google/HITjcAZ1kcU19Aytk",
  mapsEmbed:
    "https://maps.google.com/maps?q=Sri+Sai+Designing+Boutique,Rampally,Hyderabad,Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
  email: "hello@srisai.designingboutique.in",
  url: SITE_URL,
} as const;

export const WHATSAPP_WELCOME_MESSAGE = `Hello 👋

Welcome to ${SITE.name} ✨

Thank you for choosing us!

✨ Our Services:
• Designer & Bridal Blouses
• Maggam Work
• Computer Embroidery
• Custom Stitching
• Printing Work
• Designer Dresses

📍 Location: ${SITE.mapsShare}
📞 Contact: ${SITE.phone}
🌐 Website: ${SITE.url}

You can explore our services, designs and latest work on our website.

For appointments and enquiries, feel free to contact us on WhatsApp.

Thank you for choosing ${SITE.name} ❤️`;

export const waLink = (text = WHATSAPP_WELCOME_MESSAGE) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HIGHLIGHT_CREATION = {
  src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279064/Gemini_Generated_Image_dzsdffdzsdffdzsd.png",
  tag: "ATELIER MASTERPIECE",
  title: "Signature Couture Blouse",
  subtitle: "Handcrafted Bridal Maggam Excellence",
  description:
    "An exquisite pinnacle of Sri Sai Designing Boutique — pure raw silk canvas adorned with heritage gold zardosi embroidery, delicate French knots, cut-work borders, and tailored to perfection in Rampally.",
};

export const SERVICES: Service[] = [
  {
    id: "maggam",
    title: "Maggam Work",
    short: "Hand-stitched zardosi and aari that turns silk into heirlooms.",
    description:
      "Traditional maggam, zardosi and aari artistry for bridal blouses, lehengas and statement borders — every motif placed by hand.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279140/mgpic4.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789279140/mgpic4.jpg",
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789279077/Gemini_Generated_Image_a360bza360bza360_1.png",
    ],
  },
  {
    id: "embroidery",
    title: "Computer Embroidery",
    short: "Digitized precision with layered, couture texture.",
    description:
      "Flawless repeats, dense fills and delicate outlines produced in-house so your design stays consistent across every piece.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd1.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd1.jpg",
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd5.jpg",
    ],
  },
  {
    id: "custom",
    title: "Custom Stitching",
    short: "Dresses, gowns and occasion wear tailored to your sketch.",
    description:
      "Bring a reference, a fabric, or an idea. We pattern, stitch and finish until it feels like it was always yours.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196106/cs5.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196106/cs5.jpg",
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196136/cs3.jpg",
    ],
  },
  {
    id: "kids",
    title: "Dresses & Frocks / Kids Wear",
    short: "Lehengas, frocks and festive sets made for celebrations.",
    description:
      "Lehengas, frocks and coordinated looks — soft on skin, rich in detail, sized to grow through every celebration.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196478/frck1.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196478/frck1.jpg",
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196399/frck12.jpg",
    ],
  },
  {
    id: "bridal",
    title: "Bridal Wear Designing",
    short: "Maggam-heavy blouses and bridal ensembles.",
    description:
      "Once-in-a-lifetime pieces built around your saree or lehenga, with fittings until the drape is perfect.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196403/mgpic1.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196403/mgpic1.jpg",
    ],
  },
  {
    id: "blouse",
    title: "Designer Blouse Stitching",
    short: "Tailored-to-measure blouses with couture finishing.",
    description:
      "Back-neck drama, sleeves, lining and fall — cut to your body so the saree sits with quiet confidence.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196109/cs6.jpg",
    images: [
      "https://res.cloudinary.com/ag114ghj/image/upload/v1789196109/cs6.jpg",
    ],
  },
  {
    id: "printing",
    title: "Printing Works",
    short: "Block, screen and digital prints on any fabric.",
    description:
      "From festive borders to full-panel prints, we bring your motif to cloth with crisp colour and lasting finish.",
    image: "/assets/gallery/g1-05.jpg",
  },
  {
    id: "alterations",
    title: "Alterations",
    short: "Take-in, restyle and perfect an existing garment.",
    description:
      "Professional fitting for blouses, dresses and lehengas so every piece you already love sits as it should.",
    image: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd5.jpg",
  },
];

export const WHY_US = [
  { title: "Premium Quality", copy: "Luxury threads and fabrics that last seasons, not just events." },
  { title: "Expert Craftsmanship", copy: "Decades of couture and maggam expertise in every stitch." },
  { title: "Perfect Fit", copy: "Custom tailoring to your exact measurements — never standard sizes." },
  { title: "On-Time Delivery", copy: "We respect your function dates. Planning, stitching, and delivery on schedule." },
] as const;

export const STATS = [
  { value: 1500, suffix: "+", label: "Designs delivered", decimals: 0 },
  { value: 15, suffix: "+", label: "Years of craft", decimals: 0 },
  { value: 4.9, suffix: "", label: "Average client rating", decimals: 1 },
  { value: 8, suffix: "", label: "Atelier services", decimals: 0 },
] as const;

export interface FeaturedItem {
  src: string;
  tag: string;
  title: string;
  subtitle: string;
  label: string;
  enquiryText: string;
}

export interface FeaturedPair {
  id: string;
  themeTitle: string;
  left: FeaturedItem;
  right: FeaturedItem;
}

export const FEATURED_PAIRS: FeaturedPair[] = [
  {
    id: "maggam-and-embroidery",
    themeTitle: "Maggam Work & Computer Embroidery",
    left: {
      src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789038088/bq1.mp4",
      tag: "HANDCRAFTED MAGGAM",
      title: "Bridal Zardosi Artistry",
      subtitle: "Needle-by-needle artisanal embroidery using authentic gold wire and beads.",
      label: "Artisanal bridal maggam embroidery reel",
      enquiryText: "Hi Sri Sai Boutique, I loved the Handcrafted Bridal Maggam video in your Crafted with Detail section and would like to enquire about getting one made.",
    },
    right: {
      src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789196437/frck16.mp4",
      tag: "OCCASION WEAR",
      title: "Designer Frock Drape & Flair",
      subtitle: "Custom festive silhouettes tailored to measure for celebrations and birthdays.",
      label: "Designer frock drape and movement video",
      enquiryText: "Hi Sri Sai Boutique, I saw the Designer Frock video in Crafted with Detail and would like to enquire about custom frock stitching.",
    },
  },
  {
    id: "bridal-and-frock",
    themeTitle: "Bridal Statement & Designer Frock",
    left: {
      src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789045879/bq5.mp4",
      tag: "BRIDAL STATEMENT",
      title: "Imperial Neckline Detailing",
      subtitle: "Grand zardosi necklines designed to frame traditional South Indian wedding silks.",
      label: "Bridal neckline maggam embroidery reel",
      enquiryText: "Hi Sri Sai Boutique, I saw the Imperial Neckline Maggam work in Crafted with Detail and would love to design my bridal blouse with you.",
    },
    right: {
      src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789105081/cd3.mp4",
      tag: "COMPUTER EMBROIDERY",
      title: "High-Speed Digitized Precision",
      subtitle: "Dense floral fills, razor-sharp outlines, and uniform couture repeats.",
      label: "Computer embroidery machine precision craft video",
      enquiryText: "Hi Sri Sai Boutique, I loved the Computer Embroidery video in your Crafted with Detail section and would like to enquire about your embroidery services.",
    },
  },
  {
    id: "motifs-and-tassels",
    themeTitle: "Artisan Motifs & Bespoke Tassels",
    left: {
      src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046434/bq8.mp4",
      tag: "INTRICATE MOTIFS",
      title: "Artisan Floral Cutwork",
      subtitle: "Micro-beading, kundan stones, and dimensional floral petals on raw silk.",
      label: "Intricate floral cutwork maggam reel",
      enquiryText: "Hi Sri Sai Boutique, I saw the Floral Cutwork Maggam in Crafted with Detail and want to ask about custom motif embroidery.",
    },
    right: {
      src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196681/ts4.jpg",
      tag: "BESPOKE FINISHING",
      title: "Handcrafted Latkan Tassels",
      subtitle: "Handmade silk latkans and pearl drops crafted to elevate every bridal back-neck.",
      label: "Handcrafted bridal blouse latkan tassels",
      enquiryText: "Hi Sri Sai Boutique, I love your Handcrafted Latkan Tassels in Crafted with Detail and want to order matching tassels for my blouse.",
    },
  },
];

export const FEATURED = FEATURED_PAIRS.flatMap((p) => [p.left, p.right]);


export const GALLERY: GalleryItem[] = [
  // --- HIGHLIGHTED IN ALL ---
  { id: "mg-highlight-f4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629135/mgf4.jpg", alt: "Featured bridal maggam work design 4", category: "Maggam Work" },
  { id: "mg-highlight-pic5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196673/mgpic5.jpg", alt: "Featured bridal maggam blouse craft", category: "Maggam Work" },
  { id: "mg-highlight-bq4", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789045953/bq4.mp4", alt: "Featured boutique maggam artisan work video", category: "Maggam Work" },
  { id: "mg-highlight-pic3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196405/mgpic3.jpg", alt: "Featured bridal maggam work blouse design", category: "Maggam Work" },
  { id: "df-highlight-14", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196406/frck14.jpg", alt: "Featured custom stitched festive dress", category: "Designer Dresses & Frocks" },
  { id: "df-highlight-17", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789196471/frck17.mp4", alt: "Featured boutique frock creation video", category: "Designer Dresses & Frocks" },

  // --- CUSTOM STITCHING ---
  { id: "cs-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196106/cs5.jpg", alt: "Custom designer blouse stitching", category: "Custom Stitching" },
  { id: "cs-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196109/cs6.jpg", alt: "Bespoke custom blouse cut and finish", category: "Custom Stitching" },
  { id: "cs-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196136/cs3.jpg", alt: "Custom tailored blouse neckline pattern", category: "Custom Stitching" },
  { id: "cs-4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196137/cs2.jpg", alt: "Precision custom stitching", category: "Custom Stitching" },
  { id: "cs-5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196140/cs1.jpg", alt: "Luxury custom tailored piece", category: "Custom Stitching" },
  { id: "cs-new-custom1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789635767/custom1.jpg", alt: "Custom stitching boutique design", category: "Custom Stitching" },

  // --- TASSELS ---
  { id: "ts-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196681/ts4.jpg", alt: "Handmade bridal blouse tassels", category: "Tassels" },
  { id: "ts-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196647/ts1.jpg", alt: "Custom beaded latkan tassels", category: "Tassels" },
  { id: "ts-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196642/ts3.jpg", alt: "Silk thread designer tassels", category: "Tassels" },
  { id: "ts-4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196641/ts7.jpg", alt: "Intricate zari latkan tassels", category: "Tassels" },
  { id: "ts-5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196640/ts5.jpg", alt: "Traditional back-neck tassels", category: "Tassels" },
  { id: "ts-6", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196638/ts2.jpg", alt: "Potli and bead handcrafted tassels", category: "Tassels" },

  // --- DESIGNER DRESSES & FROCKS ---
  { id: "df-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196393/frck4.jpg", alt: "Designer long frock with pleats", category: "Designer Dresses & Frocks" },
  { id: "df-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196395/frck6.jpg", alt: "Festive flared designer dress", category: "Designer Dresses & Frocks" },
  { id: "df-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196395/frck8.jpg", alt: "Handcrafted boutique designer frock", category: "Designer Dresses & Frocks" },
  { id: "df-4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196395/frck5.jpg", alt: "Pastel custom stitched frock", category: "Designer Dresses & Frocks" },
  { id: "df-5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196396/frck9.jpg", alt: "Festive celebration designer gown", category: "Designer Dresses & Frocks" },
  { id: "df-6", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196396/frck3.jpg", alt: "Floral pattern boutique dress", category: "Designer Dresses & Frocks" },
  { id: "df-7", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196397/frck2.jpg", alt: "Tiered silk designer frock", category: "Designer Dresses & Frocks" },
  { id: "df-8", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196397/frck13.jpg", alt: "Embellished yoke designer dress", category: "Designer Dresses & Frocks" },
  { id: "df-9", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196399/frck12.jpg", alt: "Modern silhouette evening dress", category: "Designer Dresses & Frocks" },
  { id: "df-10", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196398/frck10.jpg", alt: "Bespoke stitched frock with border", category: "Designer Dresses & Frocks" },
  { id: "df-11", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196399/frck11.jpg", alt: "Handcrafted occasion frock", category: "Designer Dresses & Frocks" },
  { id: "df-12", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196404/frck15.jpg", alt: "Elegant boutique designer frock", category: "Designer Dresses & Frocks" },
  { id: "df-14", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789196437/frck16.mp4", alt: "Designer dress drape video", category: "Designer Dresses & Frocks" },
  { id: "df-16", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196478/frck1.jpg", alt: "Pink custom stitched frock", category: "Designer Dresses & Frocks" },
  { id: "df-17", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789196532/frck_19.mp4", alt: "Designer frock twirl video", category: "Designer Dresses & Frocks" },

  // --- MAGGAM WORK ---
  { id: "mg-masterpiece", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279064/Gemini_Generated_Image_dzsdffdzsdffdzsd.png", alt: "Signature bridal maggam blouse masterpiece", category: "Maggam Work" },
  { id: "mg-pic4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279140/mgpic4.jpg", alt: "Intricate handcrafted maggam work", category: "Maggam Work" },
  { id: "mg-gen1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279077/Gemini_Generated_Image_a360bza360bza360_1.png", alt: "Bespoke bridal maggam blouse design", category: "Maggam Work" },
  { id: "mg-v1", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789038088/bq1.mp4", alt: "Bridal maggam embroidery reel 1", category: "Maggam Work" },
  { id: "mg-v2", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789044375/bq2.mp4", alt: "Maggam blouse sleeve detailing reel 2", category: "Maggam Work" },
  { id: "mg-v3", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789045873/bq10.mp4", alt: "Fine zardosi needlework reel 10", category: "Maggam Work" },
  { id: "mg-v4", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789045879/bq5.mp4", alt: "Grand bridal neckline maggam reel 5", category: "Maggam Work" },
  { id: "mg-v5", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789045913/bq9.mp4", alt: "Handcrafted bead and thread maggam reel 9", category: "Maggam Work" },
  { id: "mg-v7", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046434/bq8.mp4", alt: "Intricate maggam floral pattern reel 8", category: "Maggam Work" },
  { id: "mg-v8", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046437/bq13.mp4", alt: "Bridal blouse zardosi finish reel 13", category: "Maggam Work" },
  { id: "mg-v9", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046464/bq12.mp4", alt: "Maggam hand embroidery craftsmanship reel 12", category: "Maggam Work" },
  { id: "mg-v10", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046468/bq7.mp4", alt: "Gold zardosi border maggam reel 7", category: "Maggam Work" },
  { id: "mg-v11", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046556/bq11.mp4", alt: "Exquisite bridal blouse motif reel 11", category: "Maggam Work" },
  { id: "mg-v12", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789046569/bq6.mp4", alt: "Traditional maggam artistry reel 6", category: "Maggam Work" },
  { id: "mg-old2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196401/mgpic2.jpg", alt: "Bridal maggam blouse zardosi craft", category: "Maggam Work" },
  { id: "mg-new-f5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629136/mgf5.jpg", alt: "Detailed bridal maggam work design 5", category: "Maggam Work" },
  { id: "mg-new-f3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629135/mgf3.jpg", alt: "Detailed bridal maggam work design 3", category: "Maggam Work" },
  { id: "mg-new-f1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629013/mgf1.jpg", alt: "Detailed bridal maggam work design 1", category: "Maggam Work" },
  { id: "mg-new-f2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629085/mgf2.jpg", alt: "Detailed bridal maggam work design 2", category: "Maggam Work" },
  { id: "mg-new-f11", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789635747/mgf11.jpg", alt: "Detailed bridal maggam work design 11", category: "Maggam Work" },
  { id: "mg-new-f12", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789635752/mgf12.mp4", alt: "Bridal maggam work craftsmanship video 12", category: "Maggam Work" },

  // --- EMBROIDERY ---
  { id: "em-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105045/cd2.jpg", alt: "Precision computer embroidery design 2", category: "Embroidery" },
  { id: "em-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105045/cd4.jpg", alt: "Computer embroidery neck design 4", category: "Embroidery" },
  { id: "em-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105045/cd6.jpg", alt: "Intricate floral embroidery pattern 6", category: "Embroidery" },
  { id: "em-4", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd5.jpg", alt: "Precision embroidery thread work 5", category: "Embroidery" },
  { id: "em-5", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd8.jpg", alt: "Custom embroidery pattern detailing 8", category: "Embroidery" },
  { id: "em-6", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105046/cd1.jpg", alt: "Computer embroidery blouse pattern 1", category: "Embroidery" },
  { id: "em-7", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105047/cd7.jpg", alt: "Designer embroidery neckline 7", category: "Embroidery" },
  { id: "em-8", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105047/cd10.jpg", alt: "Boutique computer embroidery 10", category: "Embroidery" },
  { id: "em-9", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105047/cd9.jpg", alt: "Computer embroidery detailed work 9", category: "Embroidery" },
  { id: "em-10", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789105048/cd11.jpg", alt: "Fine thread embroidery finish 11", category: "Embroidery" },
  { id: "em-11", src: "https://res.cloudinary.com/ag114ghj/video/upload/v1789105081/cd3.mp4", alt: "Computer embroidery machine craft video", category: "Embroidery" },

  // --- DESIGNER BLOUSES ---
  { id: "db-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196109/cs6.jpg", alt: "Designer blouse cut and styling", category: "Designer Blouses" },
  { id: "db-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196106/cs5.jpg", alt: "Designer blouse pattern and cut", category: "Designer Blouses" },
  { id: "db-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196136/cs3.jpg", alt: "Custom tailored blouse neckline pattern", category: "Designer Blouses" },
  { id: "db-4", src: "/assets/gallery/g1-02.jpg", alt: "Red designer blouse on mannequin", category: "Designer Blouses" },
  { id: "db-5", src: "/assets/gallery/g2-01.jpg", alt: "Purple gold designer blouse", category: "Designer Blouses" },
  { id: "db-new-ds1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789629240/ds1.jpg", alt: "New designer blouse detail", category: "Designer Blouses" },

  // --- BRIDAL COLLECTION ---
  { id: "br-masterpiece", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279064/Gemini_Generated_Image_dzsdffdzsdffdzsd.png", alt: "Signature bridal couture masterpiece blouse", category: "Bridal Collection" },
  { id: "br-1", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196403/mgpic1.jpg", alt: "Bridal blouse gold zardosi neckline", category: "Bridal Collection" },
  { id: "br-2", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789196401/mgpic2.jpg", alt: "Bridal heavy maggam zardosi blouse", category: "Bridal Collection" },
  { id: "br-3", src: "https://res.cloudinary.com/ag114ghj/image/upload/v1789279077/Gemini_Generated_Image_a360bza360bza360_1.png", alt: "Designer royal bridal blouse", category: "Bridal Collection" },
  { id: "br-4", src: "/assets/gallery/g1-04.jpg", alt: "Emerald gold bridal blouse", category: "Bridal Collection" },
  { id: "br-5", src: "/assets/gallery/g1-06.jpg", alt: "Beaded bridal blouse on form", category: "Bridal Collection" },
  { id: "br-6", src: "/assets/gallery/g5-04.jpg", alt: "Gold and maroon custom gown", category: "Bridal Collection" },

  // --- PRINTING ---
  { id: "pr-1", src: "/assets/gallery/g1-05.jpg", alt: "Printed silk fabric panel", category: "Printing" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "S Lolitha Manem",
    role: "Google Review",
    initials: "SL",
    quote:
      "They give very good fitting for dresses and blouses. Loved the outfit. Whatever design we ask for, they make exactly the same outfit. Very reasonable prices and on time. Good boutique near RAMPALLY.",
  },
  {
    id: "t2",
    name: "Kaduru Deekshitha",
    role: "Google Review",
    initials: "KD",
    quote:
      "Had a great experience with Sri Sai Designing Boutique. The designs are stylish and the stitching quality is really good. They take care of measurements properly and deliver well-finished outfits. Definitely a good place for quality boutique work.",
  },
  {
    id: "t3",
    name: "Beemagoni Divya Goud",
    role: "Google Review",
    initials: "BD",
    quote:
      "I had a wonderful experience with this boutique. The stitching quality is excellent and the fitting of the blouse is perfect. They pay attention to every small detail and deliver the dress on time. The staff are very polite and helpful. I will definitely come back again for my next blouse stitching.",
  },
  {
    id: "t4",
    name: "A. Bhavana",
    role: "Google Review",
    initials: "AB",
    quote:
      "The boutique truly met my expectations! Great collection, quality pieces, and excellent service. Definitely worth a visit!",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "How do I book a custom design?",
    a: "Tap WhatsApp, share a photo or idea, and our designers will guide fabric, measurements and timeline — from your phone or in the boutique.",
  },
  {
    q: "Do you do bridal blouse maggam work?",
    a: "Yes. Maggam, zardosi and aari on bridal blouses is a signature craft. Sit with us or send the saree reference and we will build around it.",
  },
  {
    q: "What are your working hours?",
    a: "We are open every day from 9 AM to 9 PM at Rampally, Hyderabad.",
  },
  {
    q: "Can I bring my own fabric?",
    a: "Absolutely. Most clients bring their own silk or organza. We source matching threads, laces and tassels when needed.",
  },
  {
    q: "Do you offer alterations?",
    a: "Yes. We take in, restyle and refit blouses, dresses and lehengas for a clean, flattering line.",
  },
  {
    q: "Do you take family or bulk orders?",
    a: "Yes — bridesmaid sets, family functions and small boutique runs. Message quantities and the event date on WhatsApp.",
  },
];

export const GALLERY_FILTERS = [
  "All",
  "Maggam Work",
  "Designer Blouses",
  "Embroidery",
  "Custom Stitching",
  "Tassels",
  "Designer Dresses & Frocks",
  "Printing",
  "Bridal Collection",
] as const;
