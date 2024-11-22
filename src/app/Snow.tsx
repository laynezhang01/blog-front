'use client';

import React from 'react';
import dynamic from 'next/dynamic';
const Snowfall = dynamic(() => import('react-snowfall'), {ssr: false});

const Snow: React.FC = () => {
    return (
        <Snowfall
            snowflakeCount={60}
            style={{
                zIndex: -1,
                width: '100vw',
                height: '100vh',
                position: 'fixed'
            }}
        />
    );
};

export default Snow;
