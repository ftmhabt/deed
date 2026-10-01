const BASE = import.meta.env.BASE_URL;

export type ImageSize = "thumb" | "medium" | "large";

export function getImage(
  brand: string,
  filename: string,
  size: ImageSize = "medium",
): string {
  return `${BASE}images/${brand}/${size}/${filename}.avif`;
}
