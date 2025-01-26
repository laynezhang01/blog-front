import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

import { PerformanceLogger } from '@/components/features/PerformanceLogger';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Slide } from '@/components/layout/Slide';
import GlobalProvider from '@/context/globalProvider';
import ProgressBarProvider from '@/context/progressBarProvider';
import { ThemeProvider } from '@/context/ThemeContext';
import config from '@/config/basic.json';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.url),
  title: `${config.seo.title} - ${config.seo.titleDes}`,
  description: config.seo.description,
  keywords: config.seo.keywords,
  openGraph: {
    title: {
      default: config.seo.title,
      template: `%s | ${config.seo.title}`,
    },
    description: config.seo.description,
    siteName: config.seo.title,
    locale: 'zh_CN',
    type: 'website',
    url: config.seo.url,
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

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body>
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
