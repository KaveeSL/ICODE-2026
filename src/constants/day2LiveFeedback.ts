import qrDay2 from "../assets/qrcodes/day2 QR.png";

/** Live Q&A / feedback link for Day 2 Policy & Leadership Summit (Emojot). */
export type Day2LiveFeedbackTrack = {
  id: "summit";
  title: string;
  sessions: string[];
  url: string;
  qrSrc: string;
};

export const day2LiveFeedbackTracks: Day2LiveFeedbackTrack[] = [
  {
    id: "summit",
    title: "Summit",
    sessions: ["Guest Speeches", "Panel Discussions"],
    url: "https://emo.run/icode6",
    qrSrc: qrDay2
  }
];
