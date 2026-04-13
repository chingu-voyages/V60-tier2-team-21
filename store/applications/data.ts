import type { Application } from "./types";

// fake applications until we make it dynamic
export const INITIAL_APPLICATIONS: Record<string, Application> = {
  "app-1": {
    id: "app-1",
    company: "Starlight Labs",
    role: "Product Designer",
    status: "pending",
  },
  "app-2": {
    id: "app-2",
    company: "Neonbyte Health",
    role: "Frontend Engineer",
    status: "interviewing",
  },
  "app-3": {
    id: "app-3",
    company: "Willow Financial",
    role: "Frontend Engineer",
    status: "offered",
  },
  "app-4": {
    id: "app-4",
    company: "Pioneer AI",
    role: "Machine Learning Engineer",
    status: "rejected",
  },
  "app-5": {
    id: "app-5",
    company: "Catalyst Studios",
    role: "Growth Marketing Lead",
    status: "pending",
  },
};
