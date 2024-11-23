import React, {useCallback} from 'react';
import {useTheme} from 'next-themes';
import SideItem from '@/components/Sidebar/Item';
import LightIcon from '/assets/icons/lightMode.svg';
import DarkIcon from '/assets/icons/darkMode.svg';

const ThemeSwitch = () => {
    const {setTheme, resolvedTheme} = useTheme();

    const handleClick = useCallback(() => {
        if (resolvedTheme === 'dark') {
            setTheme('light');
            return;
        }
        setTheme('dark');
    }, [setTheme, resolvedTheme]);

    return <SideItem handleClick={handleClick} icon={resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />} />;
};

export default ThemeSwitch;
