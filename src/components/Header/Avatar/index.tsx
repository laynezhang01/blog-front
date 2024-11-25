import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import BlurImage from '@/components/BlurImage';
import {BASIC_CONFIG} from '@/config/basic';

export interface IAvatar {
    className: string;
}

const Avatar: React.FC<IAvatar> = ({className}) => {
    return (
        <Link
            href="/"
            className={clsx('pointer-events-auto inline-flex h-full w-full items-center justify-center', className)}
        >
            <BlurImage
                src={BASIC_CONFIG.avatar}
                alt="avatar"
                width="512"
                height="512"
                className="dark:bg-theme-root-dark h-56 w-56 rounded-full bg-zinc-100 object-cover max-md:h-28 max-md:w-28"
                priority
            />
        </Link>
    );
};

export default Avatar;
