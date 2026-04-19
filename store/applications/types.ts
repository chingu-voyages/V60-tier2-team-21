export interface Application {
  id: string;
  companyName: string;
  status: "applied" | "pending" | "interviewing" | "rejected" | "offered";
  role: string;
  date: string;
  location: string;
  notes: string;
}

export interface ApplicationsState {
  applications: Record<string, Application>;
  addApplication: (application: Application) => void;
  removeApplication: (id: string) => void;
}
