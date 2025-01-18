'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, {useState, useContext, useMemo} from 'react';

import {HeaderNavbar, HeaderDrawer, HeaderMenu} from '@/components/layout/header';
import {Container} from '@/components/layout/wrapper';
import {BASIC_CONFIG} from '@/config/basic';
import {GlobalContext} from '@/context/globalProvider';
import MenuIcon from '@/public/svgs/icons/menu.svg';
// import Logo from '@/public/svgs/logo.svg';

export const Header: React.FC = () => {
    const {scrollY} = useContext(GlobalContext);
    const [showSlideUpPanel, setShowSlideUpPanel] = useState(false);

    const isSticky = useMemo(() => scrollY > 10, [scrollY]);

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 z-30 flex h-[3rem] w-full justify-center transition-all duration-300',
                    isSticky
                        ? 'translate-y-[0] bg-root text-primary shadow-md shadow-nav-shadow/10 backdrop-blur-xl'
                        : 'text-white'
                )}
            >
                <Container
                    innerClassName={clsx(
                        'flex items-center justify-between overflow-hidden rounded-xl',
                        'border-card-border'
                    )}
                >
                    <div className="flex h-full">
                        <Link href="/" className={clsx(isSticky ? 'text-primary' : 'text-white')}>
                            <h1
                                className={clsx('text-md flex h-full items-center gap-2 font-bold')}
                            >
                                {/*<span className="inline-flex w-[2.25rem] lg:w-[3.125rem]">*/}
                                {/*    <Logo />*/}
                                {/*</span>*/}
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
