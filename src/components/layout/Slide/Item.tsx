'use client';

import clsx from 'clsx';
import React, {useImperativeHandle, forwardRef, useState} from 'react';

import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/Popover';

export interface ISlideItemProps {
    icon: React.ReactNode;
    spin?: boolean;
    onCLick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export interface SlideItemRef {
    closePopover: () => void;
}

export const SlideItem = forwardRef<SlideItemRef, ISlideItemProps>((props, ref) => {
    const {icon, spin = false, className, children, onCLick} = props;
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        closePopover: () => setIsPopoverOpen(false),
    }));

    const handleClick = () => {
        setIsPopoverOpen((prev) => !prev);
        onCLick?.();
    };

    // 渲染按钮
    const button = (
        <button
            className={clsx(
                className,
                'mb-2 flex items-center justify-center rounded bg-card p-[6px] text-[16px] text-primary ring-1 ring-primary/10',
                'transition-all duration-300 ease-in-out hover:bg-green-300/60'
            )}
            onClick={handleClick}
        >
            <span className={clsx(spin && 'animate-spin')}>{icon}</span>
        </button>
    );

    if (!children) {
        return button;
    }

    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
                <div className="relative">{button}</div>
            </PopoverTrigger>
            <PopoverContent align="start" side="right">
                {children}
            </PopoverContent>
        </Popover>
    );
});

SlideItem.displayName = 'SlideItem';

export default SlideItem;
