export type ProgrammeSession = {
  time: string;
  session: string;
  detail?: string;
  halls?: string;
  speakers?: string[];
  isBreak?: boolean;
  panelists?: string[];
  tentativeNote?: string;
};

export type Day3Workshop = {
  title: string;
  audience: string;
  time?: string;
};

export const day1Schedule: ProgrammeSession[] = [
  { time: "8:30 – 9:00 am", session: "Coffee and Networking", isBreak: true },
  { time: "9:00 – 9:30 am", session: "Inauguration" },
  { time: "9:30 – 10:00 am", session: "Plenary Session 1" },
  {
    time: "10:00 – 10:45 am",
    session: "Parallel Technical sessions",
    halls: "Halls A & B"
  },
  { time: "10:45 – 11:00 am", session: "Tea Break", isBreak: true },
  {
    time: "11:00 am – 12:45 pm",
    session: "Parallel Technical sessions",
    halls: "Halls C & D"
  },
  { time: "12:45 – 1:45 pm", session: "Lunch", isBreak: true },
  { time: "1:45 – 2:15 pm", session: "Plenary Session 2" },
  {
    time: "2:15 – 3:15 pm",
    session: "Parallel Technical sessions",
    halls: "Halls E & F"
  },
  { time: "3:15 – 3:30 pm", session: "Tea Break", isBreak: true },
  {
    time: "3:30 – 4:15 pm",
    session: "Parallel Technical sessions",
    halls: "Halls G & H"
  }
];

export const day2Schedule: ProgrammeSession[] = [
  { time: "9:00 – 9:15 am", session: "Morning Refreshments", isBreak: true },
  {
    time: "9:15 – 9:30 am",
    session: "Welcome address",
    detail: "Vice Chancellor, University of Moratuwa"
  },
  {
    time: "9:30 – 9:45 am",
    session: "Digital Transformation of Sri Lankan Education",
    detail: "To be confirmed"
  },
  {
    time: "9:45 – 10:25 am",
    session: "How digitalisation helped education in SL",
    detail: "Prof. Gihan Dias"
  },
  {
    time: "10:25 – 10:45 am",
    session: "Inclusive Open Digital Education – open.uom.lk",
    detail: "Prof. Malik Ranasinghe"
  },
  { time: "10:45 – 11:00 am", session: "Tea Break", isBreak: true },
  {
    time: "11:00 am – 12:15 pm",
    session: "Digital Content – Sri Lankan Success stories",
    speakers: [
      "e-Thaksalawa – Ms Sumudu Wasana",
      "SLASSCOM Academy – Ms. Sandra Rosayro",
      "DP Education",
      "BIT – Ms Vishaka Nanayakkara",
      "SuhuruSara"
    ]
  },
  {
    time: "12:15 – 1:00 pm",
    session: "Human Resource Development for ODL",
    speakers: [
      "LEARN – Dr Asitha Bandaranayake",
      "MoE",
      "SLASS – Prof Udeni Nawagamuwa",
      "SLIDA"
    ]
  },
  { time: "1:00 – 1:45 pm", session: "Lunch", isBreak: true },
  {
    time: "1:45 – 2:30 pm",
    session: "Lessons from International Practices",
    detail: "Mr Sanjay Kumar"
  },
  {
    time: "2:30 – 2:40 pm",
    session: "Developing a comprehensive Education MIS",
    detail: "Dr. Sunimal Ratnayake"
  },
  {
    time: "2:40 – 2:50 pm",
    session: "Biometric Verification",
    detail: "UoM Development Team"
  },
  {
    time: "2:50 – 3:00 pm",
    session: "Learner feedback",
    detail: "Dr Shahani Markus"
  },
  {
    time: "3:00 – 3:10 pm",
    session: "Digital native employee – Industry Expectations",
    detail: "Mr Hasith Yaggahavita"
  },
  {
    time: "3:10 – 4:15 pm",
    session: "Sri Lanka's unified digital transformation – way forward Panel Discussion",
    panelists: [
      "Hon. Deputy Minister Eranga Weerarathne",
      "Secretary / PM",
      "Secretary / Digital Economy",
      "Secretary / Education",
      "Senior Advisor / Digital – Dr Hans",
      "Dean FoE UoM"
    ]
  },
  { time: "4:30 pm onwards", session: "High tea and Networking", isBreak: true }
];

export const day3Workshops: Day3Workshop[] = [
  {
    title: "How to Conduct Computer-Based Examinations",
    audience: "Academics / MoE Moodle",
    time: "9:00 am – 12:00 pm"
  },
  {
    title: "Learner / Participant Experience",
    audience: "Private / public officers / QA directors",
    time: "9:00 am – 12:00 pm"
  },
  {
    title: "Building Your Digital Future",
    audience: "A/L students (ICT and Arts); O/L if needed",
    time: "9:00 am – 12:00 pm"
  },
  {
    title: "Applied AI in the Public Sector",
    audience: "Government employees",
    time: "9:00 am – 1:00 pm"
  },
  {
    title: "Moodle Roundtable",
    audience: "MoE, CODLs",
    time: "9:00 am – 12:00 pm"
  },
  {
    title: "Digital Tools in Education",
    audience: "School / university teachers",
    time: "1:00 – 4:00 pm"
  },
  {
    title: "Leading the Digital Transformation",
    audience: "Industry / school / university teachers",
    time: "1:00 – 4:00 pm"
  },
  {
    title: "AI and Its Derivatives",
    audience: "UG / PG students",
    time: "Online session"
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
    timeNote: "9:00 am onwards",
    status: "published" as const
  }
];
