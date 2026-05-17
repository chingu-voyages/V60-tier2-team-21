import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { INITIAL_APPLICATIONS } from "./data";
import type { Application, ApplicationsState } from "./types";

const STORAGE_KEY = "aplico-store";

const addApplication = (state: ApplicationsState, application: Application) => {
  state.applications.push(application);
};

const removeApplication = (state: ApplicationsState, id: string) => {
  const index = state.applications.findIndex((app) => app.id === id);
  if (index !== -1) state.applications.splice(index, 1);
};

const updateApplication = (
  state: ApplicationsState,
  id: string,
  payload: Partial<Application>,
) => {
  const index = state.applications.findIndex((app) => app.id === id);
  if (index === -1) return;
  state.applications[index] = { ...state.applications[index], ...payload };
};

const resetApplications = (state: ApplicationsState) => {
  state.applications = INITIAL_APPLICATIONS;
};

const getInitialData = (): Application[] => {
  if (typeof window === "undefined") return [];

  try {
    const storeInLocalStorage = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "null",
    );

    return storeInLocalStorage?.state?.applications || INITIAL_APPLICATIONS;
  } catch {
    return INITIAL_APPLICATIONS;
  }
};

const useApplicationsStore = create<ApplicationsState>()(
  persist(
    immer((set) => ({
      applications: getInitialData(),
      addApplication: (application: Application) =>
        set((state) => addApplication(state, application)),
      updateApplication: (id: string, payload: Partial<Application>) =>
        set((state) => updateApplication(state, id, payload)),
      removeApplication: (id: string) =>
        set((state) => removeApplication(state, id)),
      resetApplications: () => set(resetApplications),
    })),
    {
      name: STORAGE_KEY,
    },
  ),
);

export default useApplicationsStore;
