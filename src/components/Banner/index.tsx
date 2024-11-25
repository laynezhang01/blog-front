import React from 'react';
import clsx from 'clsx';
import Avatar from '@/components/Header/Avatar';
import {BASIC_CONFIG} from '@/config/basic';
import ArrowDropDownIcon from '/assets/icons/arrowDropDown.svg';

const Banner: React.FC = () => {
    return (
        <div
            className={clsx(
                'relative h-[calc(100vh-5.5rem)] min-h-[300px] overflow-hidden rounded-xl max-md:-mx-10',
                'flex flex-col'
            )}
        >
            <div className="grid flex-1 grid-cols-3 items-center px-10 max-md:grid-cols-1">
                <div className="col-span-2">
                    <h1 className="text-balance text-center text-3xl lg:text-left">
                        Hi, 我是
                        <span className="relative font-bold">
                            <span className="-z-1 absolute left-0 top-[30%] h-[40%] w-full -rotate-3 bg-blue-300/30"></span>
                            Layne
                        </span>
                        👋.
                        <br />
                        一位刚从北京裸辞来到深圳的待业FE
                    </h1>
                    <div className="mt-3 text-center text-sm text-secondary-foreground lg:text-left">
                        业余摄影爱好者, 宅, 夜猫子.
                    </div>
                </div>
                <div className="col-span-1 flex">
                    <Avatar className="m-auto" />
                </div>
            </div>
            <div className="inset-x-0 bottom-0 mt-10 flex flex-col items-center lg:absolute lg:mt-0">
                <p className="text-balance text-center text-xs text-secondary-foreground">{BASIC_CONFIG.banner.text}</p>
                <div className="mt-7 animate-bounce text-xl">
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    );
};

export default Banner;
