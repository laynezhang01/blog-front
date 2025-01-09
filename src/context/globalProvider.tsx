'use client';

import React, {createContext, PropsWithChildren, useCallback, useEffect, useState} from 'react';
import {useScroll} from 'ahooks';

export const NAVIGATION_SCROLL_POINT = 10;

interface IGlobalContext {
    scrollY: number;
    navTrigger: boolean;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({children}) => {
    const scrollData = useScroll();
    const [data, setData] = useState<IGlobalContext>({
        scrollY: 0,
        navTrigger: false
    });

    const updateData = useCallback(
        (params: Partial<IGlobalContext>) => {
            setData({
                ...data,
                ...params
            });
        },
        [setData, data]
    );

    useEffect(() => {
        const {top = 0} = scrollData ?? {};
        updateData({scrollY: top, navTrigger: top > NAVIGATION_SCROLL_POINT});
    }, [scrollData, updateData]);

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
