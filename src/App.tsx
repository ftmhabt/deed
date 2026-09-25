import { useState, type CSSProperties } from "react";
import { ContactPage } from "./components/Contact";
// ─── Types ────────────────────────────────────────────────────────────────────
type Page = "home" | "project" | "about" | "contact";
type Category =
  | "all"
  | "identity"
  | "poster"
  | "advertising"
  | "packaging"
  | "digital";

interface Project {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  category: Category;
  categoryLabel: string;
  categoryLabelFa: string;
  year: string;
  yearEn: string;
  imageId: string;
  detailImages: string[];
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: "nava",
    number: "۰۱",
    title: "نوا",
    titleEn: "Nava",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۳",
    yearEn: "2024",
    imageId: "photo-1561070791-2526d30994b5",
    detailImages: [
      "photo-1586717799252-bd134ad00e26",
      "photo-1609921212029-bb5a28e60960",
      "photo-1526628953301-3cd2f49a8463",
      "photo-1558618666-fcd25c85cd64",
    ],
    description:
      "A visual identity system for Nava, a contemporary music label from Tehran. The system balances modernity with organic warmth, using a restrained palette and geometric forms to express the label's curatorial voice.",
  },
  {
    id: "kashan",
    number: "۰۲",
    title: "کاشان",
    titleEn: "Kashan",
    category: "poster",
    categoryLabel: "Posters",
    categoryLabelFa: "پوستر",
    year: "۱۴۰۳",
    yearEn: "2024",
    imageId: "photo-1586717799252-bd134ad00e26",
    detailImages: [
      "photo-1572044162444-ad60f128bdea",
      "photo-1618004652321-13a63e576b80",
      "photo-1558618666-fcd25c85cd64",
    ],
    description:
      "A series of exhibition posters for the Kashan Design Festival. Each piece explores the interplay between Persian typographic proportions and the contemporary grid — restraint as a compositional act.",
  },
  {
    id: "aria",
    number: "۰۳",
    title: "آریا",
    titleEn: "Aria",
    category: "packaging",
    categoryLabel: "Packaging",
    categoryLabelFa: "بسته‌بندی",
    year: "۱۴۰۲",
    yearEn: "2023",
    imageId: "photo-1612538498456-e861df91d4d0",
    detailImages: [
      "photo-1594035910387-fea47794261f",
      "photo-1526628953301-3cd2f49a8463",
    ],
    description:
      "Packaging design for Aria, an artisan tea brand rooted in the gardens of Gilan. The design draws from botanical illustration traditions while maintaining a clean, shelf-forward presence that travels well across markets.",
  },
  {
    id: "radin",
    number: "۰۴",
    title: "رادین",
    titleEn: "Radin",
    category: "advertising",
    categoryLabel: "Advertising",
    categoryLabelFa: "تبلیغات",
    year: "۱۴۰۲",
    yearEn: "2023",
    imageId: "photo-1558618666-fcd25c85cd64",
    detailImages: [
      "photo-1561070791-2526d30994b5",
      "photo-1618004652321-13a63e576b80",
    ],
    description:
      "A campaign for Radin, a lifestyle brand. Carefully composed typography and monochromatic photography build a consistent visual language across print and digital, where every touchpoint feels considered.",
  },
  {
    id: "sepand",
    number: "۰۵",
    title: "سپند",
    titleEn: "Sepand",
    category: "digital",
    categoryLabel: "Digital",
    categoryLabelFa: "دیجیتال",
    year: "۱۴۰۲",
    yearEn: "2023",
    imageId: "photo-1618004652321-13a63e576b80",
    detailImages: [
      "photo-1586717799252-bd134ad00e26",
      "photo-1609921212029-bb5a28e60960",
    ],
    description:
      "Digital product design for Sepand, a financial platform. The interface prioritizes clarity and ease of use, translating complex data into an accessible and trustworthy visual experience.",
  },
  {
    id: "ava",
    number: "۰۶",
    title: "آوا",
    titleEn: "Ava",
    category: "identity",
    categoryLabel: "Visual Identity",
    categoryLabelFa: "هویت بصری",
    year: "۱۴۰۱",
    yearEn: "2022",
    imageId: "photo-1526628953301-3cd2f49a8463",
    detailImages: [
      "photo-1609921212029-bb5a28e60960",
      "photo-1561070791-2526d30994b5",
      "photo-1572044162444-ad60f128bdea",
    ],
    description:
      "Brand identity for Ava, an independent publishing house. The system is built around legibility and longevity — a mark and typography that work equally well on a spine, a website, and a tote bag.",
  },
  {
    id: "simorgh",
    number: "۰۷",
    title: "سیمرغ",
    titleEn: "Simorgh",
    category: "packaging",
    categoryLabel: "Packaging",
    categoryLabelFa: "بسته‌بندی",
    year: "۱۴۰۱",
    yearEn: "2022",
    imageId: "photo-1572044162444-ad60f128bdea",
    detailImages: [
      "photo-1594035910387-fea47794261f",
      "photo-1612538498456-e861df91d4d0",
    ],
    description:
      "Packaging for Simorgh, a premium saffron label. The visual language references the geometric precision of Iranian craft through a contemporary lens — without direct quotation, without nostalgia.",
  },
  {
    id: "parisa",
    number: "۰۸",
    title: "پریسا",
    titleEn: "Parisa",
    category: "poster",
    categoryLabel: "Posters",
    categoryLabelFa: "پوستر",
    year: "۱۴۰۱",
    yearEn: "2022",
    imageId: "photo-1609921212029-bb5a28e60960",
    detailImages: [
      "photo-1558618666-fcd25c85cd64",
      "photo-1586717799252-bd134ad00e26",
    ],
    description:
      "A poster series for Parisa, a theatre production company. Each poster for the season is a distinct composition sharing a common visual grammar — structured around a precise typographic system that makes space for image and absence equally.",
  },
];

const FILTERS: { id: Category; en: string; fa: string }[] = [
  { id: "all", en: "All", fa: "همه" },
  { id: "identity", en: "Visual Identity", fa: "هویت بصری" },
  { id: "poster", en: "Posters", fa: "پوستر" },
  { id: "advertising", en: "Advertising", fa: "تبلیغات" },
  { id: "packaging", en: "Packaging", fa: "بسته‌بندی" },
  { id: "digital", en: "Digital", fa: "دیجیتال" },
];

// Editorial positions for 8 projects on a 12-column grid
const EDITORIAL: CSSProperties[] = [
  { gridColumn: "1 / 8", gridRow: "1 / 5" }, // large tall
  { gridColumn: "8 / 13", gridRow: "1 / 3" }, // medium wide
  { gridColumn: "8 / 10", gridRow: "3 / 5" }, // small
  { gridColumn: "10 / 13", gridRow: "3 / 5" }, // small
  { gridColumn: "1 / 5", gridRow: "5 / 8" }, // small
  { gridColumn: "5 / 9", gridRow: "5 / 8" }, // medium
  { gridColumn: "9 / 13", gridRow: "5 / 8" }, // small
  { gridColumn: "1 / 13", gridRow: "8 / 10" }, // full-width banner
];

function unsplash(id: string, w: number, h: number) {
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function EyeMark({ size = 18 }: { size?: number }) {
  const h = Math.round(size * 0.72);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 18 13"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M9 1.5C5 1.5 1.5 6.5 1.5 6.5C1.5 6.5 5 11.5 9 11.5C13 11.5 16.5 6.5 16.5 6.5C16.5 6.5 13 1.5 9 1.5Z"
        stroke="#9B7B5A"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="9" cy="6.5" r="2.2" fill="#9B7B5A" />
    </svg>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({
  page,
  navigate,
  menuOpen,
  setMenuOpen,
}: {
  page: Page;
  navigate: (p: Page) => void;
  menuOpen: boolean;
  setMenuOpen: (o: boolean) => void;
}) {
  const links = [
    { en: "Works", fa: "کارها", p: "home" as Page },
    { en: "About", fa: "درباره", p: "about" as Page },
    { en: "Contact", fa: "ارتباط", p: "contact" as Page },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b border-warm-border"
        style={{
          backgroundColor: "rgba(248,245,240,0.92)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Wordmark */}
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <EyeMark />
              <span className="font-sans font-medium text-sm tracking-tight text-charcoal">
                Did
              </span>
              <span className="text-warm-border text-xs select-none">·</span>
              <span className="font-persian font-normal text-sm text-charcoal">
                دید
              </span>
            </button>

            {/* Desktop links */}
            <div className="desktop-nav items-center gap-9">
              {links.map(({ en, fa, p }) => (
                <button
                  key={p}
                  onClick={() => navigate(p)}
                  className="flex flex-col items-center gap-0.5 cursor-pointer group"
                >
                  <span
                    className={`text-[12px] tracking-widest uppercase transition-colors ${page === p ? "text-charcoal font-medium" : "text-warm-fg group-hover:text-charcoal"}`}
                  >
                    {en}
                  </span>
                  <span
                    className={`font-persian text-[10px] transition-colors ${page === p ? "text-accent" : "text-warm-fg/60 group-hover:text-warm-fg"}`}
                  >
                    {fa}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn flex-col gap-[5px] cursor-pointer p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-5 bg-charcoal transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-3 bg-charcoal transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px] w-5" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-warm-white flex flex-col pt-20 px-8 pb-10">
          <div className="flex flex-col gap-0 border-t border-warm-border">
            {links.map(({ en, fa, p }) => (
              <button
                key={p}
                onClick={() => {
                  navigate(p);
                  setMenuOpen(false);
                }}
                className="flex items-baseline justify-between py-7 border-b border-warm-border cursor-pointer group"
              >
                <span className="text-3xl font-medium text-charcoal group-hover:text-accent transition-colors">
                  {en}
                </span>
                <span className="font-persian text-base text-warm-fg">
                  {fa}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2.5">
              <EyeMark size={14} />
              <p className="font-persian text-sm text-warm-fg">
                استودیوی طراحی گرافیک مستقل
              </p>
            </div>
            <p className="text-xs text-warm-fg/60 mt-1">Tehran, Iran · ©۱۴۰۳</p>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  gridStyle,
  onClick,
  wide,
}: {
  project: Project;
  gridStyle?: CSSProperties;
  onClick: () => void;
  wide?: boolean;
}) {
  return (
    <div
      className="project-card flex flex-col"
      style={gridStyle}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${project.titleEn}`}
    >
      <div className="overflow-hidden flex-1 relative bg-warm-muted">
        <img
          src={unsplash(project.imageId, wide ? 1600 : 800, wide ? 460 : 800)}
          alt={project.titleEn}
          className="project-card-img w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex items-baseline justify-between pt-2 pb-px gap-2">
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="font-mono text-[10px] text-warm-fg shrink-0">
            {project.number}
          </span>
          <span className="text-[13px] font-medium text-charcoal truncate">
            {project.title}
          </span>
          <span className="font-sans text-[12px] text-warm-fg truncate hidden sm:block">
            {project.titleEn}
          </span>
        </div>
        <span className="text-[11px] text-warm-fg shrink-0 hidden md:block">
          {project.categoryLabel}
        </span>
      </div>
    </div>
  );
}

// ─── Portfolio Grid ───────────────────────────────────────────────────────────
function PortfolioGrid({
  activeFilter,
  onProjectClick,
}: {
  activeFilter: Category;
  onProjectClick: (id: string) => void;
}) {
  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);
  const editorial = activeFilter === "all" && filtered.length === 8;

  if (editorial) {
    return (
      <div className="portfolio-editorial">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            gridStyle={EDITORIAL[i]}
            onClick={() => onProjectClick(project.id)}
            wide={EDITORIAL[i].gridColumn === "1 / 13"}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {filtered.map((project) => (
        <div
          key={project.id}
          className="project-card flex flex-col cursor-pointer group"
          onClick={() => onProjectClick(project.id)}
        >
          <div className="overflow-hidden aspect-[4/3] bg-warm-muted">
            <img
              src={unsplash(project.imageId, 800, 600)}
              alt={project.titleEn}
              className="project-card-img w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-baseline justify-between pt-2 pb-px gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] text-warm-fg">
                {project.number}
              </span>
              <span className="text-[13px] font-medium text-charcoal">
                {project.title}
              </span>
              <span className="text-[12px] text-warm-fg">
                {project.titleEn}
              </span>
            </div>
            <span className="font-persian text-[11px] text-warm-fg">
              {project.year}
            </span>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <p className="col-span-3 text-center text-warm-fg py-20 font-persian text-sm">
          پروژه‌ای در این دسته‌بندی یافت نشد.
        </p>
      )}
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({
  navigate,
  activeFilter,
  setActiveFilter,
}: {
  navigate: (p: Page, id?: string) => void;
  activeFilter: Category;
  setActiveFilter: (c: Category) => void;
}) {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-28">
      {/* Studio intro */}
      <div className="mb-14 max-w-lg">
        <p className="font-persian text-[18px] leading-relaxed text-charcoal mb-3">
          دید، یک استودیوی طراحی گرافیک مستقل است.
        </p>
        <p className="text-[14px] text-warm-fg leading-relaxed">
          We make visual identities, print, and digital work for brands that
          believe how something looks is part of what it means.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap items-end gap-x-7 gap-y-3 mb-8 pb-6 border-b border-warm-border">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`flex flex-col gap-0.5 cursor-pointer group transition-colors ${activeFilter === f.id ? "filter-btn-active" : ""}`}
          >
            <span
              className={`text-[12px] tracking-wide transition-colors ${activeFilter === f.id ? "text-charcoal font-medium" : "text-warm-fg group-hover:text-charcoal"}`}
            >
              {f.en}
            </span>
            <span
              className={`font-persian text-[10px] transition-colors ${activeFilter === f.id ? "text-accent" : "text-warm-fg/50 group-hover:text-warm-fg"}`}
            >
              {f.fa}
            </span>
          </button>
        ))}
      </div>

      <PortfolioGrid
        activeFilter={activeFilter}
        onProjectClick={(id) => navigate("project", id)}
      />
    </div>
  );
}

// ─── Project Detail ───────────────────────────────────────────────────────────
function ProjectDetailPage({
  project,
  navigate,
}: {
  project: Project;
  navigate: (p: Page, id?: string) => void;
}) {
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <article className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-28">
      {/* Back */}
      <button
        onClick={() => navigate("home")}
        className="flex items-center gap-2 text-warm-fg text-[12px] uppercase tracking-widest mb-12 hover:text-charcoal transition-colors cursor-pointer group"
      >
        <span>Works</span>
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
        <span className="font-persian normal-case text-[11px]">/ کارها</span>
      </button>

      {/* Project header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-warm-fg">
              {project.number}
            </span>
            <span className="block flex-1 max-w-[48px] h-px bg-warm-border" />
          </div>
          <h1 className="font-persian text-6xl sm:text-8xl font-medium text-charcoal leading-none mb-3">
            {project.title}
          </h1>
          <p className="text-2xl sm:text-3xl text-warm-fg font-light tracking-tight">
            {project.titleEn}
          </p>
        </div>
        <div className="flex sm:flex-col gap-10 sm:gap-5 sm:pt-3">
          <div>
            <p className="text-[10px] text-warm-fg uppercase tracking-widest mb-1.5">
              Category
            </p>
            <p className="text-[14px] text-charcoal">{project.categoryLabel}</p>
            <p className="font-persian text-[12px] text-warm-fg mt-0.5">
              {project.categoryLabelFa}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-warm-fg uppercase tracking-widest mb-1.5">
              Year
            </p>
            <p className="text-[14px] text-charcoal">{project.yearEn}</p>
            <p className="font-persian text-[12px] text-warm-fg mt-0.5">
              {project.year}
            </p>
          </div>
        </div>
      </div>

      {/* Hero ima ge */}
      <div className="w-full aspect-video overflow-hidden bg-warm-muted mb-2">
        <img
          src={unsplash(project.imageId, 1600, 900)}
          alt={project.titleEn}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 mb-16">
        <div className="sm:col-span-2">
          <p className="text-[16px] leading-[1.75] text-charcoal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Detail images */}
      {project.detailImages.length >= 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
          <div className="aspect-square overflow-hidden bg-warm-muted">
            <img
              src={unsplash(project.detailImages[0], 800, 800)}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-1 overflow-hidden bg-warm-muted">
              <img
                src={unsplash(project.detailImages[1], 800, 400)}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {project.detailImages[2] && (
              <div className="flex-1 overflow-hidden bg-warm-muted">
                <img
                  src={unsplash(project.detailImages[2], 800, 400)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {project.detailImages.length >= 4 && (
        <div className="w-full aspect-[21/9] overflow-hidden bg-warm-muted mb-16">
          <img
            src={unsplash(project.detailImages[3], 1600, 700)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {project.detailImages.length === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-16">
          {project.detailImages.map((id, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden bg-warm-muted">
              <img
                src={unsplash(id, 800, 600)}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Prev / Next */}
      <div className="border-t border-warm-border pt-10 mt-12 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start">
          {next && (
            <button
              onClick={() => navigate("project", next.id)}
              className="group flex flex-col gap-1.5 cursor-pointer items-start text-start"
            >
              <span className="text-[10px] text-warm-fg uppercase tracking-widest flex items-center gap-1.5">
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>
                Next
              </span>
              <span className="font-persian text-lg font-medium text-charcoal group-hover:text-accent transition-colors">
                {next.title}
              </span>
              <span className="text-[13px] text-warm-fg">{next.titleEn}</span>
            </button>
          )}
        </div>
        <div className="flex flex-col items-end">
          {prev && (
            <button
              onClick={() => navigate("project", prev.id)}
              className="group flex flex-col gap-1.5 cursor-pointer items-end text-end"
            >
              <span className="text-[10px] text-warm-fg uppercase tracking-widest flex items-center gap-1.5">
                Previous
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="font-persian text-lg font-medium text-charcoal group-hover:text-accent transition-colors">
                {prev.title}
              </span>
              <span className="text-[13px] text-warm-fg">{prev.titleEn}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 mb-16">
        {/* Text */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-medium text-charcoal mb-8 leading-tight tracking-tight">
            About
            <br />
            <span className="font-persian font-normal text-4xl sm:text-5xl">
              درباره ما
            </span>
          </h1>

          <div className="space-y-5 mb-10">
            <p className="text-[15px] leading-relaxed text-charcoal">
              Did is an independent graphic design studio. We work with
              founders, cultural institutions, and makers who believe that good
              design is not decoration — it is thinking made visible.
            </p>
            <p className="text-[15px] leading-relaxed text-warm-fg">
              Our work spans visual identity, print, posters, packaging, and
              digital. We take on a small number of projects at a time so each
              one gets the attention it deserves.
            </p>
            <p className="font-persian text-[14px] leading-[2] text-warm-fg mt-4">
              دید یک استودیوی طراحی مستقل است. با بنیان‌گذاران، نهادهای فرهنگی و
              سازندگانی کار می‌کنیم که معتقدند طراحی خوب تزئین نیست — بلکه تفکری
              است که دیده می‌شود.
            </p>
          </div>

          <div className="border-t border-warm-border pt-8 mb-8">
            <p className="text-[10px] text-warm-fg uppercase tracking-widest mb-3">
              Based in
            </p>
            <p className="text-[14px] text-charcoal">Tehran, Iran</p>
            <p className="font-persian text-[12px] text-warm-fg mt-0.5">
              تهران، ایران
            </p>
          </div>

          <div>
            <p className="text-[10px] text-warm-fg uppercase tracking-widest mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {[
                ["Visual Identity", "هویت بصری"],
                ["Print & Editorial", "چاپ و انتشارات"],
                ["Packaging", "بسته‌بندی"],
                ["Posters & Campaigns", "پوستر و کمپین"],
                ["Digital Design", "طراحی دیجیتال"],
              ].map(([en, fa]) => (
                <li
                  key={en}
                  className="flex items-center justify-between text-[13px] border-b border-warm-border pb-2.5"
                >
                  <span className="text-charcoal">{en}</span>
                  <span className="font-persian text-[12px] text-warm-fg">
                    {fa}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate("home")}
            className="mt-10 group flex items-center gap-2 cursor-pointer"
          >
            <span className="text-[12px] text-warm-fg uppercase tracking-widest group-hover:text-charcoal transition-colors">
              See our work
            </span>
            <span className="font-persian text-[11px] text-accent">
              کارهای ما
            </span>
            <span className="text-warm-fg group-hover:-translate-x-1 transition-transform">
              ←
            </span>
          </button>
        </div>

        {/* Images */}
        <div className="flex flex-col gap-2">
          <div
            className="overflow-hidden bg-warm-muted"
            style={{ height: "340px" }}
          >
            <img
              src={unsplash("photo-1524758631624-e2822e304c36", 800, 700)}
              alt="Did studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="aspect-square overflow-hidden bg-warm-muted">
              <img
                src={unsplash("photo-1541963463532-d68292c34b19", 500, 500)}
                alt="Studio process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-warm-muted">
              <img
                src={unsplash("photo-1561070791-2526d30994b5", 500, 500)}
                alt="Design work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="border-t border-warm-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <EyeMark size={14} />
          <span className="text-[13px] text-warm-fg group-hover:text-charcoal transition-colors font-sans">
            Did
          </span>
          <span className="text-warm-border text-xs">·</span>
          <span className="font-persian text-[13px] text-warm-fg group-hover:text-charcoal transition-colors">
            دید
          </span>
        </button>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-warm-fg/50">©۱۴۰۳</span>
          <a
            href="mailto:hello@did.studio"
            className="text-[12px] text-warm-fg hover:text-charcoal transition-colors"
          >
            hello@did.studio
          </a>
          <a
            href="#"
            className="text-[12px] text-warm-fg hover:text-charcoal transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[12px] text-warm-fg hover:text-charcoal transition-colors"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedId, setSelectedId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [visible, setVisible] = useState(true);

  function navigate(newPage: Page, projectId?: string) {
    setVisible(false);
    setTimeout(() => {
      setPage(newPage);
      if (projectId) setSelectedId(projectId);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setVisible(true);
    }, 220);
  }

  const project = PROJECTS.find((p) => p.id === selectedId);

  return (
    <div
      className="min-h-screen bg-warm-white text-charcoal font-sans"
      dir="rtl"
    >
      <Nav
        page={page}
        navigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        {page === "home" && (
          <HomePage
            navigate={navigate}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )}
        {page === "project" && project && (
          <ProjectDetailPage project={project} navigate={navigate} />
        )}
        {page === "project" && !project && (
          <HomePage
            navigate={navigate}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      {!menuOpen && <Footer navigate={navigate} />}
    </div>
  );
}
