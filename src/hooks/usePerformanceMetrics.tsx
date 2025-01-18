'use client';

import {useEffect} from 'react';

export const usePerformanceLogger = () => {
    useEffect(() => {
        if (typeof window === 'undefined' || typeof performance === 'undefined') {
            console.warn('⚠️ 性能监控只能在客户端环境运行');
            return;
        }

        const logPerformanceMetrics = () => {
            // 兼容旧版性能 API
            const timing = performance.timing;

            const navigationStart = timing.navigationStart;
            const loadTime =
                timing.loadEventEnd > 0 ? timing.loadEventEnd - navigationStart : performance.now();
            const domContentLoadedTime =
                timing.domContentLoadedEventEnd > 0
                    ? timing.domContentLoadedEventEnd - navigationStart
                    : 0;
            const ttfb = timing.responseStart > 0 ? timing.responseStart - timing.requestStart : 0;

            // 现代性能指标（如果支持）
            const paintEntries = performance.getEntriesByType('paint');
            const fcp =
                paintEntries.find((entry) => entry.name === 'first-contentful-paint')?.startTime ||
                0;
            const lcpEntry = performance.getEntriesByName('largest-contentful-paint').pop();
            const lcp = lcpEntry ? lcpEntry.startTime : 0;

            console.group('%c📊 性能监控', 'background: #007acc; color: #fff; padding: 4px;');
            console.log(
                `%c⏱️ 页面加载时间: %c${loadTime.toFixed(2)} ms`,
                'color: gray;',
                'color: green; font-weight: bold;'
            );
            console.log(
                `%c⏱️ DOM 加载时间: %c${domContentLoadedTime.toFixed(2)} ms`,
                'color: gray;',
                'color: green; font-weight: bold;'
            );
            console.log(
                `%c⏱️ TTFB: %c${ttfb.toFixed(2)} ms`,
                'color: gray;',
                'color: green; font-weight: bold;'
            );
            console.log(
                `%c🎨 FCP: %c${fcp.toFixed(2)} ms`,
                'color: gray;',
                'color: green; font-weight: bold;'
            );
            console.log(
                `%c🎨 LCP: %c${lcp.toFixed(2)} ms`,
                'color: gray;',
                'color: green; font-weight: bold;'
            );
            console.groupEnd();
        };

        const handleLoad = () => {
            console.log('📄 页面加载完成，记录性能日志...');
            logPerformanceMetrics();
        };

        // 检测页面加载状态
        if (document.readyState === 'complete') {
            console.log('📄 页面已完全加载，直接记录性能日志...');
            logPerformanceMetrics();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
};
