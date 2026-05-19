import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { UsersIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logo.png";
import codlLogo from "./assets/codllogo.png";
import womanAvatar from "./assets/woman.png";
import manAvatar from "./assets/men.png";
import { ContactBitWebsiteFooterItem } from "./components/ContactBitWebsiteFooterItem";
import { ContactWhatsAppFooterItem } from "./components/ContactWhatsAppFooterItem";
import { Reveal } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SitePageShell } from "./components/SitePageShell";
import { FooterConferenceLinks } from "./components/FooterConferenceLinks";

type PersonRecord = { name: string; designation?: string };
type PersonInput = string | PersonRecord;

type CommitteeSection = { label: string; people: PersonInput[] };

type CommitteeGroup = {
  role: string;
  /** Optional second line so long titles stay readable (e.g. parenthetical subtitle). */
  roleSecondLine?: string;
  people?: PersonInput[];
  sections?: CommitteeSection[];
};

/** Order: strategic (0–1), academic (2), operations (3–end). */
const committeeGroups: CommitteeGroup[] = [
  {
    role: "Event Patron",
    people: [
      {
        name: "Prof Malik Ranasinghe",
        designation:
          "Chair, National Academy of Science (SL)\nFormer Vice‑Chancellor\nUniversity of Moratuwa"
      }
    ]
  },
  {
    role: "Event Co‑chairs",
    people: [
      {
        name: "Prof Dileeka Dias",
        designation: "Deputy Vice‑Chancellor\nUniversity of Moratuwa"
      },
      {
        name: "Ms Vishaka Nanayakkara",
        designation:
          "Senior Lecturer · Director, CODL\nUniversity of Moratuwa"
      }
    ]
  },
  {
    role: "Publications & Proceedings",
    roleSecondLine: "",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Dr Buddhika Karunarathne",
            designation:
              "Senior Lecturer · Deputy Director, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Dr Thanuja Ambegoda",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Ms Eshana Ranasinghe",
            designation:
              "Junior Consultant, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Mr Savin Gunawardena",
            designation:
              "Junior Consultant, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Mr Nadeesha Ranaweera",
            designation: "Systems Engineer\nUniversity of Moratuwa"
          },
          {
            name: "Dr. Janadari Wijesinghe",
            designation: "Head of Academic Affairs\nUniversity Grants Commission\nSri Lanka"
          },
          {
            name: "Ms Sumudu Wasana",
            designation: "Deputy Director of Education\nMinistry of Education\nSri Lanka"
          },
          {
            name: "Prof Tharaka Samarasinghe",
            designation: "Professor\nUniversity of Moratuwa"
          },
          {
            name: "Prof Uditha Ratnayake",
            designation: "Professor, Open University of Sri Lanka"
          },
          {
            name: "Dr Sureka Thiruchittappalam",
            designation:
              "Lecturer, Earth Resources Engineering\nUniversity of Moratuwa"
          },
          {
            name: "Dr Sumith Gopura",
            designation:
              "Senior Lecturer, Textile & Apparel Engineering\nUniversity of Moratuwa"
          },
          {
            name: "Dr Surangika Ranathunga",
            designation:
              "Senior Lecturer, School of Mathematical and Computational Sciences\nMassey University, New Zealand"
          },
          {
            name: "Dr Srinath Perera",
            designation: "Vice President · Head of Research, WSO2"
          },
          {
            name: "Dr Dilum Bandara",
            designation:
              "Principal Research Scientist, CSIRO Data61 · Adjunct Senior Lecturer, UNSW Sydney"
          },
          {
            name: "Prof Gominda Ponnamperuma",
            designation: "Professor, University of Colombo"
          }
        ]
      }
    ]
  },
  {
    role: "Media, Communications & Branding Committee",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Dr Nisansa de Silva",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          },
          {
            name: "Dr Suranga Jayasena",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Mr Nadeesha Ranaweera",
            designation: "Systems Engineer\nUniversity of Moratuwa"
          },
          {
            name: "Mr Kaveesha Nanayakkara",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Ms Malshi Tharuka",
            designation:
              "Support Staff, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Ms Shazna Kamaldeen",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  },
  {
    role: "Policy & Leadership Summit",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Prof N D Gunawardena",
            designation: "Vice‑Chancellor\nUniversity of Moratuwa"
          },
          {
            name: "Ms Vishaka Nanayakkara",
            designation:
              "Senior Lecturer · Director, CODL\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Ms Tashini Rodrigo",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Mr Jageshkar Sivahar",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Prof Uthayasanker Thayasivam",
            designation:
              "Professor · Head, CSE\nUniversity of Moratuwa"
          },
          {
            name: "Mr Waruna Sri Danapala",
            designation: "Secretary, Ministry of Digital Economy (Sri Lanka)"
          },
          { name: "Mr Hasith Yaggahavita", designation: "CEO, 99x" },
          {
            name: "Prof Udeni Nawagamuwa",
            designation:
              "Professor · Head, Civil Engineering\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  },
  {
    role: "Finance & Sponsorship Committee",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Dr Sunimal Ratnayake",
            designation: "Senior Lecturer / Director, CITES\nUniversity of Moratuwa"
          },
          {
            name: "Dr Tiloka de Silva",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Ms Dhanushima Gamage",
            designation:
              "Junior Consultant, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Dr Buddhika Karunarathne",
            designation:
              "Senior Lecturer · Deputy Director, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Ms Vishaka Nanayakkara",
            designation:
              "Senior Lecturer · Director, CODL\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  },
  {
    role: "Logistics & Operations Committee",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Ms Dineshi Nandasena",
            designation:
              "Deputy Registrar, Examinations & Registrations\nUniversity of Moratuwa"
          },
          {
            name: "Dr Thilina Thanthriwatta",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          },
          {
            name: "Dr Adeesha Wijayasiri",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Ms Indika Samarasinghe",
            designation: "Instructor, Faculty of IT\nUniversity of Moratuwa"
          },
          {
            name: "Mr Jageshkar Sivahar",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          },
          {
            name: "Ms Sanduli Tharuka",
            designation:
              "Management Assistant, CODL\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  },
  {
    role: "Ethics Committee",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Prof Nalin Wickramarachchi",
            designation: "Emeritus Professor\nUniversity of Moratuwa"
          },
          {
            name: "Dr Chathuranga Hettiarachchi",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Dr Gayathri Kuruppu",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          },
          {
            name: "Ms Dulmi Fonseka",
            designation:
              "Junior Consultant, CODL\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  },
  {
    role: "Student Coordination Committee",
    sections: [
      {
        label: "Co-chairs",
        people: [
          {
            name: "Prof Dhammika P Chandrasekera",
            designation: "Professor\nUniversity of Moratuwa"
          },
          {
            name: "Dr Sandareka Wickramanayake",
            designation: "Senior Lecturer\nUniversity of Moratuwa"
          },
          { name: "Mr B H Sudantha", designation: "Senior Lecturer\nUniversity of Moratuwa" }
        ]
      },
      {
        label: "Members",
        people: [
          {
            name: "Ms Tharushi Kurukulasooriya",
            designation:
              "Instructor, CODL\nUniversity of Moratuwa"
          }
        ]
      }
    ]
  }
];

function normalizeAvatarKey(value: string) {
  // Strip everything except [a-z0-9] so "B H" and "BH" both become "bh".
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const committeeAvatarModules = import.meta.glob("./assets/committee/*", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const committeeAvatarByKey: Record<string, string> = Object.entries(
  committeeAvatarModules
).reduce((acc, [path, url]) => {
  const filename = path.split("/").pop() ?? path;
  const base = filename.replace(/\.[^.]+$/, "");
  const key = normalizeAvatarKey(base);
  acc[key] = url;
  return acc;
}, {} as Record<string, string>);

// When the displayed committee member name doesn't exactly match the image filename,
// map the normalized name to the normalized filename key.
const committeeAvatarAliases: Record<string, string> = {
  // Name includes initials/full name but the uploaded file is shorter.
  [normalizeAvatarKey("Prof Dhammika P Chandrasekera")]: normalizeAvatarKey(
    "Prof Chandrasekara"
  )
};

function levenshteinDistance(a: string, b: string) {
  const m = a.length;
  const n = b.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

const avatarCache = new Map<string, string>();

function getAvatarForName(name: string) {
  const cached = avatarCache.get(name);
  if (cached != null) return cached;

  const womenNames = [
    "Prof Dileeka Dias",
    "Ms Vishaka Nanayakkara",
    "Dr Tiloka de Silva",
    "Dr Sandareka Wickramanayake",
    "Ms Eshana Ranasinghe",
    "Ms Dhanushima Gamage",
    "Ms Dineshi Nandasena",
    "Ms Indika Samarasinghe",
    "Ms Tharushi Kurukulasooriya",
    "Ms Sanduli Tharuka",
    "Ms Tashini Rodrigo",
    "Dr Thanuja Ambegoda",
    "Dr. Janadari Wijesinghe",
    "Ms Sumudu Wasana",
    "Ms Malshi Tharuka",
    "Ms Nadeesha Ranasinghe",
    "Ms Nethmi Ranasinghe",
    "Ms Shazna Kamaldeen",
    "Dr Gayathri Kuruppu",
    "Ms Dulmi Fonseka"
  ];

  const normalizedName = normalizeAvatarKey(name);
  const aliasKey = committeeAvatarAliases[normalizedName];
  if (aliasKey != null && committeeAvatarByKey[aliasKey] != null) {
    const resolved = committeeAvatarByKey[aliasKey];
    avatarCache.set(name, resolved);
    return resolved;
  }
  const directMatch = committeeAvatarByKey[normalizedName];
  if (directMatch != null) return directMatch;

  // If filenames omit parts of the full name (e.g. "Dr Buddhika.jpg" for
  // "Dr Buddhika Karunarathne"), fall back to the longest matching prefix.
  let bestUrl: string | null = null;
  let bestKeyLen = -1;

  for (const [key, url] of Object.entries(committeeAvatarByKey)) {
    if (
      normalizedName.startsWith(key) ||
      // Also allow reverse prefix (rare, but keeps matching robust)
      key.startsWith(normalizedName)
    ) {
      if (key.length > bestKeyLen) {
        bestKeyLen = key.length;
        bestUrl = url;
      }
    }
  }

  if (bestUrl != null) return bestUrl;

  // Last resort: fuzzy match for small spelling variants in filenames.
  // (Keeps "Rathnayake" vs "Ratnayake", "Tashini" vs "Thashini" working.)
  const normalizedNameForFuzzy = normalizeAvatarKey(name);
  let bestFuzzyUrl: string | null = null;
  let bestFuzzyRatio = Infinity;

  for (const [key, url] of Object.entries(committeeAvatarByKey)) {
    const dist = levenshteinDistance(normalizedNameForFuzzy, key);
    const ratio = dist / Math.max(normalizedNameForFuzzy.length, key.length);
    if (ratio < bestFuzzyRatio) {
      bestFuzzyRatio = ratio;
      bestFuzzyUrl = url;
    }
  }

  // Keep it strict to avoid matching completely unrelated people.
  const FUZZY_THRESHOLD = 0.18;

  const resolved =
    bestFuzzyUrl != null && bestFuzzyRatio <= FUZZY_THRESHOLD
      ? bestFuzzyUrl
      : womenNames.includes(name)
        ? womanAvatar
        : manAvatar;

  avatarCache.set(name, resolved);
  return resolved;
}

type PeopleEntry = { name: string; role: string; designation?: string };

function toPersonRecord(input: PersonInput): PersonRecord {
  return typeof input === "string" ? { name: input } : input;
}

function personSortKey(fullName: string) {
  // Sort rule requested: use "surname" as the 2nd name, then first-name initial.
  // Titles like Dr/Prof/Mr/Ms are ignored for sorting.
  const withoutTitle = fullName.replace(/^(Prof|Dr|Mr|Ms)\.?\s+/i, "");
  const parts = withoutTitle.trim().split(/\s+/).filter(Boolean);
  const secondName = parts.length >= 2 ? parts[1] : parts[0] ?? "";
  const firstInitial = (parts[0]?.[0] ?? "").toUpperCase();
  return `${secondName.toLowerCase()}|${firstInitial}`;
}

function sortPeopleInputs(people: PersonInput[]) {
  // Non-mutating stable-ish sort (tie-breaker by full name).
  return [...people].sort((a, b) => {
    const aName = toPersonRecord(a).name;
    const bName = toPersonRecord(b).name;
    const aKey = personSortKey(aName);
    const bKey = personSortKey(bName);
    if (aKey < bKey) return -1;
    if (aKey > bKey) return 1;
    return aName.localeCompare(bName);
  });
}

function getGroupPeople(group: CommitteeGroup): PeopleEntry[] {
  if (group.sections) {
    return group.sections.flatMap((section) =>
      sortPeopleInputs(section.people).map((person) => {
        const record = toPersonRecord(person);
        return {
          name: record.name,
          role: section.label,
          designation: record.designation
        };
      })
    );
  }

  return sortPeopleInputs(group.people ?? []).map((person) => {
    const record = toPersonRecord(person);
    return {
      name: record.name,
      role: group.role,
      designation: record.designation
    };
  });
}

const AVATAR_FRAME =
  "size-16 shrink-0 rounded-md outline-1 -outline-offset-1 outline-black/5 bg-neutral-100";

function committeeAvatarObjectPosition(name: string): string {
  if (name === "Dr Thanuja Ambegoda") {
    // Higher vertical anchor than `object-top` / 6% — shifts the face upward in the tile.
    return "object-[center_32%]";
  }
  return "object-[center_6%]";
}

function PersonGridItem({ person }: { person: PeopleEntry }) {
  const src = getAvatarForName(person.name);
  const objectPosition = committeeAvatarObjectPosition(person.name);

  return (
    <li>
      <div className="flex items-start gap-x-5">
        <img
          alt=""
          src={src}
          aria-hidden
          className={`${AVATAR_FRAME} object-cover ${objectPosition}`}
        />
        <div className="min-w-0 pt-0.5">
          <p className="text-sm font-semibold leading-snug text-neutral-900 break-words">
            {person.name}
          </p>
          {person.designation ? (
            <p className="mt-1 text-xs leading-snug text-neutral-600 break-words whitespace-pre-line">
              {person.designation}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}

type CommitteeCardTone = "onGold" | "default";

function CommitteeCard({
  group,
  tone = "default"
}: {
  group: CommitteeGroup;
  tone?: CommitteeCardTone;
}) {
  const people = getGroupPeople(group);

  const accent =
    tone === "onGold"
      ? "border-l border-uom-gold/40"
      : "border-l border-neutral-200/90";

  return (
    <article className={`min-w-0 pl-4 ${accent}`}>
      <header className="mb-3">
        <h3 className="text-base font-bold tracking-tight text-neutral-900">
          {group.role}
          {group.roleSecondLine ? (
            <span className="mt-1 block text-sm font-semibold text-neutral-600">
              {group.roleSecondLine}
            </span>
          ) : null}
        </h3>
      </header>

      {group.sections ? (
        <div className="space-y-6">
          {group.sections.map((section) => {
            const sectionPeople: PeopleEntry[] = sortPeopleInputs(
              section.people
            ).map((person) => {
              const record = toPersonRecord(person);
              return {
                name: record.name,
                role: section.label,
                designation: record.designation
              };
            });

            return (
              <div key={section.label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                  {section.label}
                </p>
                <ul
                  role="list"
                  className="mt-3 grid gap-x-8 gap-y-10 sm:grid-cols-2"
                >
                  {sectionPeople.map((person) => (
                    <PersonGridItem
                      key={`${group.role}-${section.label}-${person.name}`}
                      person={person}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <ul
          role="list"
          className="grid gap-x-8 gap-y-10 sm:grid-cols-2"
        >
          {people.map((person) => (
            <PersonGridItem
              key={`${group.role}-${person.role}-${person.name}`}
              person={person}
            />
          ))}
        </ul>
      )}
    </article>
  );
}

function GovernanceSectionLabel({
  children,
  variant
}: {
  children: ReactNode;
  variant: "gold" | "slate" | "muted";
}) {
  const bar =
    variant === "gold"
      ? "bg-uom-maroon"
      : variant === "slate"
        ? "bg-neutral-900"
        : "bg-neutral-400";
  const text =
    variant === "gold"
      ? "text-uom-maroon"
      : variant === "slate"
        ? "text-neutral-900"
        : "text-neutral-600";

  return (
    <div className="mb-5 flex items-stretch gap-3 md:mb-6">
      <span className={`w-1 shrink-0 rounded-full ${bar}`} aria-hidden />
      <p
        className={`pt-0.5 text-[11px] font-bold uppercase tracking-[0.22em] ${text}`}
      >
        {children}
      </p>
    </div>
  );
}

export default function GovernancePage() {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Scroll to anchored sections with header offset when route or hash changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = location.hash;
    const headerOffset = 96;

    // Defer until after layout so positions are correct
    const id = window.setTimeout(() => {
      if (hash) {
        const targetId = hash.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = window.pageYOffset + rect.top - headerOffset;
          window.scrollTo({ top: offset, behavior: "smooth" });
          return;
        }
      }
      // Fallback: scroll to top on first load without hash or if target not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(id);
  }, [location.pathname, location.hash]);

  return (
    <SitePageShell variant="glass">
      <SiteHeader
        mobileNavOpen={mobileNavOpen}
        onMobileNavToggle={() => setMobileNavOpen((v) => !v)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main className="mx-auto max-w-6xl px-4 pb-10 pt-[calc(60px+2.5rem)] md:px-6 md:pb-14 md:pt-[calc(68px+3.5rem)]">
          <section>
            <Reveal variant="up">
              <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                <UsersIcon className="h-7 w-7 text-uom-maroon" />
                <span>Conference Governance and Organisation</span>
              </h1>
            </Reveal>
            <Reveal variant="up" delayMs={140}>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700 md:text-base">
                ICODE2026 is supported by a structured governance model that brings together
                strategic leadership, academic quality assurance, and operational excellence.
                The <span className="font-semibold">Main Organising Committee</span> and
                specialist committees below work together to ensure a seamless hybrid
                experience for all participants.
              </p>
            </Reveal>
          </section>

          <section
            id="strategic"
            className="mt-10 border-t border-neutral-200 pt-8 px-4 md:px-0"
          >
            <Reveal variant="up">
              <GovernanceSectionLabel variant="gold">
                Main organising committee
              </GovernanceSectionLabel>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
              {committeeGroups.slice(0, 2).map((group, index) => (
                <Reveal key={group.role} variant="up" delayMs={index * 120}>
                  <CommitteeCard group={group} tone="onGold" />
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="academic"
            className="mt-10 border-t border-neutral-200 pt-8 px-4 md:px-0"
          >
            <Reveal variant="up">
              <GovernanceSectionLabel variant="slate">
                Academic &amp; publications
              </GovernanceSectionLabel>
            </Reveal>
            <div className="mx-auto max-w-3xl">
              {committeeGroups.slice(2, 3).map((group) => (
                <Reveal key={group.role} variant="up" delayMs={120}>
                  <CommitteeCard group={group} />
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="operations"
            className="mt-10 border-t border-neutral-200 pt-8 px-4 md:px-0"
          >
            <Reveal variant="up">
              <GovernanceSectionLabel variant="muted">
                Operations &amp; experience
              </GovernanceSectionLabel>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 md:gap-7">
              {committeeGroups.slice(3).map((group, index) => (
                <Reveal key={group.role} variant="up" delayMs={index * 110}>
                  <CommitteeCard group={group} />
                </Reveal>
              ))}
            </div>
          </section>

        </main>

        <footer className="bg-neutral-950/95 text-neutral-100 border-t border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 lg:py-10">
            <div className="md:flex md:justify-between md:items-start">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={logo}
                      alt="University of Moratuwa logo"
                      className="h-9 w-9 object-contain"
                    />
                    <div className="hidden h-10 w-10 overflow-hidden rounded-[18px] md:flex items-center justify-center">
                      <img
                        src={codlLogo}
                        alt="CODL logo"
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                      ICODE2026
                    </p>
                    <p className="text-sm font-semibold">
                      International Conference on Open and Digital Education
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  Centre for Open and Distance Learning (CODL) <br></br> University of
                  Moratuwa · Sri Lanka
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 text-xs text-neutral-300">
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Conference
                  </h2>
                  <FooterConferenceLinks />
                </div>
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Get in touch
                  </h2>
                  <ul className="space-y-1.5">
                    <li>Centre for Open Distance Learning</li>
                    <li>University of Moratuwa, Katubedda</li>
                    <li>Sri Lanka</li>
                    <li className="pt-1">
                      <div className="inline-flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              d="M4 7.5 9.5 12 12 14l2.5-2 5.5-4.5M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Z"
                            />
                          </svg>
                        </span>
                        <a
                          href="mailto:icode@codl.lk"
                          className="text-xs font-medium text-uom-gold hover:underline"
                        >
                          icode@codl.lk
                        </a>
                      </div>
                    </li>
                    <ContactWhatsAppFooterItem />
                    <ContactBitWebsiteFooterItem />
                  </ul>
                </div>
                <div>
                  <h2 className="mb-3 text-sm font-semibold text-neutral-100 uppercase">
                    Follow us
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.facebook.com/bit.mrt.ac.lk?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M13.5 21v-7h2.25L16 11h-2.5V9.25C13.5 8.56 13.69 8 14.7 8H16V5.75C15.49 5.68 14.8 5.5 13.93 5.5 11.96 5.5 10.5 6.74 10.5 9v2H8v3h2.5v7h3Z"
                            />
                          </svg>
                        </span>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bitatuom/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="5"
                              ry="5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <circle cx="17" cy="7" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@BITUoMLK"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 hover:text-uom-gold"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-600 bg-neutral-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.1 5.5 12 5.5 12 5.5s-6.1 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001 28.4 28.4 0 0 0 1.5 12a28.4 28.4 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.947C5.9 18.5 12 18.5 12 18.5s6.1 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947A28.4 28.4 0 0 0 22.5 12a28.4 28.4 0 0 0-.7-3.999Z"
                            />
                            <path
                              fill="black"
                              d="m10 15.5 5-3-5-3v6Z"
                            />
                          </svg>
                        </span>
                        <span>YouTube</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-6 border-white/10 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between text-[11px] text-neutral-500">
              <span className="sm:text-center">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold">
                  ICODE2026 · CODL · University of Moratuwa
                </span>
                . All rights reserved.
              </span>
            </div>
          </div>
        </footer>
    </SitePageShell>
  );
}

