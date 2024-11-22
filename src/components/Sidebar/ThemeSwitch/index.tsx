import React, {useCallback} from 'react';
import {useTheme} from 'next-themes';
import SideItem from '@/components/Sidebar/Item';
import LightIcon from '/assets/icons/lightMode.svg';
import DarkIcon from '/assets/icons/darkMode.svg';

const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme();
    const handleClick = useCallback(() => {
        if (theme === 'dark') {
            setTheme('light');
            return;
        }
        setTheme('dark');
    }, [theme, setTheme]);

    return <SideItem handleClick={handleClick} icon={theme === 'dark' ? <LightIcon /> : <DarkIcon />} />;
};

export default ThemeSwitch;
