import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, SITE, waLink } from "@/constants/site";
import { getEnquiryWhatsAppUrl, submitEnquiry, validateEnquiry } from "@/services/api";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Form = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type ToastState = {
  message: string;
  actionUrl?: string;
  actionText?: string;
};

export function Contact() {
  const { register, handleSubmit, reset, getValues } = useForm<Form>({
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });
  const [toast, setToast] = useState<ToastState | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  const onSubmit = async (data: Form) => {
    const errors = validateEnquiry(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length) return;
    setBusy(true);
    const result = await submitEnquiry(data);
    setBusy(false);
    if (result.ok) {
      if (result.via === "api") {
        setToast({ message: "Thank you! We received your enquiry and will reach out shortly." });
      } else {
        setToast({
          message: result.popupBlocked
            ? "Browser blocked opening WhatsApp. Click below to proceed:"
            : "Opening WhatsApp with your enquiry...",
          actionUrl: result.waUrl,
          actionText: "Open WhatsApp Chat",
        });
      }
      reset();
      setTimeout(() => setToast(null), 8000);
    }
  };

  const onInstantWhatsApp = () => {
    const data = getValues();
    const errors = validateEnquiry(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length) return;
    const url = getEnquiryWhatsAppUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="px-4 py-16 lg:px-8">
      <Reveal className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-[11px] tracking-[0.35em] text-gold">VISIT & ENQUIRE</p>
        <h2 className="mt-3 font-serif text-4xl">We would love to stitch for you</h2>
      </Reveal>
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Sri Sai Designing Boutique on Google Maps"
              src={SITE.mapsEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-card p-5">
              <p className="font-medium">{SITE.name}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-white/55">
                <MapPin size={14} /> {SITE.address}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={SITE.phoneHref} className="rounded-full bg-gold px-4 py-2 text-xs text-black font-medium hover:bg-gold-soft transition">
                  Call now
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#25D366] px-4 py-2 text-xs text-[#25D366] hover:bg-[#25D366] hover:text-black transition"
                >
                  WhatsApp
                </a>
                <a
                  href={SITE.mapsShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs hover:border-gold hover:text-gold transition"
                >
                  Open maps
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="glass rounded-2xl p-5">
              <p className="flex items-center gap-2 text-[10px] tracking-[0.28em] text-white/45">
                <Phone size={14} /> CALL US
              </p>
              <a href={SITE.phoneHref} className="mt-2 block text-lg hover:text-gold transition">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="flex items-center gap-2 text-[10px] tracking-[0.28em] text-white/45">
                <Clock size={14} /> WORKING HOURS
              </p>
              <p className="mt-2 text-lg">{SITE.hours}</p>
              <p className="text-sm text-white/45">{SITE.hoursNote}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6"
          noValidate
        >
          <label htmlFor="form-name" className="block text-sm">
            Name *
            <input
              id="form-name"
              {...register("name")}
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={!!fieldErrors.name}
              className="mt-1 w-full border-b border-white/15 bg-transparent py-2.5 placeholder:text-white/30 focus:border-gold focus:outline-none text-base"
            />
            {fieldErrors.name && <p className="mt-1 text-xs text-red-300">{fieldErrors.name}</p>}
          </label>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label htmlFor="form-phone" className="block text-sm">
              Phone *
              <input
                id="form-phone"
                {...register("phone")}
                inputMode="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                aria-invalid={!!fieldErrors.phone}
                className="mt-1 w-full border-b border-white/15 bg-transparent py-2.5 placeholder:text-white/30 focus:border-gold focus:outline-none text-base"
              />
              {fieldErrors.phone && <p className="mt-1 text-xs text-red-300">{fieldErrors.phone}</p>}
            </label>
            <label htmlFor="form-email" className="block text-sm">
              Email (optional)
              <input
                id="form-email"
                {...register("email")}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!fieldErrors.email}
                className="mt-1 w-full border-b border-white/15 bg-transparent py-2.5 placeholder:text-white/30 focus:border-gold focus:outline-none text-base"
              />
              {fieldErrors.email && <p className="mt-1 text-xs text-red-300">{fieldErrors.email}</p>}
            </label>
          </div>
          <label htmlFor="form-service" className="mt-5 block text-sm">
            Service required *
            <select
              id="form-service"
              {...register("service")}
              aria-invalid={!!fieldErrors.service}
              className="mt-1 w-full border-b border-white/15 bg-transparent py-2.5 focus:border-gold focus:outline-none text-base"
            >
              <option value="" className="bg-black">
                Select a service...
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-black">
                  {s.title}
                </option>
              ))}
            </select>
            {fieldErrors.service && <p className="mt-1 text-xs text-red-300">{fieldErrors.service}</p>}
          </label>
          <label htmlFor="form-message" className="mt-5 block text-sm">
            Message (optional)
            <textarea
              id="form-message"
              {...register("message")}
              rows={3}
              placeholder="Tell us about the occasion, design ideas, or deadline..."
              className="mt-1 w-full border-b border-white/15 bg-transparent py-2.5 placeholder:text-white/30 focus:border-gold focus:outline-none text-base"
            />
          </label>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black disabled:opacity-60 transition hover:bg-gold-soft active:scale-95 text-center justify-center flex items-center"
            >
              {busy ? "Sending…" : "Send enquiry"}
            </button>
            <button
              type="button"
              onClick={onInstantWhatsApp}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] px-5 py-3 text-sm text-[#25D366] hover:bg-[#25D366] hover:text-black transition active:scale-95"
            >
              <MessageCircle size={16} /> Instant WhatsApp
            </button>
          </div>
          <p className="mt-3 text-xs text-white/40">We never share your details. No spam, ever.</p>
        </form>
      </div>
      {toast && (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-[70] flex max-w-[90vw] -translate-x-1/2 flex-col sm:flex-row items-center gap-3 rounded-2xl bg-gold px-5 py-3 text-sm text-black"
        >
          <span>{toast.message}</span>
          {toast.actionUrl && (
            <a
              href={toast.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-gold hover:bg-zinc-900 transition"
            >
              {toast.actionText || "Proceed"} <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h2 className="font-serif text-3xl">Notes from the atelier</h2>
      <p className="mt-2 text-sm text-white/55">A quiet list for new collections and festive dates. Coming soon.</p>
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          disabled
          placeholder="Email (opening soon)"
          className="flex-1 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm"
        />
        <button disabled className="rounded-full bg-white/10 px-6 py-3 text-sm text-white/40">
          Notify me
        </button>
      </form>
    </section>
  );
}
