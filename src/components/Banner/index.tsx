import React from 'react';
import BlurImage from '@/components/BlurImage';
import Avatar from '@/components/Header/Avatar';
import {BASIC_CONFIG} from '@/config/basic';

const Banner: React.FC = () => {
    return (
        <div className="relative h-[400px] overflow-hidden rounded-xl max-md:-mx-10 max-md:rounded-[0]">
            <BlurImage
                className="absolute inset-0 object-cover object-center"
                src={BASIC_CONFIG.banner.url}
                alt="banner"
                priority
                fill
            />
            <span className="absolute bg-gray-950/20 dark:bg-gray-950/50" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col gap-6">
                    <Avatar className="m-auto" />
                    <span className="text-xl font-medium text-primary-foreground max-md:text-sm">
                        {BASIC_CONFIG.banner.text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
