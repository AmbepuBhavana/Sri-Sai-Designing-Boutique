import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { SERVICES, WHY_US, waLink } from "@/constants/site";
import type { Service } from "@/types";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const images = service.images && service.images.length > 0 ? service.images : [service.image];
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((curr) => (curr - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIdx((curr) => (curr + 1) % images.length);
  };

  const currentImg = images[activeIdx];

  return (
    <Reveal delay={index * 0.04}>
      <motion.article
        whileHover={{ y: -6 }}
        className="gold-border group flex flex-col overflow-hidden rounded-2xl bg-card transition-all duration-300 hover:border-gold/60"
      >
        {/* Generous Portrait Frame for Full Outfit Visibility (No Cutting) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950 flex items-center justify-center border-b border-gold/15 select-none">
          {/* Full Outfit Uncropped */}
          <SafeImage
            src={currentImg}
            alt={`${service.title} creation at Sri Sai Designing Boutique`}
            className="relative z-10 h-full w-full object-contain p-2 sm:p-2.5 transition duration-500 group-hover:scale-[1.02]"
          />

          {/* Top Left Sparkle Badge */}
          <div className="absolute left-3 top-3 z-20 rounded-full bg-black/70 p-2 text-gold border border-gold/25">
            <Sparkles size={14} />
          </div>

          {/* Multiple Outfits Counter Badge */}
          {images.length > 1 && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-medium text-gold border border-gold/30">
              <span>{activeIdx + 1} of {images.length} Outfits</span>
            </div>
          )}

          {/* Carousel Arrows if multiple images */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous outfit photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white/90 hover:text-gold border border-white/20 transition active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next outfit photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white/90 hover:text-gold border border-white/20 transition active:scale-95"
              >
                <ChevronRight size={16} />
              </button>

              {/* Dots selector */}
              <div className="absolute bottom-2.5 inset-x-0 z-20 flex justify-center items-center gap-1.5">
                {images.map((img, idx) => (
                  <button
                    key={img}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveIdx(idx);
                    }}
                    aria-label={`Show outfit photo ${idx + 1}`}
                    className={`h-1.5 transition-all rounded-full ${
                      idx === activeIdx ? "w-6 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-white">{service.title}</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/65">{service.short}</p>
          </div>
          <a
            href={waLink(`Hi, I would like to know more about ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center text-xs font-medium tracking-[0.18em] text-gold hover:text-white transition"
          >
            START YOUR DESIGN →
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="px-3 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-gold uppercase">THE SERVICE ATELIER</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl">
          Craftsmanship for <em className="gold-italic">every occasion</em>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/65">Eight in-house crafts. One WhatsApp conversation to begin.</p>
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-3 sm:px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <Reveal>
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-gold uppercase">WHY CHOOSE US</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl">
          Crafted with <em className="gold-italic">excellence</em>
        </h2>
        <p className="mt-3 sm:mt-5 max-w-md text-sm sm:text-base text-white/65">
          Premium quality, perfect fit, and on-time delivery — every time.
        </p>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2">
        {WHY_US.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.04}>
            <div className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-gold/40">
              <h3 className="text-sm font-medium">{w.title}</h3>
              <p className="mt-1 text-sm text-white/55">{w.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
