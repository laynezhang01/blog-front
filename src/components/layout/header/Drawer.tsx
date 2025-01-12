'use client';

import React from 'react';
import {Drawer} from 'vaul';
import clsx from 'clsx';
import {NAVIGATION_ITEMS} from '@/config/nav';
import {HeaderNavItem} from '@/components/layout/header';
const {Root, Portal, Content, Title, Overlay} = Drawer;

interface ISlideUpPanelProps {
    dismissible?: boolean;
    title?: string;
    defaultOpen?: boolean;
    open: boolean;
    /* eslint-disable */
    onChangeStatus: (open: boolean) => void;
}

export const HeaderDrawer: React.FC<ISlideUpPanelProps> = props => {
    const {dismissible = true, title, defaultOpen = false, open, onChangeStatus} = props;

    return (
        <Root dismissible={dismissible} defaultOpen={defaultOpen} open={open} onOpenChange={onChangeStatus}>
            <Portal>
                <Overlay className="fixed inset-0 z-[888] bg-black bg-opacity-30 backdrop-blur-md" />
                <Content className="fixed bottom-0 left-0 z-[999] h-[70vh] w-full bg-card outline-none">
                    {dismissible && (
                        <div className="mx-auto my-[0.75rem] h-1.5 w-12 shrink-0 rounded-full bg-zinc-300 dark:bg-neutral-800" />
                    )}
                    <Title className={clsx(!title && 'hidden')}>{title}</Title>
                    <div className="h-full bg-white p-4">
                        <ul className={clsx('relative flex h-[40px] overflow-hidden px-8')}>
                            {NAVIGATION_ITEMS.map(nav => (
                                <HeaderNavItem key={nav.href} path={nav.href}>
                                    {nav.title}
                                </HeaderNavItem>
                            ))}
                        </ul>
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};
