'use client';

import React, {useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {motion, AnimatePresence} from 'motion/react';
import {usePathname} from 'next/navigation';

import {NAVIGATION_ITEMS} from '@/config/nav';

interface INavRect {
    left: number;
    width: number;
    path: string;
}

export const DesktopNavbar: React.FC = () => {
    const [hoverPath, setHoverPath] = useState<string | null>(null);
    const activePath = usePathname();
    const [positions, setPositions] = useState<INavRect[]>([]);

    const navRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (!navRef?.current) {
            return;
        }

        const ulElement = navRef.current as HTMLElement;
        const ulRect = ulElement.getBoundingClientRect();
        const items = Array.from(ulElement.children);
        const newPositions: INavRect[] = items.map(item => {
            const rect = (item as HTMLElement).getBoundingClientRect();
            const linEle = (item as HTMLElement).querySelector('a');
            const path = linEle?.href ? new URL(linEle.href).pathname : '';
            return {
                left: rect.left - ulRect.left,
                width: rect.width,
                path
            };
        });

        setPositions(newPositions);
    }, []);

    const activePosition = useMemo(() => {
        return positions.find(item => item.path === activePath);
    }, [positions, activePath]);

    const hoverPosition = useMemo(() => {
        return positions.find(item => item.path === hoverPath);
    }, [positions, hoverPath]);

    return (
        <nav
            className={clsx(
                'relative',
                'after:absolute after:inset-0 after:shadow-[0_0px_10px_1px_rgba(0,0,0,.25)] after:content-[""]',
                'after:-z-10 after:rounded-full after:border after:border-line1 after:opacity-50'
            )}
        >
            <ul className={clsx('relative flex h-[40px] items-center gap-4 overflow-hidden px-8')} ref={navRef}>
                {NAVIGATION_ITEMS.map(nav => (
                    <li
                        key={nav.path}
                        onMouseEnter={() => setHoverPath(nav.path)}
                        onMouseLeave={() => setHoverPath(null)}
                        className="group relative cursor-pointer"
                    >
                        <Link
                            className={clsx('relative text-sm text-primary', nav.path === activePath && 'text-orange')}
                            href={nav.path}
                        >
                            {nav.title}
                        </Link>
                    </li>
                ))}

                <AnimatePresence>
                    {hoverPosition && (
                        <motion.span
                            className="pointer-events-none absolute top-0 h-full rounded-lg bg-gradient-to-br from-orange-50 via-orange-100 to-orange opacity-50 blur-md"
                            layoutId="hoverBackground"
                            initial={{opacity: 0}}
                            animate={{
                                opacity: 0.5,
                                left: hoverPosition.left,
                                width: hoverPosition.width
                            }}
                            exit={{opacity: 0}}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut'
                            }}
                        />
                    )}
                </AnimatePresence>

                {activePosition && (
                    <motion.div
                        className="absolute inset-x-1 bottom-1 h-[2px] bg-gradient-to-r from-transparent via-orange-400/70 to-transparent"
                        layoutId="activeUnderline"
                        initial={false}
                        animate={{
                            left: activePosition.left,
                            width: activePosition.width
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut'
                        }}
                    />
                )}
            </ul>
        </nav>
    );
};
