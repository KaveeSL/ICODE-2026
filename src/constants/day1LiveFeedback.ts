import qrKeynote from "../assets/qrcodes/Main QR.png";
import qrAceg from "../assets/qrcodes/ACEG Session QR.png";
import qrBdfh from "../assets/qrcodes/BDFH Session QR.png";

/** Live Q&A / feedback links for Day 1 (Emojot). */
export type Day1LiveFeedbackTrack = {
  id: "keynote" | "aceg" | "bdfh";
  title: string;
  /** Short chips under the title (session letters or labels). */
  sessions: string[];
  url: string;
  qrSrc: string;
  featured?: boolean;
};

export const day1LiveFeedbackTracks: Day1LiveFeedbackTrack[] = [
  {
    id: "keynote",
    title: "Keynote",
    sessions: ["Keynote", "Plenary"],
    featured: true,
    url: "https://emo.run/icode5",
    qrSrc: qrKeynote
  },
  {
    id: "aceg",
    title: "Session",
    sessions: ["A", "C", "E", "G"],
    url: "https://emo.run/icode5a",
    qrSrc: qrAceg
  },
  {
    id: "bdfh",
    title: "Session",
    sessions: ["B", "D", "F", "H"],
    url: "https://emo.run/icode5b",
    qrSrc: qrBdfh
  }
];
