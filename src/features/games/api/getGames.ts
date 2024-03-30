import { useQuery } from '@tanstack/react-query';

import { IGame } from '../types';

import { axios } from '@/lib';

type IFilter = {
  platform: string | null;
  category: string | null;
  sortBy: string | null;
};

const getGames = ({ platform, category, sortBy }: IFilter) => {
  let url = '/games?';
  if (platform) url += `platform=${platform}&`;
  if (category) url += `category=${category}&`;
  if (sortBy) url += `sort-by=${sortBy}&`;

  return axios.get<IGame[]>(url).then((res) => res.data);
};

export const useGames = (filter: IFilter) =>
  useQuery({ queryKey: ['game', filter], queryFn: () => getGames(filter) });
