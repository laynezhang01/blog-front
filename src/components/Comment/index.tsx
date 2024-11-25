import React from 'react';
import Waline from '@/components/Comment/Waline';

const Comment: React.FC = () => {
    const serverURL = process.env.WALINE_BACKEND_URL ?? '';

    return <Waline serverURL={serverURL} />;
};

export default Comment;
