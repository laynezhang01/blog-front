import {Metadata} from 'next';
import React, {PropsWithChildren} from 'react';

import {PerformanceLogger} from '@/components/animation/PerformanceLogger';
import {Footer} from '@/components/layout/footer';
import {Header} from '@/components/layout/header';
import {Slide} from '@/components/layout/Slide';
import {BASIC_CONFIG} from '@/config/basic';
import GlobalProvider from '@/context/globalProvider';
import ProgressBarProvider from '@/context/progressBarProvider';
import {ThemeProvider} from '@/context/ThemeContext';

import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: BASIC_CONFIG.seo.url,
    title: `${BASIC_CONFIG.seo.title} - ${BASIC_CONFIG.seo.titleDes}`,
    description: BASIC_CONFIG.seo.description,
    keywords: BASIC_CONFIG.seo.keywords,
    openGraph: {
        title: {
            default: BASIC_CONFIG.seo.title,
            template: `%s | ${BASIC_CONFIG.seo.title}`,
        },
        description: BASIC_CONFIG.seo.description,
        siteName: BASIC_CONFIG.seo.title,
        locale: 'zh_CN',
        type: 'website',
        url: BASIC_CONFIG.seo.url,
    },
    alternates: {
        canonical: '/',
        types: {
            'application/rss+xml': [
                {
                    url: 'feed.xml',
                    title: 'RSS 订阅',
                },
            ],
        },
    },
};

const RootLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <ProgressBarProvider>
                        <GlobalProvider>
                            <Header />
                            <main>
                                {/*<Background />*/}
                                {children}
                            </main>
                            <Slide />
                            <Footer />
                            <PerformanceLogger />
                        </GlobalProvider>
                    </ProgressBarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
