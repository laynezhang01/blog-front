'use client';

import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {NAVIGATION_ITEMS} from '@/config/nav';

interface INavItem {
    href: string;
}

const NavItem: React.FC<PropsWithChildren<INavItem>> = props => {
    const {href, children} = props;
    const isActive = usePathname() === href;

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block whitespace-nowrap px-3 py-2 text-primary transition',
                    isActive && 'font-bold'
                )}
            >
                {children}
                {isActive && (
                    <motion.span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-lime-700/0 via-lime-700/70 to-lime-700/0 dark:from-lime-400/0 dark:via-lime-400/40 dark:to-lime-400/0"
                        layoutId="active-nav-item"
                    />
                )}
            </Link>
        </li>
    );
};

export const DesktopNavBar: React.FC = () => {
    return (
        <nav className="relative">
            <ul className="flex text-sm font-medium">
                {NAVIGATION_ITEMS.map(({href, title}) => (
                    <NavItem key={href} href={href}>
                        {title}
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopNavBar;
