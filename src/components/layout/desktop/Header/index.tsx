'use client';

import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useScroll} from 'ahooks';
import {DesktopNavbar} from '@/components/layout';
import Logo from '/public/svg/logo.svg';
import MenuIcon from '/assets/icons/menu.svg';
import {BASIC_CONFIG} from '@/config/basic';

export const DesktopHeader: React.FC = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollTop, setPrevScrollTop] = useState(0);
    const [threshold, setThreshold] = useState(false);
    const scroll = useScroll();

    useEffect(() => {
        if (!scroll) {
            return;
        }

        const curScrollTop = scroll.top || 0;

        if (curScrollTop > prevScrollTop && curScrollTop > 100) {
            setIsHidden(true);
            setThreshold(true);
        } else if (curScrollTop < prevScrollTop && threshold) {
            setIsHidden(false);
        }

        setPrevScrollTop(curScrollTop);
    }, [scroll?.top, prevScrollTop, threshold]);

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 transition-all duration-300 max-md:px-0 max-md:pt-0 md:mx-0',
                isHidden && '-translate-y-full',
                prevScrollTop > 10 && !isHidden ? 'h-[50px] translate-y-[10px]' : 'h-[64px]'
            )}
        >
            <div
                className={clsx(
                    'mx-auto grid h-full max-w-[1200px] grid-cols-7 overflow-hidden rounded-xl px-10',
                    'items-center rounded-xl',
                    prevScrollTop > 10 && 'border-card-border bg-card shadow-md max-md:mx-0 max-md:rounded-[0]'
                )}
            >
                <div className="col-span-1 hidden max-md:block">
                    <MenuIcon />
                </div>
                <div className="col-span-3 flex h-full max-md:col-span-5 max-md:justify-center">
                    <Link href="/">
                        <h1 className="text-md flex items-center gap-2 font-bold">
                            <span className="text-[50px]">
                                <Logo />
                            </span>
                            <span className="max-md:hidden">{BASIC_CONFIG.seo.title}</span>
                        </h1>
                    </Link>
                </div>
                <div className="col-span col-span-3 flex justify-end max-md:hidden">
                    <DesktopNavbar />
                </div>
                {/*<div className="col-span-1 flex justify-end">*/}
                {/*    <ThemeSwitch />*/}
                {/*</div>*/}
            </div>
        </header>
    );
};
