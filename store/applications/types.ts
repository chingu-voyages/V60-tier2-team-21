export interface Application {
  id: string;
  company: string;
  role: string;
  status: "pending" | "interviewing" | "rejected" | "offered";
}

export interface ApplicationsState {
  applications: Record<string, Application>;
  addApplication: (application: Application) => void;
  removeApplication: (id: string) => void;
}
