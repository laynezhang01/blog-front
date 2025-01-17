'use client';

import React from 'react';

import {usePerformanceLogger} from '@/hooks/usePerformanceMetrics';

export const PerformanceLogger: React.FC = () => {
    usePerformanceLogger();

    return null;
};
