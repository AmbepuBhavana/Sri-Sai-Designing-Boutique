import { Logo } from "@/components/ui/Logo";
import { NAV, SERVICES, SITE, waLink } from "@/constants/site";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const loc = useLocation();
  const getHref = (href: string) => (loc.pathname === "/" ? href.replace("/", "") : href);

  return (
    <footer className="border-t border-white/10 bg-black px-4 pt-12 pb-24 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{SITE.tagline}</p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Instagram size={16} /> {SITE.instagramHandle}
          </a>
        </div>
        <div>
          <p className="mb-3 text-gold">Quick links</p>
          {NAV.map((n) => (
            <a key={n.href} href={getHref(n.href)} className="block py-1 text-sm text-white/65 hover:text-gold transition">
              {n.label}
            </a>
          ))}
          <Link to="/privacy" className="mt-2 block py-1 text-sm text-white/65 hover:text-gold transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="block py-1 text-sm text-white/65 hover:text-gold transition">
            Terms & Conditions
          </Link>
        </div>
        <div>
          <p className="mb-3 text-gold">Services</p>
          {SERVICES.slice(0, 6).map((s) => (
            <a key={s.id} href={getHref("/#services")} className="block py-1 text-sm text-white/65 hover:text-gold transition">
              {s.title}
            </a>
          ))}
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="text-gold">Visit us</p>
          <p className="flex gap-2">
            <MapPin size={16} className="mt-0.5 text-gold" /> {SITE.address}
          </p>
          <p className="flex gap-2">
            <Phone size={16} className="text-gold" /> {SITE.phoneDisplay}
          </p>
          <p className="flex gap-2">
            <Clock size={16} className="text-gold" /> {SITE.hours} · {SITE.hoursNote}
          </p>
          <a
            href={SITE.instagramReel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold"
          >
            Watch our Instagram reel
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex rounded-full bg-[#25D366] px-4 py-2 text-black"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. Crafted with care. All rights reserved.
      </p>
    </footer>
  );
}
