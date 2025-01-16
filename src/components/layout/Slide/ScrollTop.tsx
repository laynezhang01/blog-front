'use client';

import React, {useCallback, useMemo} from 'react';
import {useScroll} from 'ahooks';
import {SlideItem} from '@/components/layout/Slide';

import RocketIcon from '@/public/svgs/icons/rocket.svg';

export const ScrollTop: React.FC = () => {
    const scroll = useScroll();

    const show = useMemo(() => {
        if (!scroll) {
            return false;
        }
        return scroll.top > 200;
    }, [scroll]);

    const handleScrollTop = useCallback(() => {
        window.scroll(0, 0);
    }, []);

    return <SlideItem visible={show} icon={<RocketIcon />} onCLick={handleScrollTop} />;
};
