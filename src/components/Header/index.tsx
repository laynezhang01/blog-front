'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {useScroll} from 'ahooks';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {DesktopNavBar} from '@/components/Header/NavigationBar';
import {BASIC_CONFIG} from '@/config/basic';
import MenuIcon from '/assets/icons/menu.svg';

const ThemeSwitch = dynamic(() => import('@/components/Header/ThemeSwitch'), {ssr: false});

const Header: React.FC = () => {
    const position = useScroll();
    const top = position?.top ?? 0;

    return (
        <header
            className={clsx(
                'sticky top-0 z-30 flex w-full justify-center px-4 pt-2 contain-layout max-md:pt-0 md:mx-0',
                'max-md:px-0'
            )}
        >
            <div
                className={clsx(
                    'mx-auto grid h-14 w-full max-w-screen-2xl overflow-hidden px-10',
                    'grid-cols-7 items-center rounded-xl',
                    top > 10 && 'bg-card shadow-md max-md:mx-0 max-md:rounded-[0]'
                )}
            >
                <div className="col-span-1 hidden max-md:block">
                    <MenuIcon />
                </div>
                <div className="col-span-3 flex h-full max-md:col-span-5 max-md:justify-center">
                    <h1>
                        <Link href="/" className="font-2xl h-full w-full overflow-hidden font-medium">
                            <span
                                className={clsx(
                                    'float-left h-full w-full transition delay-100 ease-linear',
                                    top > 0 && '-translate-y-14'
                                )}
                            >
                                <span
                                    className={clsx(
                                        "flex h-full items-center gap-2 after:h-4 after:w-[2px] after:content-['']",
                                        'after:animate-cursor after:bg-red-500'
                                    )}
                                >
                                    {BASIC_CONFIG.seo.title}
                                </span>
                                <span
                                    className="flex h-full w-full items-center max-md:justify-center"
                                >
                                    <Image
                                        className="relative h-8 w-8 rounded-xl object-cover"
                                        width={120}
                                        height={120}
                                        src={BASIC_CONFIG.avatar}
                                        alt="logo"
                                    />
                                </span>
                            </span>
                        </Link>
                    </h1>
                </div>
                <div className="col-span col-span-3 flex justify-end max-md:hidden">
                    <DesktopNavBar />
                </div>
                <div className="col-span-1 flex justify-end">
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    );
};

export default Header;
