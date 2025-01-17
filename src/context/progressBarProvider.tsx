'use client';

import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import React, {PropsWithChildren} from 'react';

const ProgressBarProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            {children}
            <ProgressBar
                height="2px"
                color="#f15b6c"
                options={{showSpinner: false}}
                shallowRouting
            />
        </>
    );
};

export default ProgressBarProvider;
