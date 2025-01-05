'use client';

import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import {motion, AnimatePresence} from 'motion/react';
import {NAVIGATION_ITEMS} from '@/config/nav';
// import {usePathname} from 'next/navigation';
import Link from 'next/link';

// const navs = ['首页', '笔记', '碎碎念', '相簿', '读书', '观影', '关于', '留言'];

interface INavRect {
    left: number;
    width: number;
}

export const DesktopNavbar: React.FC = () => {
    const [hoverIdx, setHoverIdx] = useState<number | null>(1);
    // const activePath = usePathname();
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
            return {
                left: rect.left - ulRect.left, // 考虑 paddingLeft
                width: rect.width
            };
        });

        setPositions(newPositions);
    }, []);

    return (
        <nav
            className={clsx(
                'relative',
                'after:absolute after:inset-0 after:shadow-[0_0px_10px_1px_rgba(0,0,0,.25)] after:content-[""]',
                'after:-z-10 after:rounded-[10px] after:border after:border-line1 after:opacity-50'
            )}
        >
            <ul className={clsx('relative flex h-[40px] items-center gap-4 overflow-hidden px-4')} ref={navRef}>
                {NAVIGATION_ITEMS.map((nav, idx) => (
                    <li
                        key={nav.href}
                        onMouseEnter={() => setHoverIdx(idx)}
                        onMouseLeave={() => setHoverIdx(null)}
                        className="group relative cursor-pointer"
                    >
                        <Link id="header-id" className="relative text-primary" href={nav.href}>
                            {nav.title}
                        </Link>
                    </li>
                ))}

                <AnimatePresence>
                    {hoverIdx !== null && positions[hoverIdx] && (
                        <motion.span
                            className="pointer-events-none absolute top-0 h-full rounded-lg bg-gradient-to-br from-orange-50 via-orange-100 to-orange opacity-50 blur-md"
                            layoutId="hoverBackground"
                            initial={{opacity: 0}}
                            animate={{
                                opacity: 0.5,
                                left: positions[hoverIdx].left,
                                width: positions[hoverIdx].width
                            }}
                            exit={{opacity: 0}}
                            transition={{
                                duration: 0.4,
                                ease: 'easeInOut'
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Active underline */}
                {/*{positions[activePath] && (*/}
                {/*    <motion.div*/}
                {/*        className="absolute bottom-0 h-[2px] bg-blue-500"*/}
                {/*        layoutId="activeUnderline"*/}
                {/*        initial={false}*/}
                {/*        animate={{*/}
                {/*            left: positions[activePath].left,*/}
                {/*            width: positions[activePath].width,*/}
                {/*        }}*/}
                {/*        transition={{*/}
                {/*            duration: 0.4,*/}
                {/*            ease: "easeInOut",*/}
                {/*        }}*/}
                {/*    />*/}
                {/*)}*/}
            </ul>
        </nav>
    );
};
