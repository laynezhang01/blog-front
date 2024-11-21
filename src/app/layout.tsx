// import type {Metadata} from 'next';
// import localFont from 'next/font/local';
import React, {PropsWithChildren} from 'react';
import ThemeProvider from './themeProvider';
import Slider from '@/components/Sidebar';

import '@/styles/globals.css';


const RootLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <html
            lang="en"
            className="scroll-smooth"
            suppressHydrationWarning
        >
        {/*<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>*/}
        <body className="bg-gray-50 dark:bg-gray-950/80">
                <ThemeProvider>
                    <main>
                        {children}
                    </main>
                    <Slider />
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
