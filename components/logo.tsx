import Image from "next/image";
import { cn } from "@/lib/utils";

const FULL_RATIO = 670 / 430;
const MARK_RATIO = 670 / 280;

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  href?: string | null;
  height?: number;
  priority?: boolean;
  compact?: boolean;
};

export function Logo({
  className,
  variant = "default",
  href = "#inicio",
  height = 36,
  priority = false,
  compact = false,
}: LogoProps) {
  const ratio = compact ? MARK_RATIO : FULL_RATIO;
  const width = Math.round(height * ratio);
  const src = compact ? "/geoarq-mark.webp" : "/geoarq.webp";

  const content = (
    <Image
      src={src}
      alt="GeoArq — Arquitetura e Paisagismo"
      width={width * 2}
      height={height * 2}
      priority={priority}
      className={cn(
        "block select-none object-contain",
        variant === "light" && "brightness-0 invert"
      )}
      style={{ width, height }}
    />
  );

  if (!href) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label="GeoArq — Arquitetura e Paisagismo"
      className={cn("inline-flex items-center", className)}
    >
      {content}
    </a>
  );
}
