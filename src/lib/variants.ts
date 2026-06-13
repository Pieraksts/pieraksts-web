export type VariantSlug = "one" | "two" | "three";

export type Variant = {
  slug: VariantSlug;
  path: `/${VariantSlug}`;
  /** Short label for the switcher control */
  label: string;
  /** What this variant is going for */
  name: string;
  description: string;
};

export const VARIANTS: Variant[] = [
  {
    slug: "one",
    path: "/one",
    label: "One",
    name: "Riga-First Editorial",
    description: "Local trust first — a Riga hero image, then calm sections.",
  },
  {
    slug: "two",
    path: "/two",
    label: "Two",
    name: "Product UI Mosaic",
    description: "Shows the product through recreated app UI fragments.",
  },
  {
    slug: "three",
    path: "/three",
    label: "Three",
    name: "Split-Audience Utility",
    description: "Direct, documentation-calm page organised by role.",
  },
];

export const DEFAULT_VARIANT: VariantSlug = "one";
