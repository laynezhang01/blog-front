'use client';

import React, {useCallback, useState} from 'react';

import { SlideItem } from '@/components/layout/Slide';
import { useTheme, Theme as TypeTheme } from '@/context/ThemeContext';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

import DarkIcon from '@/public/svgs/icons/dark.svg';
import LightIcon from '@/public/svgs/icons/light.svg';
import SystemIcon from '@/public/svgs/icons/system.svg';
import ThemeIcon from '@/public/svgs/icons/theme.svg';

export const Theme: React.FC = () => {
  // theme cur
  const { setTheme } = useTheme();
  const [showPopover, setShowPopover] = useState(false);

  const handleSetTheme = useCallback(
    (curTheme: TypeTheme) => {
      setTheme(curTheme);
      setShowPopover(false);
    },
    [setTheme]
  );

  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <SlideItem icon={<ThemeIcon />} onCLick={() => setShowPopover(!showPopover)} />
      </PopoverTrigger>
      <PopoverContent
        align="center"
        side="left"
        sideOffset={10}
      >
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-start gap-4 rounded px-10 hover:bg-black/10"
            onClick={() => handleSetTheme('dark')}
          >
            <DarkIcon />
            <span>Dark</span>
          </button>
          <button
            className="flex items-center justify-start gap-4 rounded px-10 hover:bg-black/10"
            onClick={() => handleSetTheme('light')}
          >
            <LightIcon />
            <span>Light</span>
          </button>
          <button
            className="flex items-center justify-start gap-4 rounded px-10 hover:bg-black/10"
            onClick={() => handleSetTheme('system')}
          >
            <SystemIcon />
            <span>System</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
};
