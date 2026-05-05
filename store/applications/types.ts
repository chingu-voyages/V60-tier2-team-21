export enum ApplicationStatus {
  Applied = "Applied",
  Pending = "Pending",
  Interviewing = "Interview",
  Rejected = "Rejected",
  Offered = "Offered",
}
export interface Application {
  id: string;
  companyName: string;
  status: ApplicationStatus;
  role: string;
  date: string;
  location: string;
  notes: string;
}

export interface ApplicationsState {
  applications: Record<string, Application>;
  addApplication: (application: Application) => void;
  updateApplication: (id: string, payload: Partial<Application>) => void;
  removeApplication: (id: string) => void;
  resetApplications: () => void;
}
