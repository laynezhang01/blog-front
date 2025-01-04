import React from 'react';
import clsx from 'clsx';

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
        <div className={clsx('flex items-center justify-center gap-2', className)}>
            {icon && icon}
            {text}
        </div>
    );
};
