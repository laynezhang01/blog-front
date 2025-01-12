'use client';

import Link from 'next/link';
import React, {useState, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {GlobalContext} from '@/context/globalProvider';
import {HeaderNavbar, HeaderDrawer, HeaderMenu} from '@/components/layout/header';
import {Container} from '@/components/layout/wrapper';
import {BASIC_CONFIG} from '@/config/basic';
import Logo from '@/assets/svgs/logo.svg';
import MenuIcon from '@/assets/svgs/icons/menu.svg';

export const Header: React.FC = () => {
    const {scrollY} = useContext(GlobalContext);
    const [showSlideUpPanel, setShowSlideUpPanel] = useState(false);

    const isSticky = useMemo(() => scrollY > 10, [scrollY]);

    return (
        <>
            <header
                className={clsx(
                    'sticky top-0 z-30 flex h-[4rem] justify-center transition-all duration-300',
                    isSticky && 'translate-y-[0]'
                )}
            >
                <Container
                    outerClassName="h-[3rem]"
                    innerClassName={clsx(
                        'flex items-center justify-between overflow-hidden rounded-xl',
                        'border-card-border',
                        isSticky && 'bg-nav/80 shadow-md backdrop-blur-lg'
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
                    <div className="mr-10 hidden h-[35px] justify-end md:flex">
                        <HeaderNavbar isSticky={isSticky} />
                    </div>
                    <div className="block md:hidden">
                        <HeaderMenu icon={<MenuIcon />} onClick={() => setShowSlideUpPanel(true)} />
                    </div>
                </Container>
            </header>
            <HeaderDrawer open={showSlideUpPanel} onChangeStatus={setShowSlideUpPanel} />
        </>
    );
};
