export interface Gallery {
  id: string;
  title: string;
  folder: string;
  images: string[];
}

export const GALLERIES: Gallery[] = [
  {
    id: "basharan",
    title: "باشارن",
    folder: "basharan",
    images: Array.from(
      { length: 10 },
      (_, i) => `Basharan_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },

  {
    id: "binko",
    title: "بینکو",
    folder: "binko",
    images: Array.from(
      { length: 10 },
      (_, i) => `Binko_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },

  {
    id: "azarakhsh",
    title: "آذرخش",
    folder: "azarakhsh",
    images: Array.from(
      { length: 10 },
      (_, i) => `Azarakhsh_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },

  {
    id: "fujan",
    title: "فوژان",
    folder: "fujan",
    images: Array.from(
      { length: 10 },
      (_, i) => `Fujan_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },

  {
    id: "naavak",
    title: "ناوک",
    folder: "Naavak",
    images: Array.from(
      { length: 10 },
      (_, i) => `naavak_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },

  {
    id: "rasta",
    title: "رستا",
    folder: "rasta",
    images: Array.from(
      { length: 10 },
      (_, i) => `Rasta_${String(i + 1).padStart(2, "0")}.avif`,
    ),
  },
];
