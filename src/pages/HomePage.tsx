import { About } from "@/components/home/About";
import { Contact, Newsletter } from "@/components/home/Contact";
import { Featured } from "@/components/home/Featured";
import { Gallery, Instagram } from "@/components/home/Gallery";
import { CtaBanner, Hero } from "@/components/home/Hero";
import { MasterpieceSpotlight } from "@/components/home/MasterpieceSpotlight";
import { Services, WhyChoose } from "@/components/home/Services";
import { FAQ, Testimonials } from "@/components/home/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MasterpieceSpotlight />
      <CtaBanner
        title="Ready to design your dream outfit?"
        copy="Share a reference on WhatsApp. We’ll guide fabric, maggam, measurements and the date."
      />
      <Services />
      <WhyChoose />
      <Featured />
      <CtaBanner
        title="Book your custom stitching today"
        copy="Walk into the Rampally atelier between 9 AM and 9 PM, or start on WhatsApp now."
      />
      <Gallery />
      <Instagram />
      <Testimonials />
      <FAQ />
      <Contact />
      <Newsletter />
    </>
  );
}
