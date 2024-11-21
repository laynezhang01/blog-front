/**
 * @file 全局右侧边栏
 * @constructor
 */

'use client';

import {useCallback, useMemo, memo, useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import useScrollTop from '@/hooks/useScrollTop';
import classNames from 'classnames';

import cls from './index.module.css';

const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'), {ssr: false});

const Slider = memo(() => {
    const [scrollTop] = useScrollTop();
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(
        () => {
            const h = document?.body?.clientHeight;
            setPageHeight(h);
        }
    );

    console.log(pageHeight);

    const showTop = useMemo(
        () => {
            return scrollTop > Math.floor(pageHeight * 0.2);
        },
        [scrollTop, pageHeight]
    )

    const handleScrollTop = useCallback(
        () => {
            window.scroll(0, 0);
        },
        []
    )

    return (
        <aside className={cls.slideBar}>
            <div className={classNames(cls.item, {[cls.hidden]: !showTop})}>
                <a onClick={handleScrollTop}>top</a>
            </div>
            <div className={cls.item}>
                <ThemeSwitch />
            </div>
        </aside>
    );
});

export default Slider;
