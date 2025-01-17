import clsx from 'clsx';
import React from 'react';

interface IconTextProps {
    icon?: React.ReactNode;
    text?: string;
    className?: string;
}

export const IconText: React.FC<IconTextProps> = ({icon, text, className}) => {
    if (!text) {
        return null;
    }

    return (
        <div className={clsx('flex items-center justify-center gap-2 text-[12px]', className)}>
            {icon && icon}
            {text}
        </div>
    );
};
