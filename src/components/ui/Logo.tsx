import { SITE } from "@/constants/site";
import { cn } from "@/utils";

type Props = { className?: string; compact?: boolean };

export function Logo({ className, compact }: Props) {
  const size = compact ? "h-14 w-auto" : "h-16 w-auto";
  const width = compact ? 180 : 220;
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img
        src="/logo bq.jpg"
        alt={`${SITE.name} logo`}
        width={width}
        className={cn(size, "object-contain")}
      />
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
