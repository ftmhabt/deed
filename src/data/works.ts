import { getImage } from "@/utils/gallery";

export type Category =
  | "all"
  | "identity"
  | "poster"
  | "advertising"
  | "packaging"
  | "digital";

export interface Project {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  category: Category;
  categoryLabel: string;
  categoryLabelFa: string;
  year: string;
  yearEn: string;
  imagePath: string;
  detailImages: string[];
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: "azarakhsh",
    number: "۰۱",
    title: "آذرخش",
    titleEn: "Azarakhsh",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۴",
    yearEn: "2025",
    imagePath: getImage("azarakhsh", "Azarakhsh_08", "thumb"),
    detailImages: [
      getImage("azarakhsh", "Azarakhsh_01", "large"),
      getImage("azarakhsh", "Azarakhsh_02", "large"),
      getImage("azarakhsh", "Azarakhsh_03", "large"),
      getImage("azarakhsh", "Azarakhsh_04", "large"),
      getImage("azarakhsh", "Azarakhsh_05", "large"),
      getImage("azarakhsh", "Azarakhsh_06", "large"),
      getImage("azarakhsh", "Azarakhsh_07", "large"),
      getImage("azarakhsh", "Azarakhsh_09", "large"),
      getImage("azarakhsh", "Azarakhsh_10", "large"),
    ],
    description:
      "آذرخش در زمینه تولید خودروهای برقی فعالیت دارد. خطوط منحنی لوگوتایپ، بیانگر سرعت و پویایی هستند و نشانه با الهام از مسیر عبور از یک جنگل طراحی شده است. رنگ سبز نمادی از طبیعت و رویکرد محیط‌زیستی برند است و در کنار آن، رنگ تیره به ایجاد حس اعتماد و استحکام کمک می‌کند.",
  },
  {
    id: "basharan",
    number: "۰۲",
    title: "باشاران الکترونیک",
    titleEn: "Basharan Electronic",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۴",
    yearEn: "2025",
    imagePath: getImage("basharan", "Basharan_03", "thumb"),
    detailImages: [
      getImage("basharan", "Basharan_01", "large"),
      getImage("basharan", "Basharan_02", "large"),
      getImage("basharan", "Basharan_04", "large"),
      getImage("basharan", "Basharan_05", "large"),
      getImage("basharan", "Basharan_06", "large"),
      getImage("basharan", "Basharan_07", "large"),
      getImage("basharan", "Basharan_08", "large"),
      getImage("basharan", "Basharan_09", "large"),
      getImage("basharan", "Basharan_10", "large"),
    ],
    description:
      "باشاران الکترونیک در زمینه تعمیرات دستگاه‌های صنعتی فعالیت دارد. لوگوی این مجموعه با استفاده از حروف انگلیسی نام برند و خطوط هندسی طراحی شده است. ترکیب رنگ آبی روشن و آبی تیره، با هدف القای حس فناوری، دقت و اعتماد انتخاب شده و ساختار منظم خطوط نیز با ماهیت فنی مجموعه هماهنگ است.",
  },
  {
    id: "binko",
    number: "۰۳",
    title: "شکلات بینکو",
    titleEn: "Binko Chocolate",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۳",
    yearEn: "2024",
    imagePath: getImage("binko", "Binko_03", "thumb"),
    detailImages: [
      getImage("binko", "Binko_01", "large"),
      getImage("binko", "Binko_02", "large"),
      getImage("binko", "Binko_04", "large"),
      getImage("binko", "Binko_05", "large"),
      getImage("binko", "Binko_06", "large"),
      getImage("binko", "Binko_07", "large"),
      getImage("binko", "Binko_08", "large"),
      getImage("binko", "Binko_09", "large"),
      getImage("binko", "Binko_10", "large"),
    ],
    description:
      "بینکو، برندی فعال در زمینه تولید و فروش شکلات است. لوگوتایپ این برند با فرم‌های نرم و خطوط منحنی طراحی شده تا حس شیرینی و صمیمیت را منتقل کند. رنگ قرمز با هدف ایجاد انرژی، جلب توجه و افزایش جذابیت بصری انتخاب شده و ترکیب آن با رنگ سفید، به خوانایی و برجسته‌شدن نام برند کمک می‌کند.",
  },
  {
    id: "fujan",
    number: "۰۴",
    title: "آکادمی بدمینتون فوژان",
    titleEn: "Fujan Badminton Academy",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۴",
    yearEn: "2025",
    imagePath: getImage("fujan", "Fujan_10", "thumb"),
    detailImages: [
      getImage("fujan", "Fujan_01", "large"),
      getImage("fujan", "Fujan_02", "large"),
      getImage("fujan", "Fujan_03", "large"),
      getImage("fujan", "Fujan_04", "large"),
      getImage("fujan", "Fujan_05", "large"),
      getImage("fujan", "Fujan_06", "large"),
      getImage("fujan", "Fujan_07", "large"),
      getImage("fujan", "Fujan_08", "large"),
      getImage("fujan", "Fujan_09", "large"),
    ],
    description:
      "فوژان، آکادمی آموزش بدمینتون ویژه نوجوانان است. در طراحی لوگوی این مجموعه، از فرم بازیکن و عناصر مرتبط با بدمینتون برای نمایش حرکت و پویایی استفاده شده است. رنگ نارنجی، نمادی از انرژی، نشاط و تحرک ورزشی است و ترکیب آن با رنگ مشکی، به ایجاد تضاد بصری و خوانایی بیشتر نشانه کمک می‌کند.",
  },
  {
    id: "naavak",
    number: "۰۵",
    title: "استودیو ناوک",
    titleEn: "Naavak Studio",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۴",
    yearEn: "2025",
    imagePath: getImage("naavak", "Naavak_10", "large"),
    detailImages: [
      getImage("naavak", "Naavak_01", "large"),
      getImage("naavak", "Naavak_02", "large"),
      getImage("naavak", "Naavak_03", "large"),
      getImage("naavak", "Naavak_04", "large"),
      getImage("naavak", "Naavak_05", "large"),
      getImage("naavak", "Naavak_06", "large"),
      getImage("naavak", "Naavak_07", "large"),
      getImage("naavak", "Naavak_08", "large"),
      getImage("naavak", "Naavak_09", "large"),
    ],
    description:
      "ناوک، استودیویی فعال در حوزه رسانه است. در طراحی لوگوی این مجموعه، از خطوط پیوسته و فرم‌های هندسی استفاده شده تا نشانه‌ای ساده و منسجم شکل بگیرد. ترکیب سیاه و سفید، بر سادگی و وضوح نشانه تأکید دارد و به آن امکان می‌دهد در فضاها و رسانه‌های مختلف، هویت بصری خود را حفظ کند.",
  },
  {
    id: "rasta",
    number: "۰۶",
    title: "مدرسه هنر و رسانه رستا",
    titleEn: "Rasta School of Arts and Media",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۳",
    yearEn: "2024",
    imagePath: getImage("rasta", "Rasta_06", "large"),
    detailImages: [
      getImage("rasta", "Rasta_01", "large"),
      getImage("rasta", "Rasta_02", "large"),
      getImage("rasta", "Rasta_03", "large"),
      getImage("rasta", "Rasta_04", "large"),
      getImage("rasta", "Rasta_05", "large"),
      getImage("rasta", "Rasta_07", "large"),
      getImage("rasta", "Rasta_08", "large"),
      getImage("rasta", "Rasta_09", "large"),
      getImage("rasta", "Rasta_10", "large"),
    ],
    description:
      "رستا، مجموعه‌ای آموزشی در حوزه هنر و رسانه ویژه نوجوانان است. فرم پویای نشانه با خطوط نرم و پیوسته طراحی شده تا با فضای خلاق و آموزشی مجموعه هماهنگ باشد. ترکیب رنگ سبز و آبی، با الهام از مفاهیم رشد، خلاقیت و اعتماد انتخاب شده و به هویت بصری مدرسه، حال‌وهوایی جوان و پرانرژی بخشیده است.",
  },
];
