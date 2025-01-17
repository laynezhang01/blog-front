import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import React from 'react';

// Popover 组件封装
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;

// PopoverContent 优化封装
const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
        align?: 'start' | 'center' | 'end'; // 对齐方式
        sideOffset?: number; // 偏移量
    }
>(({className, align = 'center', sideOffset = 4, ...props}, ref) => {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                ref={ref}
                align={align as PopoverPrimitive.PopoverContentProps['align']}
                sideOffset={sideOffset}
                className={clsx(
                    // 动画和样式优化
                    'rounded-md border p-4 shadow-md outline-none',
                    'data-[state=open]:animate-in data-[state=closed]:animate-out',
                    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
                    'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    );
});

PopoverContent.displayName = 'PopoverContent'; // 显示名

// 导出组件
export {Popover, PopoverTrigger, PopoverContent, PopoverAnchor};
