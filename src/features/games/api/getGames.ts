import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib';
import type { IGame } from '../types';

const getGames = () => {
  return axios.get<IGame[]>('/games').then((res) => res.data);
};

export const useGames = () => useQuery(['game'], () => getGames());
