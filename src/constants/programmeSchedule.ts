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

export type Day1Paper = {
  title: string;
  tbc?: boolean;
};

export type Day1Speaker = {
  name: string;
  role?: string;
  affiliation?: string;
};

export type Day1HallSession = {
  hall: string;
  theme: string;
  chair: string;
  papers: Day1Paper[];
};

export type Day1Slot = {
  time: string;
  title: string;
  detail?: string;
  /** Featured talk title (e.g. keynote) */
  talkTitle?: string;
  speakers?: Day1Speaker[];
  isBreak?: boolean;
  halls?: Day1HallSession[];
  /** Non-parallel paper list (e.g. poster session) */
  papers?: Day1Paper[];
};

export type Day3Workshop = {
  title: string;
  audience: string;
  time?: string;
  description?: string;
};

export const day1Schedule: Day1Slot[] = [
  { time: "08:30 – 09:00", title: "Coffee and Networking", isBreak: true },
  { time: "09:00 – 09:10", title: "Inauguration" },
  {
    time: "09:10 – 09:30",
    title: "Welcome address",
    detail: "Prof Malik Ranasinghe"
  },
  {
    time: "09:30 – 10:00",
    title: "Keynote Speech",
    talkTitle:
      "Higher Learning, Higher Standards: CEO Educational Background and Corporate ESG Performance",
    speakers: [
      {
        name: "Prof Sherry Chan",
        role: "Dean, International College of Sustainability Innovations",
        affiliation: "National Taipei University"
      },
      {
        name: "Prof Chan-Yun Yang",
        affiliation: "National Taipei University"
      },
      {
        name: "Prof Min-Yuh Day",
        role: "Professor and Director, Graduate Institute of Information Management",
        affiliation: "National Taipei University"
      }
    ]
  },
  {
    time: "10:00 – 11:00",
    title: "Parallel Technical Sessions",
    halls: [
      {
        hall: "Session A",
        theme: "Open Learning, Access & Inclusion",
        chair: "Prof Ruwan Gopura",
        papers: [
          {
            title:
              "Continuation of Post-Pandemic Online Learning Preferences among children in Sri Lanka: A Qualitative Study"
          },
          {
            title:
              "Open and distance learning as a tool for inclusive higher education in Sri Lanka: opportunities and challenges"
          },
          {
            title:
              "Bridging the Liveware Gap: A Mixed-Methods Study on Digital Infrastructure Readiness and Pedagogical Awareness Among Lecturers and Prospective Teachers at Sri Lankan National Colleges of Education (NCOEs)"
          },
          {
            title:
              "SCOApp: A Multi-Tenant Platform for End-to-End Digitalization of Government Services in Sri Lanka"
          }
        ]
      },
      {
        hall: "Session B",
        theme: "Artificial Intelligence in Education",
        chair: "Prof Thanuja Sandanayake",
        papers: [
          {
            title:
              "A Machine Learning-Based Framework for Predicting Academic Integrity Risk Among Undergraduate Students in Sri Lankan Universities"
          },
          {
            title:
              "Design of a Generative AI-Powered Programming Tutor for Personalized Learning in Higher Education"
          },
          {
            title:
              "AI-Driven Adaptive Learning Analytics Framework for Personalized Digital Education in Open and Distance Learning Environments"
          },
          {
            title:
              "Study of how the Large Language Models blend in Higher Education in Sri Lanka: Exploration of Perception and Experience among Educators"
          }
        ]
      }
    ]
  },
  { time: "11:00 – 11:15", title: "Tea Break", isBreak: true },
  {
    time: "11:15 – 12:45",
    title: "Parallel Technical Sessions",
    halls: [
      {
        hall: "Session C",
        theme: "Digital Transformation & Learner Engagement",
        chair: "Prof WD Prasad",
        papers: [
          {
            title:
              "Digital Transformation of Teacher Administration and Pedagogy: An AI-Powered Cross-Platform Ecosystem for South Asian Educators"
          },
          {
            title:
              "AI-Assisted Content and Language Integrated Learning (CLIL): Enhancing English Language Proficiency among Tamil-Medium Social Sciences Undergraduates"
          },
          {
            title:
              "Digital Silence in Hybrid Higher Education: Learner Engagement Beyond Cameras, Chats, and Attendance Logs"
          },
          {
            title:
              "Evidence Based Design Principles for Student Centered Digital Learning in Higher Education Insights from Sri Lankan Undergraduates"
          },
          {
            title:
              "Behavioural Determinants of Learner Engagement Decay in Open and Distance Learning: The Role of Digital Learning Behaviours and Self-Regulated Learning"
          },
          {
            title:
              "An Artificial Intelligence Driven Adaptive Learning Platform for Equitable and Multilingual ICT Education in Sri Lanka"
          }
        ]
      },
      {
        hall: "Session D",
        theme: "AI Pedagogy, Literacy & Collaborative Learning",
        chair: "Dr Nisansa de Silva",
        papers: [
          {
            title:
              "Artificial Intelligence Literacy and Pedagogical Use of AI among Sri Lankan School Teachers: Implications for Digital Education"
          },
          {
            title:
              "Preparing Generation Alpha for an AI-Augmented Labour Market: Strategic Insights from Sri Lanka's Education System"
          },
          {
            title:
              "CrossCampusAI for Multilingual Collaborative Learning in South Asian Higher Education"
          },
          {
            title:
              "AI in Fashion Design Practice: A Review of Designer adaptation to AI"
          },
          {
            title: "Digital Education in Sri Lanka: A Bibliometric Analysis"
          },
          {
            title:
              "A Financial Market Data Access Architecture for Inclusive Data Science Education"
          }
        ]
      }
    ]
  },
  { time: "12:45 – 13:30", title: "Lunch", isBreak: true },
  {
    time: "13:30 – 14:00",
    title: "Plenary Speech",
    detail:
      "Research in the age of large language models\nDr Srinath Perera\nVice President/ Head of Research, WSO2 Inc."
  },
  {
    time: "14:00 – 15:15",
    title: "Parallel Technical Sessions",
    halls: [
      {
        hall: "Session E",
        theme: "Emerging Methods, Technologies & Tools",
        chair: "Dr Kengatharaiyar Sarveswaran",
        papers: [
          {
            title:
              "Design of a Novel Synergistic Digital Teaching and Learning Process for Higher Education"
          },
          {
            title:
              "Spatial Design and Facilities Management strategies for Optimizing Hybrid Learning Ecosystems in Universities"
          },
          {
            title:
              "Laboratory Disorganization and the Potential of Digital Chemistry Learning in Jaffna Schools"
          },
          {
            title:
              "A Low-Cost, Verifiable FPGA Resource for Embedded Machine-Learning Education in Open and Distance Learning"
          },
          {
            title:
              "From Novice to Digital Expert: Insights of the Learning Journeys of Fashion Design Professionals in Sri Lanka"
          }
        ]
      },
      {
        hall: "Session F",
        theme: "Ethics, Quality Assurance & Governance",
        chair: "Prof Nalin Wickramarachchi",
        papers: [
          {
            title:
              "Governing Learner Analytics: Balancing Engagement Tracking with Privacy Rights"
          },
          {
            title:
              "Enhancing Quality Education through e-Thaksalawa online platform: A Sustainable Learning Content Management System Approach for Blended Learning in Sri Lankan Schools"
          },
          {
            title:
              "AI-Powered University and Career Guidance Platform for Equitable Access in Sri Lanka"
          },
          {
            title:
              "Understanding School Leavers' Perceptions of Open and Distance Learning Institutions: A 7Ps Marketing Mix Analysis from Sri Lanka"
          },
          { title: "TBC", tbc: true }
        ]
      }
    ]
  },
  { time: "15:15 – 15:30", title: "Tea Break", isBreak: true },
  {
    time: "15:30 – 16:00",
    title: "Poster Session",
    papers: [
      {
        title:
          "Investigating the Impact of Generative AI on Undergraduate Students' Academic Writing Skills: Opportunities, Challenges, and Implications for Higher Education"
      },
      {
        title:
          "Learning Style Prediction Using Natural Language Processing for Personalized Tutor Matching in Digital Education"
      },
      {
        title:
          "The Impact of E-Learning on Soft Skills Development among Sri Lankan Management Undergraduates"
      },
      {
        title:
          "Barriers Affecting Ease of Access to Online Education Among Undergraduate Students in Sri Lanka"
      },
      {
        title:
          "Enhancing Vocational Orientation for Inclusive Career Development Among Open School Learners in Sri Lanka"
      },
      {
        title:
          "Innovation Avoidance and Authenticity Gaps in First-Year ICT Capstone Projects: A Study Design Proposal"
      },
      {
        title:
          "Evaluating the Effectiveness of Online and Distance Learning Approaches for Final-Year Software Development Projects"
      },
      {
        title:
          "Exploring the Convenience and Equitable Access Advantages of Open and Distance Learning Over Traditional Education Systems"
      },
      {
        title:
          "The Impact of Virtual Workshops and Supervisor Guidance on Final Year Project Success in Open and Distance Learning"
      },
      {
        title:
          "Balancing Collaboration and Accountability in Open and Distance Learning"
      },
      {
        title:
          "Developing Employability Skills in Open Distance Learning: A Comparison to Industry-Engaged and Traditional Learning Approaches"
      },
      {
        title:
          "Enhancing Learner Engagement in Open and Distance Learning Through Moodle Digital Badges: Evidence from the University of Moratuwa BIT Programme"
      }
    ]
  },
  {
    time: "16:00 – 17:15",
    title: "Parallel Technical Sessions",
    halls: [
      {
        hall: "Session G",
        theme: "Pedagogy & Learner Engagement",
        chair: "Dr Sureka Thiruchittampalam",
        papers: [
          {
            title:
              "Impact of a Pre-Mathematics Orientation Program on First-Year Academic Performance: A Comparative Study Across Gender, Province, and Age in Sri Lanka"
          },
          {
            title:
              "From Static to Adaptive Gamification in Learning Management Systems: A Conceptual Framework for Personalized Learning"
          },
          {
            title:
              "Evaluating the Role of Tutor-Mentor Sessions in Enhancing Student Engagement in an Asynchronous Open and Distance Learning Environment"
          },
          {
            title:
              "Student Negotiations of Authorship and Ethics in AI-Assisted Visual Production: A Case Study of Undergraduate Film Education at the Department of Drama, Cinema and Television, University of Kelaniya"
          },
          {
            title:
              "An Explainable AI Framework for Academic Article Classification to Support Research and Learning"
          }
        ]
      },
      {
        hall: "Session H",
        theme: "Access, Inclusion & Equity in Digital Education",
        chair: "Ms Eshana Ranasinghe",
        papers: [
          {
            title:
              "A Group-Stratified Reliability Framework for Trustworthy Early-GPA Prediction in Higher Education"
          },
          {
            title:
              "A Scalable, Cost-Effective Biometric Verification Ecosystem for High-Volume Examinations in Open and Distance Learning"
          },
          {
            title:
              "The Impact of AI-Enhanced YouTube Features on Undergraduate Academic Outcomes"
          },
          {
            title:
              "A Governance-Aware Academic Sandbox Platform for Digital Learning and Computational Research"
          },
          {
            title:
              "Synthesis of AI Integration Strategies in Open and Digital Education: A Global Policy and Practice Review"
          }
        ]
      }
    ]
  },
  { time: "17:15 – 17:30", title: "Conclusion", isBreak: true }
];

export const day2Schedule: ProgrammeSession[] = [
  { time: "09:00 – 09:15", session: "Morning Refreshments", isBreak: true },
  {
    time: "09:15 – 09:30",
    session: "Welcome address",
    detail: "Acting Vice Chancellor, UoM"
  },
  {
    time: "09:30 – 09:45",
    session: "Digital Transformation of Sri Lankan Education",
    detail: "Dr Hans Wijesuriya"
  },
  {
    time: "09:45 – 10:25",
    session: "How digitalisation helped education in SL",
    detail: "Prof Gihan Dias"
  },
  {
    time: "10:25 – 10:35",
    session: "Digital Transformation in Government",
    detail: "Mr Waruna Sri Dhanapala"
  },
  { time: "10:35 – 10:50", session: "Tea Break", isBreak: true },
  {
    time: "10:50 – 11:15",
    session: "Inclusive Open Digital Education – open.uom.lk",
    detail: "Prof Malik Ranasinghe"
  },
  {
    time: "11:15 – 11:25",
    session: "Transforming Sri Lanka's Digital Economy",
    detail: "Mr Sanjay Kumar/Hon Deputy Minister Eranga Weeraratne"
  },
  {
    time: "11:25 – 12:10",
    session: "Lessons from International Practices",
    detail: "Mr Sanjay Kumar"
  },
  {
    time: "12:10 – 12:55",
    session: "Human Resource Development for ODL",
    speakers: [
      "LEARN – Dr Asitha Bandaranayake",
      "MoE – Ms Sumudu Wasana",
      "SLASS – Prof Udeni Nawagamuwa",
      "SLIDA – Ms Anusha Batawalagamage"
    ]
  },
  { time: "12:55 – 13:45", session: "Lunch", isBreak: true },
  {
    time: "13:45 – 14:30",
    session: "Digital Content – Sri Lankan Success stories",
    speakers: [
      "e-Thaksalawa – Ms Sumudu Wasana",
      "SLASSCOM Academy – Ms Sandra Rosayro",
      "BIT – Ms Vishaka Nanayakkara",
      "SuhuruSara – Ms Sandamini Karunarathne"
    ]
  },
  {
    time: "14:30 – 14:40",
    session: "Developing a comprehensive Education MIS",
    detail: "Dr Sunimal Ratnayake"
  },
  {
    time: "14:40 – 14:50",
    session: "Biometric Verification",
    detail: "UoM Development Team"
  },
  {
    time: "14:50 – 15:00",
    session: "Learner feedback",
    detail: "Dr Shahani Markus"
  },
  {
    time: "15:00 – 15:10",
    session: "Digital native employee – Industry Expectations",
    detail: "Mr Hasith Yaggahawita"
  },
  {
    time: "15:10 – 15:20",
    session: "Future of Education – Agentic AI",
    detail: "Dr Sandareka Wickramanayake"
  },
  {
    time: "15:20 – 15:40",
    session: "Sri Lanka's digital transformation way forward for higher education",
    panelists: [
      "Mr Pradeep Saputhanthri, Secretary to the Prime Minister",
      "Prof Kapila Seneviratne, Chairman, University Grants Commission",
      "Prof Jagath Manathunge, Dean, Faculty of Engineering, UoM"
    ]
  },
  {
    time: "15:40 – 15:50",
    session: "Vote of Thanks",
    detail:
      "Ms Vishaka Nanayakkara – Director, Centre for Open and Distance Learning, University of Moratuwa"
  },
  {
    time: "16:00 onwards",
    session: "High tea and Networking",
    isBreak: true
  }
];

export const day3Workshops: Day3Workshop[] = [
  {
    title: "How to Conduct Computer-Based Examinations",
    audience: "University Academics / Teachers",
    time: "9:00 am – 12:00 pm",
    description:
      "A workshop for academics which explores how to use MOODLE and other online tools to conduct computer-based examinations. The workshop will cover how to create online exams and assessments, creating question banks and best practices in conducting examinations including question randomisation and online proctoring to prevent cheating."
  },
  {
    title: "Building Your Digital Future",
    audience: "A/L Students, O/L Students",
    time: "9:00 am – 12:00 pm",
    description:
      "For A/L students studying ICT and/or Arts, this workshop teaches essential skills needed to thrive in a technology-driven world. The workshop introduces emerging technologies, future career opportunities, and the importance of adaptability, problem-solving, and lifelong learning."
  },
  {
    title: "Moodle Roundtable",
    audience: "MoE, CODLs",
    time: "9:00 am – 12:00 pm",
    description:
      "Moodle Roundtable is an interactive discussion where educators and Moodle users share experiences, best practices, and practical solutions for online teaching and learning. Participants will exchange ideas on course design, assessment, and learner engagement while addressing common challenges. The session promotes collaboration and the sharing of actionable insights."
  },
  {
    title: "Leading the Digital Transformation",
    audience: "Industry / School / University Teachers",
    time: "1:00 – 4:00 pm",
    description:
      "For school and university educators and industry professionals this workshop will explore strategies for driving digital innovation, integrating emerging technologies, fostering a culture of continuous learning, and developing the leadership skills needed to navigate transformation successfully"
  },
  {
    title: "Learner / Participant Experience",
    audience: "University Academics / Private / Public Officers",
    time: "1:00 – 4:00 pm",
    description:
      "For private and public officers and quality assurance directors, this workshop focuses on the customer experience in digital services and how to refine the user’s journey across public digital learning channels."
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
