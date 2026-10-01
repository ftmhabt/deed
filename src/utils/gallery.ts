const BASE = import.meta.env.BASE_URL;

export type ImageSize = "thumb" | "medium" | "large";

export function getImage(filename: string, size: ImageSize = "medium"): string {
  const brand = filename.split("_")[0].toLowerCase();
  return `${BASE}images/${brand}/${size}/${filename}.avif`;
}
