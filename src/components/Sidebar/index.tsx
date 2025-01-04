/**
 * @file 全局右侧边栏
 */

'use client';

import ScrollTop from '@/components/Sidebar/ScrollTop';
import React from 'react';

export const Slider: React.FC = () => {
    return (
        <aside className="fixed right-[10px] top-3/4 flex flex-col gap-2">
            <ScrollTop />
        </aside>
    );
};
