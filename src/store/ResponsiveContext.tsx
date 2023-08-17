import React, { createContext, useMemo } from 'react';

import { IResponsiveConfig } from '@/types';

const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

export const ResponsiveContext = createContext<IResponsiveConfig>({
  baseWidth: BASE_WIDTH,
  baseHeight: BASE_HEIGHT,
});

type IProviderProps = {
  config?: Partial<IResponsiveConfig>;
  children: React.ReactNode;
};
export const ResponsiveProvider = ({ config, children }: IProviderProps) => {
  const memoizedConfig: IResponsiveConfig = useMemo(() => {
    return {
      baseWidth: config?.baseWidth || BASE_WIDTH,
      baseHeight: config?.baseHeight || BASE_HEIGHT,
      breakpoints: config?.breakpoints,
    };
  }, [config]);

  return (
    <ResponsiveContext.Provider value={memoizedConfig}>
      {children}
    </ResponsiveContext.Provider>
  );
};
