'use client';

import React from 'react';
import Avatar from '@/components/Header/Avatar';
import {DesktopNavBar} from '@/components/Header/NavigationBar';
import {useScroll} from 'ahooks';

import MenuIcon from '/assets/icons/menu.svg';

import clsx from 'clsx';

const Header: React.FC = () => {
    const position = useScroll();
    const top = position?.top ?? 0;

    return (
        <header
            className={clsx(
                'delay-50 sticky top-0 z-30 h-14 w-full transition contain-layout',
                top > 10 && 'top-0 bg-background/20 shadow-md backdrop-blur-md'
            )}
        >
            <div className="container mx-auto grid h-full max-w-screen-xl grid-cols-2 items-center px-10 max-md:grid-cols-3">
                <div className="hidden max-md:block">
                    <MenuIcon />
                </div>
                <div className="flex max-md:justify-center">
                    <Avatar />
                </div>
                <div className="flex justify-end max-md:hidden">
                    <DesktopNavBar />
                </div>
            </div>
        </header>
    );
};

export default Header;
