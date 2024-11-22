import React from 'react';
import Image from 'next/image';
import {BASIC_CONFIG} from '@/config/basic';

const Banner: React.FC = () => {
    return (
        <div className="relative h-[400px]">
            <Image
                className="absolute inset-0 object-cover object-center"
                src={BASIC_CONFIG.banner}
                alt="banner"
                fill
                priority
            />
            <div className="absolute inset-0 bg-gray-950/20 dark:bg-gray-950/50" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-medium text-center text-secondary-foreground">
                        阿林的博客
                    </h1>
                    <span className="text-secondary-foreground font-medium">
                        The shortest way to do many things is to only one thing at a time.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
