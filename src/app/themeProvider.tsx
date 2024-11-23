import React, {PropsWithChildren} from 'react';
import {ThemeProvider as NextThemeProvider} from 'next-themes';

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <NextThemeProvider attribute="class" enableSystem themes={['light', 'dark']}>
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
