import React, {PropsWithChildren, useMemo} from 'react';
import clsx from 'clsx';

import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/Popover';

export interface ISlideItemProps {
    icon: React.ReactNode;
    spin?: boolean;
    onCLick: () => void;
    visible?: boolean;
}

export const SlideItem: React.FC<PropsWithChildren<ISlideItemProps>> = props => {
    const {icon, spin = false, visible = true, children, onCLick} = props;

    const trigger = useMemo(() => {
        return (
            <div
                className={clsx(
                    'relative flex items-center justify-center rounded bg-black p-1 text-sm text-white',
                    'hover:bg-green-300/60',
                    !visible && 'hidden'
                )}
                onClick={onCLick}
            >
                <span className={clsx(spin && 'animate-spin')}>{icon}</span>
            </div>
        );
    }, [visible, onCLick, icon, spin]);

    if (!children) {
        return trigger;
    }

    return (
        <Popover>
            <PopoverTrigger>{trigger}</PopoverTrigger>
            <PopoverContent align="start" side="right">
                {children}
            </PopoverContent>
        </Popover>
    );
};
