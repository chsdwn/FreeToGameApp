import { create } from 'zustand';

import type { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

type Platform = IGamePlatform | null;
type Category = IGameCategory | null;
type SortBy = IGameSortBy | null;

type InitialValues = {
  platform: Platform;
  category: Category;
  sortBy: SortBy;
};

type GamesFilterStore = {
  setPlatform: (platform: Platform) => void;
  setCategory: (category: Category) => void;
  setSortBy: (sortBy: SortBy) => void;
  resetGamesFilter: () => void;
} & InitialValues;

const initialValues: InitialValues = {
  platform: null,
  category: null,
  sortBy: null,
};

export const useGamesFilterStore = create<GamesFilterStore>((set) => ({
  ...initialValues,
  setPlatform: (platform) => set({ platform }),
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetGamesFilter: () => set({ ...initialValues }),
}));
