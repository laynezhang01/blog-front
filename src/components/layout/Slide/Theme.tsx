'use client';

import React, {useCallback, useRef} from 'react';

import {SlideItem, SlideItemRef} from '@/components/layout/Slide';
import {useTheme, Theme as TypeTheme} from '@/context/ThemeContext';
import DarkIcon from '@/public/svgs/icons/dark.svg';
import LightIcon from '@/public/svgs/icons/light.svg';
import SystemIcon from '@/public/svgs/icons/system.svg';
import ThemeIcon from '@/public/svgs/icons/theme.svg';

export const Theme: React.FC = () => {
    // theme cur
    const {setTheme} = useTheme();
    // 使用 SlideItemRef 类型
    const slideItemRef = useRef<SlideItemRef>(null);

    const handleSetTheme = useCallback(
        (curTheme: TypeTheme) => {
            setTheme(curTheme);
            if (slideItemRef.current) {
                slideItemRef.current.closePopover(); // 调用子组件暴露的 closePopover 方法
            }
        },
        [setTheme]
    );

    return (
        <SlideItem ref={slideItemRef} icon={<ThemeIcon />}>
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
