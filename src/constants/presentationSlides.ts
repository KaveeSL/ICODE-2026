import slideContinuation from "../assets/slides/Continuation of Post-Pandemic Online Learning Preferences among Children in Sri Lanka.pdf?url";
import slideClil from "../assets/slides/AI-Assisted Content and Language Integrated Learning.pdf?url";
import slideFashionAi from "../assets/slides/AI in Fashion Design Practice.pdf?url";
import slideFashionJourneys from "../assets/slides/Insights of the Learning Journeys of Fashion Design Professionals.pdf?url";

/** Presentation slides (PDF) keyed by Day 1 paper id (e.g. d1-a-01). */
export const presentationSlidesByPaperId: Record<string, string> = {
  "d1-a-01": slideContinuation,
  "d1-c-02": slideClil,
  "d1-d-04": slideFashionAi,
  "d1-e-05": slideFashionJourneys
};
