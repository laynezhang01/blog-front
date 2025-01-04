import React from 'react';
import clsx from 'clsx';
import {Avatar} from '@/components/Avatar';
import {BASIC_CONFIG} from '@/config/basic';
import ArrowDropDownIcon from '/assets/icons/arrowDropDown.svg';
import XIcon from '/assets/icons/x.svg';
import GithubIcon from '/assets/icons/github.svg';
import MainIcon from '/assets/icons/mail.svg';

interface IBannerIconProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

const BannerIcon: React.FC<IBannerIconProps> = props => {
    const {icon, href, className} = props;

    return (
        <a
            className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-full bg-black hover:scale-110',
                className
            )}
            href={href}
            target="_blank"
        >
            {icon}
        </a>
    );
};

export const Banner: React.FC = () => {
    return (
        <div className={clsx('relative min-h-[500px] overflow-hidden rounded-xl max-md:-mx-4', 'flex flex-col')}>
            <div className="grid flex-1 grid-cols-3 items-center px-10 max-md:grid-cols-1 max-md:grid-rows-3">
                <div className="col-span-2 max-md:row-span-2">
                    <h1 className="text-balance text-center text-3xl max-md:text-2xl lg:text-left">
                        Hi, 我是
                        <span className="relative font-bold">
                            <span className="-z-1 absolute left-0 top-[30%] h-[40%] w-full -rotate-3 bg-blue-300/30"></span>
                            Layne
                        </span>
                        👋.
                        <br />
                        从北跑到南的外包切图仔
                    </h1>
                    <div className="text-secondary-foreground mt-3 text-center text-sm lg:text-left">
                        业余摄影爱好者, 宅, 夜猫子.
                    </div>
                    <div className="mt-16 flex items-center gap-6 text-xl text-white max-md:justify-center">
                        <BannerIcon icon={<GithubIcon />} href="https://github.com/laynezhang01" />
                        <BannerIcon icon={<XIcon />} href="" />
                        <BannerIcon icon={<MainIcon />} href="mailto:hi@linzip.com" className="bg-red-400" />
                    </div>
                </div>
                <div className="col-span-1 flex max-md:row-span-1">
                    <Avatar className="m-auto" />
                </div>
            </div>
            <div className="inset-x-0 bottom-0 mt-10 flex flex-col items-center lg:absolute lg:mt-0">
                <p className="text-secondary-foreground text-balance text-center text-xs">{BASIC_CONFIG.banner.text}</p>
                <div className="mt-7 animate-bounce text-xl">
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    );
};
