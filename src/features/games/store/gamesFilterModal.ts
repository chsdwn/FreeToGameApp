import { create } from 'zustand';

type GamesFilterModalStore = {
  visible: boolean;
  show: () => void;
  hide: () => void;
};

export const useGamesFilterModalStore = create<GamesFilterModalStore>(
  (set) => ({
    visible: false,
    show: () => set({ visible: true }),
    hide: () => set({ visible: false }),
  }),
);
