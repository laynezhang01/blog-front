'use client';

import Link from 'next/link';
import React, {useEffect, useState, useContext} from 'react';
import clsx from 'clsx';
import {GlobalContext} from '@/app/(app)/globalProvider';
import {DesktopNavbar} from '@/components/home';
import {BASIC_CONFIG} from '@/config/basic';
import Logo from '@/assets/svgs/logo.svg';
import MenuIcon from '@/assets/svgs/icons/menu.svg';

export const DesktopHeader: React.FC = () => {
    const {scrollY, navTrigger} = useContext(GlobalContext);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (!scroll) {
            return;
        }

        const curScrollTop = scrollY;

        if (curScrollTop > prevScrollY && curScrollTop > 100) {
            setIsHidden(true);
        } else if (curScrollTop < prevScrollY) {
            setIsHidden(false);
        }

        setPrevScrollY(curScrollTop);
    }, [scrollY, setPrevScrollY]);

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 flex justify-center transition-all duration-300',
                navTrigger ? 'h-[3.375rem]' : 'h-[4rem]',
                isHidden ? '-translate-y-full' : 'translate-y-[0.625rem] max-md:translate-y-0'
            )}
        >
            <div
                className={clsx(
                    'mx-0 flex h-full w-full items-center justify-between overflow-hidden rounded-xl px-8',
                    'border-card-border md:mx-8 xl:max-w-[75rem]',
                    navTrigger && 'bg-nav/70 shadow-md backdrop-blur-md'
                )}
            >
                <div className="flex h-full">
                    <Link href="/">
                        <h1 className="text-md flex h-full items-center gap-2 font-bold">
                            <span className="inline-flex w-[2.25rem] lg:w-[3.125rem]">
                                <Logo />
                            </span>
                            <span>{BASIC_CONFIG.seo.title}</span>
                        </h1>
                    </Link>
                </div>
                <div className="mr-10 hidden justify-end md:flex">
                    <DesktopNavbar />
                </div>
                <div className="block md:hidden">
                    <MenuIcon />
                </div>
            </div>
        </header>
    );
};
