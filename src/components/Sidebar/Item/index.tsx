/**
 * @file 边栏Item
 */

import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';

export interface ISideItem {
    visible?: boolean;
    handleClick?: () => void;
    icon?: React.ReactNode;
}

const SideItem: React.FC<PropsWithChildren<ISideItem>> = props => {
    const {children, visible = true, icon, handleClick} = props;

    return (
        <div
            className={clsx(
                'z-10 h-8 w-8 rounded bg-primary bg-white shadow-2xl',
                'size-2 cursor-pointer text-2xl shadow-md transition delay-200 ease-in-out',
                {invisible: !visible}
            )}
        >
            {icon && handleClick && (
                <a
                    className="relative flex h-full w-full items-center justify-center text-xl text-primary-foreground hover:text-primary-foreground/70"
                    onClick={handleClick}
                >
                    {icon}
                </a>
            )}
            {children && children}
        </div>
    );
};

export default SideItem;
