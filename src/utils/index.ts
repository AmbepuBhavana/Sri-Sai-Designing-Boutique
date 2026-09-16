export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function sanitizeText(value: string, max = 2000) {
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

export function isValidIndianMobile(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const ten = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(ten);
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/**
 * Delivers pristine, razor-sharp Cloudinary images without compression or blur.
 */
export function getOptimizedImageUrl(url: string, width?: number) {
  if (!url || !url.includes("res.cloudinary.com") || url.includes("f_auto")) {
    return url;
  }
  if (width) {
    return url.replace("/upload/", `/upload/f_auto,q_100,w_${width},dpr_2.0/`);
  }
  return url.replace("/upload/", "/upload/f_auto,q_100,dpr_2.0/");
}

/**
 * Generates a high-DPI srcSet for Cloudinary images ensuring crisp display on retina and mobile devices.
 */
export function getResponsiveSrcSet(url: string) {
  if (!url || !url.includes("res.cloudinary.com") || url.endsWith(".mp4")) {
    return undefined;
  }
  const parts = url.split("/upload/");
  if (parts.length < 2) return undefined;
  const cleanRest = parts[1].replace(/^f_auto,q_.*?\//, "");
  return `${parts[0]}/upload/f_auto,q_100,w_800,dpr_2.0/${cleanRest} 800w, ${parts[0]}/upload/f_auto,q_100,w_1400,dpr_2.0/${cleanRest} 1400w, ${parts[0]}/upload/f_auto,q_100,w_2000,dpr_2.0/${cleanRest} 2000w`;
}

/**
 * Generates a high-definition video poster URL from Cloudinary (using second 1 for a crisp in-focus frame).
 */
export function getVideoPosterUrl(url: string) {
  if (!url || !url.includes("res.cloudinary.com")) {
    return undefined;
  }
  return url
    .replace("/video/upload/", "/video/upload/so_1,f_auto,q_100,w_1200,dpr_2.0/")
    .replace(/\.mp4$/i, ".jpg");
}
