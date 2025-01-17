import clsx from 'clsx';
import React from 'react';

import {Wave} from '@/components/animation/Wave';
import {AnimatedSession} from '@/components/layout/AnimatedSession';
import {Container} from '@/components/layout/wrapper';
import {Avatar} from '@/components/pages/home/banner/index';

export const Banner: React.FC = () => {
    return (
        <div
            className={clsx(
                'relative flex h-[500px] flex-col items-center justify-between bg-banner-gradient bg-center'
                // 'before:absolute before:inset-0 before:bg-black before:opacity-30 before:content-[""]',
            )}
            // style={{backgroundImage: `url(/api/bing)`}}
        >
            <Wave />
            <Container
                outerClassName="relative"
                innerClassName={clsx(
                    'flex-1 flex items-center justify-center gap-16 w-full transition-all duration-300',
                    'max-md:flex-col max-md:gap-4 text-white'
                )}
            >
                <AnimatedSession>
                    <div className="h-28 w-28">
                        <Avatar className="m-auto" />
                    </div>
                </AnimatedSession>
                {/*<div*/}
                {/*    className={clsx(*/}
                {/*        'flex flex-col gap-2',*/}
                {/*        'before:-z-1 relative font-bold before:absolute before:left-0 before:content-[""]',*/}
                {/*        'before:-left-[5%] before:top-[20%] before:h-[60%] before:w-[110%] before:-rotate-3 before:bg-orange-300/30'*/}
                {/*    )}*/}
                {/*>*/}
                {/*    <AnimatedSession>*/}
                {/*        <div className="">Hi, I'm Layne. 一名前端开发工程师</div>*/}
                {/*    </AnimatedSession>*/}
                {/*    <AnimatedSession>*/}
                {/*        <div className="">业余摄影爱好者, 宅, 夜猫子.</div>*/}
                {/*    </AnimatedSession>*/}
                {/*</div>*/}
            </Container>

            {/*<Container outerClassName="relative h-full" innerClassName="flex h-full items-center justify-center">*/}
            {/*    <div>*/}
            {/*        sas*/}
            {/*    </div>*/}
            {/*    <div className="flex-1 flex flex-col gap-4 justify-center items-center text-white">*/}
            {/*        <AnimatedSession>*/}
            {/*            <div className="w-28 h-28">*/}
            {/*                <Avatar className="m-auto" />*/}
            {/*            </div>*/}
            {/*        </AnimatedSession>*/}
            {/*        <AnimatedSession>*/}
            {/*            <h1 className="text-balance text-center text-3xl font-bold max-md:text-2xl lg:text-left">*/}
            {/*                Hi, 我是*/}
            {/*                <span*/}
            {/*                    className={clsx(*/}
            {/*                        'before:-z-1 relative font-bold before:absolute before:left-0 before:content-[""]',*/}
            {/*                        'before:top-[30%] before:h-[40%] before:w-full before:-rotate-3 before:bg-orange-300/30'*/}
            {/*                    )}*/}
            {/*                >*/}
            {/*                        阿林*/}
            {/*                    </span>*/}
            {/*                👋.*/}
            {/*                <br />*/}
            {/*                一名Web前端开发工程师*/}
            {/*            </h1>*/}
            {/*        </AnimatedSession>*/}
            {/*        <AnimatedSession>*/}
            {/*            <div className="text-secondary-foreground mt-6 text-center text-sm lg:text-left">*/}
            {/*                业余摄影爱好者, 宅, 夜猫子.*/}
            {/*            </div>*/}
            {/*        </AnimatedSession>*/}
            {/*    </div>*/}
            {/*</Container>*/}
            {/*<div className="mt-7 animate-bounce text-xl text-white">*/}
            {/*    <ArrowDropDownIcon />*/}
            {/*</div>*/}
        </div>
    );
};
