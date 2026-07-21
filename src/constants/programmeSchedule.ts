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
  description?: string;
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
    time: "9:00 am – 12:00 pm",
    description:
      "A workshop for academics which explores how to use MOODLE and other online tools to conduct computer-based examinations. The workshop will cover how to create online exams and assessments, creating question banks and best practices in conducting examinations including question randomisation and online proctoring to prevent cheating."
  },
  {
    title: "Learner / Participant Experience",
    audience: "Private / public officers / QA directors",
    time: "9:00 am – 12:00 pm",
    description:
      "For private and public officers and quality assurance directors, this workshop focuses on the customer experience in digital services and how to refine the user’s journey across public digital learning channels."
  },
  {
    title: "Building Your Digital Future",
    audience: "A/L students (ICT and Arts); O/L if needed",
    time: "9:00 am – 12:00 pm",
    description:
      "For A/L students studying ICT and/or Arts, this workshop teaches essential skills needed to thrive in a technology-driven world. The workshop introduces emerging technologies, future career opportunities, and the importance of adaptability, problem-solving, and lifelong learning."
  },
  {
    title: "Applied AI in the Public Sector",
    audience: "Government employees",
    time: "9:00 am – 1:00 pm",
    description:
      "A workshop for government employees which explores how AI can be used in the public sector to; automate repetitive tasks, fraud detection, analyse complex data to assist in policy making, to engage with citizens using chatbots to answer queries and personalize services to citizens."
  },
  {
    title: "Moodle Roundtable",
    audience: "MoE, CODLs",
    time: "9:00 am – 12:00 pm"
  },
  {
    title: "Digital Tools in Education",
    audience: "School / university teachers",
    time: "1:00 – 4:00 pm",
    description:
      "For school and university educators this workshop covers various online platforms and digital tools that can be used in education such as tools for interactive instruction and engagement, formative assessment and quiz creation, and tools which encourage collaboration and idea sharing between students."
  },
  {
    title: "Leading the Digital Transformation",
    audience: "Industry / school / university teachers",
    time: "1:00 – 4:00 pm",
    description:
      "For school and university educators and industry professionals this workshop will explore strategies for driving digital innovation, integrating emerging technologies, fostering a culture of continuous learning, and developing the leadership skills needed to navigate transformation successfully"
  },
  {
    title: "AI and Its Derivatives",
    audience: "UG / PG students",
    time: "Online session",
    description:
      "A workshop of undergraduate and postgraduate students: exploring AI tools, trends and practical applications beyond ChatGPT with a special focus on generative AI, AI agents, automations, and emerging technologies."
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
