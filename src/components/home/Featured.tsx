import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { FEATURED_PAIRS, waLink } from "@/constants/site";
import type { FeaturedItem } from "@/constants/site";
import { getOptimizedVideoUrl, getVideoPosterUrl } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

function CraftFrame({ item, side }: { item: FeaturedItem; side: "left" | "right" }) {
  const isVideo = item.src.endsWith(".mp4");
  const poster = isVideo ? getVideoPosterUrl(item.src) : undefined;
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/40 bg-gradient-to-b from-[#1d1810] via-[#110e09] to-black p-3 sm:p-4 ring-1 ring-gold/20">
      {/* Corner Ornamental Accents */}
      <div className="pointer-events-none absolute -top-1 -left-1 h-3.5 w-3.5 rounded-tl border-t-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute -top-1 -right-1 h-3.5 w-3.5 rounded-tr border-t-2 border-r-2 border-gold" />
      <div className="pointer-events-none absolute -bottom-1 -left-1 h-3.5 w-3.5 rounded-bl border-b-2 border-l-2 border-gold" />
      <div className="pointer-events-none absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-br border-b-2 border-r-2 border-gold" />

      {/* Media Display Container (Uncropped Full Outfit/Process Frame) */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-950 flex items-center justify-center border border-gold/20">
        {isVideo ? (
          <video
            ref={videoRef}
            src={getOptimizedVideoUrl(item.src)}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            className="relative z-10 h-full w-full object-contain"
          />
        ) : (
          <SafeImage
            src={item.src}
            alt={item.label}
            className="relative z-10 h-full w-full object-contain p-2 transition duration-500 hover:scale-105"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-medium tracking-wider text-gold border border-gold/30">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
          <span>{side === "left" ? "ATELIER CRAFT" : "PRECISION DETAIL"}</span>
        </div>

        <div className="absolute top-2.5 right-2.5 z-20 rounded-full bg-black/85 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white/90 border border-white/20">
          {item.tag}
        </div>


      </div>

      {/* Frame Narrative & Actions */}
      <div className="flex flex-1 flex-col justify-between pt-4 sm:pt-5">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
            <Sparkles size={12} className="text-gold" />
            <span>{item.tag}</span>
          </div>
          <h3 className="mt-1 font-serif text-xl sm:text-2xl text-white leading-snug">
            {item.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/65">
            {item.subtitle}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-gold/15">
          <a
            href={waLink(item.enquiryText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2.5 text-xs font-semibold text-gold transition hover:bg-gold hover:text-black active:scale-95"
          >
            <MessageCircle size={15} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Featured() {
  const [activePairIdx, setActivePairIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () =>
    setActivePairIdx((curr) => (curr - 1 + FEATURED_PAIRS.length) % FEATURED_PAIRS.length);
  const next = () =>
    setActivePairIdx((curr) => (curr + 1) % FEATURED_PAIRS.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) next();
    else if (diff < -45) prev();
    touchStartX.current = null;
  };

  const currentPair = FEATURED_PAIRS[activePairIdx];

  return (
    <section id="featured-work" className="px-3 py-14 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl text-center">
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-gold uppercase">FEATURED WORK</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-white">
          Crafted with <em className="gold-italic">detail</em>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/65">
          A side-by-side look at in-house boutique craftsmanship — authentic hand-embroidered maggam,
          digitized computer embroidery, and bespoke tailoring in action.
        </p>

        {/* Theme Category Switcher Pills */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
          {FEATURED_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => setActivePairIdx(idx)}
              className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs sm:text-xs font-medium transition active:scale-95 ${
                idx === activePairIdx
                  ? "bg-gold text-black border border-gold"
                  : "border border-white/20 text-white/70 hover:border-gold hover:text-gold bg-black/40"
              }`}
            >
              <span className="opacity-60 mr-1.5">{idx + 1}.</span>
              <span>{pair.themeTitle}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Side-by-Side Dual Frame Showcase */}
      <div
        className="relative mx-auto mt-8 sm:mt-10 max-w-6xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPair.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {/* Left Frame: Handcrafted Artistry */}
            <CraftFrame item={currentPair.left} side="left" />

            {/* Right Frame: Precision Detail / Counterpart Craft */}
            <CraftFrame item={currentPair.right} side="right" />
          </motion.div>
        </AnimatePresence>

        {/* Touch / Desktop Navigation Controls */}
        <div className="mt-6 sm:mt-8 flex items-center justify-between px-2">
          <button
            onClick={prev}
            aria-label="Previous craft showcase pair"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white/80 hover:border-gold hover:text-gold transition active:scale-95"
          >
            <ChevronLeft size={16} />
            <span>Previous Pair</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {FEATURED_PAIRS.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => setActivePairIdx(idx)}
                aria-label={`Go to ${pair.themeTitle}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  idx === activePairIdx ? "w-7 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next craft showcase pair"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white/80 hover:border-gold hover:text-gold transition active:scale-95"
          >
            <span>Next Pair</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-8 text-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-black/40 px-6 py-2.5 text-xs sm:text-sm font-medium text-gold hover:bg-gold hover:text-black transition active:scale-95"
          >
            <span>Explore full curated archive in Gallery</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
