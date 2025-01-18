import {Metadata} from 'next';
import React, {PropsWithChildren} from 'react';
// import { Noto_Sans_SC } from 'next/font/google';
// import { Inter, Noto_Sans_SC } from 'next/font/google';
// import { Fira_Code } from 'next/font/google';

import {PerformanceLogger} from '@/components/animation/PerformanceLogger';
import {Footer} from '@/components/layout/footer';
import {Header} from '@/components/layout/header';
import {Slide} from '@/components/layout/Slide';
import {BASIC_CONFIG} from '@/config/basic';
import GlobalProvider from '@/context/globalProvider';
import ProgressBarProvider from '@/context/progressBarProvider';
import {ThemeProvider} from '@/context/ThemeContext';

import '@/styles/globals.css';
// import clsx from 'clsx';

// // 加载简体中文字体
// const notoSansSC = Noto_Sans_SC({
//     subsets: ['latin', 'chinese-simplified'],
//     weight: ['400', '700'],
//     display: 'swap'
// });

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
            <body
            // className={clsx(notoSansSC.className)}
            >
                <ThemeProvider>
                    <ProgressBarProvider>
                        <GlobalProvider>
                            <Header />
                            <main>{children}</main>
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
