import React, {PropsWithChildren} from 'react';
import {ThemeProvider as NextThemeProvider} from 'next-themes';

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <NextThemeProvider attribute={['class', 'data-theme']} enableSystem>
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
