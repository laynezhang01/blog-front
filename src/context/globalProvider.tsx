'use client';

import React, { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { useScrollPosition } from '@/hooks/useScrollPosition';

interface IGlobalContext {
  scrollY: number;
  headerIsFixed: boolean;
}

export namespace NGlobalContext {
  export const HEADER_FIXED_Y = 10;
}

export const GlobalContext = createContext<IGlobalContext>({
  scrollY: 0,
  headerIsFixed: false,
});

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { y: scrollY } = useScrollPosition();

  const data = useMemo<IGlobalContext>(() => {
    return {
      scrollY,
      headerIsFixed: scrollY >= NGlobalContext.HEADER_FIXED_Y,
    };
  }, [scrollY]);

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
