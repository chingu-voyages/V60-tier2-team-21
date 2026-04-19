import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_APPLICATIONS } from "./data";
import type { Application, ApplicationsState } from "./types";

const addApplication = (state: ApplicationsState, application: Application) =>
  (state.applications[application.id] = application);

const removeApplication = (state: ApplicationsState, id: string) =>
  delete state.applications[id];

const useApplicationsStore = create<ApplicationsState>()(
  immer((set) => ({
    applications: INITIAL_APPLICATIONS,
    addApplication: (application: Application) =>
      set((state) => addApplication(state, application)),
    removeApplication: (id: string) =>
      set((state) => removeApplication(state, id)),
  })),
);

export default useApplicationsStore;
