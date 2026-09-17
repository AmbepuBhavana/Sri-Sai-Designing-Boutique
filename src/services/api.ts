import { addWebsiteToWhatsAppText, SITE } from "@/constants/site";
import type { EnquiryPayload } from "@/types";
import { isValidEmail, isValidIndianMobile, sanitizeText } from "@/utils";

const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "/api" : "");

export function validateEnquiry(data: EnquiryPayload) {
  const errors: Record<string, string> = {};
  if (!sanitizeText(data.name, 80) || data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!isValidIndianMobile(data.phone)) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (data.email && !isValidEmail(data.email)) errors.email = "Enter a valid email address.";
  if (!data.service) errors.service = "Select a service.";
  return errors;
}

export function getEnquiryWhatsAppUrl(payload: EnquiryPayload) {
  const text = `Hello ${SITE.name},

I would like to make an enquiry:
• Name: ${payload.name}
• Phone: ${payload.phone}
• Email: ${payload.email || "Not provided"}
• Service: ${payload.service}
• Message: ${payload.message || "Please share design and consultation details."}`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(addWebsiteToWhatsAppText(text))}`;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const body: EnquiryPayload = {
    name: sanitizeText(payload.name, 80),
    phone: sanitizeText(payload.phone, 15),
    email: payload.email ? sanitizeText(payload.email, 120) : undefined,
    service: sanitizeText(payload.service, 80),
    message: payload.message ? sanitizeText(payload.message, 1000) : undefined,
  };

  const waUrl = getEnquiryWhatsAppUrl(body);

  if (!API) {
    return openWhatsAppFallback(waUrl);
  }

  try {
    const res = await fetch(`${API}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("api");
    return { ok: true as const, via: "api" as const, waUrl };
  } catch {
    return openWhatsAppFallback(waUrl);
  }
}

function openWhatsAppFallback(waUrl: string) {
  let popupBlocked = false;
  try {
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");
    if (!win || win.closed || typeof win.closed === "undefined") {
      popupBlocked = true;
    }
  } catch {
    popupBlocked = true;
  }
  return { ok: true as const, via: "whatsapp" as const, waUrl, popupBlocked };
}
