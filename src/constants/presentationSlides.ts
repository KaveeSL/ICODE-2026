import slideContinuation from "../assets/slides/Continuation of Post-Pandemic Online Learning Preferences among Children in Sri Lanka.pdf?url";
import slideOdlInclusive from "../assets/slides/Open and Distance Learning as a Tool for Inclusive Higher Education in Sri Lanka.pdf?url";
import slideClil from "../assets/slides/AI-Assisted Content and Language Integrated Learning.pdf?url";
import slideBehavioural from "../assets/slides/Behavioural Determinants of Learner Engagement Decay in Open and Distance Learning The Role of Digital Learning Behaviours and Self-Regulated Learning.pdf?url";
import slideAiLiteracy from "../assets/slides/Artificial Intelligence Literacy and Pedagogical Use of AI among Sri Lankan School Teachers_Implications for Digital Education.pdf?url";
import slideGenerationAlpha from "../assets/slides/Preparing Generation Alpha for an AI Augmented Labour Market Strategic Insights from Sri Lanka’s Education System (Paper ID 55).pdf?url";
import slideFashionAi from "../assets/slides/AI in Fashion Design Practice.pdf?url";
import slideBibliometric from "../assets/slides/Digital Education in Sri Lanka_ A Bibliometric Analysis.pdf?url";
import slideLabChemistry from "../assets/slides/Laboratory Disorganization and the Potential of Digital Chemistry Learning in Jaffna Schools.pdf?url";
import slideFpga from "../assets/slides/A Low-Cost, Verifiable FPGA Resource for Embedded Machine-Learning Education.pdf?url";
import slideFashionJourneys from "../assets/slides/Insights of the Learning Journeys of Fashion Design Professionals.pdf?url";
import slideCareerGuidance from "../assets/slides/AI-Powered University & Career Guidance Platform for Sri Lankan A_L Students.pdf?url";
import slideStudentNegotiations from "../assets/slides/Student Negotiations of Authorship and Ethics in AI Assisted Visual ProductionD 11.pdf?url";
import slideExplainableAi from "../assets/slides/An Explainable AI Framework for Academic Article Classification to Support Research and Learning.pdf?url";
import slideEarlyGpa from "../assets/slides/A Group-Stratified Reliability Framework for Trustworthy Early-GPA Prediction in Higher Education.pdf?url";
import slideYoutube from "../assets/slides/The Impact of AI-Enhanced YouTube Features on Undergraduate Academic Outcomes - 03.pdf?url";
import slidePreProdSandbox from "../assets/slides/PreProd SE A Governance-Aware Academic Sandbox Platform for Digital Learning and Computational Research.pdf?url";

/** Flip to true when presentations should be publicly available. */
export const SHOW_PRESENTATION_SLIDES = false;

/** Presentation slides (PDF) keyed by Day 1 paper id (e.g. d1-a-01). */
const slidesByPaperId: Record<string, string> = {
  "d1-a-02": slideOdlInclusive,
  "d1-a-04": slideEarlyGpa,
  "d1-c-02": slideClil,
  "d1-c-05": slideBehavioural,
  "d1-d-01": slideAiLiteracy,
  "d1-d-02": slideGenerationAlpha,
  "d1-d-04": slideFashionAi,
  "d1-d-05": slideBibliometric,
  "d1-e-03": slideLabChemistry,
  "d1-e-04": slideFpga,
  "d1-e-05": slideFashionJourneys,
  "d1-f-03": slideCareerGuidance,
  "d1-g-04": slideStudentNegotiations,
  "d1-g-05": slideExplainableAi,
  "d1-h-01": slideContinuation,
  "d1-h-03": slideYoutube,
  "d1-h-04": slidePreProdSandbox
};

export const presentationSlidesByPaperId: Record<string, string> =
  SHOW_PRESENTATION_SLIDES ? slidesByPaperId : {};
