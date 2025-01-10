'use client';

import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {useScroll} from 'ahooks';

interface IGlobalContext {
    scrollY: number;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({children}) => {
    const scrollData = useScroll();
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const {top = 0} = scrollData ?? {};
        setScrollY(top);
    }, [scrollData]);

    return <GlobalContext.Provider value={{scrollY}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
