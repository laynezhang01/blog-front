import React from 'react';
import {ISocial} from '@/config/social';
import NextLink from 'next/link';

export const Social: React.FC<ISocial> = props => {
    const {icon, title, href} = props;

    return (
        <NextLink
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black text-white"
            href={href}
            title={title}
        >
            {icon}
        </NextLink>
    );
};
