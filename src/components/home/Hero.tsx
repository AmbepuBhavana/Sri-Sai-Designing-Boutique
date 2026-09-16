import { Reveal } from "@/components/ui/Reveal";
import { SITE, waLink } from "@/constants/site";
import { motion } from "framer-motion";

const ticks = [
  "MAGGAM WORK",
  "COMPUTER EMBROIDERY",
  "PRINTING",
  "DESIGNER BLOUSES",
  "BRIDAL WEAR",
  "CUSTOM STITCHING",
  "KIDS WEAR",
  "ALTERATIONS",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 sm:pt-24 pb-8"
    >


      <div className="relative z-10 mx-auto max-w-5xl px-3 sm:px-6 text-center">
        {/* Subtitle Badge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.42em] text-gold uppercase"
        >
          ★ RAMPALLY · HYDERABAD
        </motion.p>

        {/* Brand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
        >
          {SITE.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/75"
        >
          From thread to tradition — <em className="gold-italic">crafted just for you.</em>
        </motion.p>

        {/* Fully Framed Uncropped Storefront Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative mx-auto mt-5 sm:mt-7 max-w-5xl"
        >
          {/* Luxury Atelier Outer Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3.5 bg-gradient-to-b from-[#2a2110] via-[#15120a] to-black border-2 border-gold/45 ring-1 ring-gold/20">
            {/* Corner Ornamental Accents */}
            <div className="pointer-events-none absolute -top-1 -left-1 h-3.5 w-3.5 rounded-tl border-t-2 border-l-2 border-gold" />
            <div className="pointer-events-none absolute -top-1 -right-1 h-3.5 w-3.5 rounded-tr border-t-2 border-r-2 border-gold" />
            <div className="pointer-events-none absolute -bottom-1 -left-1 h-3.5 w-3.5 rounded-bl border-b-2 border-l-2 border-gold" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-br border-b-2 border-r-2 border-gold" />

            {/* Inner Mat & Uncropped Image */}
            <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-gold/25 bg-black">
              <img
                src="/assets/hero/storefront.jpg"
                alt="Sri Sai The Designing Boutique storefront in Rampally"
                loading="eager"
                className="w-full h-auto object-contain block mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Mobile-Friendly Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 px-2"
        >
          <a
            href={waLink("Hi, I would like to book a design consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial min-w-[140px] min-h-[44px] flex items-center justify-center rounded-full bg-[#25D366] px-5 sm:px-7 py-3 text-xs sm:text-sm font-medium text-black transition hover:scale-[1.03] active:scale-95 text-center"
          >
            Book on WhatsApp
          </a>
          <a
            href={SITE.phoneHref}
            className="flex-1 sm:flex-initial min-w-[120px] min-h-[44px] flex items-center justify-center rounded-full border border-gold/50 bg-black/40 px-4 sm:px-6 py-3 text-xs sm:text-sm text-gold hover:bg-gold hover:text-black transition active:scale-95 text-center"
          >
            Call {SITE.phoneDisplay}
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center rounded-full border border-white/30 bg-black/20 px-5 sm:px-6 py-3 text-xs sm:text-sm text-white/80 hover:border-gold hover:text-gold transition active:scale-95 text-center"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Marquee Ticker */}
      <div className="relative z-10 mt-8 sm:mt-12 overflow-hidden border-y border-gold/25 bg-black/70 py-2.5 sm:py-3">
        <div className="marquee-track gap-6 sm:gap-8 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.32em] text-gold/90">
          {[...ticks, ...ticks, ...ticks].map((t, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-8">
              {t} <span aria-hidden>+</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <Reveal>
      <section className="px-3 sm:px-4 py-8 sm:py-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/20 bg-gradient-to-r from-[#1a1508] to-black px-4 sm:px-8 py-8 sm:py-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)]" />
          <h2 className="relative font-serif text-2xl sm:text-3xl md:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base text-white/65">{copy}</p>
          <div className="relative mt-6 sm:mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition active:scale-95 hover:bg-gold-light"
            >
              WhatsApp us
            </a>
            <a
              href={SITE.phoneHref}
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition active:scale-95 hover:border-gold hover:text-gold"
            >
              Call now
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
