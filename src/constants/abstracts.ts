import { day1Schedule } from "./programmeSchedule";

export type ConferenceAbstract = {
  id: string;
  title: string;
  authors: string[];
  /** Presenter country, shown separately from author names */
  country?: string;
  session: string;
  sessionLabel: string;
  theme: string;
  /** Plain-text abstract when no PDF is available yet */
  abstractText?: string;
  /** Path under /public, e.g. /abstracts/d1-a-01.pdf */
  abstractPdfUrl?: string;
  slidesUrl?: string;
  videoUrl?: string;
};

function sessionLetter(hallLabel: string) {
  return hallLabel.replace(/^Session\s+/i, "").trim();
}

function authorLabel(name: string) {
  return name.replace(/\s+/g, " ").trim();
}

/** Presenter name first, then co-authors; country stored separately. No Mr/Ms/Dr titles. */
function paperPeople(
  presenter: { name: string; country?: string },
  coAuthors: string[] = []
) {
  return {
    authors: [
      authorLabel(presenter.name),
      ...coAuthors.map((name) => authorLabel(name)).filter(Boolean)
    ],
    country: presenter.country
  };
}

/**
 * Author enrichment by paper id (e.g. "d1-a-01").
 * Keeps earlier author lists; adds new papers from later attendance sheets.
 */
const abstractOverrides: Partial<
  Record<string, Partial<Omit<ConferenceAbstract, "id" | "title" | "session" | "sessionLabel" | "theme">>>
> = {
  // Session A — Open Learning, Access & Inclusion
  "d1-a-01": paperPeople(
    {
      name: "Muthuwadura Lakma Ravihari",
      country: "Sri Lanka"
    },
    ["A. L. A. Rahman"]
  ),
  "d1-a-02": paperPeople({
    name: "Mohammadu Abdul Rahman Pathima Rikaza",
    country: "Sri Lanka"
  }),
  "d1-a-03": paperPeople(
    {
      name: "Cletus Florentine Rodrigo",
      country: "Sri Lanka"
    },
    ["R. M. A. T. Udawattegedara"]
  ),

  // Session B — Artificial Intelligence in Education
  "d1-b-01": paperPeople({
    name: "Kurugama Arachchillage Shehan Dilmika",
    country: "Sri Lanka"
  }),
  "d1-b-02": paperPeople(
    {
      name: "S. M. Basuri Lamindu Senanayake",
      country: "Sri Lanka"
    },
    ["A. V. Chamal Sandhana Senarathne"]
  ),
  "d1-b-03": paperPeople(
    {
      name: "Jitendra Alaparthi",
      country: "India"
    },
    ["Velegapudi Sreenivas"]
  ),
  "d1-b-04": paperPeople({
    name: "Weerakoon Mudiyanselage Dilki Anuradha Weerakoon",
    country: "Sri Lanka"
  }),

  // Session C — Digital Transformation & Learner Engagement
  "d1-c-01": paperPeople(
    {
      name: "Jayasingha Mudiyanselage Gamith Dilshan Thimira Bandara",
      country: "Sri Lanka"
    },
    ["Gayani Wickramarathne", "Janani Rasanjali"]
  ),
  "d1-c-02": paperPeople(
    {
      name: "Pasan Wijayawardhene",
      country: "Sri Lanka"
    },
    ["Nazardeen Farhath Nuha"]
  ),
  "d1-c-03": paperPeople({
    name: "Ashmini Kalika Karunarathne",
    country: "Sri Lanka"
  }),
  "d1-c-04": paperPeople(
    {
      name: "Malavi Pathirannehelage Danindu Sandeepa Pathirana",
      country: "Sri Lanka"
    },
    ["Panduwawala Kankanamalage Laksarani Panduwawala"]
  ),
  "d1-c-05": paperPeople(
    {
      name: "Kalansuriya Arachchige Praveen Madhusanka Perera",
      country: "Sri Lanka"
    },
    [
      "Athukoralage Ashan Lakshitha",
      "Kumarapeli Arachchige Dona Chethani Upeksha"
    ]
  ),
  "d1-c-06": paperPeople({
    name: "Uditha Gunasekara",
    country: "Sri Lanka"
  }),

  // Session D — AI Pedagogy, Literacy & Collaborative Learning
  "d1-d-01": paperPeople(
    {
      name: "Fareed Mohamed Nawastheen",
      country: "Sri Lanka"
    },
    ["N. G. L. S. J. Liyanage", "K. S. P. Silindra"]
  ),
  "d1-d-02": paperPeople(
    {
      name: "Luxika Raguram",
      country: "Sri Lanka"
    },
    ["Sharmi Shanmuganathan"]
  ),
  "d1-d-03": paperPeople({
    name: "Sheraz Kaleem",
    country: "Pakistan"
  }),
  "d1-d-04": paperPeople({
    name: "Dulashi Kongahawaththa",
    country: "Sri Lanka"
  }),

  // Session E — Emerging Methods, Technologies & Tools
  "d1-e-01": paperPeople({
    name: "Vindya Vimani Senadheera",
    country: "Sri Lanka"
  }),
  "d1-e-02": paperPeople(
    {
      name: "Arewa Waththage Rusin Thathsara Aenarathna",
      country: "Sri Lanka"
    },
    ["Yohan Kavinda"]
  ),
  "d1-e-03": paperPeople(
    {
      name: "Ehanathan Shanmuganathan",
      country: "Sri Lanka"
    },
    ["Shanathan Shanmuganathan"]
  ),
  "d1-e-04": paperPeople({
    name: "R. D. M. K. Thivanka Wimalachandra",
    country: "Sri Lanka"
  }),

  // Session F — Ethics, Quality Assurance & Governance
  "d1-f-01": paperPeople({
    name: "Galle Pathiranage Vishwadharsha Udara Bandara Pathirana",
    country: "Sri Lanka"
  }),
  "d1-f-02": paperPeople({
    name: "Sumudu Wasana",
    country: "Sri Lanka"
  }),
  "d1-f-03": paperPeople({
    name: "Abdul Razack Irsha Farwin",
    country: "Sri Lanka"
  }),

  // Session G — Online Pedagogy & Learner Engagement
  "d1-g-01": paperPeople(
    {
      name: "Panduwawala Kankanamalage Laksarani Panduwawala",
      country: "Sri Lanka"
    },
    ["Malavi Pathirannehelage Danindu Sandeepa Pathirana"]
  ),
  "d1-g-02": paperPeople(
    {
      name: "Jayalath Pathirannehelage Dulanjali Wijesekara",
      country: "Sri Lanka"
    },
    ["Mohammed Nawfal Mohammed Afsaan", "B. H. Sudantha"]
  ),
  "d1-g-03": paperPeople({
    name: "Jageshkar Sivahar",
    country: "Sri Lanka"
  }),
  "d1-g-04": paperPeople({
    name: "Weerakkodige Ayesha Kalhari Jayasinghe",
    country: "Sri Lanka"
  }),

  // Session H — Access, Inclusion & Equity in Digital Education
  "d1-h-01": paperPeople(
    {
      name: "Sayuri Withana",
      country: "Sri Lanka"
    },
    ["Tiloka De Silva"]
  ),
  "d1-h-02": paperPeople(
    {
      name: "Haritha Weerathunga",
      country: "Sri Lanka"
    },
    ["Lakmina Gamage"]
  ),
  "d1-h-03": paperPeople(
    {
      name: "Rajendran Adshayan",
      country: "Sri Lanka"
    },
    ["Rubakumar Dibarshan"]
  ),
  "d1-h-04": paperPeople(
    {
      name: "Stephen Koralalage Don Chethiya Hasaruwan Korala",
      country: "Sri Lanka"
    },
    ["K. D. L. H. Jayarathna"]
  ),

  // Poster Session — authors kept from earlier lists after papers moved here
  "d1-p-01": paperPeople(
    {
      name: "Doluwala Gedara Sathsarani Nuwandhara Samarakoon",
      country: "Sri Lanka"
    },
    ["Doluwala Gedara Samarakoon"]
  ),
  "d1-p-02": paperPeople(
    {
      name: "P. I. V. Wijewardhane",
      country: "Sri Lanka"
    },
    ["D. A. Kaludewa", "P. M. K. L. Y. Kapugamage"]
  ),
  "d1-p-03": paperPeople(
    {
      name: "W. Venura Deshan Perera",
      country: "Sri Lanka"
    },
    ["Chrishankar Janarthanan"]
  ),
  "d1-p-04": paperPeople({
    name: "Wannakuwaththa Mitibaduge Gihan Udayanga",
    country: "Sri Lanka"
  })
};

/** Day 1 accepted papers — titles sync from the programme; enrich via overrides. */
export const conferenceAbstracts: ConferenceAbstract[] = day1Schedule.flatMap((slot) => {
  const fromHalls =
    slot.halls?.flatMap((hall) => {
      const letter = sessionLetter(hall.hall);
      return hall.papers
        .filter((paper) => !paper.tbc)
        .map((paper, index) => {
          const id = `d1-${letter.toLowerCase()}-${String(index + 1).padStart(2, "0")}`;
          const base: ConferenceAbstract = {
            id,
            title: paper.title,
            authors: [],
            session: letter,
            sessionLabel: hall.theme,
            theme: hall.theme
          };
          return { ...base, ...abstractOverrides[id] };
        });
    }) ?? [];

  const fromSlotPapers =
    slot.papers
      ?.filter((paper) => !paper.tbc)
      .map((paper, index) => {
        const id = `d1-p-${String(index + 1).padStart(2, "0")}`;
        const base: ConferenceAbstract = {
          id,
          title: paper.title,
          authors: [],
          session: "P",
          sessionLabel: "Poster Session",
          theme: "Poster Session"
        };
        return { ...base, ...abstractOverrides[id] };
      }) ?? [];

  return [...fromHalls, ...fromSlotPapers];
});

/** Filter chips: session letter + theme title from the Day 1 schedule. */
export const abstractSessionOptions = Array.from(
  new Map(
    conferenceAbstracts.map((item) => [
      item.session,
      { id: item.session, theme: item.theme }
    ])
  ).values()
).sort((a, b) => a.id.localeCompare(b.id));

/** @deprecated Prefer abstractSessionOptions — kept for any letter-only use. */
export const abstractSessions = abstractSessionOptions.map((s) => s.id);
