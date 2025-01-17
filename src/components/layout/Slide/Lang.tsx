'use client';

import React from 'react';

import {SlideItem} from '@/components/layout/Slide';
import LangIcon from '@/public/svgs/icons/lang.svg';

export const Lang: React.FC = () => {
    return <SlideItem icon={<LangIcon />} onCLick={() => {}} />;
};
