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
 * Delivers responsive Cloudinary images without sending desktop-sized files to phones.
 */
export function getOptimizedImageUrl(url: string, width?: number) {
  if (!url || !url.includes("res.cloudinary.com") || url.includes("f_auto")) {
    return url;
  }
  if (width) {
    return url.replace("/upload/", `/upload/f_auto,q_auto:good,w_${width}/`);
  }
  return url.replace("/upload/", "/upload/f_auto,q_auto:good/");
}

/**
 * Generates a responsive srcSet so mobile devices select a smaller image before downloading.
 */
export function getResponsiveSrcSet(url: string) {
  if (!url || !url.includes("res.cloudinary.com") || url.endsWith(".mp4")) {
    return undefined;
  }
  const parts = url.split("/upload/");
  if (parts.length < 2) return undefined;
  const cleanRest = parts[1].replace(/^f_auto,q_.*?\//, "");
  return `${parts[0]}/upload/f_auto,q_auto:good,w_480/${cleanRest} 480w, ${parts[0]}/upload/f_auto,q_auto:good,w_800/${cleanRest} 800w, ${parts[0]}/upload/f_auto,q_auto:good,w_1200/${cleanRest} 1200w`;
}

/**
 * Generates a lightweight video poster URL from Cloudinary.
 */
export function getVideoPosterUrl(url: string) {
  if (!url || !url.includes("res.cloudinary.com")) {
    return undefined;
  }
  return url
    .replace("/video/upload/", "/video/upload/so_1,f_auto,q_auto:good,w_720/")
    .replace(/\.mp4$/i, ".jpg");
}

export function getOptimizedVideoUrl(url: string, width = 720) {
  if (!url || !url.includes("res.cloudinary.com")) {
    return url;
  }
  return url.replace(
    "/video/upload/",
    `/video/upload/f_auto,q_auto:good,w_${width},vc_auto/`
  );
}
