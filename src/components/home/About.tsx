import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { STATS } from "@/constants/site";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }

    let rafId: number | null = null;
    let active = true;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const tick = (t: number) => {
          if (!active) return;
          const p = Math.min(1, (t - start) / 1400);
          if (p >= 1) {
            setN(value);
          } else {
            setN(value * (1 - Math.pow(1 - p, 3)));
            rafId = requestAnimationFrame(tick);
          }
        };
        rafId = requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 px-3 sm:px-6 py-14 sm:py-24 lg:grid-cols-2 lg:px-8">
      <Reveal x={-24}>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black">
          <video
            src="https://res.cloudinary.com/ag114ghj/video/upload/v1789107730/craftvideo.mp4"
            poster="/assets/about/artisan.jpg"
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
            className="h-[340px] sm:h-[440px] lg:h-[520px] w-full object-cover"
          />
          <div className="glass absolute bottom-4 left-4 sm:bottom-5 sm:left-5 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
            <p className="font-serif text-2xl sm:text-3xl text-gold">
              <Counter value={15} suffix="+" />
            </p>
            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.28em] text-white/70">YEARS OF CRAFT</p>
          </div>
        </div>
      </Reveal>
      <Reveal x={24}>
        <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-gold uppercase">OUR ATELIER</p>
        <h2 className="mt-2 sm:mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Heritage stitched into <em className="gold-italic">every detail</em>
        </h2>
        <p className="mt-6 text-[15px] leading-7 text-white/70">
          Sri Sai Designing Boutique is a house of bespoke fashion where maggam work meets the precision of
          computer embroidery and printing. Every garment is conceived, cut and finished in Rampally — for
          the woman who wants her clothes to feel made, not bought.
        </p>
        <p className="mt-4 text-[15px] leading-7 text-white/70">
          From bridal blouses heavy with zardosi to feather-light designer dresses, our team translates your
          vision with honest pricing and couture-grade finishing.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Experienced designers",
            "Premium finishing",
            "Customized designs",
            "Affordable pricing",
            "Customer satisfaction",
            "On-time delivery",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <span className="text-gold">✔</span> {item}
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="col-span-full mt-6 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 text-center md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-4xl text-gold">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
