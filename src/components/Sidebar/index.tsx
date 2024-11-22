/**
 * @file 全局右侧边栏
 */

'use client';

import ScrollTop from '@/components/Sidebar/ScrollTop';
import ThemeSwitch from '@/components/Sidebar/ThemeSwitch';
import React from 'react';

const Slider: React.FC = () => {
    return (
        <aside className="fixed right-[10px] top-3/4 flex flex-col gap-2">
            <ThemeSwitch />
            <ScrollTop />
        </aside>
    );
};

export default Slider;
