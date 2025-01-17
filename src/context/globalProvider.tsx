'use client';

import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';

import {useScrollPosition} from '@/hooks/useScrollPosition';

interface IGlobalContext {
    scrollY: number;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalProvider: React.FC<PropsWithChildren> = ({children}) => {
    const scroll = useScrollPosition();
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const {y} = scroll ?? {};
        setScrollY(y);
    }, [scroll]);

    return <GlobalContext.Provider value={{scrollY}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
