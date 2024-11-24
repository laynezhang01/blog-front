'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {DesktopNavBar} from '@/components/Header/NavigationBar';
import {useScroll} from 'ahooks';
import {BASIC_CONFIG} from '@/config/basic';
import MenuIcon from '/assets/icons/menu.svg';

const Header: React.FC = () => {
    const position = useScroll();
    const top = position?.top ?? 0;

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 flex h-14 w-full justify-center px-4 pt-[10px] contain-layout max-md:pt-0 md:mx-0',
                'max-md:px-0'
            )}
        >
            <div
                className={clsx(
                    'mx-auto grid h-full w-full max-w-screen-2xl px-10',
                    'grid-cols-2 items-center rounded-xl max-md:grid-cols-3',
                    top > 10 && 'bg-card shadow-md max-md:mx-0 max-md:rounded-[0]'
                )}
            >
                <div className="hidden max-md:block">
                    <MenuIcon />
                </div>
                <div className="flex max-md:justify-center">
                    <h1>
                        <Link href="/" className="font-2xl flex items-center gap-2 font-medium">
                            <span>{BASIC_CONFIG.seo.title}</span>
                            <span className="h-4 w-[2px] animate-cursor bg-red-500" />
                        </Link>
                    </h1>
                </div>
                <div className="flex justify-end max-md:hidden">
                    <DesktopNavBar />
                </div>
            </div>
        </header>
    );
};

export default Header;
