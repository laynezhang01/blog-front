import React, {PropsWithChildren} from 'react';
import {Metadata} from 'next';
import ThemeProvider from '@/app/themeProvider';
import ProgressBarProvider from '@/app/progressBarProvider';
import Header from '@/components/Header';
import Slider from '@/components/Sidebar';
import Footer from '@/components/Footer';
import {BASIC_CONFIG} from '@/config/basic';

import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: BASIC_CONFIG.seo.url,
    title: `${BASIC_CONFIG.seo.title} - ${BASIC_CONFIG.seo.titleDes}`,
    description: BASIC_CONFIG.seo.description,
    keywords: BASIC_CONFIG.seo.keywords,
    openGraph: {
        title: {
            default: BASIC_CONFIG.seo.title,
            template: `%s | ${BASIC_CONFIG.seo.title}`
        },
        description: BASIC_CONFIG.seo.description,
        siteName: BASIC_CONFIG.seo.title,
        locale: 'zh_CN',
        type: 'website',
        url: BASIC_CONFIG.seo.url
    },
    alternates: {
        canonical: '/',
        types: {
            'application/rss+xml': [
                {
                    url: 'feed.xml',
                    title: 'RSS 订阅'
                }
            ]
        }
    }
};

const RootLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <ProgressBarProvider>
                        <Header />
                        <main className="container mx-auto mb-16 mt-6 max-w-screen-xl px-10 max-md:px-4">
                            {children}
                        </main>
                        <Slider />
                        <Footer />
                    </ProgressBarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
