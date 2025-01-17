'use client';

import clsx from 'clsx';
import React, {useContext, useState} from 'react';

import {ScrollTop, Gear, Lang, Theme} from '@/components/layout/Slide';
import {GlobalContext} from '@/context/globalProvider';

export const SCROLL_SHOW_LIMIT = 200;

export const Slide: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const {scrollY} = useContext(GlobalContext);

    return (
        <div className="fixed right-2.5 top-2/3 flex flex-col">
            <div
                className={clsx(
                    'transition-[max-height, transform] duration-300 ease-in-out',
                    showMore ? 'max-h-screen translate-y-0' : '-z-10 translate-y-full'
                )}
            >
                <Lang />
            </div>
            <Gear onClick={() => setShowMore(!showMore)} />
            <Theme />
            <div
                className={clsx(
                    'transition-transform duration-300 ease-in-out',
                    scrollY >= SCROLL_SHOW_LIMIT ? 'translate-y-0' : '-z-10 -translate-y-full'
                )}
            >
                <ScrollTop />
            </div>
        </div>
    );
};
