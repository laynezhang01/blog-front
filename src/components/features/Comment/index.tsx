import React from 'react';
import Waline from '@/components/features/Comment/Waline';

export const Comment: React.FC = () => {
    const serverURL = process.env.WALINE_BACKEND_URL ?? '';

    return <Waline serverURL={serverURL} />;
};
