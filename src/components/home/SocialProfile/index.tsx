import React from 'react';
import clsx from 'clsx';

export interface ISocialProfileProps {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

export const SocialProfile: React.FC<ISocialProfileProps> = props => {
    const {icon, href, className} = props;

    return (
        <a
            className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-full bg-black hover:scale-110',
                className
            )}
            href={href}
            target="_blank"
        >
            {icon}
        </a>
    );
};
