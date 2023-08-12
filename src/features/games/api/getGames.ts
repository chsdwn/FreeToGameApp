import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib';
import { IGame } from '../types';

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
  useQuery(['game', filter], () => getGames(filter));
