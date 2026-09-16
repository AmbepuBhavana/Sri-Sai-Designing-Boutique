import { Logo } from "@/components/ui/Logo";
import { NAV, SITE, waLink } from "@/constants/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/utils";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { progress, scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const getNavHref = (href: string) => (loc.pathname === "/" ? href.replace("/", "") : href);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [open]);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-0.5 bg-gold"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "glass" : "bg-black/40"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
          <Link to="/" aria-label={SITE.name} onClick={() => setOpen(false)}>
            <Logo compact />
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] text-white/80 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={getNavHref(item.href)}
                className="group relative py-1 transition hover:text-gold"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition active:scale-95"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm sm:inline-flex hover:border-gold transition active:scale-95"
            >
              <Phone size={14} className="text-gold" /> Call
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-black transition hover:scale-[1.03] active:scale-95"
            >
              WhatsApp
            </a>
            <button
              className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/15 lg:hidden text-white transition active:scale-95"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/95 pt-20 lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal
        >
          <nav className="flex flex-col gap-1 px-5 py-4 text-base">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={getNavHref(item.href)}
                className="border-b border-white/10 py-3.5 px-2 text-white/90 hover:text-gold transition active:bg-white/5 rounded-lg flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-gold text-xs">→</span>
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3 pt-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-medium text-black"
              >
                Chat on WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-gold/40 py-3 text-sm font-medium text-gold"
              >
                <Phone size={14} /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
