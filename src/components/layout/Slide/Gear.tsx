'use client';

import React, {useCallback} from 'react';
import {SlideItem} from '@/components/layout/Slide';

import GearIcon from '@/public/svgs/icons/gear.svg';
import DarkIcon from '@/public/svgs/icons/dark.svg';
import SystemIcon from '@/public/svgs/icons/system.svg';
import LightIcon from '@/public/svgs/icons/light.svg';
import {useTheme} from 'next-themes';

export const Gear: React.FC = () => {
    // theme cur
    const {setTheme} = useTheme();
    const handleSetTheme = useCallback(
        (curTheme: string) => {
            setTheme(curTheme);
        },
        [setTheme]
    );

    return (
        <SlideItem icon={<GearIcon />} spin onCLick={() => {}}>
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
        </SlideItem>
    );
};
