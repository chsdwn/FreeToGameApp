import { AxiosError } from 'axios';

import type { AxiosRequestHeaders } from 'axios';

export const throwAxiosServerError = () => {
  throw new AxiosError('Server error', 'SERVER_ERROR', undefined, undefined, {
    data: undefined,
    config: { headers: {} as AxiosRequestHeaders },
    headers: {},
    statusText: '',
    status: 500,
  });
};
