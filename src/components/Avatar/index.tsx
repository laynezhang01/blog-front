import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import LazyImage from '@/components/LazyImage';
import {BASIC_CONFIG} from '@/config/basic';

export interface IAvatar {
    className?: string;
}

export const Avatar: React.FC<IAvatar> = ({className}) => {
    return (
        <Link
            href="/"
            className={clsx(
                'pointer-events-auto inline-flex items-center justify-center rounded-full bg-white p-2',
                'shadow-xl',
                className
            )}
        >
            <LazyImage
                src={BASIC_CONFIG.avatar}
                alt="avatar"
                width={224}
                height={224}
                className={clsx(
                    'dark:bg-theme-root-dark h-56 w-56 rounded-full bg-zinc-100 object-cover max-md:h-28 max-md:w-28',
                    'transition ease-linear hover:scale-110'
                )}
            />
        </Link>
    );
};
