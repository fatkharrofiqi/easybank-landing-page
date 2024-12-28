import { create } from "zustand";

interface NavState {
  open: boolean;
  toggleNavigation: () => void;
}

export const useNavStore = create<NavState>((set) => ({
  open: false,
  toggleNavigation: () => set((state) => ({ open: !state.open })),
}));
