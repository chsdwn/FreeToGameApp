import React, { createContext, useMemo } from 'react';

import { IResponsiveConfig } from '@/types';

const BASE_WIDTH = 360;

export const ResponsiveContext = createContext<IResponsiveConfig>({
  baseWidth: BASE_WIDTH,
});

type IProviderProps = {
  config?: Partial<IResponsiveConfig>;
  children: React.ReactNode;
};
export const ResponsiveProvider = ({ config, children }: IProviderProps) => {
  const { baseWidth, breakpoints } = config || {};
  const { sm, md, lg, xl } = breakpoints || {};

  const memoizedConfig: IResponsiveConfig = useMemo(() => {
    return {
      baseWidth: baseWidth || BASE_WIDTH,
      breakpoints: { sm, md, lg, xl },
    };
  }, [baseWidth, sm, md, lg, xl]);

  return (
    <ResponsiveContext.Provider value={memoizedConfig}>
      {children}
    </ResponsiveContext.Provider>
  );
};
