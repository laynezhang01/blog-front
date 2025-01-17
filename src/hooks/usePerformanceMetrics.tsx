'use client';

import {useEffect} from 'react';

export const usePerformanceLogger = () => {
    useEffect(() => {
        const getPerformanceMetrics = () => {
            const {timing} = performance;
            if (!timing) {
                console.warn('Performance timing is not supported in this environment.');
                return null;
            }

            // 基础性能指标
            const navigationStart = timing.navigationStart;
            const loadTime = timing.loadEventEnd - navigationStart || performance.now();
            const domContentLoadedTime = timing.domContentLoadedEventEnd - navigationStart;
            const ttfb = timing.responseStart - timing.requestStart; // TTFB

            // 现代性能指标（如果支持）
            const paintEntries = performance.getEntriesByType('paint');
            const fcp =
                paintEntries.find((entry) => entry.name === 'first-contentful-paint')?.startTime ||
                0;
            const lcpEntry = performance.getEntriesByName('largest-contentful-paint').pop();
            const lcp = lcpEntry ? lcpEntry.startTime : 0;

            return {
                loadTime,
                domContentLoadedTime,
                ttfb,
                fcp,
                lcp,
            };
        };

        const logPerformanceMetrics = () => {
            const metrics = getPerformanceMetrics();
            if (!metrics) return;

            const {loadTime, domContentLoadedTime, ttfb, fcp, lcp} = metrics;

            const styleTitle = `
        background: linear-gradient(90deg, #ff7f50, #ff4500);
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        padding: 4px 8px;
        border-radius: 4px;
      `;
            const styleBody = `
        color: #e0e0e0;
        font-size: 12px;
        padding: 2px 4px;
      `;
            const styleValue = `
        color: #4caf50;
        font-weight: bold;
        font-size: 12px;
      `;

            console.group('%c📊 性能监控', styleTitle);
            console.log(`%c⏱️ TTFB: %c${ttfb.toFixed(2)} ms`, styleBody, styleValue);
            console.log(
                `%c⏱️ DOM加载: %c${domContentLoadedTime.toFixed(2)} ms`,
                styleBody,
                styleValue
            );
            console.log(`%c⏱️ 页面加载: %c${loadTime.toFixed(2)} ms`, styleBody, styleValue);
            console.log(`%c🎨 FCP: %c${fcp.toFixed(2)} ms`, styleBody, styleValue);
            console.log(`%c🎨 LCP: %c${lcp.toFixed(2)} ms`, styleBody, styleValue);
            console.groupEnd();
        };

        const handleLoad = () => {
            logPerformanceMetrics();
            window.removeEventListener('load', handleLoad);
        };

        if (document.readyState === 'complete') {
            logPerformanceMetrics();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
};
