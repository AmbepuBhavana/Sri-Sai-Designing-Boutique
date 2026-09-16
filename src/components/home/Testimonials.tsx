import { Reveal } from "@/components/ui/Reveal";
import { FAQS, SITE, TESTIMONIALS } from "@/constants/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="px-4 py-16 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] tracking-[0.35em] text-gold">KIND WORDS</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          Loved by our <em className="gold-italic">clients</em>
        </h2>
        <div className="relative mt-10 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              className="glass rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-7 sm:py-10"
            >
              <p className="text-gold text-sm sm:text-base" aria-label="5 star rating">
                ★★★★★
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-lg sm:text-2xl leading-snug">“{t.quote}”</p>
              <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3">
                <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-gold/40 text-xs sm:text-sm text-gold">
                  {t.initials}
                </span>
                <span className="text-left text-xs sm:text-sm text-white/60">
                  <strong className="block text-white">{t.name}</strong>
                  {t.role}
                </span>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous review"
            onClick={() => setI((n) => (n - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-gold text-white/80 hover:text-gold transition active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next review"
            onClick={() => setI((n) => (n + 1) % TESTIMONIALS.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-gold text-white/80 hover:text-gold transition active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href={SITE.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-gold hover:bg-gold hover:text-black transition active:scale-95"
          >
            <span>Read more reviews on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-3 sm:px-6 lg:px-8 py-10 sm:py-12">
      <Reveal className="mb-8 text-center">
        <p className="text-[11px] tracking-[0.35em] text-gold">FREQUENTLY ASKED</p>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl">
          Questions & <em className="gold-italic">answers</em>
        </h2>
      </Reveal>
      <div className="space-y-3">
        {FAQS.map((f, idx) => (
          <div key={f.q} className="overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-card transition hover:border-gold/30">
            <button
              className="flex w-full items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left font-serif text-base sm:text-lg text-white/90 min-h-[44px]"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span>{f.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/20 text-sm text-gold">
                {open === idx ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm leading-6 text-white/65">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
