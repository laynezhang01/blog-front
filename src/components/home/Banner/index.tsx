import React from 'react';
import clsx from 'clsx';
import {Avatar} from '@/components/home/Avatar';
import {AnimatedSession} from '@/components/layout/AnimatedSession';
import {SocialProfile} from '@/components/home/SocialProfile';
import {BASIC_CONFIG} from '@/config/basic';

import ArrowDropDownIcon from '/assets/icons/arrowDropDown.svg';
import XIcon from '/assets/icons/x.svg';
import GithubIcon from '/assets/icons/github.svg';
import MainIcon from '/assets/icons/mail.svg';

export const Banner: React.FC = () => {
    return (
        <div className={clsx('relative min-h-[420px] overflow-hidden rounded-xl max-md:-mx-4', 'flex flex-col')}>
            <div className="grid flex-1 grid-cols-3 items-center px-10 max-md:grid-cols-1 max-md:grid-rows-3">
                <div className="col-span-2 max-md:row-span-2">
                    <AnimatedSession>
                        <h1 className="text-balance text-center text-3xl font-bold max-md:text-2xl lg:text-left">
                            Hi, 我是
                            <span
                                className={clsx(
                                    'before:-z-1 relative font-bold before:absolute before:left-0 before:content-[""]',
                                    'before:top-[30%] before:h-[40%] before:w-full before:-rotate-3 before:bg-orange-300/30'
                                )}
                            >
                                阿林
                            </span>
                            👋.
                            <br />
                            一名Web开发工程师
                        </h1>
                    </AnimatedSession>
                    <AnimatedSession>
                        <div className="text-secondary-foreground mt-6 text-center text-sm lg:text-left">
                            业余摄影爱好者, 宅, 夜猫子.
                        </div>
                    </AnimatedSession>
                    <AnimatedSession>
                        <div className="mt-16 flex items-center gap-6 text-xl text-white max-md:justify-center">
                            <SocialProfile icon={<GithubIcon />} href="https://github.com/laynezhang01" />
                            <SocialProfile icon={<XIcon />} href="" />
                            <SocialProfile icon={<MainIcon />} href="mailto:hi@linzip.com" className="bg-red-400" />
                        </div>
                    </AnimatedSession>
                </div>
                <AnimatedSession>
                    <div className="col-span-1 flex max-md:row-span-1">
                        <Avatar className="m-auto" />
                    </div>
                </AnimatedSession>
            </div>
            <div className="inset-x-0 bottom-0 mt-10 flex flex-col items-center lg:absolute lg:mt-0">
                <AnimatedSession>
                    <p className="text-secondary-foreground text-balance text-center text-xs">
                        {BASIC_CONFIG.banner.text}
                    </p>
                </AnimatedSession>
                <div className="mt-7 animate-bounce text-xl">
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    );
};
