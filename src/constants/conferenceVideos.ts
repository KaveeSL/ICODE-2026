export type ConferenceDayVideo = {
  videoId: string;
  title: string;
  watchUrl: string;
  embedOnSite?: boolean;
};

export const conferenceVideosByDay: Partial<Record<1 | 2 | 3, ConferenceDayVideo>> = {
  1: {
    videoId: "Ib1InJnrUng",
    title: "ICODE2026 Day 1 · Academic Research Conference",
    watchUrl: "https://www.youtube.com/watch?v=Ib1InJnrUng",
    embedOnSite: true
  },
  2: {
    videoId: "twzvM6L184Y",
    title: "ICODE2026 Day 2 · Policy and Leadership Summit",
    watchUrl: "https://www.youtube.com/live/twzvM6L184Y?si=Dc3w00g8TYE7zf84",
    embedOnSite: false
  }
};
