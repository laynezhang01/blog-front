'use client';

import React, {useCallback, useMemo, useState} from 'react';
import {useTheme} from 'next-themes';
import clsx from 'clsx';
import {motion} from 'motion/react';
import * as Popover from '@radix-ui/react-popover';

import LightIcon from '/assets/icons/lightMode.svg';
import DarkIcon from '/assets/icons/darkMode.svg';
import ComputerIcon from '/assets/icons/computer.svg';

interface IThemeBtnProps {
    theme: string;
    text: string;
    icon: React.ReactNode;
    onClose(): void;
}

const ThemeBtn: React.FC<IThemeBtnProps> = ({theme, icon, text, onClose}) => {
    const {setTheme, theme: curTheme} = useTheme();

    const handleSetTheme = useCallback(() => {
        setTheme(theme);
        onClose();
    }, [theme, setTheme, onClose]);

    return (
        <a
            className={clsx(
                '-mx-2 flex w-28 cursor-pointer items-center gap-2 rounded-lg px-5 transition hover:bg-blue-500/50',
                'hover:backdrop-blur-lg',
                curTheme === theme && 'bg-blue-500/70 font-bold text-primary'
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
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

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

    const popoverAnimation = {
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -10}
    };

    return (
        <div className="relative inline-flex">
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
                <Popover.Trigger>{curIcon}</Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content asChild sideOffset={5}>
                        <motion.div
                            className="flex flex-col gap-2 rounded-xl bg-white/70 p-2 shadow backdrop-blur-lg"
                            variants={popoverAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{duration: 0.3}}
                        >
                            <ThemeBtn theme="light" text="浅色" icon={<LightIcon />} onClose={handleClose} />
                            <ThemeBtn theme="dark" text="深色" icon={<DarkIcon />} onClose={handleClose} />
                            <ThemeBtn theme="system" text="系统" icon={<ComputerIcon />} onClose={handleClose} />
                        </motion.div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
};

export default ThemeSwitch;
