import React from 'react';
import {ScrollTop, Gear, Lang} from '@/components/layout/Slide';

export const Slide: React.FC = () => {
    return (
        <div className="fixed bottom-28 right-2.5 flex flex-col gap-2">
            <Lang />
            <Gear />
            <ScrollTop />
        </div>
    );
};
