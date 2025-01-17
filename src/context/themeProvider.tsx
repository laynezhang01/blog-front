import {ThemeProvider as NextThemeProvider} from 'next-themes';
import React, {PropsWithChildren} from 'react';

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <NextThemeProvider attribute={['class', 'data-theme']} enableSystem>
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
