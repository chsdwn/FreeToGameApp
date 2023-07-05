import { useQuery } from '@tanstack/react-query';

import { throwAxiosServerError } from '../utils';
import { axios } from '@/lib';

import type { IGame } from '../types';

type IFilter = {
  platform: string;
  category: string | null;
  sortBy: string | null;
};

const getGames = ({ platform, category, sortBy }: IFilter) => {
  let url = `/games?platform=${platform}`;
  if (category) url += `&category=${category}`;
  if (sortBy) url += `&sort-by=${sortBy}`;

  return axios.get<IGame[]>(url).then((res) => {
    // Returns index.html as string on android if given game id or url not found.
    if (typeof res.data === 'string') throwAxiosServerError();
    return res.data;
  });
};

export const useGames = (filter: IFilter) =>
  useQuery(['game', filter], () => getGames(filter));
