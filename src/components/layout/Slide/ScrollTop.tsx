'use client';

import React, { useCallback } from 'react';

import { SlideItem } from '@/components/layout/Slide';
import RocketIcon from '@/public/svgs/icons/rocket.svg';

export const ScrollTop: React.FC = () => {
  const handleScrollTop = useCallback(() => {
    window.scroll(0, 0);
  }, []);

  return <SlideItem icon={<RocketIcon />} onCLick={handleScrollTop} />;
};
