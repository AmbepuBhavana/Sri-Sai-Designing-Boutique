import { useEffect, useState } from "react";
import { cn, getOptimizedImageUrl, getResponsiveSrcSet } from "@/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
};

export function SafeImage({
  src,
  alt,
  className,
  loading = "lazy",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-gradient-to-br from-[#1a1508] to-black text-gold/70 aspect-[3/4]",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <span className="px-3 text-center font-serif text-sm">{alt}</span>
      </div>
    );
  }

  const optimizedSrc = getOptimizedImageUrl(src, 800);
  const srcSet = getResponsiveSrcSet(src);

  return (
    <img
      key={src}
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
