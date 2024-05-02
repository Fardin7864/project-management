import { create } from "zustand";

export const useBearStore = create((set) => ({
  user: {},
  setUser: (newUser) => set({ user: newUser }),
}));
