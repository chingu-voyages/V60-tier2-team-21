import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { INITIAL_APPLICATIONS } from "./data";
import type { Application, ApplicationsState } from "./types";

const addApplication = (state: ApplicationsState, application: Application) =>
  (state.applications[application.id] = application);

const removeApplication = (state: ApplicationsState, id: string) =>
  delete state.applications[id];

const updateApplication = (
  state: ApplicationsState,
  id: string,
  payload: Record<string, string>,
) => {
  if (!state.applications[id]) return;
  state.applications[id] = { ...state.applications[id], ...payload };
};

const getInitialData = () => {
  if (typeof window === "undefined") return [];

  try {
    const storeInLocalStorage = JSON.parse(
      localStorage.getItem("store") || "null",
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
      updateApplication: (id: string, payload: Record<string, string>) =>
        set((state) => updateApplication(state, id, payload)),
      removeApplication: (id: string) =>
        set((state) => removeApplication(state, id)),
    })),
    {
      name: "store",
    },
  ),
);

export default useApplicationsStore;
