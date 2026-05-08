import { type Application, ApplicationStatus } from "./types";

// fake applications until we make it dynamic
export const INITIAL_APPLICATIONS: Record<string, Application> = {
  "app-1": {
    id: "app-1",
    companyName: "Starlight Labs",
    role: "Product Designer",
    status: ApplicationStatus.Pending,
    date: "2026-03-14",
    location: "Remote",
    notes: "Referred by Alex from the design community.",
  },
  "app-2": {
    id: "app-2",
    companyName: "Neonbyte Health",
    role: "Frontend Engineer",
    status: ApplicationStatus.Interview,
    date: "2026-03-22",
    location: "Berlin, Germany",
    notes: "Technical interview scheduled for next week.",
  },
  "app-3": {
    id: "app-3",
    companyName: "Willow Financial",
    role: "Frontend Engineer",
    status: ApplicationStatus.Offered,
    date: "2026-02-05",
    location: "London, UK",
    notes: "Offer received, negotiating compensation.",
  },
  "app-4": {
    id: "app-4",
    companyName: "Pioneer AI",
    role: "Machine Learning Engineer",
    status: ApplicationStatus.Offered,
    date: "2026-01-18",
    location: "San Francisco, CA",
    notes: "Rejected after final round, good feedback for next time.",
  },
  "app-5": {
    id: "app-5",
    companyName: "Catalyst Studios",
    role: "Growth Marketing Lead",
    status: ApplicationStatus.Pending,
    date: "2026-04-02",
    location: "New York, NY",
    notes: "Applied via company website, awaiting response.",
  },
};
