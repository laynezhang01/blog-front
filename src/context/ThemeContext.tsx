'use client';

import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'system',
    setTheme: () => {},
});

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('theme') as Theme) || 'system';
        }
        return 'system';
    });

    // 获取系统主题设置
    const systemTheme = useMemo(() => {
        if (typeof window === 'undefined') {
            return 'system';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }, []);

    // 应用主题
    const applyTheme = useCallback(
        (theme: Theme) => {
            const root = document.documentElement;
            const preferredTheme = theme === 'system' ? systemTheme : theme;
            root.classList.remove('light', 'dark');
            root.classList.add(preferredTheme);
            localStorage.setItem('theme', preferredTheme); // 更新 localStorage
        },
        [systemTheme]
    );

    useEffect(() => {
        // 监听系统主题的变化
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQueryList.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleSystemThemeChange);
        };
    }, [applyTheme, theme]);

    useEffect(() => {
        applyTheme(theme);
    });

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
