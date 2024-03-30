import { QueryClient } from '@tanstack/query-core';
import { DefaultOptions } from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
  queries: {
    throwOnError: true,
    retry: false,
    staleTime: 30 * 60 * 1000, // 30min
  },
};

export const queryClient = new QueryClient({ defaultOptions });
