import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import NextImage from 'next/image';
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
            <NextImage
                src={BASIC_CONFIG.avatar}
                alt="avatar"
                width={224}
                height={224}
                className={clsx(
                    'dark:bg-theme-root-dark h-full w-full rounded-full bg-zinc-100 object-cover',
                    'transition ease-linear hover:scale-110'
                )}
            />
        </Link>
    );
};
