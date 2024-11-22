import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {BASIC_CONFIG} from '@/config/basic';

const Avatar: React.FC = () => {
    return (
        <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <Link href="/" className="pointer-events-auto">
                <Image
                    src={BASIC_CONFIG.avatar}
                    alt="avatar"
                    width="256"
                    height="256"
                    className="dark:bg-theme-root-dark h-9 w-9 rounded-full bg-zinc-100 object-cover"
                    priority
                />
            </Link>
        </div>
    );
};

export default Avatar;
