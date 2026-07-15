export type ProgrammeSession = {
  time: string;
  session: string;
  detail?: string;
  halls?: string;
  isBreak?: boolean;
  panelists?: string[];
  tentativeNote?: string;
};

export type Day3Workshop = {
  title: string;
  audience: string;
};

export const day1Schedule: ProgrammeSession[] = [
  { time: "8:30 – 9:00 a.m.", session: "Coffee and Networking", isBreak: true },
  { time: "9:00 – 9:30 a.m.", session: "Inauguration" },
  { time: "9:30 – 10:00 a.m.", session: "Plenary Session 1" },
  {
    time: "10:00 – 10:45 a.m.",
    session: "Parallel Technical Sessions",
    halls: "Halls A & B"
  },
  { time: "10:45 – 11:00 a.m.", session: "Tea Break", isBreak: true },
  {
    time: "11:00 a.m. – 12:45 p.m.",
    session: "Parallel Technical Sessions",
    halls: "Halls C & D"
  },
  { time: "12:45 – 1:45 p.m.", session: "Lunch", isBreak: true },
  { time: "1:45 – 2:15 p.m.", session: "Plenary Session 2" },
  {
    time: "2:15 – 3:15 p.m.",
    session: "Parallel Technical Sessions",
    halls: "Halls E & F"
  },
  { time: "3:15 – 3:30 p.m.", session: "Tea Break", isBreak: true },
  {
    time: "3:30 – 4:15 p.m.",
    session: "Parallel Technical Sessions",
    halls: "Halls G & H"
  }
];

export const day2Schedule: ProgrammeSession[] = [
  { time: "9:00 – 9:15 a.m.", session: "Morning Refreshments", isBreak: true },
  {
    time: "9:15 – 9:30 a.m.",
    session: "Welcome Address",
    detail: "Vice Chancellor, University of Moratuwa"
  },
  {
    time: "9:30 – 9:45 a.m.",
    session: "Digital Transformation of Sri Lankan Education",
    detail: "To Be Confirmed"
  },
  {
    time: "9:45 – 10:25 a.m.",
    session: "How Digitalisation Helped Education in Sri Lanka",
    detail: "Prof. Gihan Dias"
  },
  {
    time: "10:25 – 10:45 a.m.",
    session: "Inclusive Open Digital Education – open.uom.lk",
    detail: "Prof. Malik Ranasinghe"
  },
  { time: "10:45 – 11:00 a.m.", session: "Tea Break", isBreak: true },
  {
    time: "11:00 a.m. – 12:00 p.m.",
    session: "Digital Content – Sri Lankan Success Stories (5)"
  },
  {
    time: "12:00 – 1:00 p.m.",
    session: "Human Resource Development for ODL (4)"
  },
  { time: "1:00 – 1:45 p.m.", session: "Lunch", isBreak: true },
  {
    time: "1:45 – 2:30 p.m.",
    session: "Lessons from International Practices"
  },
  {
    time: "2:30 – 2:40 p.m.",
    session: "Developing a Comprehensive Education MIS",
    detail: "Dr. Sunimal Ratnayake"
  },
  {
    time: "2:40 – 2:50 p.m.",
    session: "Biometric Verification",
    detail: "UoM Development Team"
  },
  {
    time: "2:50 – 3:00 p.m.",
    session: "Learner Feedback",
    detail: "Dr. Shahani Markus"
  },
  {
    time: "3:00 – 3:10 p.m.",
    session: "Digital-Native Employee – Industry Expectations",
    detail: "Mr Hasith Yaggahavita"
  },
  {
    time: "3:10 – 4:15 p.m.",
    session: "Panel Discussion: Sri Lanka's Unified Digital Transformation – The Way Forward",
    panelists: [
      "Hon. Deputy Minister Eranga Weerarathne",
      "Secretary / Prime Minister's Office",
      "Secretary / Ministry of Digital Economy",
      "State Minister of Industries (to be confirmed)"
    ],
    tentativeNote: "State Minister of Industries to be confirmed"
  },
  { time: "4:30 p.m. onwards", session: "High Tea and Networking", isBreak: true }
];

export const day3Workshops: Day3Workshop[] = [
  {
    title: "Building Your Digital Future",
    audience: "A/L students (ICT and Arts); O/L if needed"
  },
  {
    title: "How to Conduct Computer-Based Examinations",
    audience: "Academics / MoE Moodle"
  },
  {
    title: "Digital Tools in Education",
    audience: "School / university teachers"
  },
  {
    title: "Leading the Digital Transformation",
    audience: "Industry / School / university teachers"
  },
  {
    title: "AI and Its Derivatives",
    audience: "UG / PG students"
  },
  {
    title: "Applied AI in the Public Sector",
    audience: "Government employees"
  },
  {
    title: "Learner / Participant Experience",
    audience: "Private / public officers / QA directors"
  },
  {
    title: "Moodle Roundtable",
    audience: "MoE, CODLs"
  }
];

export const programmeDaysMeta = [
  {
    day: 1,
    title: "Academic Research Conference",
    date: "5 August 2026",
    accent: "Research",
    access: "Open programme",
    status: "published" as const
  },
  {
    day: 2,
    title: "Policy & Leadership Summit",
    date: "6 August 2026",
    accent: "Policy",
    access: "Invitees only",
    status: "published" as const
  },
  {
    day: 3,
    title: "Practice & Innovation Workshops",
    date: "7 August 2026",
    accent: "Practice",
    access: "Invitation & registration",
    timeNote: "9:00 a.m. onwards",
    status: "published" as const
  }
];
