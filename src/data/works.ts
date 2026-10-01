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
    imagePath: "Azarakhsh_08",
    detailImages: [
      "Azarakhsh_01",
      "Azarakhsh_02",
      "Azarakhsh_03",
      "Azarakhsh_04",
      "Azarakhsh_05",
      "Azarakhsh_06",
      "Azarakhsh_07",
      "Azarakhsh_09",
      "Azarakhsh_10",
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
    imagePath: "Basharan_03",
    detailImages: [
      "Basharan_01",
      "Basharan_02",
      "Basharan_04",
      "Basharan_05",
      "Basharan_06",
      "Basharan_07",
      "Basharan_08",
      "Basharan_09",
      "Basharan_10",
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
    imagePath: "Binko_03",
    detailImages: [
      "Binko_01",
      "Binko_02",
      "Binko_04",
      "Binko_05",
      "Binko_06",
      "Binko_07",
      "Binko_08",
      "Binko_09",
      "Binko_10",
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
    imagePath: "Fujan_10",
    detailImages: [
      "Fujan_01",
      "Fujan_02",
      "Fujan_03",
      "Fujan_04",
      "Fujan_05",
      "Fujan_06",
      "Fujan_07",
      "Fujan_08",
      "Fujan_09",
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
    imagePath: "Naavak_10",
    detailImages: [
      "Naavak_01",
      "Naavak_02",
      "Naavak_03",
      "Naavak_04",
      "Naavak_05",
      "Naavak_06",
      "Naavak_07",
      "Naavak_08",
      "Naavak_09",
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
    imagePath: "Rasta_06",
    detailImages: [
      "Rasta_01",
      "Rasta_02",
      "Rasta_03",
      "Rasta_04",
      "Rasta_05",
      "Rasta_07",
      "Rasta_08",
      "Rasta_09",
      "Rasta_10",
    ],
    description:
      "رستا، مجموعه‌ای آموزشی در حوزه هنر و رسانه ویژه نوجوانان است. فرم پویای نشانه با خطوط نرم و پیوسته طراحی شده تا با فضای خلاق و آموزشی مجموعه هماهنگ باشد. ترکیب رنگ سبز و آبی، با الهام از مفاهیم رشد، خلاقیت و اعتماد انتخاب شده و به هویت بصری مدرسه، حال‌وهوایی جوان و پرانرژی بخشیده است.",
  },
];
