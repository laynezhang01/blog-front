'use client';

import React, {useCallback, useMemo} from 'react';
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {Popover, PopoverButton, PopoverPanel, useClose} from '@headlessui/react';

import LightIcon from '/assets/icons/lightMode.svg';
import DarkIcon from '/assets/icons/darkMode.svg';
import ComputerIcon from '/assets/icons/computer.svg';

interface IThemeBtnProps {
    theme: string;
    text: string;
    icon: React.ReactNode;
}

const ThemeBtn: React.FC<IThemeBtnProps> = ({theme, icon, text}) => {
    const {setTheme, theme: curTheme} = useTheme();
    let close = useClose();

    const handleSetTheme = useCallback(() => {
        setTheme(theme);
        close();
    }, [theme, close, setTheme]);

    return (
        <a
            className={clsx(
                '-mx-2 flex w-28 cursor-pointer items-center gap-2 rounded-lg px-5 transition hover:bg-gray-400/20',
                curTheme === theme && 'bg-gray-400/20 font-bold text-primary backdrop-blur'
            )}
            onClick={handleSetTheme}
        >
            {icon}
            {text}
        </a>
    );
};

const ThemeSwitch: React.FC = () => {
    const {theme: curTheme} = useTheme();

    const curIcon = useMemo(() => {
        switch (curTheme) {
            case 'dark':
                return <DarkIcon />;
            case 'light':
                return <LightIcon />;
            default:
                return <ComputerIcon />;
        }
    }, [curTheme]);

    return (
        <Popover className="relative inline-flex">
            <PopoverButton className="focus-visible:outline-0">{curIcon}</PopoverButton>
            <PopoverPanel
                transition
                anchor={{
                    to: 'left start',
                    offset: '20px'
                }}
                className={clsx(
                    'divide-y divide-white/5 rounded-xl bg-white/70 text-sm/6 shadow backdrop-blur transition',
                    'duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1',
                    'relative z-30 backdrop-blur data-[closed]:opacity-0 dark:bg-gray-800/70'
                )}
            >
                <div className="flex flex-col gap-2 p-2">
                    <ThemeBtn theme="light" text="浅色" icon={<LightIcon />} />
                    <ThemeBtn theme="dark" text="深色" icon={<DarkIcon />} />
                    <ThemeBtn theme="system" text="系统" icon={<ComputerIcon />} />
                </div>
            </PopoverPanel>
        </Popover>
    );
};

export default ThemeSwitch;
