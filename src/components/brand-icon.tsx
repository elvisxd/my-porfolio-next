import type { CSSProperties } from "react";
import type { Brand } from "@/data/brand-icons";
import { isDarkBrand } from "@/data/brand-icons";

/** The mark inside a chip or tile: the brand's SVG when there is one, else
 *  its monogram in the same box, so rows keep their rhythm either way. */
export function BrandMark({ brand, size = 14 }: { brand: Brand; size?: number }) {
  if (brand.icon) {
    return (
      <svg
        className="brand-mark shrink-0"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d={brand.icon.path} />
      </svg>
    );
  }
  return (
    <span
      className="brand-mark brand-monogram shrink-0"
      style={{ width: size, height: size, fontSize: Math.max(7, Math.round(size * 0.6)) }}
      aria-hidden="true"
    >
      {brand.monogram}
    </span>
  );
}

/** Technology chip: name plus mark, mark in grey at rest and in the brand's
 *  colour under the pointer. `compact` is the smaller mono variant used in
 *  the project cards. */
export function TechChip({
  name,
  brand,
  compact = false,
}: {
  name: string;
  brand: Brand;
  compact?: boolean;
}) {
  return (
    <li
      className={compact ? "chip chip-compact" : "chip"}
      style={{ "--bc": brand.color ?? "hsl(var(--primary))" } as CSSProperties}
      data-dark-brand={isDarkBrand(brand.color) ? "" : undefined}
    >
      <BrandMark brand={brand} size={compact ? 12 : 14} />
      {name}
    </li>
  );
}

/** Issuer tile beside a degree or certificate: the mark in its colour on a
 *  small card. */
export function IssuerTile({ brand, label }: { brand: Brand; label: string }) {
  return (
    <span
      className="issuer-tile"
      style={{ "--bc": brand.color ?? "hsl(var(--primary))" } as CSSProperties}
      data-dark-brand={isDarkBrand(brand.color) ? "" : undefined}
      role="img"
      aria-label={label}
    >
      <BrandMark brand={brand} size={18} />
    </span>
  );
}
