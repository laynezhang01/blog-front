import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {BASIC_CONFIG} from '@/config/basic';

const Avatar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className, ...props}) => {
    return (
        <div
            {...props}
            className={clsx('h-28 w-28 rounded-full bg-white p-0.5 shadow-lg ring-1 backdrop-blur', className)}
        >
            <Link href="/" className="pointer-events-auto inline-flex h-full w-full items-center justify-center">
                <Image
                    src={BASIC_CONFIG.avatar}
                    alt="avatar"
                    width="512"
                    height="512"
                    className="dark:bg-theme-root-dark h-[6.5rem] w-[6.5rem] rounded-full bg-zinc-100 object-cover"
                    priority
                />
            </Link>
        </div>
    );
};

export default Avatar;
