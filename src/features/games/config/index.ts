import type { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

type IPlatformItems = { label: string; value: IGamePlatform }[];
export const defaultPlatformItems: IPlatformItems = [
  { label: 'All', value: 'all' },
  { label: 'Browser', value: 'browser' },
  { label: 'PC', value: 'pc' },
];

type ICategoryItems = { label: string; value: IGameCategory }[];
export const defaultCategoryItems: ICategoryItems = [
  { label: 'Action', value: 'action' },
  { label: 'MMO', value: 'mmo' },
  { label: 'MMORPG', value: 'mmorpg' },
  { label: 'Racing', value: 'racing' },
  { label: 'Shooter', value: 'shooter' },
  { label: 'Social', value: 'social' },
  { label: 'Sports', value: 'sports' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Survival', value: 'survival' },
];

type ISortByItems = { label: string; value: IGameSortBy }[];
export const defaultSortByItems: ISortByItems = [
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'Popularity', value: 'popularity' },
  { label: 'Release Date', value: 'release-date' },
  { label: 'Relevance', value: 'relevance' },
];
