import { SITE, waLink } from "@/constants/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";

export function FloatingActions() {
  const { scrolled } = useScrollProgress();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 flex border-t border-white/10 bg-black/90 sm:hidden">
        <a href={SITE.phoneHref} className="flex flex-1 items-center justify-center gap-2 py-3 text-sm">
          <Phone size={16} className="text-gold" /> Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3 text-sm text-black"
        >
          WhatsApp
        </a>
      </div>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-black sm:bottom-6 sm:flex transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.38-1.41a10 10 0 004.66 1.18h.04c5.46 0 9.89-4.4 9.89-9.84C21.97 6.4 17.5 2 12.04 2zm5.76 14.16c-.24.68-1.42 1.25-1.96 1.33-.5.07-1.12.1-1.81-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.35c.24-.27.53-.34.7-.34h.51c.16 0 .38-.06.59.45.22.53.74 1.82.8 1.95.07.13.11.29.02.46-.09.19-.14.3-.27.46-.13.16-.28.35-.4.47-.13.13-.27.27-.12.52.15.26.67 1.1 1.43 1.78 1 .88 1.81 1.15 2.09 1.28.27.13.43.11.59-.07.16-.17.68-.79.86-1.06.18-.27.36-.22.61-.13.25.08 1.58.75 1.85.88.27.14.45.2.52.31.07.13.07.73-.17 1.41z" />
        </svg>
      </a>
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-36 right-5 z-50 hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 hover:border-gold hover:text-gold sm:bottom-24 sm:flex transition"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
