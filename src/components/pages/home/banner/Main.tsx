import clsx from 'clsx';
import NextImage from 'next/image';
import Link from 'next/link';
import React from 'react';

import {Wave} from '@/components/animation/Wave';
import {AnimatedSession} from '@/components/layout/AnimatedSession';
import {Container} from '@/components/layout/wrapper';
import {BASIC_CONFIG} from '@/config/basic';

export const Banner: React.FC = () => {
    return (
        <div
            className={clsx(
                'relative flex h-[500px] flex-col items-center justify-between bg-banner-bg'
            )}
            // style={{backgroundImage: `url(/api/bing)`}}
        >
            <Wave />
            <Container
                innerClassName={clsx(
                    'relative flex-1 flex items-center justify-center h-[90%] flex-col gap-6 transition-all duration-300',
                    'max-md:flex-col max-md:gap-4 text-white'
                )}
            >
                <AnimatedSession className="flex flex-col items-center justify-center gap-2 md:gap-6">
                    <Link href="/">
                        <NextImage
                            src={BASIC_CONFIG.avatar}
                            alt="avatar"
                            width={100}
                            height={100}
                            className={clsx(
                                'dark:bg-theme-root-dark h-20 w-20 gap-2 rounded-full bg-zinc-100 object-cover md:gap-6',
                                'transition ease-linear hover:scale-110',
                                'md:h-28 md:w-28'
                            )}
                        />
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-[16px] md:flex-row md:text-[20px]">
                        <span>
                            Hi, I&apos;m
                            <span className="font-bold">Layne Zhang.</span>
                        </span>
                        <span className="bottom-0 right-0 text-4xl hover:rotate-2">👋</span>
                        <span>前端开发工程师</span>
                    </div>
                    <p className="text-[12px] md:text-[14px]">业余摄影爱好者, 宅, 夜猫子.</p>
                </AnimatedSession>
            </Container>
        </div>
    );
};
