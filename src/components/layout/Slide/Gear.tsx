'use client';

import React from 'react';

import { SlideItem } from '@/components/layout/Slide';
import GearIcon from '@/public/svgs/icons/gear.svg';

export interface IGearProps {
  onClick: () => void;
}

export const Gear: React.FC<IGearProps> = ({ onClick }) => {
  return <SlideItem icon={<GearIcon />} spin onCLick={onClick} />;
};
