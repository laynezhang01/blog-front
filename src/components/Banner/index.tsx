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
                <div className="fade-in-up text-3xl font-medium">
                    <span>大户卡很多科技大厦</span>
                    <span className="typed-cursor">_</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
