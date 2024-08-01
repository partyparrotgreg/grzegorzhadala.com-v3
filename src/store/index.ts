import { create } from "zustand";

type State = {
  year: number | null;
};

type Action = {
  // eslint-disable-next-line no-unused-vars
  updateYear: (year: number) => void;
};

export const useStore = create<State & Action>((set) => ({
  year: null,
  updateYear: (year: number) => set((state) => ({ ...state, year })),
}));
