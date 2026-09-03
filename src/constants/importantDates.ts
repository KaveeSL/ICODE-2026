/**
 * Canonical Important Dates copy for the home page timeline.
 * Note: Call for Papers “Key submission dates” intentionally shows only 6 August 2026
 * for the final milestone.
 */

/** Previous milestone — shown only on the home page next to the extended deadline. */
export const supersededSubmissionDeadlineDisplay = {
  date: "20 May 2026",
  label: "Submission Deadline",
  note: "Abstract submission deadline"
} as const;

export const submissionDeadlineDate = "19 July 2026";

export const submissionDeadlineClosedLabel = "SUBMISSION CLOSED";

export const acceptanceNotificationDate = "20 July 2026";

export const acceptanceNotificationSentLabel = "SENT";

export const registrationDeadlineDate = "31 July 2026";

export const registrationClosedLabel = "REGISTRATION CLOSED";

export const conferenceDates = "5–7 August 2026";

export const conferenceConcludedLabel = "CONCLUDED";

export const importantDates = [
  {
    label: "Submissions Open",
    date: "1 April 2026",
    note: "Extended abstracts submissions opens"
  },
  {
    label: "Submission Deadline",
    date: submissionDeadlineDate,
    note: "Extended abstract submission"
  },
  // {
  //   label: "Reviews Due",
  //   date: "19 June 2026",
  //   note: "Final review deadline: 24 June 2026"
  // },
  {
    label: "Acceptance notification",
    date: acceptanceNotificationDate,
    note: "Notification of Acceptance"
  },
  {
    label: "Registration deadline",
    date: registrationDeadlineDate,
    note: "Participant registration"
  },
  {
    label: "ICODE2026",
    date: conferenceDates,
    note: "Hybrid / University of Moratuwa, Sri Lanka"
  }
] as const;
