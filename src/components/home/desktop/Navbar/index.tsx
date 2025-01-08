'use client';

import React, {PropsWithChildren, useCallback, useContext} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {motion, useMotionTemplate, useMotionValue} from 'motion/react';
import {usePathname} from 'next/navigation';
import {GlobalContext} from '@/app/(app)/globalProvider';
import {NAVIGATION_ITEMS} from '@/config/nav';

export interface INaveItemProps {
    path: string;
}

export const NaveItem: React.FC<PropsWithChildren<INaveItemProps>> = ({path, children}) => {
    const activePath = usePathname();
    const isActive = path === activePath;
    return (
        <li className="group relative h-full cursor-pointer">
            <Link
                className={clsx(
                    'relative inline-flex h-full items-center px-2 text-sm hover:text-accent/70',
                    isActive && 'font-bold text-accent'
                )}
                href={path}
            >
                {children}
                {isActive && (
                    <motion.span
                        className={clsx(
                            'absolute inset-x-1 bottom-[4px] h-px',
                            'bg-gradient-to-r from-transparent via-accent/70 to-transparent'
                        )}
                        layoutId="active-nav-item"
                    />
                )}
            </Link>
        </li>
    );
};

export const DesktopNavbar: React.FC = () => {
    const {navTrigger} = useContext(GlobalContext);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const radius = useMotionValue(0);

    const handleMouseMove = useCallback(
        ({clientX, clientY, currentTarget}: React.MouseEvent) => {
            const bounds = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - bounds.left);
            mouseY.set(clientY - bounds.top);
            radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
        },
        [mouseX, mouseY, radius]
    );

    const background = useMotionTemplate`
        radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)
    `;

    return (
        <nav
            onMouseMove={handleMouseMove}
            className={clsx(
                'group relative',
                !navTrigger && 'rounded-full bg-card shadow-[0_0px_10px_1px_rgba(0,0,0,.1)] backdrop-blur-md',
                '[--spotlight-color:rgb(236_136_29_/_0.1)] dark:[--spotlight-color:rgb(226_94_29_/_0.07)]'
            )}
        >
            <motion.span
                className={clsx(
                    'pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500',
                    'group-hover:opacity-100'
                )}
                style={{background}}
                aria-hidden="true"
            />
            <ul className={clsx('relative flex h-[40px] overflow-hidden px-8')}>
                {NAVIGATION_ITEMS.map(nav => (
                    <NaveItem key={nav.path} path={nav.path}>
                        {nav.title}
                    </NaveItem>
                ))}
            </ul>
        </nav>
    );
};
