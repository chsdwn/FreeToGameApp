import { create } from 'zustand';

import type { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

type Platform = IGamePlatform;
type Category = IGameCategory | null;
type SortBy = IGameSortBy | null;

type GamesFilterStore = {
  platform: Platform;
  category: Category;
  sortBy: SortBy;
  setPlatform: (platform: Platform) => void;
  setCategory: (category: Category) => void;
  setSortBy: (sortBy: SortBy) => void;
};

export const useGamesFilterStore = create<GamesFilterStore>((set) => ({
  platform: 'all',
  category: null,
  sortBy: null,
  setPlatform: (platform) => set({ platform }),
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
}));
