import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "@/constants/site";

const HOME_DESCRIPTION =
  "Sri Sai Designing Boutique in Rampally, Hyderabad offers designer and bridal blouses, maggam work, computer embroidery, custom stitching, printing work and designer dresses.";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

export function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const isHome = normalizedPath === "/" || normalizedPath === "/index.html";
    const title = isHome
      ? "Sri Sai Designing Boutique | Designer & Bridal Blouses in Rampally"
      : normalizedPath === "/privacy"
        ? "Privacy Policy | Sri Sai Designing Boutique"
        : normalizedPath === "/terms"
          ? "Terms & Conditions | Sri Sai Designing Boutique"
          : "Page Not Found | Sri Sai Designing Boutique";
    const description = isHome
      ? HOME_DESCRIPTION
      : `${title}. ${SITE.name}, Rampally, Hyderabad.`;
    const url = `${SITE.url}${isHome ? "/" : normalizedPath}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setCanonical(url);
  }, [pathname]);

  return null;
}
