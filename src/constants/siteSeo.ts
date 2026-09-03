/** Canonical public origin — update here if the live host changes. */
export const SITE_ORIGIN = "https://icode.bit.uom.lk";

export const SITE_NAME = "ICODE2026";

export const DEFAULT_KEYWORDS = [
  "ICODE2026",
  "ICODE 2026",
  "ICODE",
  "ICODE conference",
  "ICODE conference 2026",
  "International Conference on Open and Digital Education",
  "University of Moratuwa research conference",
  "University of Moratuwa conference",
  "Moratuwa research conference",
  "Moratuwa conference 2026",
  "UoM research conference",
  "UoM conference",
  "UoM ICODE",
  "UoM ICODE2026",
  "CODL research conference",
  "CODL conference",
  "CODL ICODE",
  "CODL ICODE2026",
  "Centre for Open and Distance Learning",
  "CODL University of Moratuwa",
  "open and digital education conference",
  "open education conference",
  "digital education conference",
  "distance education conference",
  "open distance learning conference",
  "ODL conference",
  "higher education research conference",
  "education research conference Sri Lanka",
  "international research conference Sri Lanka",
  "research conference Sri Lanka",
  "research conference Colombo",
  "hybrid conference Colombo",
  "hybrid research conference",
  "online conference Sri Lanka",
  "conference August 2026 Sri Lanka",
  "Sri Lanka education conference",
  "icode.bit.uom.lk",
  "BIT University of Moratuwa conference",
].join(", ");

export type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
};

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title:
      "ICODE2026 | University of Moratuwa Research Conference | CODL Open & Digital Education",
    description:
      "ICODE2026 is the international research conference on open and digital education at the University of Moratuwa (UoM), hosted by CODL. Hybrid event in Colombo, Sri Lanka, 5–7 August 2026.",
    keywords: DEFAULT_KEYWORDS,
  },
  "/call-for-papers": {
    title: "Call for Papers | ICODE2026 UoM CODL Research Conference",
    description:
      "Submit your extended abstract to ICODE2026, the University of Moratuwa CODL international research conference on open, distance, and digital education. Key dates, themes, and templates.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE call for papers, call for papers UoM, CODL abstract submission, extended abstract template, submit abstract ICODE2026, CMT ICODE2026, conference paper submission Sri Lanka`,
  },
  "/programme": {
    title: "Conference Programme | ICODE2026 University of Moratuwa",
    description:
      "Three-day ICODE2026 programme: policy summit, academic research sessions, and practice workshops. University of Moratuwa CODL conference, Colombo, August 2026.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE programme, conference schedule August 2026, UoM conference agenda, policy summit digital education, academic research sessions`,
  },
  "/programme/day1": {
    title: "Day 1 Academic Research Conference | ICODE2026 Programme",
    description:
      "ICODE2026 Day 1 schedule — Academic Research Conference on 5 August 2026 at the University of Moratuwa.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 1, academic research conference schedule, UoM research sessions August 2026`,
  },
  "/programme/day2": {
    title: "Day 2 Policy & Leadership Summit | ICODE2026 Programme",
    description:
      "ICODE2026 Day 2 schedule — Policy and Leadership Summit on 6 August 2026.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 2, policy leadership summit schedule, digital education policy Sri Lanka`,
  },
  "/programme/day3": {
    title: "Day 3 Practice & Innovation Workshops | ICODE2026 Programme",
    description:
      "ICODE2026 Day 3 schedule — Practice and Innovation Workshops on 7 August 2026 at the University of Moratuwa.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 3, workshop schedule, practice innovation workshops UoM`,
  },
  "/governance": {
    title: "Governance & Committee | ICODE2026 UoM CODL",
    description:
      "Organising committee and governance for ICODE2026, the international research conference hosted by CODL at the University of Moratuwa.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE organising committee, UoM conference organisers, CODL governance, conference steering committee`,
  },
  "/registration": {
    title: "Registration | ICODE2026 Hybrid Conference Colombo",
    description:
      "ICODE2026 registration is closed. View fees, programme access, and what registration included for the University of Moratuwa CODL conference in Colombo, Sri Lanka (5–7 August 2026).",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE registration, register UoM conference, delegate registration Colombo, hybrid conference registration Sri Lanka`,
  },
  "/gallery": {
    title: "Gallery | ICODE2026 University of Moratuwa",
    description:
      "ICODE2026 conference photo gallery from the University of Moratuwa CODL event, 5–7 August 2026.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE gallery, ICODE2026 photos, UoM conference photos, CODL gallery`,
  },
  "/gallery/day1": {
    title: "Day 1 Gallery | ICODE2026 University of Moratuwa",
    description:
      "ICODE2026 Day 1 photos — Academic Research Conference on 5 August 2026 at the University of Moratuwa.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 1 photos, academic research conference gallery`,
  },
  "/gallery/day2": {
    title: "Day 2 Gallery | ICODE2026 University of Moratuwa",
    description:
      "ICODE2026 Day 2 photos — Policy and Leadership Summit on 6 August 2026.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 2 photos, policy leadership summit gallery`,
  },
  "/gallery/day3": {
    title: "Day 3 Gallery | ICODE2026 University of Moratuwa",
    description:
      "ICODE2026 Day 3 photos — Practice and Innovation Workshops on 7 August 2026 at the University of Moratuwa.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE Day 3 photos, workshop gallery UoM`,
  },
  "/proceedings": {
    title: "Conference Programme | ICODE2026 University of Moratuwa",
    description:
      "Browse ICODE2026 Day 1 programme by session. Paper titles, authors, and post-conference slides and videos from the University of Moratuwa CODL conference.",
    keywords:
      `${DEFAULT_KEYWORDS}, ICODE programme, conference programme, conference papers, research presentations, UoM programme`,
  },
};

export function seoForPath(pathname: string): PageSeo {
  return PAGE_SEO[pathname] ?? PAGE_SEO["/"];
}

export function canonicalUrl(pathname: string): string {
  if (pathname === "/" || pathname === "") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${pathname}`;
}
