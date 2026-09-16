import { SITE } from "@/constants/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DressmakersShop",
    name: SITE.name,
    image: `${SITE.url}/assets/hero/storefront.jpg`,
    telephone: SITE.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rampally",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    url: SITE.url,
    openingHours: "Mo-Su 09:00-21:00",
    sameAs: [SITE.instagram],
    priceRange: "₹₹",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
