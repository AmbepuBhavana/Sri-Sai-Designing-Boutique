export type ServiceId =
  | "maggam"
  | "embroidery"
  | "printing"
  | "blouse"
  | "bridal"
  | "custom"
  | "kids"
  | "alterations";

export type GalleryCategory =
  | "All"
  | "Maggam Work"
  | "Designer Blouses"
  | "Embroidery"
  | "Custom Stitching"
  | "Tassels"
  | "Designer Dresses & Frocks"
  | "Printing"
  | "Bridal Collection";

export interface Service {
  id: ServiceId;
  title: string;
  short: string;
  description: string;
  image: string;
  images?: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
