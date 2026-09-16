import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { HIGHLIGHT_CREATION, SITE, waLink } from "@/constants/site";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export function MasterpieceSpotlight() {
  const enquiryText = `Hi ${SITE.name}, I saw your Signature Atelier Masterpiece (Bridal Maggam Blouse) on your website and would love to know more about ordering this custom design.`;

  return (
    <section className="relative overflow-hidden px-3 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-medium tracking-[0.3em] text-gold uppercase">
            <Sparkles size={13} className="text-gold animate-pulse" />
            <span>{HIGHLIGHT_CREATION.tag}</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
            Spotlight on Our <em className="gold-italic">Signature Creation</em>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/70">
            A pinnacle of Rampally craftsmanship — hand-laid zardosi embroidery, rich bridal raw silk, and artisanal perfection.
          </p>
        </Reveal>

        {/* Masterpiece Showcase Container */}
        <div className="mt-10 sm:mt-14 overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-[#1c1811] via-[#100d09] to-black p-4 sm:p-7 md:p-9 ring-1 ring-gold/20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
            {/* Left: The Masterpiece Framed Image (Full Outfit Visible, Uncropped) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Luxury Atelier Frame with Corner Accents */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#2a2214] to-[#0a0907] border border-gold/50">
                {/* Corner details */}
                <div className="pointer-events-none absolute -top-1 -left-1 h-4 w-4 rounded-tl border-t-2 border-l-2 border-gold" />
                <div className="pointer-events-none absolute -top-1 -right-1 h-4 w-4 rounded-tr border-t-2 border-r-2 border-gold" />
                <div className="pointer-events-none absolute -bottom-1 -left-1 h-4 w-4 rounded-bl border-b-2 border-l-2 border-gold" />
                <div className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 rounded-br border-b-2 border-r-2 border-gold" />

                {/* Portrait display showing full outfit */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black flex items-center justify-center">
                  <SafeImage
                    src={HIGHLIGHT_CREATION.src}
                    alt="Sri Sai Designing Boutique Signature Bridal Maggam Blouse Masterpiece"
                    className="h-full w-full object-contain p-1.5 sm:p-2 transition duration-700 hover:scale-105"
                  />

                  <div className="absolute bottom-3 right-3 rounded-full bg-black/85 px-3 py-1 text-[10px] font-medium tracking-wider text-gold border border-gold/30">
                    ATELIER EXCLUSIVE
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Masterpiece Story & Artisan Specifications */}
            <div className="flex flex-col justify-center text-left">
              <span className="text-[11px] font-medium tracking-[0.25em] text-gold uppercase">
                {HIGHLIGHT_CREATION.subtitle}
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                {HIGHLIGHT_CREATION.title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-white/75">
                {HIGHLIGHT_CREATION.description}
              </p>

              {/* Artisan Highlights Grid */}
              <div className="mt-6 space-y-3.5 border-t border-b border-gold/15 py-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Sparkles size={13} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-white">Intricate 3D Zardosi & Aari</h4>
                    <p className="text-[11px] sm:text-xs text-white/60">
                      Real metallic bullion threads, kundan, and seed pearls painstakingly laid by our master artisans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Sparkles size={13} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-white">Bespoke Fit Cut to Silhouette</h4>
                    <p className="text-[11px] sm:text-xs text-white/60">
                      Individually drafted paper patterns and structured linings ensuring flawless drape and poise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Sparkles size={13} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-white">Personal Rampally Atelier Trials</h4>
                    <p className="text-[11px] sm:text-xs text-white/60">
                      In-person consultation and pre-delivery fittings right here at our Rampally studio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={waLink(enquiryText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs sm:text-sm font-semibold text-black transition hover:scale-[1.03] active:scale-95"
                >
                  <MessageCircle size={17} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <a
                  href={SITE.phoneHref}
                  className="flex-1 sm:flex-initial min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-black/50 px-5 py-3 text-xs sm:text-sm font-medium text-gold hover:bg-gold hover:text-black transition active:scale-95"
                >
                  <Phone size={15} />
                  <span>Call Atelier</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
