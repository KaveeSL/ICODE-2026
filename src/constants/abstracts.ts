import { day1Schedule } from "./programmeSchedule";
import { presentationSlidesByPaperId } from "./presentationSlides";
import { abstractContentById } from "./abstractContent";

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
  keywords?: string[];
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
      name: "Muthuwadure Lakma Ravihari",
      country: "Sri Lanka"
    },
    ["Muthuwadura Udeni Thakshila"]
  ),
  "d1-a-02": paperPeople({
    name: "Mohammadhu Abdul Rahman Pathima Rikasa",
    country: "Sri Lanka"
  }),
  "d1-a-03": paperPeople({
    name: "Cletus Florentine Rodrigo",
    country: "Sri Lanka"
  }),
  "d1-a-04": paperPeople({
    name: "Don Bosco Prashanth",
    country: "Sri Lanka"
  }),

  // Session B — Artificial Intelligence in Education
  "d1-b-01": paperPeople({
    name: "Kurugama Arachchilage Shehan Dilmika",
    country: "Sri Lanka"
  }),
  "d1-b-02": paperPeople({
    name: "S. M. Basuri Larnandu Senanayake",
    country: "Sri Lanka"
  }),
  "d1-b-03": paperPeople(
    {
      name: "Jitendra Alaparthi",
      country: "India"
    },
    [
      "M. V. Vijaya Saradhi",
      "Sreenivas Velagapudi",
      "Venkataramana Bandaru",
      "Devi Gujjula",
      "Arunajyothi Sajja"
    ]
  ),
  "d1-b-04": paperPeople({
    name: "Weerakoon Mudiyanselage Dilki Anuradha Weerakoon",
    country: "Sri Lanka"
  }),

  // Session C — Digital Transformation & Learner Engagement
  "d1-c-01": paperPeople(
    {
      name: "Jayasingha Mudiyanselage Gamith Dilshan Thimira Bandara Jayasingha",
      country: "Sri Lanka"
    },
    ["Gayani Wickramarathne"]
  ),
  "d1-c-02": paperPeople(
    {
      name: "Luxika Raguram",
      country: "Sri Lanka"
    },
    ["Sharmi Shanmuganathan"]
  ),
  "d1-c-03": paperPeople({
    name: "Ashmini Kalika Karunarathne",
    country: "Sri Lanka"
  }),
  "d1-c-04": paperPeople({
    name: "Malavi Pathirannehelage Danindu Sandeepa Pathirana",
    country: "Sri Lanka"
  }),
  "d1-c-05": paperPeople(
    {
      name: "Kalansuriya Arachchige Praveen Madhusanka Perera",
      country: "Sri Lanka"
    },
    [
      "Ashan Lakshitha",
      "Chethani Kumarapeli",
      "Mathivathanan Yokenthira",
      "Chathurika Welliwita"
    ]
  ),
  "d1-c-06": paperPeople({
    name: "Harisshiene Hariyendiran",
    country: "Sri Lanka"
  }),

  // Session D — AI Pedagogy, Literacy & Collaborative Learning
  "d1-d-01": paperPeople(
    {
      name: "Fareed Mohamed Nawastheen",
      country: "Sri Lanka"
    },
    ["N. G. L. S. J. Liyanage", "K. S. P. Sisindra", "Shajehan Shifaan"]
  ),
  "d1-d-02": paperPeople({
    name: "Pasan Wijayawardhana",
    country: "Sri Lanka"
  }),
  "d1-d-03": paperPeople({
    name: "Sheraz Kaleem",
    country: "Pakistan"
  }),
  "d1-d-04": paperPeople({
    name: "Dulashi Kongahawaththa",
    country: "Sri Lanka"
  }),
  "d1-d-05": paperPeople({
    name: "Uditha Gunasekara",
    country: "Sri Lanka"
  }),
  "d1-d-06": paperPeople({
    name: "Prasandika Balage",
    country: "Sri Lanka"
  }),

  // Session E — Emerging Methods, Technologies & Tools
  "d1-e-01": paperPeople({
    name: "Vindya Vimani Senadheera",
    country: "Sri Lanka"
  }),
  "d1-e-02": paperPeople({
    name: "Arawa Waththage Rusin Thathsara Senarathna",
    country: "Sri Lanka"
  }),
  "d1-e-03": paperPeople(
    {
      name: "Ehanathan Shanmuganathan",
      country: "Sri Lanka"
    },
    ["Krishnakumar Mahalingam", "Raagulan Kanthasamy"]
  ),
  "d1-e-04": paperPeople({
    name: "R. D. M. K. Thivanka Wimalachandra",
    country: "Sri Lanka"
  }),
  "d1-e-05": paperPeople({
    name: "A. L. I. Mihirini De Silva",
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
  "d1-f-04": paperPeople({
    name: "Mahinda Bandara Sakalasooriya",
    country: "Sri Lanka"
  }),

  // Session G — Pedagogy & Learner Engagement
  "d1-g-01": paperPeople({
    name: "Panduwawala Kankanamalage Laksarani Panduwawala",
    country: "Sri Lanka"
  }),
  "d1-g-02": paperPeople(
    {
      name: "Jayalath Pathirannehelage Dulanjali Wijesekara",
      country: "Sri Lanka"
    },
    ["B. H. Sudantha", "Afsaan Mohammed"]
  ),
  "d1-g-03": paperPeople({
    name: "Jageshkar Sivahar",
    country: "Sri Lanka"
  }),
  "d1-g-04": paperPeople({
    name: "Pabasari Paranamana",
    country: "Sri Lanka"
  }),

  // Session H — Access, Inclusion & Equity in Digital Education
  "d1-h-01": paperPeople(
    {
      name: "Sayuri Witharana",
      country: "Sri Lanka"
    },
    ["Tiloka De Silva"]
  ),
  "d1-h-02": paperPeople(
    {
      name: "Haritha Weerathunga",
      country: "Sri Lanka"
    },
    [
      "Lakmina Gamage",
      "B. H. Sudantha",
      "Vishaka Nanayakkara",
      "Buddhika Karunaratne"
    ]
  ),
  "d1-h-03": paperPeople(
    {
      name: "Rajendran Adshayan",
      country: "Sri Lanka"
    },
    ["Jeevathas Ushalini"]
  ),
  "d1-h-04": paperPeople(
    {
      name: "Stephen Koralalage Don Chethiya Hasaruwan Korala",
      country: "Sri Lanka"
    },
    ["Lakshika Jayarathna"]
  ),
  "d1-h-05": paperPeople({
    name: "Weerakkodige Ayesha Kalhari Jayasinghe",
    country: "Sri Lanka"
  }),

  // Poster Session
  "d1-p-01": paperPeople({
    name: "Doluwala Gedara Sathsarani Nuwandhara Samarakoon",
    country: "Sri Lanka"
  }),
  "d1-p-02": paperPeople(
    {
      name: "P. I. V. Wijewardhana",
      country: "Sri Lanka"
    },
    [
      "Dulami Kaludewa",
      "Lakindu Yasomith",
      "Tharupathi Vihasa",
      "Asheela Shehani"
    ]
  ),
  "d1-p-03": paperPeople(
    {
      name: "W. Venura Deshan Perera",
      country: "Sri Lanka"
    },
    ["Chrishankar Janathanan"]
  ),
  "d1-p-04": paperPeople({
    name: "Wannakuwaththa Mitibaduge Gihan Udayanga",
    country: "Sri Lanka"
  }),
  "d1-p-05": paperPeople({
    name: "Rathnayake Mudiyanselage Shelton Indika Wijebandara",
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
          const content = abstractContentById[id];
          const base: ConferenceAbstract = {
            id,
            title: paper.title,
            authors: [],
            session: letter,
            sessionLabel: hall.theme,
            theme: hall.theme,
            abstractText: content?.abstractText,
            keywords: content?.keywords
          };
          return {
            ...base,
            ...abstractOverrides[id],
            abstractText:
              abstractOverrides[id]?.abstractText ?? content?.abstractText,
            keywords: abstractOverrides[id]?.keywords ?? content?.keywords,
            slidesUrl:
              abstractOverrides[id]?.slidesUrl ?? presentationSlidesByPaperId[id]
          };
        });
    }) ?? [];

  const fromSlotPapers =
    slot.papers
      ?.filter((paper) => !paper.tbc)
      .map((paper, index) => {
        const id = `d1-p-${String(index + 1).padStart(2, "0")}`;
        const content = abstractContentById[id];
        const base: ConferenceAbstract = {
          id,
          title: paper.title,
          authors: [],
          session: "P",
          sessionLabel: "Poster Session",
          theme: "Poster Session",
          abstractText: content?.abstractText,
          keywords: content?.keywords
        };
        return {
          ...base,
          ...abstractOverrides[id],
          abstractText:
            abstractOverrides[id]?.abstractText ?? content?.abstractText,
          keywords: abstractOverrides[id]?.keywords ?? content?.keywords
        };
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
