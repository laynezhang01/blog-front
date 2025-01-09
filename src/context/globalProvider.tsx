'use client';

import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {useScroll} from 'ahooks';

export const NAVIGATION_SCROLL_POINT = 10;

interface IGlobalContext {
    scrollY: number;
    navTrigger: boolean;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({children}) => {
    const scrollData = useScroll();
    const [scrollY, setScrollY] = useState<number>(0);
    const [navTrigger, setNavTrigger] = useState<boolean>(false);

    useEffect(() => {
        const {top = 0} = scrollData ?? {};
        setNavTrigger(top > NAVIGATION_SCROLL_POINT);
        setScrollY(top);
    }, [scrollData]);

    return <GlobalContext.Provider value={{scrollY, navTrigger}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
