export enum ApplicationsStatus {
  Applied = "Applied",
  Pending = "Pending",
  Interviewing = "Interviewing",
  Rejected = "Rejected",
  Offered = "Offered",
}
export interface Application {
  id: string;
  companyName: string;
  status: ApplicationsStatus;
  role: string;
  date: string;
  location: string;
  notes: string;
}

export interface ApplicationsState {
  applications: Record<string, Application>;
  addApplication: (application: Application) => void;
  updateApplication: (id: string, payload: Record<string, string>) => void;
  removeApplication: (id: string) => void;
}
