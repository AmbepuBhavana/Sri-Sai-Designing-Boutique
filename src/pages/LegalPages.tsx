import { SITE } from "@/constants/site";
import { Link } from "react-router-dom";

export function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32">
      <h1 className="font-serif text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-white/70">
        {SITE.name} collects only the information you choose to send through our enquiry form or WhatsApp:
        name, phone, optional email and your message. We use it solely to respond to your request. We do not
        sell data, and we do not process payments on this website.
      </p>
      <p className="mt-4 text-white/70">
        WhatsApp and Google Maps are third-party services with their own policies. Contact us at{" "}
        {SITE.phoneDisplay} to request deletion of an enquiry.
      </p>
      <Link to="/" className="mt-8 inline-block text-gold">
        ← Back home
      </Link>
    </article>
  );
}

export function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32">
      <h1 className="font-serif text-4xl">Terms & Conditions</h1>
      <p className="mt-6 text-white/70">
        This website is an introduction to {SITE.name}. Custom garments are confirmed in person or on
        WhatsApp. Timelines, fabric and pricing are agreed before work begins. We are not an online store and
        do not accept card payments on this site.
      </p>
      <p className="mt-4 text-white/70">
        Images are representative of atelier work. Final pieces vary with fabric, measurements and the design
        you approve.
      </p>
      <Link to="/" className="mt-8 inline-block text-gold">
        ← Back home
      </Link>
    </article>
  );
}

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="text-gold">404</p>
        <h1 className="mt-2 font-serif text-5xl">This page was never stitched</h1>
        <p className="mt-4 text-white/60">The link may be misplaced. Return to the atelier home.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-gold px-6 py-3 text-black">
          Go home
        </Link>
      </div>
    </section>
  );
}
