import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { GALLERY, GALLERY_FILTERS, SITE } from "@/constants/site";
import type { GalleryCategory, GalleryItem } from "@/types";
import { getOptimizedVideoUrl, getVideoPosterUrl } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const INITIAL_BATCH = 12;

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [displayCount, setDisplayCount] = useState(INITIAL_BATCH);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  useEffect(() => {
    setDisplayCount(INITIAL_BATCH);
  }, [filter]);

  const visibleItems = useMemo(
    () => items.slice(0, displayCount),
    [items, displayCount]
  );

  const hasMore = items.length > displayCount;

  const shift = (dir: number) => {
    if (!active) return;
    const i = items.findIndex((x) => x.id === active.id);
    setActive(items[(i + dir + items.length) % items.length]);
  };

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") shift(-1);
      if (e.key === "ArrowRight") shift(1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, items]);

  return (
    <section id="gallery" className="px-3 py-12 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-gold uppercase">THE CURATED ARCHIVE</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl">
          A gallery of <em className="gold-italic">crafted stories</em>
        </h2>
      </Reveal>
      <div className="mx-auto mt-6 sm:mt-8 flex max-w-5xl flex-wrap justify-center gap-1.5 sm:gap-2">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 sm:px-3.5 py-1.5 text-xs transition active:scale-95 ${
              filter === f
                ? "bg-gold font-medium text-black"
                : "border border-white/15 text-white/70 hover:border-gold hover:text-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div
        className={
          visibleItems.length < 4
            ? "mx-auto mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 max-w-5xl"
            : "mx-auto mt-8 sm:mt-10 max-w-7xl columns-2 gap-1 sm:columns-3 lg:columns-4"
        }
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((g) => {
            const isVideo = g.src.endsWith(".mp4");
            const poster = isVideo ? getVideoPosterUrl(g.src) : undefined;
            return (
              <motion.button
                layout
                key={g.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(g)}
                className={
                  visibleItems.length < 4
                    ? "group block w-full sm:w-72 md:w-80 overflow-hidden rounded-xl text-left"
                    : "group mb-2 block w-full overflow-hidden rounded-xl text-left"
                }
              >
                {isVideo ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-black">
                    <video
                      src={getOptimizedVideoUrl(g.src, 640)}
                      poster={poster || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      ref={(el) => {
                        if (el) {
                          el.muted = true;
                          el.play().catch(() => {});
                        }
                      }}
                      onEnded={(e) => {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play().catch(() => {});
                      }}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-medium text-gold border border-gold/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                      REEL
                    </span>
                  </div>
                ) : (
                  <SafeImage
                    src={g.src}
                    alt={g.alt}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setDisplayCount((c) => c + 12)}
            className="rounded-full border border-gold/50 bg-black/60 px-7 py-3 text-xs sm:text-sm font-medium text-gold hover:bg-gold hover:text-black transition active:scale-95"
          >
            Load more designs ({items.length - displayCount} remaining) ↓
          </button>
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black p-4"
          role="dialog"
          aria-modal
          aria-label={active.alt}
        >
          <button className="absolute inset-0" aria-label="Close preview" onClick={() => setActive(null)} />
          {active.src.endsWith(".mp4") ? (
            <video
              src={getOptimizedVideoUrl(active.src, 1080)}
              controls
              autoPlay
              loop
              playsInline
              preload="metadata"
              ref={(el) => {
                if (el) {
                  el.play().catch(() => {});
                }
              }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
              className="relative z-10 max-h-[86vh] max-w-5xl rounded-xl object-contain"
            />
          ) : (
            <img
              src={active.src}
              alt={active.alt}
              className="relative z-10 max-h-[86vh] max-w-5xl rounded-xl object-contain"
            />
          )}
          <button
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <button
            className="absolute left-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20"
            onClick={() => shift(-1)}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20"
            onClick={() => shift(1)}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export function Instagram() {
  const thumbs = GALLERY.slice(0, 8);
  return (
    <section className="px-4 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-[11px] tracking-[0.35em] text-gold">FOLLOW OUR JOURNEY</p>
          <h2 className="mt-3 font-serif text-4xl">
            On <em className="gold-italic">Instagram</em>
          </h2>
        </div>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-5 py-2.5 text-sm"
        >
          Follow {SITE.instagramHandle}
        </a>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl gap-3 overflow-x-auto pb-2">
        {thumbs.map((t) => {
          const isVid = t.src.endsWith(".mp4");
          const poster = isVid ? getVideoPosterUrl(t.src) : t.src;
          return (
            <a
              key={t.id}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 overflow-hidden rounded-xl h-32 w-32 block group"
            >
              {isVid ? (
                <video
                  src={getOptimizedVideoUrl(t.src, 480)}
                  poster={poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.play().catch(() => {});
                    }
                  }}
                  onEnded={(e) => {
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.play().catch(() => {});
                  }}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              ) : (
                <SafeImage
                  src={t.src}
                  alt={t.alt}
                  className="h-32 w-32 rounded-xl object-cover transition duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              {isVid && (
                <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[8px] font-semibold text-gold border border-gold/30">
                  ▶
                </span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
