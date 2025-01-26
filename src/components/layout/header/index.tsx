'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useState, useContext } from 'react';

import { Navigation } from '@/components/layout/header/Navigation';
import { HeaderMenu } from '@/components/layout/header/Menu';
import { MobileMenusDrawer } from '@/components/layout/header/MobileDrawer';
import { Container } from '@/components/layout/wrapper';
import { GlobalContext } from '@/context/globalProvider';

import config from '@/config/basic.json';
import MenuIcon from '@/public/svgs/icons/menu.svg';

export const Header: React.FC = () => {
  const { headerIsFixed } = useContext(GlobalContext);
  const [showSlideUpPanel, setShowSlideUpPanel] = useState(false);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 z-30 flex h-[3.5rem] w-full justify-center transition-all duration-300 ease-in-out',
          'text-white',
          headerIsFixed &&
            'translate-y-[0] bg-header-bg text-primary shadow-md shadow-nav-shadow/10 backdrop-blur-xl'
        )}
      >
        <Container innerClassName="items-center justify-between rounded-xl grid grid-cols-3">
          <div className="col-span-1; flex h-full">
            <Link
              href="/"
              className={clsx(
                'text-white transition-[font-color] duration-300 ease-linear',
                headerIsFixed && 'text-primary'
              )}
            >
              <h1 className="flex h-full items-center gap-2 text-lg font-bold">
                {config.seo.title}
              </h1>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center max-md:hidden">
            <Navigation />
          </div>
          <div className="block md:hidden">
            <HeaderMenu icon={<MenuIcon />} onClick={() => setShowSlideUpPanel(true)} />
          </div>
        </Container>
      </header>
      <MobileMenusDrawer open={showSlideUpPanel} onChangeStatus={setShowSlideUpPanel} />
    </>
  );
};
